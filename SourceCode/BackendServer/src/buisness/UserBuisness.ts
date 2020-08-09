import { inject, injectable } from "inversify";
import * as jwt from "jsonwebtoken";
import { UserModel } from "../models/UserModel";
import { UserRepository } from "../repository/UserRepository";
import TYPES from "../shared/constants/types";

export interface IUserBuisness {
  getUser(id: string): void; //Promise<UserModel>;
}

@injectable()
export class UserBuisness implements IUserBuisness {
  private readonly _userRepository: UserRepository;

  constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  public async login(username: string, password: string): Promise<any> {
    const user = this._userRepository.findOne(username);
    const token = jwt.sign(
      { userId: user.id, username: user.username },
      process.env.JWT_SECRET as string,
      { expiresIn: "1h" } // ? Sing JWT, valid for 1 hour
    );
    return { token, user };
  }

  public getUser(id: string): any {
    return this._userRepository.findAll();
  }
}
