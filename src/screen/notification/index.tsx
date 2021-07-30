import {
  makeStyles,
  createStyles,
  Theme,
  Paper,
  Typography,
  TextareaAutosize,
  Button,
  FormHelperText,
  Grid,
  CardActionArea,
  Card,
  CardMedia,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import { NotificationModal } from "../../modal";
import schema from "../../schema";
import MainTextField from "../../components/mainTextField";

// ********** image ********
import localImages from "../../utils/images";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    notificationRoot: {},
    headerPaper: {
      padding: theme.spacing(1.5),
      borderRadius: 0,
    },
    heading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        2.4
      )}px Roboto, sans-serif `,
      color: "var(--blue-grey)",
    },
    marginDiv: {
      backgroundColor: "var(--white)",
      margin: theme.spacing(1, 0.5),
      minHeight: "calc(100vh - 80px)",
    },
    gridContainer: {
      padding: theme.spacing(1),
    },
    textField: {
      height: 100,
      width: 250,
    },
    textareaAutosize: {
      padding: theme.spacing(0.5),
    },
    textareaAutosizeDiv: {
      height: 240,
    },
    btnDiv: {
      marginTop: theme.spacing(2),
      width: "400px",
    },
    loginBtn: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px Roboto, sans-serif `,
      color: "var(--white)",
      padding: theme.spacing(1, 2),
      width: "100%",
    },
    card: {
      width: 350,
      marginBottom: theme.spacing(2),
    },
    media: {
      height: 230,
    },
  })
);

function Notification() {
  const classes = useStyles();
  const { title, message } = new NotificationModal();

  return (
    <div className={classes.notificationRoot}>
      <Paper className={classes.headerPaper}>
        <Typography className={classes.heading}>Notification</Typography>
      </Paper>
      <div className={classes.marginDiv}>
        <Grid container className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={7}>
            <Formik
              initialValues={{ title, message }}
              validationSchema={schema.notificationSchema}
              onSubmit={(values, { setSubmitting }) => {
                console.log(values);
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
                  <Form>
                    <MainTextField
                      label="Title *"
                      placeholder="Enter title"
                      id="title"
                      name="title"
                      type="text"
                      error={Boolean(errors.title) && touched.title}
                      helperText={
                        Boolean(errors.title) && touched.title && errors.title
                      }
                      variant="outlined"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={classes.textField}
                    />
                    <div className={classes.textareaAutosizeDiv}>
                      <TextareaAutosize
                        style={{
                          maxWidth: "400px",
                          maxHeight: "200px",
                          minWidth: "400px",
                          minHeight: "200px",
                        }}
                        maxRows={4}
                        placeholder="Add message"
                        id="message"
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={classes.textareaAutosize}
                      />
                      <FormHelperText style={{ color: "red" }}>
                        {Boolean(errors.message) &&
                          touched.message &&
                          errors.message}
                      </FormHelperText>
                    </div>
                    <div className={classes.btnDiv}>
                      <Button
                        className={classes.loginBtn}
                        color="primary"
                        variant="contained"
                        type="submit"
                        disabled={isSubmitting}
                        onClick={() => console.log("send notification succes")}
                      >
                        {isSubmitting ? (
                          <div className="loader">Loading...</div>
                        ) : (
                          "Send"
                        )}
                      </Button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </Grid>
          <Grid item xs={12} sm={6} md={5}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={localImages.NOTIFICATION}
                  title="notification"
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Notification;
