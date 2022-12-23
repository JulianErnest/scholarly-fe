import {
  Subject,
} from "../types/Subject";

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

async function createSubject(fields: Subject, token: string) {
  try {
    const response = await api.post(
      "/subject",
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

export default {
  getAllSubjects,
  createSubject,
};
