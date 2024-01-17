import axios, { AxiosInstance } from "axios";

export const iaxios: AxiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});
