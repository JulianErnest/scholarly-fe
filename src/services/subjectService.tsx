import {
  LoginFields,
  RegisterFields,
  TestFields,
  QuestionFields,
} from "../types/fields";
import api, { DefaultResponse } from "./api";

async function getAllSubjects(token: string) {
  try {
    const response = await api.get("subject", {
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
  getAllSubjects,
};
