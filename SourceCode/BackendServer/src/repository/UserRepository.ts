import { injectable } from "inversify";
import "reflect-metadata";
import UserSchema from "../dataAccess/schemas/user.schema";
import { RepositoryBase } from "./RepositoryBase";
import { IUser } from "../shared/models";
import { IUserRepository } from "./";

@injectable()
export class UserRepository extends RepositoryBase<IUser> implements IUserRepository {
  constructor() {
    super(UserSchema as any);
  }
}
