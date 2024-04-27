import { createSlice } from "@reduxjs/toolkit";

type InitialStateProps = {
  loading: boolean;
  modal:boolean;
  toggle:boolean
};
const initialState: InitialStateProps = {
  loading: false,
  modal:false,
  toggle:false
};

export const utils = createSlice({
  name: "utils",
  initialState,
  reducers: {},
});

export const {} = utils.actions;

export default utils.reducer;
