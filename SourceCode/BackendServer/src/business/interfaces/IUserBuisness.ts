import { ISignupModel, ILoginModel, IUser } from "../../shared/models";

export interface IUserBusiness {
  signup: (item: ISignupModel) => Promise<IUser>;
  login: (item: ILoginModel) => Promise<any>;
  getProfile: (_id: string) => Promise<any>;
}
