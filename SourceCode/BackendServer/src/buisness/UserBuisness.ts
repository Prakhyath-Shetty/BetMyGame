import { inject, injectable } from "inversify";
import * as jwt from "jsonwebtoken";
import { UserRepository } from "../repository/UserRepository";
import TYPES from "../shared/constants/types";
import { IUserBuisness } from "./interfaces/IUserBuisness";
import { ILoginModel, ISignupModel, IUser } from "../shared/models";
import { IAuthResponceModel } from "../shared/models/viewModels/IAuthResponceModel";

@injectable()
export class UserBuisness implements IUserBuisness {
  private readonly _userRepository: UserRepository;

  constructor(@inject(TYPES.UserRepository) userRepository: UserRepository) {
    this._userRepository = userRepository;
  }

  signup(item: ISignupModel): Promise<IUser> {
    let p = new Promise<IUser>((resolve, reject) => {
      this._userRepository
        .create(item)
        .then((res: IUser) => {
          resolve(<IUser>res);
        })
        .catch((error) => {
          reject(error.message);
        });
    });
    return p;
  }

  //TODO : provide token cant be in here, change it later
  login(item: ILoginModel): Promise<IAuthResponceModel> {
    console.log("ILoginModel", item);

    let userInfo = new Promise<IAuthResponceModel>((resolve, reject) => {
      this._userRepository
        .findOne({ userName: item.userName, password: item.password }, {}, {})
        .then((res: IUser) => {
          if (res) {
            // TODO : return the token
            var accessToken = jwt.sign({ _id: res._id, userName: res.userName }, process.env.ACCESS_TOKEN_SECRET as string, {
              expiresIn: 86400000,
            });
            const authResponce: IAuthResponceModel = {
              firstName: res.firstName,
              lastName: res.lastName,
              userName: res.userName,
              phone: res.phone,
              accessToken,
            };
            resolve(authResponce);
          } else {
            reject("Username or password incorrect'");
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
    return userInfo;
  }

  //TODO : Change it, it cant be return user password vs vs
  getProfile(_id: string): Promise<IUser> {
    let p = new Promise<any>((resolve, reject) => {
      this._userRepository
        .findById(_id)
        .then((user) => {
          if (user) {
            resolve(<IUser>user);
          } else {
            reject("User Not Found");
          }
        })
        .catch((error) => {
          reject(error.message);
        });
    });
    return p;
  }
}
