import * as Yup from "yup";

// const FILE_SIZE = 1024 * 1024;
// const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

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

const schema = {
  loginSchema,
  addCategoryScheme,
};

export default schema;
