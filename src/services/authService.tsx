import { LoginFields, RegisterFields } from "../types/fields";
import api from "./api";

async function login(fields: LoginFields) {
  try {
    const response = await api.post("login", { ...fields });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

async function register(fields: RegisterFields) {
  try {
    const response = await api.post("register", { ...fields });
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default {
  login,
  register,
};
