import axios, { AxiosResponse } from "axios";

const API_URL = "http://localhost:5173/api/auth/";

interface User {
  username: string;
  email?: string;
  password: string;
}

const register = (username: string, email: string, password: string): Promise<AxiosResponse<User>> => {
  return axios.post<User>(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username: string, password: string): Promise<User> => {
  return axios
    .post<User>(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = (): Promise<any> => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = (): User | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;