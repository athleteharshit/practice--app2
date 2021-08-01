import Utils from ".";

export const getUserIdToken = () => {
  return localStorage.getItem("accessToken");
};

export const setAuthorizationToken = (token?: string) => {
  if (token) {
    // Utils.constants.axios.defaults.headers.common[
    //   "accesstoken"
    // ] = `bearer ${token}`;

    Utils.constant.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${token}`;
  } else {
    Utils.constant.axios.defaults.headers.common["Authorization"] = "";
    delete Utils.constant.axios.defaults.headers.common["Authorization"];
  }
};

export const getAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    setAuthorizationToken(accessToken);
  }

  return accessToken;
};

export const setAccessToken = (accessToken: any) => {
  if (accessToken) {
    setAuthorizationToken(accessToken);
  }
  return accessToken;
};

export const removeSession = () => {
  localStorage.clear();
  setAuthorizationToken("");
  window.location.reload();
};
