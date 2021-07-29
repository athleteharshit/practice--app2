import { Avatar } from "@material-ui/core";
import {
  Grid,
  TextField,
  Typography,
  Button,
  Hidden,
  makeStyles,
  createStyles,
  Theme,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import { SignInModal } from "../../modal";
import schema from "../../schema";
import { useDispatch } from "react-redux";
import { onSubmit } from "./action";

// ******************************* icons *******************************
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
      backgroundColor: theme.palette.secondary.light,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    container: {
      width: 1000,
      margin: theme.spacing(5, 2),
      backgroundColor: "var(--white)",
      borderRadius: 20,
      overflow: "hidden",
    },
    imgFit: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    formDiv: {
      padding: theme.spacing(5, 2.5),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    logoDiv: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    avatar: {
      width: 50,
      height: 50,
      backgroundColor: theme.palette.primary.main,
    },
    heading: {
      margin: theme.spacing(2, 0, 4),
    },
    formikDiv: {
      width: "100%",
    },
    formikForm: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    textField: {
      width: "80%",
      height: 90,
    },
    loginBtn: {
      width: "80%",
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.8
      )}px Roboto, sans-serif `,
      color: "var(--white)",
      padding: theme.spacing(1, 0),
    },
  })
);

function Login({ history }: any) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { email, password } = new SignInModal();

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Grid container>
          <Hidden xsDown>
            <Grid item xs={12} sm={6}>
              <img
                className={classes.imgFit}
                src="https://images.unsplash.com/photo-1426986877401-1b61ae18fb0e?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=500&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzMyNTU0NA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=510"
                alt="login img"
              />
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={6}>
            <div className={classes.formDiv}>
              <div className={classes.logoDiv}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon fontSize="large" />
                </Avatar>
                <Typography variant="h5" className={classes.heading}>
                  Company Name
                </Typography>
              </div>
              <div className={classes.formikDiv}>
                <Formik
                  initialValues={{
                    email,
                    password,
                  }}
                  validationSchema={schema.loginSchema()}
                  onSubmit={(values, { setSubmitting }) => {
                    dispatch(onSubmit(values, setSubmitting, history));
                  }}
                >
                  {({
                    errors,
                    handleChange,
                    handleBlur,
                    values,
                    isSubmitting,
                    touched,
                  }) => {
                    return (
                      <Form className={classes.formikForm}>
                        <TextField
                          label="Email *"
                          placeholder="Enter email"
                          id="email"
                          name="email"
                          type="email"
                          error={Boolean(errors.email) && touched.email}
                          helperText={
                            Boolean(errors.email) &&
                            touched.email &&
                            errors.email
                          }
                          variant="outlined"
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={classes.textField}
                        />
                        <TextField
                          label="Password *"
                          placeholder="Enter password"
                          id="password"
                          name="password"
                          type="password"
                          error={Boolean(errors.password) && touched.password}
                          helperText={
                            Boolean(errors.password) &&
                            touched.password &&
                            errors.password
                          }
                          variant="outlined"
                          value={values.password}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          className={classes.textField}
                        />
                        <Button
                          className={classes.loginBtn}
                          type="submit"
                          variant="contained"
                          color="primary"
                          disabled={isSubmitting}
                          onClick={() => console.log("login suc")}
                        >
                          {isSubmitting ? (
                            <div className="loader">Loading...</div>
                          ) : (
                            "Login"
                          )}
                        </Button>
                      </Form>
                    );
                  }}
                </Formik>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Login;

// email: eve.holt@reqres.in
// pass: cityslicka
