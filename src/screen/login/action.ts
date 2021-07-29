import Utils from "../../utils";

export const onSubmit = (values: any, setSubmitting: any, history: any) => {
  return (dispatch: Function) => {
    const { email, password } = values;
    const params = {
      email,
      password,
    };
    Utils.api.postApiCall(
      Utils.endPoint.login,
      params,
      (response: any) => {
        let { data, status } = response;
        if (status === Utils.constant.apiSuccessCode.success) {
          setSubmitting(false);
          const { token } = data;
          if (token && token.length > 0) {
            localStorage.setItem("access_token", JSON.stringify(token));
          }
          Utils.showAlert(1, "Successfully login!");
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
