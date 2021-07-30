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
const CompanyDetails = lazy(() => import("../screen/companyDetails"));
const AddCompanies = lazy(() => import("../screen/addCompanies"));
const ChatSupport = lazy(() => import("../screen/chatSupport"));
const Notification = lazy(() => import("../screen/notification"));
const ChatUser = lazy(() => import("../screen/chatUser"));

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
          <PrivateRoute exact path="/users" component={Users} />
          <PrivateRoute exact path="/categories" component={Categories} />
          <PrivateRoute exact path="/companies" component={Companies} />
          <PrivateRoute exact path="/loanRequest" component={LoanRequest} />
          <PrivateRoute
            exact
            path="/companies/companyDetails/:id"
            component={CompanyDetails}
          />
          <PrivateRoute
            exact
            path="/companies/addCompanies"
            component={AddCompanies}
          />
          <PrivateRoute exact path="/chatSupport" component={ChatSupport} />
          <PrivateRoute
            exact
            path="/chatSupport/chatUser/:id"
            component={ChatUser}
          />
          <PrivateRoute exact path="/notification" component={Notification} />
          <PrivateRoute
            exact
            path="/chatSupport/chatUser/:id"
            component={ChatUser}
          />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default Router;
