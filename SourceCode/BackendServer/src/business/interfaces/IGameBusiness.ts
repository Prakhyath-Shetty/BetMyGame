import { ISignupModel, ILoginModel, IUser, IGame } from "../../shared/models";

export interface IGameBusiness {
  getGames: () => Promise<IGame[]>;
}
