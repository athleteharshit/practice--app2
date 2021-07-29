import {
  makeStyles,
  createStyles,
  Theme,
  Typography,
  TextField,
  Button,
  FormControl,
  FormHelperText,
  OutlinedInput,
} from "@material-ui/core";
import { Formik, Form } from "formik";
import { AddCatogoryModal } from "../../modal";
import schema from "../../schema";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    addCatogoryRoot: {},
    heading: {
      font: `normal ${theme.typography.fontWeightMedium} ${theme.spacing(
        2.4
      )}px Roboto, sans-serif `,
      color: "var(--blue-grey)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: theme.spacing(2),
    },
    formikDiv: {},
    textField: {
      height: 90,
      width: "100%",
    },
    fileField: {
      height: 90,
      width: "100%",
    },
    btnDiv: {
      marginTop: theme.spacing(1),
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    addBtn: {
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px Roboto, sans-serif `,
      color: "var(--white)",
      padding: theme.spacing(1, 4),
    },
    cancelBtn: {
      backgroundColor: theme.palette.error.main,
      font: `normal ${theme.typography.fontWeightBold} ${theme.spacing(
        1.6
      )}px Roboto, sans-serif `,
      color: "var(--white)",
      padding: theme.spacing(1, 4),
      "&:hover": {
        backgroundColor: theme.palette.error.light,
      },
    },
  })
);

function AddCatogory({ handleClose }: any) {
  const classes = useStyles();
  const { companyName, companyImg } = new AddCatogoryModal();

  return (
    <div className={classes.addCatogoryRoot}>
      <Typography className={classes.heading}>Add Catogory</Typography>
      <div className={classes.formikDiv}>
        <Formik
          initialValues={{
            companyName,
            companyImg,
          }}
          validationSchema={schema.addCategoryScheme}
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
            // console.log(values, errors);
            return (
              <Form>
                <TextField
                  label="Company name *"
                  placeholder="Enter company name"
                  id="companyName"
                  name="companyName"
                  type="text"
                  error={Boolean(errors.companyName) && touched.companyName}
                  helperText={
                    Boolean(errors.companyName) &&
                    touched.companyName &&
                    errors.companyName
                  }
                  variant="outlined"
                  value={values.companyName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={classes.textField}
                />
                <FormControl
                  error={Boolean(errors.companyImg) && touched.companyImg}
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
                <div className={classes.btnDiv}>
                  <Button
                    className={classes.addBtn}
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting}
                    onClick={() => console.log("add suc")}
                  >
                    {isSubmitting ? (
                      <div className="loader">Loading...</div>
                    ) : (
                      "Add"
                    )}
                  </Button>
                  <Button
                    className={classes.cancelBtn}
                    variant="contained"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default AddCatogory;
