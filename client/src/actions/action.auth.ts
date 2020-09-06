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
