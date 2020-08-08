import * as express from "express";
import { inject } from "inversify";
import {
  response,
  controller,
  httpGet,
  request,
} from "inversify-express-utils";
import { UserBuisness } from "../buisness/UserBuisness";
import TYPES from "../shared/constants/types";

@controller("/v1/user")
export class UserController {
  private readonly _userBuisness: UserBuisness;

  constructor(@inject(TYPES.UserBuisness) userBuisness: UserBuisness) {
    this._userBuisness = userBuisness;
  }

  @httpGet("/")
  public getAll(
    @request() req: express.Request,
    @response() res: express.Response
  ) {
    const {} = req;
    const user = this._userBuisness.getUser("");
    res.send(user);
  }
}
