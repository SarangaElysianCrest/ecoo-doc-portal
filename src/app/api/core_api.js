import axios from "axios";
import { getUserIDFromLocal } from "../../Helpers/loginHelper";
import { step01 } from "./mock/registration";

export const API_BASE_URL = 
// "https://dc58-2402-4000-1383-37b3-1579-1e4a-e39e-2564.in.ngrok.io"
"https://1c7e-103-21-166-239.ap.ngrok.io"

export const getRegRequestAPI = () => {
  axios.get("/api/");
};

export const getFromStep = () => {
  axios.get("/api/");
};

export const getFromStep1API = async (id) => {
  console.log("Id >>>>>>>>>>", id);
  return axios({
    method: "GET",
    baseURL: API_BASE_URL,
    url: `/ecoo-core/cp-product/find/${id}`,

    headers: {},
  })
    .then((res) => {
      console.log("response", res);
      return res.data;
    })
    .catch((error) => {
      const mock = JSON.parse(JSON.stringify(step01));
      console.log("API error", mock);
      throw error.response;
    });
};

export const getFromStep2API = async (id) => {
  return axios({
    method: "GET",
    baseURL: API_BASE_URL,
    url: `/ecoo-core/company/find/${id}`,
    headers: {},
  })
    .then((res) => {
      console.log("response", res);
      return res.data;
    })
    .catch((error) => {
      const mock = JSON.parse(JSON.stringify(step01));
      console.log("API error", mock);
      throw error.response;
    });
};

export const getFromStep3API = async (id) => {
  return axios({
    method: "GET",
    baseURL: API_BASE_URL,
    url: `/ecoo-core/management/find/${id}`,
    headers: {},
  })
    .then((res) => {
      console.log("response", res);
      return res.data;
    })
    .catch((error) => {
      const mock = JSON.parse(JSON.stringify(step01));
      console.log("API error", mock);
      throw error.response;
    });
};

export const getFromStep4API = async (id) => {
  return axios({
    method: "GET",
    baseURL: API_BASE_URL,
    url: `/ecoo-core/person/find/${id}`,
    headers: {},
  })
    .then((res) => {
      console.log("response", res);
      return res.data;
    })
    .catch((error) => {
      const mock = JSON.parse(JSON.stringify(step01));
      console.log("API error", mock);
      throw error.response;
    });
};

export const getFromStep5API = async (id) => {
  return axios({
    method: "GET",
    baseURL: API_BASE_URL,
    url: `/ecoo-core/factory/find/${id}`,
    headers: {},
  })
    .then((res) => {
      console.log("response", res);
      return res.data;
    })
    .catch((error) => {
      const mock = JSON.parse(JSON.stringify(step01));
      console.log("API error", mock);
      throw error.response;
    });
};

export const getCompanyRegDetailsByStatus = async (status, params) => {
  const userID = getUserIDFromLocal();
  if ("PENDING" == status && userID === 2){
	status = "CHECKED";
  }else if("PENDING" == status && userID === 3){
	status = "RECOMMENDED";
  }
  return axios({
    method: "GET",
    baseURL: API_BASE_URL,
    url: "/ecoo-core/company/status/" + status + "/" + userID,
    params: params,
    headers: {},
  })
    .then((res) => {
      console.log("response", res);
      return res;
    })
    .catch((error) => {
      console.log("API error");
    });
};

export const getCompanyRegStatus = async () => {
  const userID = getUserIDFromLocal();
  console.log("getCompanyRegStatus USER:", userID);
  return axios({
    method: "GET",
    baseURL: API_BASE_URL,
    url: "ecoo-core/company/get/status/count/" + userID,
    headers: {},
  })
    .then((res) => {
      console.log("getCompanyRegStatus :", res);
	  let count = 0;
	  if(userID === 1){
		count = res?.data?.pendingCount;
	  }else if(userID === 2){
		count = res?.data?.checkedCount;
	  }else{
		count = res?.data?.recommendedCount;
	  }
      return count;
    })
    .catch((error) => {
      console.log("API error");
    });
};

export const finalApprovalAPI = async (data, userID) => {
  return axios({
    method: "POST",
    baseURL: API_BASE_URL,
    url: "/ecoo-core/comment/add/" + userID,
    headers: {},
    data: data,
  })
    .then((res) => {
      console.log("response", res);
      return res;
    })
    .catch((error) => {
      console.log("API error", error);
    });
};

export const finalApprovalStatusUpdateAPI = async (data, cpID) => {
  return axios({
    method: "PUT",
    baseURL: API_BASE_URL,
    url: "/ecoo-core/company/status/update/" + cpID,
    headers: {},
    data: data,
  })
    .then((res) => {
      console.log("response", res);
      return res;
    })
    .catch((error) => {
      console.log("API error", error);
    });
};

export async function authenticateUser(payload) {
  console.log("authenticateUser", payload);
  try {
    const response = await axios.post(
      API_BASE_URL + "/ecoo-core/auth/manageUser",
      payload
    );
    console.log("authenticateUser :", response);
    return response;
  } catch (error) {
    throw error;
  }
}
