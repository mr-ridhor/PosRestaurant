import { createSlice } from "@reduxjs/toolkit";

type initialStateProps = {
  value: AuthState;
  isLoading: boolean;
};
type AuthState = {
  isAuth: boolean;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
  isAdmin: boolean;
};
const initialState: initialStateProps = {
  value: {
    isAuth: false,
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    isAdmin: false,
  },
  isLoading: false,
};
export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});



export const{} =auth.actions;
export default auth.reducer;
