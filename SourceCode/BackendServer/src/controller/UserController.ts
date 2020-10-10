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

  @httpPost("/register")
  public register(@request() req: express.Request, @response() res: express.Response) {
    const {} = req;
    const registerData: ISignupModel = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordVerify: "",
    };
    const user = this._userBuisness.signup(registerData);
    res.send({ user });
  }

  @httpGet("/", Authorize({ role: "user" }))
  public getUserById(@request() req: express.Request, @response() res: express.Response) {
    const {} = req;
    const user = this._userBuisness.getProfile("");
    res.send({ user: "" });
  }
}
