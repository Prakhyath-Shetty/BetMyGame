import { Container } from "inversify";
import TYPES from "../constants/types";
import { UserBusiness, GameBusiness } from "../../business";
import { GameRepository, UserRepository } from "../../repository";

const container = new Container();

/**
 * * Bind the buisness
 * ? register buisness if anyone created added new buisness
 */
container.bind<UserBusiness>(TYPES.UserBusiness).to(UserBusiness).inSingletonScope();
container.bind<GameBusiness>(TYPES.GameBusiness).to(GameBusiness).inSingletonScope();

/**
 * * Bind the repository
 * ? register repository if anyone created new repository
 */
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository).inSingletonScope();
container.bind<GameRepository>(TYPES.GameRepository).to(GameRepository).inSingletonScope();

export default container;
