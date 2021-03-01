import { IUser } from "../entities/IUser";

export interface IAuthResponceModel {
  firstName: string;
  lastName: string;
  userName: string;
  phone: string;
  token: string;
}
