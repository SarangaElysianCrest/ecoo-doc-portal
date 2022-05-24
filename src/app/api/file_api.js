import axios from "axios";
import { API_BASE_URL } from "./core_api";

const FILE_BASE = API_BASE_URL;

export const getFileAPI = async (fileID) => {
  return axios({
    method: "GET",
    baseURL: FILE_BASE,
    url: `/ecoo-core/file/${fileID}`,
    headers: {},
  })
    .then((res) => {
      console.log("response", res);
      return res.data;
    })
    .catch((error) => {
      throw error.response;
    });
};

export const getFileURL = (fileID) => {
    return `${FILE_BASE}/ecoo-core/file/${fileID}`;
}
