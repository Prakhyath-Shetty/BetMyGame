import * as express from "express";
import { inject } from "inversify";
import { response, controller, httpGet, request, BaseHttpController, httpPost } from "inversify-express-utils";
import { UserBusiness } from "../business";
import TYPES from "../shared/constants/types";
import { Authorize } from "../shared/helpers/auth.helper";
import { ILoginModel, ISignupModel } from "../shared/models";
import { IAuthResponceModel } from "../shared/models/viewModels/IAuthResponceModel";

@controller("/v1/user")
export class UserController extends BaseHttpController {
  private readonly _userBusiness: UserBusiness;

  constructor(@inject(TYPES.UserBusiness) userBusiness: UserBusiness) {
    super();
    this._userBusiness = userBusiness;
  }

  @httpGet("/login")
  public async login(@request() req: express.Request, @response() res: express.Response) {
    const { query } = req;
    // const data = { username: "prakhyth", password: "shetty" };
    const userName: any = "prakhyath";
    const password: any = "123456@qeewt";

    // const loginData: ILoginModel = {
    //   userName: <string>query.username,
    //   password: <string>query.password,
    // };

    const loginData: ILoginModel = {
      userName,
      password,
    };

    if (userName && password) {
      const authData: IAuthResponceModel = await this._userBusiness.login(loginData);
      return res.send(authData);
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
    const user = this._userBusiness.signup(registerData);
    res.status(200).send({ user });
  }

  @httpGet("/test", Authorize({ role: "user" }))
  public getUserById(@request() req: express.Request, @response() res: express.Response) {
    const {} = req;
    const user = this._userBusiness.getProfile("5f82b45eaa510f0cb80434a8");
    res.status(200).send({ user: user });
  }
}
