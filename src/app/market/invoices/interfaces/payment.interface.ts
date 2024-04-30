import { User } from "./user.interface";

export interface Payment {
    id: number;
    price: number;
    isPaid: boolean;
    method: string;
    date: Date;
    user: User;
  }