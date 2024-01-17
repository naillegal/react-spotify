  import { createSlice, PayloadAction, ThunkAction } from "@reduxjs/toolkit";
  import { sendLoginData, sendRegisterData } from "../api/authApi";
  import { RootState } from "./RootState"; 

  interface AuthState {
    username: string;
    token: string | null;
  }

  const initialState: AuthState = {
    username: "",
    token: null,
  };

  const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
      setLoginInfo: (state, action: PayloadAction<{ username: string; token: string }>) => {
        state.username = action.payload.username;
        state.token = action.payload.token;
      },
      setRegisterInfo: (state, action: PayloadAction<{ username: string; token: string }>) => {
        state.username = action.payload.username;
        state.token = action.payload.token;
      },
    },
  });

  export const { setLoginInfo, setRegisterInfo } = authSlice.actions;

  export default authSlice.reducer;

  export const loginAction = (
    username: string,
    password: string
  ): ThunkAction<void, RootState, unknown, PayloadAction<{ username: string; token: string }>> => {
    return (dispatch, getState) => {
      sendLoginData(username, password).then((response) => {
        const { token } = response.data;
        dispatch(setLoginInfo({ username, token }));
      });
    };
  }

  export const registerAction = (
    first_name: string,
    last_name: string,
    email: string,
    gender:string,
    birth_date:string,
    username: string,
    password: string
  ): ThunkAction<void, RootState, unknown, PayloadAction<{ username: string; token: string }>> => {
    return (dispatch, getState) => {
      sendRegisterData(first_name, last_name, email, gender, birth_date, username, password).then((response) => {
        const { token } = response.data;
        dispatch(setRegisterInfo({ username, token }));
      });
    };
  };
