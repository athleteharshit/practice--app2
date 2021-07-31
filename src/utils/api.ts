import Utils from ".";

// post api
const postApiCall = (
  endPoint: string,
  params: any,
  successCallback: Function,
  errorCallback: Function
) => {
  Utils.constant.axios
    .post(endPoint, params)
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      errorCallback(error);
    });
};

// get api
const getApiCall = (
  endPoint: string,
  params = "",
  successCallback: Function,
  errorCallback: Function
) => {
  Utils.constant.localUseOfAxios
    .get(`${endPoint}${params}`)
    .then((response: any) => {
      successCallback(response);
    })
    .catch((error: any) => {
      errorCallback(error);
    });
};

const api = {
  postApiCall,
  getApiCall,
};

export default api;
