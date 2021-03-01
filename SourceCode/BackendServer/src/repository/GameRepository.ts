import { injectable } from "inversify";
import "reflect-metadata";
import GameSchema from "../dataAccess/schemas/game.schema";
import { RepositoryBase } from "./RepositoryBase";
import { IGame } from "../shared/models";
import { IGameRepository } from ".";

@injectable()
export class GameRepository extends RepositoryBase<IGame> implements IGameRepository {
  constructor() {
    super(GameSchema as any);
  }
}
