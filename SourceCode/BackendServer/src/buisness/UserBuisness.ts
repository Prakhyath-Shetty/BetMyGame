import { inject, injectable } from "inversify";
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

  public getUser(id: string): any {
    return this._userRepository.findAll();
  }
}
