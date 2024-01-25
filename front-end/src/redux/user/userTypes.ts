import { NavigateFunction } from 'react-router-dom';

export interface UserType {
  userId: number;
  userName: string;
  email: string;
  password: string;
  role: string;
  createedAt: Date;
  updatedAt: Date;
}

export interface UserStateType {
  user: Array<UserType>;
}

export interface RegisterUserType {
  userName: string;
  email: string;
  password: string;
  navigate: NavigateFunction;
}

export interface LoginUsertype {
  email: string;
  password: string;
  navigate: NavigateFunction;
}

export interface LogoutUserType {
  navigate: NavigateFunction;
}
