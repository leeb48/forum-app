import { blogApi } from "../config/axios.config";
import { AuthActionTypes } from "./action.types";
import { Dispatch } from "react";

export type AuthActions = RegisterUserAction;

// ---------------------------------------------------
// Register User Action
export type RegisterUserDto = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
};

export type RegisterUserAction = {
  type: AuthActionTypes.register;
  payload: string;
};

export const registerUser = (data: RegisterUserDto) => async (
  dispatch: Dispatch<RegisterUserAction>
) => {
  try {
    const res = await blogApi.post("/auth/register", data);

    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
};

// ---------------------------------------------------
// Login User Action
export type LoginUserDto = {
  username: string;
  password: string;
};

export type LoginUserAction = {
  type: AuthActionTypes.login;
  payload: string;
};

export const loginUser = (data: LoginUserDto) => async (
  dispatch: Dispatch<LoginUserAction>
) => {
  try {
    const res = await blogApi.post("/auth/login", data);

    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
};
