import { useDispatch } from "react-redux";
import SpotifyLogo from "../../assets/images/SpotifyLogo.png";
import React, { useRef, useCallback, useState } from "react";
import { loginAction } from "../../store/authSlice";
import { PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/RootState";

export interface IRegisterProps {}

export default function Login(props: IRegisterProps) {
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const dispatch = useDispatch();

  const loginHandler = useCallback(() => {
    const username = usernameInputRef.current?.value || "";
    const password = passwordInputRef.current?.value || "";

    const isFormValid = username && password;

    setUsernameValid(!!username);
    setPasswordValid(!!password);

    if (isFormValid) {
      const action = loginAction(username, password) as ThunkAction<
        void,
        RootState,
        unknown,
        PayloadAction<{ username: string; token: string }>
      >;

      dispatch(action as any);
      console.log("Login Successful!");
    } else {
      console.log("Form Validation Failed!");
    }
  }, [dispatch]);

  return (
    <div className="text-white pt-16">
      <div className="p-5">
        <img src={SpotifyLogo} alt="SpotifyLogo" width={150} />
      </div>
      <div className="text-white text-5xl font-bold flex justify-center">
        Log in to start
        <br />
        listening
      </div>
      <div className="w-80 m-auto pt-14">
        <p className="font-bold">Username</p>
        <input
          ref={usernameInputRef}
          type="text"
          placeholder="Your username here"
          className={`outline-none grow text-white p-3 w-80 rounded bg-neutral-900 border ${
            usernameValid ? "border-white" : "border-red-500"
          } mt-2`}
        />
        {!usernameValid && (
          <p className="text-red-500">This field is required</p>
        )}

        <p className="pt-4 font-bold">Password</p>
        <input
          ref={passwordInputRef}
          type="password"
          placeholder="********"
          className={`outline-none grow text-white p-3 w-80 rounded bg-neutral-900 border ${
            passwordValid ? "border-white" : "border-red-500"
          } mt-2`}
        />
        {!passwordValid && (
          <p className="text-red-500">This field is required</p>
        )}
      </div>
      <div className="w-72 m-auto mt-10">
        <button
          onClick={loginHandler}
          className="w-72 outline-none bg-green-600 p-3 rounded-3xl text-black font-bold submit"
        >
          Log in
        </button>
      </div>
    </div>
  );
}
