import { Container } from "inversify";
import TYPES from "../constants/types";
import { UserBuisness } from "../../buisness";
import { UserRepository } from "../../repository";

const container = new Container();

/**
 * * Bind the buisness
 * ? register buisness if anyone created added new buisness
 */
container.bind<UserBuisness>(TYPES.UserBuisness).to(UserBuisness).inSingletonScope();

/**
 * * Bind the repository
 * ? register repository if anyone created new repository
 */
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository).inSingletonScope();

export default container;
