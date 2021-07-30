import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  Paper,
  Breadcrumbs,
  Button,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  TextareaAutosize,
  OutlinedInput,
} from "@material-ui/core";
import { NavLink, useLocation } from "react-router-dom";
import { Formik, Form } from "formik";
import { AddCompaniesModal } from "../../modal";
import schema from "../../schema";

// ********** components **********
import MainTextField from "../../components/mainTextField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addCompaniesRoot: {},
    breadcrumb: {
      "& .MuiBreadcrumbs-separator": {
        fontSize: theme.spacing(2.4),
        margin: theme.spacing(0, 0.5),
      },
    },
    headerPaper: {
      padding: theme.spacing(1),
      borderRadius: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    heading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        2.4
      )}px Roboto, sans-serif `,
      color: "var(--blue-grey)",
    },
    hover: {
      color: "var(--denim-blue)",
      "&:hover": {
        color: theme.palette.primary.main,
      },
    },
    addCompaniesDiv: {
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
      "&:nth-child(even)": {
        marginLeft: theme.spacing(1.5),
      },
    },
    textareaAutosize: {
      padding: theme.spacing(0.5),
    },
    imgItemDiv: {
      width: 350,
    },
    fileField: {
      width: "100%",
      height: 90,
    },
    card: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    media: {
      height: 230,
    },
    btnDiv: {
      marginTop: theme.spacing(2),
      width: "100%",
    },
    loginBtn: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px Roboto, sans-serif `,
      color: "var(--white)",
      padding: theme.spacing(1, 2),
      width: "100%",
    },
  })
);

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function AddCompanies() {
  const classes = useStyles();
  const query = useQuery();
  const type = query.get("type");
  const {
    selectCategory,
    companyName,
    location,
    amount,
    openingHour,
    contact,
    description,
    companyImg,
  } = new AddCompaniesModal();

  return (
    <div>
      <Paper className={classes.headerPaper}>
        <div>
          <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumb}>
            <NavLink exact to="/companies">
              <Typography
                className={[classes.heading, classes.hover].join(" ")}
              >
                Companies
              </Typography>
            </NavLink>
            <Typography className={classes.heading}>
              {type === "edit" ? "Edit Company" : "Add Company"}
            </Typography>
          </Breadcrumbs>
        </div>
      </Paper>
      <div className={classes.addCompaniesDiv}>
        <Formik
          initialValues={{
            selectCategory,
            companyName,
            location,
            amount,
            openingHour,
            contact,
            description,
            companyImg,
          }}
          validationSchema={schema.addCompaniesSchema}
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
                <Grid container className={classes.gridContainer}>
                  <Grid item xs={12} sm={6} md={7}>
                    <FormControl
                      variant="outlined"
                      className={classes.textField}
                      error={
                        Boolean(errors.selectCategory) &&
                        Boolean(touched.selectCategory)
                      }
                    >
                      <InputLabel id="selectCategory">
                        Select Category
                      </InputLabel>
                      <Select
                        labelId="selectCategory"
                        id="selectCategory"
                        value={values.selectCategory}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Select Category"
                        name="selectCategory"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={"home"}>Home loan</MenuItem>
                        <MenuItem value={"personal"}>Personal loan</MenuItem>
                        <MenuItem value={"car"}>Car loan</MenuItem>
                        <MenuItem value={"twoWheller"}>
                          Two Wheller loan
                        </MenuItem>
                      </Select>
                      <FormHelperText>
                        {Boolean(errors.selectCategory) &&
                          touched.selectCategory &&
                          errors.selectCategory}
                      </FormHelperText>
                    </FormControl>
                    <MainTextField
                      label="Company name *"
                      placeholder="Enter company name"
                      id="companyName"
                      name="companyName"
                      type="text"
                      error={
                        Boolean(errors.companyName) &&
                        Boolean(touched.companyName)
                      }
                      helperText={
                        Boolean(errors.companyName) &&
                        Boolean(touched.companyName) &&
                        errors.companyName
                      }
                      variant="outlined"
                      value={values.companyName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={classes.textField}
                    />
                    <MainTextField
                      label="Location *"
                      placeholder="Enter location"
                      id="location"
                      name="location"
                      type="text"
                      error={
                        Boolean(errors.location) && Boolean(touched.location)
                      }
                      helperText={
                        Boolean(errors.location) &&
                        Boolean(touched.location) &&
                        errors.location
                      }
                      variant="outlined"
                      value={values.location}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={classes.textField}
                    />
                    <MainTextField
                      label="Amount *"
                      placeholder="Enter amount name"
                      id="amount"
                      name="amount"
                      type="text"
                      error={Boolean(errors.amount) && touched.amount}
                      helperText={
                        Boolean(errors.amount) &&
                        touched.amount &&
                        errors.amount
                      }
                      variant="outlined"
                      value={values.amount}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={classes.textField}
                    />
                    <MainTextField
                      // label="Opening Hour *"
                      placeholder="Enter opening hour"
                      id="openingHour"
                      name="openingHour"
                      type="time"
                      error={
                        Boolean(errors.openingHour) &&
                        Boolean(touched.openingHour)
                      }
                      helperText={
                        Boolean(errors.openingHour) &&
                        Boolean(touched.openingHour) &&
                        errors.openingHour
                      }
                      variant="outlined"
                      value={values.openingHour}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={classes.textField}
                    />
                    <MainTextField
                      label="Contact *"
                      placeholder="Enter contact number"
                      id="contact"
                      name="contact"
                      type="number"
                      error={Boolean(errors.contact) && touched.contact}
                      helperText={
                        Boolean(errors.contact) &&
                        touched.contact &&
                        errors.contact
                      }
                      variant="outlined"
                      value={values.contact}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={classes.textField}
                    />
                    <TextareaAutosize
                      style={{
                        maxWidth: "400px",
                        maxHeight: "200px",
                        minWidth: "400px",
                        minHeight: "200px",
                      }}
                      maxRows={4}
                      placeholder="Add Description"
                      id="description"
                      name="description"
                      value={values.description}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={classes.textareaAutosize}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6} md={5}>
                    <div className={classes.imgItemDiv}>
                      <div>
                        {type === "edit" && (
                          <Card className={classes.card}>
                            <CardActionArea>
                              <CardMedia
                                className={classes.media}
                                image="https://images.unsplash.com/photo-1627386172141-c6fec8bf5aa3?ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                                title="home loan"
                              />
                            </CardActionArea>
                          </Card>
                        )}
                        <FormControl
                          error={
                            Boolean(errors.companyImg) && touched.companyImg
                          }
                          className={classes.fileField}
                          variant="outlined"
                        >
                          <OutlinedInput
                            id="companyImg"
                            name="companyImg"
                            type="file"
                            value={values.companyImg}
                            onChange={handleChange}
                            onBlur={handleBlur}
                          />
                          <FormHelperText id="companyImg">
                            {Boolean(errors.companyImg) &&
                              touched.companyImg &&
                              errors.companyImg}
                          </FormHelperText>
                        </FormControl>
                      </div>

                      <div className={classes.btnDiv}>
                        <Button
                          className={classes.loginBtn}
                          color="primary"
                          variant="contained"
                          type="submit"
                          disabled={isSubmitting}
                          onClick={() => console.log("add suc add companies")}
                        >
                          {isSubmitting ? (
                            <div className="loader">Loading...</div>
                          ) : (
                            "Add"
                          )}
                        </Button>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default AddCompanies;
