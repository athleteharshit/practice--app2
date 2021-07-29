import Utils from "../../utils";

export const fetchCategoriesList = () => {
  return (dispatch: Function) => {
    dispatch({ type: Utils.actionName.LOADING, payload: { isLoading: true } });
    Utils.api.getApiCall(
      "/categories",
      "",
      (response: any) => {
        const { status, data } = response;
        if (status === Utils.constant.apiSuccessCode.success) {
          dispatch({
            type: Utils.actionName.GET_CATEGORY_LIST,
            payload: data,
          });
        }
        dispatch({
          type: Utils.actionName.LOADING,
          payload: { isLoading: false },
        });
      },
      (error: any) => {
        console.log(error);
        dispatch({
          type: Utils.actionName.LOADING,
          payload: { isLoading: false },
        });
      }
    );
  };
};
