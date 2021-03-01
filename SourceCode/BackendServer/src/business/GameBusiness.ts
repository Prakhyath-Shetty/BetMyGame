import { inject, injectable } from "inversify";
import { GameRepository } from "../repository";
import TYPES from "../shared/constants/types";
import { IGame } from "../shared/models";
import { IGameModel } from "../shared/models/viewModels/IGameModel";
import { IGameBusiness } from "./interfaces/IGameBusiness";

@injectable()
export class GameBusiness implements IGameBusiness {
  private readonly _gameRepository: GameRepository;

  constructor(@inject(TYPES.GameRepository) gameRepository: GameRepository) {
    this._gameRepository = gameRepository;
  }

  public createGames(game: IGameModel): Promise<IGame> {
    let g = new Promise<IGame>((resolve, reject) => {
      this._gameRepository
        .create(game)
        .then((game) => {
          if (game) {
            resolve(<IGame>game);
          } else {
            reject("Game not found");
          }
        })
        .catch((error) => {
          reject(error.message);
        });
    });
    return g;
  }

  public getGames(): Promise<IGame[]> {
    let gameList = new Promise<IGame[]>((resolve, reject) => {
      this._gameRepository
        .retrieve()
        .then((games) => {
          if (games) {
            resolve(<IGame[]>games);
          } else {
            reject("Game not found");
          }
        })
        .catch((error) => {
          reject(error.message);
        });
    });
    return gameList;
  }
}
