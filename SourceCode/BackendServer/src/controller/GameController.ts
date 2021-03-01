import * as express from "express";
import { inject } from "inversify";
import { response, controller, httpGet, request, BaseHttpController, httpPost } from "inversify-express-utils";
import { GameBusiness } from "../business";
import TYPES from "../shared/constants/types";
import { Authorize } from "../shared/helpers/auth.helper";

@controller("/v1/game")
export class GameController extends BaseHttpController {
  private readonly _gameBuisness: GameBusiness;

  constructor(@inject(TYPES.GameBusiness) GameBuisness: GameBusiness) {
    super();
    this._gameBuisness = GameBuisness;
  }

  @httpPost("/addGame", Authorize({ role: "admin" }))
  public createGame(@request() req: express.Request, @response() res: express.Response) {
    const { game } = req.body;
    this._gameBuisness.createGames(game).then(
      (game) => {
        const gameList = this._gameBuisness.getGames();
        res.status(200).send({ games: gameList });
      },
      (error) => {
        res.status(500).send({ error });
      }
    );
  }

  @httpGet("/getGames")
  public getGames(@request() req: express.Request, @response() res: express.Response) {
    const {} = req;
    this._gameBuisness.getGames().then(
      (games) => {
        res.status(200).send({ games });
      },
      (error) => {
        res.status(500).send({ error });
      }
    );
  }
}
