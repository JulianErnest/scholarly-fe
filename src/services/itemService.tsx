import { QuestionFields } from "../types/fields";
import api, { DefaultResponse } from "./api";

async function createItem(fields: QuestionFields, id: number, token: string) {
  try {
    const response = await api.post(
      "item/" + id,
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

async function getTestItems(id: number, token: string) {
  try {
    const response = await api.get("item/" + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
}

async function deleteItem(id: number, token: string) {
  try {
    const response = await api.delete("item/" + id, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
}

async function getAllItems(token: string) {
  try {
    const response = await api.get("item", {
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
  createItem,
  getTestItems,
  deleteItem,
  getAllItems
};
