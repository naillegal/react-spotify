import SpotifyLogo from "../../assets/images/SpotifyLogo.png";
import { Link } from "react-router-dom";
import React, { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { registerAction } from "../../store/authSlice";
import { PayloadAction, ThunkAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/RootState";

export interface IRegisterProps {}

export default function Register(props: IRegisterProps) {
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [firstNameValid, setFirstNameValid] = useState(true);
  const [lastNameValid, setLastNameValid] = useState(true);
  const [emailValid, setEmailValid] = useState(true);
  const [genderValid, setGenderValid] = useState(true);
  const [yearValid, setYearValid] = useState(true);
  const [monthValid, setMonthValid] = useState(true);
  const [dayValid, setDayValid] = useState(true);
  const [usernameValid, setUsernameValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedYear(event.target.value);
    setYearValid(true);
  };

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMonth(event.target.value);
    setMonthValid(true);
  };

  const handleDayChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDay(event.target.value);
    setDayValid(true);
  };

  const handleGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGender(event.target.value);
    setGenderValid(true);
  };

  const firstNameInputRef = useRef<HTMLInputElement>(null);
  const lastNameInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const registerHandler = useCallback(() => {
    const first_name = firstNameInputRef.current?.value || "";
    const last_name = lastNameInputRef.current?.value || "";
    const email = emailInputRef.current?.value || "";
    const gender = selectedGender;
    const birth_date = `${selectedYear}.${selectedMonth}.${selectedDay}`;
    const username = usernameInputRef.current?.value || "";
    const password = passwordInputRef.current?.value || "";

    const isFormValid =
      first_name &&
      last_name &&
      email &&
      gender &&
      selectedYear &&
      selectedMonth &&
      selectedDay &&
      username &&
      password;

    const isEmailValid = !!email && email.includes("@");

    setFirstNameValid(!!first_name);
    setLastNameValid(!!last_name);
    setEmailValid(isEmailValid);
    setGenderValid(!!gender);
    setYearValid(!!selectedYear);
    setMonthValid(!!selectedMonth);
    setDayValid(!!selectedDay);
    setUsernameValid(!!username);
    setPasswordValid(!!password);

    if (isFormValid) {
      if (!isEmailValid) {
        console.log("Invalid email format!");
      } else {
        const action = registerAction(
          first_name,
          last_name,
          email,
          gender,
          birth_date,
          username,
          password
        ) as ThunkAction<
          void,
          RootState,
          unknown,
          PayloadAction<{ username: string; token: string }>
        >;

        dispatch(action as any);
        console.log("Registration Successful!");
      }
    } else {
      console.log("Form Validation Failed!");
    }
  }, [selectedGender, selectedYear, selectedMonth, selectedDay, dispatch]);

  return (
    <div className="text-white pt-16">
      <div className="p-5">
        <img src={SpotifyLogo} alt="SpotifyLogo" width={150} />
      </div>
      <div className="text-white text-5xl font-bold flex justify-center ml-2">
        Sign up to start
        <br />
        listening
      </div>
      <div className="w-80 m-auto pt-14">
        <p className="font-bold">First Name</p>
        <input
          ref={firstNameInputRef}
          type="text"
          placeholder="Your name here"
          className={`outline-none grow text-white p-3 w-80 rounded bg-neutral-900 border ${
            firstNameValid ? "border-white" : "border-red-500"
          } mt-2`}
        />
        {!firstNameValid && (
          <p className="text-red-500">This field is required</p>
        )}

        <p className="pt-4 font-bold">Last Name</p>
        <input
          ref={lastNameInputRef}
          type="text"
          placeholder="Your last name here"
          className={`outline-none grow text-white p-3 w-80 rounded bg-neutral-900 border ${
            lastNameValid ? "border-white" : "border-red-500"
          } mt-2`}
        />
        {!lastNameValid && (
          <p className="text-red-500">This field is required</p>
        )}

        <p className="pt-4 font-bold">Email</p>
        <input
          ref={emailInputRef}
          type="text"
          placeholder="example@gmail.com"
          className={`outline-none grow text-white p-3 w-80 rounded bg-neutral-900 border ${
            emailValid ? "border-white" : "border-red-500"
          } mt-2`}
        />
        {!emailValid && (
          <p className="text-red-500">
            {emailInputRef.current?.value
              ? "Invalid email format"
              : "This field is required"}
          </p>
        )}

        <div className="pt-4">
          <label htmlFor="gender" className="block text-white font-bold">
            Gender
          </label>
          <select
            id="gender"
            value={selectedGender}
            onChange={handleGenderChange}
            className={`outline-none text-white p-3 w-80 rounded bg-neutral-900 border ${
              genderValid ? "border-white" : "border-red-500"
            } mt-2`}
          >
            <option value="" disabled>
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          {!genderValid && (
            <p className="text-red-500">This field is required</p>
          )}
        </div>

        <div className="pt-4">
          <label htmlFor="birthdate" className="block text-white font-bold">
            Birth Date
          </label>
          <div className="flex mt-2">
            <div className="mr-2">
              <label htmlFor="year">Year</label>
              <select
                id="year"
                value={selectedYear}
                onChange={handleYearChange}
                className={`outline-none text-white p-3 w-28 rounded bg-neutral-900 border ${
                  yearValid ? "border-white" : "border-red-500"
                }`}
              >
                <option value="" disabled>
                  Year
                </option>
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
              {!yearValid && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>

            <div className="mr-2">
              <label htmlFor="month">Month</label>
              <select
                id="month"
                value={selectedMonth}
                onChange={handleMonthChange}
                className={`outline-none text-white p-3 w-26 rounded bg-neutral-900 border ${
                  monthValid ? "border-white" : "border-red-500"
                }`}
              >
                <option value="" disabled>
                  Month
                </option>
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              {!monthValid && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>

            <div>
              <label htmlFor="day">Day</label>
              <select
                id="day"
                value={selectedDay}
                onChange={handleDayChange}
                className={`outline-none text-white p-3 w-24 rounded bg-neutral-900 border ${
                  dayValid ? "border-white" : "border-red-500"
                }`}
              >
                <option value="" disabled>
                  Day
                </option>
                {days.map((day) => (
                  <option key={day} value={day}>
                    {day}
                  </option>
                ))}
              </select>
              {!dayValid && (
                <p className="text-red-500">This field is required</p>
              )}
            </div>
          </div>
        </div>

        <p className="pt-4 font-bold">Username</p>
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
          onClick={registerHandler}
          className="w-72 outline-none bg-green-600 p-3 rounded-3xl text-black font-bold"
        >
          Register
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="underline font-bold">
            Log in here.
          </Link>
        </p>
      </div>
    </div>
  );
}
