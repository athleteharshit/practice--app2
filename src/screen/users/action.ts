import Utils from "../../utils";

export const fetchUsersList = () => {
  return (dispatch: Function) => {
    Utils.api.getApiCall(
      "/usersList",
      "",
      (response: any) => {
        const { status, data } = response;
        if (status === Utils.constant.apiSuccessCode.success) {
          dispatch({
            type: Utils.actionName.GET_USERS_LIST,
            payload: data,
          });
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  };
};
