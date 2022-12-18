import { TestFields, QuestionFields } from "../types/fields";

import api, { DefaultResponse } from "./api";

async function testcreate(fields: TestFields) {
  try {
    const response = await api.post("testcreate", { ...fields });
    return response.data as DefaultResponse;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
}

async function questioncreate(fields: QuestionFields) {
  try {
    const response = await api.post("questioncreate", { ...fields });
    return response.data as DefaultResponse;
  } catch (error: any) {
    console.log(error);
    return error.response.data;
  }
}

export default {
  testcreate,
  questioncreate,
};
