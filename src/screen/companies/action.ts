import Utils from "../../utils";

export const fetchCompaniesList = () => {
  return (dispatch: Function) => {
    Utils.api.getApiCall(
      "/companies",
      "",
      (response: any) => {
        const { status, data } = response;
        if (status === Utils.constant.apiSuccessCode.success) {
          dispatch({
            type: Utils.actionName.GET_COMPANY_LIST,
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
