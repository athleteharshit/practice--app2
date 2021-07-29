import * as Yup from "yup";

// const FILE_SIZE = 1024 * 1024;
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const loginSchema = () =>
  Yup.object().shape({
    email: Yup.string()
      .trim()
      .email("Please enter your email address")
      .required("Please enter email address"),
    password: Yup.string()
      .min(8, "Must be greater then 8 characters")
      .required("Please enter password")
      .matches(/^\S*$/, "Blank Space not allowed in password"),
  });

const addCategoryScheme = () =>
  Yup.object().shape({
    companyName: Yup.string()
      .trim()
      .min(3, "Must be greater then 3 characters")
      .required("Company Name required"),
    companyImg: Yup.mixed().required("A file is required"),
    // .test("fileSize", "File too large", (value) => {
    //   console.log(value.size);
    //   return value && value.size <= FILE_SIZE;
    // }),
    // .test("fileFormat", "Unsupported Format", (value) => {
    //   console.log(value);
    //   return value && SUPPORTED_FORMATS.includes(value.type);
    // }),
  });

const addCompaniesSchema = () =>
  Yup.object().shape({
    selectCategory: Yup.string()
      .required("Category is required")
      .min(3, "Must be greater then 3 characters"),
    companyName: Yup.string()
      .trim()
      .min(3, "Must be greater then 3 characters")
      .required("Company Name required"),
    location: Yup.string()
      .trim()
      .min(3, "Must be greater then 3 characters")
      .required("Location is required"),
    amount: Yup.number().test(
      "maxDigitsAfterDecimal",
      "number field must have 2 digits after decimal or less",
      (number: any) => Number.isInteger(number * 10 ** 2)
    ),
    openingHour: Yup.string().test(
      "not empty",
      "Time can't be empty",
      function (value) {
        return !!value;
      }
    ),
    contact: Yup.string()
      .required("required")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "to short")
      .max(10, "to long"),
    description: Yup.string(),
    companyImg: Yup.mixed().required("A file is required"),
  });

const schema = {
  loginSchema,
  addCategoryScheme,
  addCompaniesSchema,
};

export default schema;
