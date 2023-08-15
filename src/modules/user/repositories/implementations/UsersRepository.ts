import { Repository, getRepository } from "typeorm";
import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../infra/typeorm/entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    email,
    is_admin,
    is_student,
    is_teacher,
    password,
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      is_admin: is_admin,
      is_student: is_student,
      is_teacher: is_teacher,
      email: email,
      password: password,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
