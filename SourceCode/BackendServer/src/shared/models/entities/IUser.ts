import { Document } from "mongoose";

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  userName: string;
  phone: string;
  email: string;
  password: string;
  createdAt: Date;
}
