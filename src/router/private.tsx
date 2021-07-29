import { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import MainLoader from "../components/mainLoader";
import theme from "../components/theme";
import Utils from "../utils";
import Container from "../components/container";

interface Props {
  path: string;
  component: any;
  exact?: boolean;
}

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Suspense
          fallback={
            <MainLoader
              loading={true}
              color={theme.palette.primary.dark}
              size={100}
              css={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            />
          }
        >
          {Utils.constant.getUserIdToken() ? (
            <Container {...props}>
              <Component {...props} />
            </Container>
          ) : (
            <Redirect to="/" />
          )}
        </Suspense>
      )}
    />
  );
};
export default PrivateRoute;
