import {
  LoginFields,
  RegisterFields,
  TestFields,
  QuestionFields,
} from "../types/fields";
import api, { DefaultResponse } from "./api";

async function createTest(fields: TestFields, userId: number, token: string) {
  try {
    const response = await api.post(
      "test/" + userId,
      { ...fields },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
}

async function getTests(token: string) {
  try {
    const response = await api.get("test", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error: any) {
    console.log(error.response.data);
  }
}

async function getTestsUser(token: string, id: number) {
  try {
    const response = await api.get("test/" + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error: any) {
    console.log(error.response.data);
  }
}

async function getTestsById(token: string, id: number) {
  try {
    const response = await api.get("test/byId/" + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error: any) {
    console.log(error.response.data);
  }
}

export default {
  createTest,
  getTests,
  getTestsUser,
  getTestsById
};
