import axios from "axios";
import { getUserIdToken } from "./session";

// const baseURL = "http://18.191.245.6:9001/api/v1/";

/**
 * setup axios instance
 */
const $axios = axios.create({
  timeout: 100000,
  baseURL: `https://reqres.in/`,
  headers: { "Content-Type": "application/json" },
});

const localUseOfAxios = axios.create({
  timeout: 100000,
  baseURL: `http://localhost:4000/`,
  headers: { "Content-Type": "application/json" },
});

const apiErrorCode = {
  unauthorized: 401,
  accessDenied: 430,
  sessionExpired: 440,
  validationError: 400,
  emailNotVerified: 403,
};

const apiSuccessCode = {
  postSuccess: 201,
  success: 200,
};
const responseAlert = {
  INFORMATION_ALERT_WITHOUT_ACTION: 1,
  ALERT_WITH_ACTION: 2,
  ALERT_WITHOUT_ACTION: 3,
  CONNECTION_ERROR: 4,
  CONTACT_SUPPORT: 5,
};

const constant = {
  axios: $axios,
  localUseOfAxios,
  apiErrorCode,
  apiSuccessCode,
  responseAlert,
  getUserIdToken,
};

export default constant;
