import { Account } from "../types/Account";

export type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  user_type: "ADMIN" | "CREATOR" | string;
  created_at: string;
  updated_at: string;
};

export type UserContextType = {
  token: string;
  setToken: (token: string) => void;
  user: User;
  setUser: (user: User) => void;
};
