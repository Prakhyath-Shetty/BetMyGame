import * as express from "express";
import { inject } from "inversify";
import {
  response,
  controller,
  httpGet,
  request,
  BaseHttpController,
} from "inversify-express-utils";
import { UserBuisness } from "../buisness/UserBuisness";
import TYPES from "../shared/constants/types";
import { Authorize } from "../shared/helpers/auth.helper";
import * as jwt from "jsonwebtoken";

@controller("/v1/user")
export class UserController extends BaseHttpController {
  private readonly _userBuisness: UserBuisness;

  constructor(@inject(TYPES.UserBuisness) userBuisness: UserBuisness) {
    super();
    this._userBuisness = userBuisness;
  }

  @httpGet("/login")
  public async login(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    const { query } = req;
    // const data = { username: "prakhyth", password: "shetty" };
    const username: any = query.username;
    const password: any = query.password;
    debugger;
    console.log("query", query);

    if (username && password) {
      const user = await this._userBuisness.login(username, password);
      return res.send(user);
    }
  }

  @httpGet("/register")
  public async register(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    const { body } = req;
    // const data = { username: "prakhyth", password: "shetty" };
    const firstName: any = body.firstName;
    const lastName: any = body.lastName;
    const emailAddress: any = body.emailAddress;
    const phoneNumber: any = body.phoneNumber;
    const userId: any = body.userId;
    const password: any = body.lastName;
    if (
      firstName &&
      lastName &&
      password &&
      emailAddress &&
      phoneNumber &&
      userId
    ) {
      const user = await this._userBuisness.registerUser(
        firstName,
        lastName,
        emailAddress,
        phoneNumber,
        userId,
        password
      );
      return res.send(user);
    }
  }

  @httpGet("/", Authorize({ role: "user" }))
  public getUserById(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    const {} = req;
    const user = this._userBuisness.getUser("");
    res.send({ user });
  }
}
