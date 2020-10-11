import * as express from "express";
import { inject } from "inversify";
import { response, controller, httpGet, request, BaseHttpController, httpPost } from "inversify-express-utils";
import { UserBuisness } from "../buisness";
import TYPES from "../shared/constants/types";
import { Authorize } from "../shared/helpers/auth.helper";
import { ILoginModel, ISignupModel } from "../shared/models";

@controller("/v1/user")
export class UserController extends BaseHttpController {
  private readonly _userBuisness: UserBuisness;

  constructor(@inject(TYPES.UserBuisness) userBuisness: UserBuisness) {
    super();
    this._userBuisness = userBuisness;
  }

  @httpGet("/login")
  public async login(@request() req: express.Request, @response() res: express.Response) {
    const { query } = req;
    // const data = { username: "prakhyth", password: "shetty" };
    const username: any = query.username;
    const password: any = query.password;
    console.log("query", query);

    const loginData: ILoginModel = {
      userName: <string>query.username,
      password: <string>query.password,
    };

    if (username && password) {
      const user = await this._userBuisness.login(loginData);
      return res.send(user);
    }
  }

  @httpGet("/register")
  public register(@request() req: express.Request, @response() res: express.Response) {
    const {} = req;
    const registerData: ISignupModel = {
      firstName: "prakhyath",
      lastName: "shetty",
      userName: "prakhyath",
      phone: "9844986072",
      email: "prakhyath@mail.com",
      password: "123456@qeewt",
      passwordVerify: "123456",
    };
    const user = this._userBuisness.signup(registerData);
    res.status(200).send({ user });
  }

  @httpGet("/") //Authorize({ role: "user" })
  public getUserById(@request() req: express.Request, @response() res: express.Response) {
    const {} = req;
    const user = this._userBuisness.getProfile("5f82b45eaa510f0cb80434a8");
    res.status(200).send({ user: user });
  }
}
