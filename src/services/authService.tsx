import {
  LoginFields,
  RegisterFields,
  TestFields,
  QuestionFields,
} from "../types/fields";
import api, { DefaultResponse } from "./api";

async function login(fields: LoginFields) {
  try {
    const response = await api.post("login", { ...fields });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
}

async function register(fields: RegisterFields) {
  try {
    const response = await api.post("register", { ...fields });
    return response.data as DefaultResponse;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
}

async function tokenDetails(token: string) {
  try {
    const response = await api.get("token", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data as DefaultResponse;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
}

async function logout(token: string) {
  try {
    const response = await api.post(
      "logout",
      {},
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return response.data as DefaultResponse;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
}

async function searchUser(token: string, keyword: string) {
  try {
    const response = await api.get("searchUser/" + keyword, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    console.log(response);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
}

async function getAllUsers(token: string) {
  try {
    const response = await api.get("getAllUsers", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
}

export default {
  login,
  tokenDetails,
  register,
  logout,
  searchUser,
  getAllUsers
};
