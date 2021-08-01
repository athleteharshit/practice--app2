import Utils from "../../utils";

export const onSubmit = (values: any, setSubmitting: any, history: any) => {
  return (dispatch: Function) => {
    if (!navigator.onLine) {
      Utils.showAlert(2, "Please check your internet connection!");
      setSubmitting(false);
      return;
    }
    const { email, password } = values;
    const params = {
      email,
      password,
      deviceId: "string",
      platform: "3",
      deviceToken: "string",
    };

    Utils.api.postApiCall(
      Utils.endPoint.login,
      params,
      (response: any) => {
        const { data, statusCode, message } = response.data;
        if (
          statusCode === Utils.constant.apiSuccessCode.success &&
          data.userType === Utils.constant.messageCode.userType
        ) {
          const { accessToken } = data;
          Utils.showAlert(1, message);
          setSubmitting(false);
          if (accessToken && accessToken.length > 0) {
            localStorage.setItem("accessToken", accessToken);
          }
          Utils.constant.setAuthorizationToken(accessToken);
          history.push("/users");
        } else {
          setSubmitting(false);
          Utils.showAlert(2);
        }
      },
      (error: any) => {
        setSubmitting(false);
        Utils.showAlert(2);
      }
    );
  };
};
