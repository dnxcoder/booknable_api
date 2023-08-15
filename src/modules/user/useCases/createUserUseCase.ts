import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "../repositories/IUsersRepository";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) {}

  async execute({
    id,
    email,
    password,
    is_admin,
    is_student,
    is_teacher,
  }: ICreateUserDTO) {
    await this.usersRepository.create({
      id,
      email,
      password,
      is_admin,
      is_student,
      is_teacher,
    });
  }
}

export { CreateUserUseCase };
