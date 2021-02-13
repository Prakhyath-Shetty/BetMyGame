export interface IAuthModel {
  userId: number;
  userName: string;
  email: string;
  token: number;
  expireTime: Date;
}
export interface IUser {
  userId: number;
  firstName: string;
  lastName: string;
  phoneNumber: number;
  email: string;
}
