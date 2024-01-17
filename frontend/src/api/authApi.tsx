import { iaxios } from "./iaxios";

export function sendLoginData(user_info: string, password: string) {
  return iaxios.post('/login/', { user_info, password });
}

export function sendRegisterData(
  first_name: string,
  last_name: string,
  email: string,
  gender:string,
  birth_date: string,
  username: string,
  password: string
) {
  return iaxios.post('/register/', { first_name, last_name, email,gender, birth_date, username, password });
}
