import axios from "axios";
import {
  getUserIdToken,
  setAuthorizationToken,
  removeSession,
} from "./session";

// baseURL: `https://reqres.in/`,
const baseURL = "http://18.191.245.6:9001/api/v1/";

const username = "credtexpress";
const password = "credtexpress@123";

function authenticateUser(user: string, password: string) {
  let token = user + ":" + password;
  let hash = btoa(token);

  return "Basic " + hash;
}

/**
 * setup axios instance
 */

const $axios = axios.create({
  timeout: 100000,
  baseURL: baseURL,

  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: authenticateUser(username, password),
    platform: "1",
    language: "en",
  },
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

const messageCode = {
  userType: "ADMIN",
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
  setAuthorizationToken,
  removeSession,
  messageCode,
};

export default constant;
