import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateUserUseCase } from "../useCases/createUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password, is_admin, is_student, is_teacher } = request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    await createUserUseCase.execute({
      email,
      password,
      is_admin,
      is_student,
      is_teacher,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
