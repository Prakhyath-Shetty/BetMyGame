import { Document } from "mongoose";

export interface IGame extends Document {
  title: string;
  description: string;
  imageUrl: string;
  rating: number;
  status: boolean;
  createdBy: string;
  createdAt: Date;
}
