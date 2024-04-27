import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/auth-slice";
import utilsReducer from "./features/utils-slice";

export const store = configureStore({
  reducer: {
    authReducer,
    utilsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
