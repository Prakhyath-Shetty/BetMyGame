import { inject, injectable } from "inversify";
import * as jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import RegisterUserModel, { UserModel } from "../models/UserModel";
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

  public async registerUser(
    firstName: string,
    lastName: string,
    phoneNumber: number,
    emailAddress: string,
    userId: string,
    password: string
  ): Promise<any> {
    RegisterUserModel.find({ email: emailAddress })
      .exec()
      .then((user) => {
        if (user.length > 0) {
          return {
            message: "Already registered, try another email address",
          };
        } else {
          bcrypt.hash(password, 10, function (err: any, hash: string) {
            // Store hash in your password DB.
            if (err) {
              return err.status(500).json({
                error: err,
              });
            } else {
              const admin = new RegisterUserModel({
                _id: new mongoose.Types.ObjectId(),
                firstName: firstName,
                lastName: lastName,
                email: emailAddress,
                password: hash,
                createdAt: new Date().toISOString(),
              });

              admin
                .save()
                .then((res) => {
                  // res.status(201).json({
                  //   message: "Admin Registered Successfully",
                  // });
                })
                .catch((er) => {
                  er.status(500).json({
                    error: er,
                  });
                });
            }
          });
        }
      });
  }
  public getUser(id: string): any {
    return this._userRepository.findAll();
  }
}
