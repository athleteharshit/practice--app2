import { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import PrivateRoute from "./private";
import theme from "../components/theme";

// ******************************** Components ********************************
import MainLoader from "../components/mainLoader";
const Login = lazy(() => import("../screen/login"));
const Users = lazy(() => import("../screen/users"));
const Categories = lazy(() => import("../screen/categories"));
const Companies = lazy(() => import("../screen/companies"));
const LoanRequest = lazy(() => import("../screen/loanRequest"));

function Router() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            render={(props: any) => {
              return (
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
                  <Login {...props} />
                </Suspense>
              );
            }}
          />
          <PrivateRoute path="/users" component={Users} />
          <PrivateRoute path="/categories" component={Categories} />
          <PrivateRoute path="/companies" component={Companies} />
          <PrivateRoute path="/loanRequest" component={LoanRequest} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Router;
