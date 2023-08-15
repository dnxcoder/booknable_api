import { container } from "tsyringe";
import { IUsersRepository } from "../../modules/user/repositories/IUsersRepository";
import { UsersRepository } from "../../modules/user/repositories/implementations/UsersRepository";

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
