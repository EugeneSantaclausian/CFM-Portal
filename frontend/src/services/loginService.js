/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import config from "./config";

//define the api
const apiClient = axios.create({
  baseURL: `${config.baseUrl}`,
  headers: { Accept: "application/json" },
});

const login = (user_email, user_password) =>
  apiClient.post("/login", {
    email: user_email,
    password: user_password,
  });

export default {
  login,
};
