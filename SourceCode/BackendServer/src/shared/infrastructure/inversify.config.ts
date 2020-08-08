import { Container } from "inversify";
import TYPES from "../constants/types";
import { UserRepository } from "../../repository/UserRepository";
import { UserBuisness } from "../../buisness/UserBuisness";

const container = new Container();

//** Bind the buisness */
container
  .bind<UserBuisness>(TYPES.UserBuisness)
  .to(UserBuisness)
  .inSingletonScope();

//** Bind the repository */
container
  .bind<UserRepository>(TYPES.UserRepository)
  .to(UserRepository)
  .inSingletonScope();

export default container;
