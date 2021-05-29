import * as yup from "yup";

const FILE_SIZE = 6 * 1000000;
const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"];

let schemas = {
  name: yup.string().required("You must enter your full name").min(3).max(70),
  firstname: yup
    .string()
    .required("You must enter your firstname")
    .min(3)
    .max(20),
  lastname: yup
    .string()
    .required("You must enter your lastname")
    .min(3)
    .max(20),
  description: yup.string().max(200),
  username: yup.string().required("You must a username").min(4).max(30),
  email: yup.string().email().required("You must enter an email"),
  min: yup.string().required("You must your password"),
  status: yup.string().max(50),
  password: yup
    .string()
    .matches(
      /^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})/,
      "Your password should have at least 8 characters, one capital letter and one number."
    ),
  last_password: yup.string().required("You must enter your last password"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
  profile_picture: yup
    .mixed()
    .required("You must profile a file")
    .test("fileSize", "The file is too large", (value) => {
      return value && value[0].size <= FILE_SIZE;
    })
    .test("type", "Only support png, jpg and jpeg", (value) => {
      return value && value[0].type === SUPPORTED_FORMATS;
    }),
};

const {
  name,
  username,
  email,
  min,
  password,
  confirm_password,
  last_password,
  status,
  description,
  profile_picture,
} = schemas;

export const loginSchema = yup.object().shape({
  email,
  min,
});

export const registerSchema = yup.object().shape({
  name,
  username,
  email,
  password,
});

export const forgotPasswordSchema = yup.object().shape({
  email,
});

export const resetPasswordSchema = yup.object().shape({
  password,
  confirm_password,
});

export const updateProfileSchema = yup.object().shape({
  name,
  username,
  description,
  status,
});

export const updateEmailSchema = yup.object().shape({
  email,
});

export const updatePasswordSchema = yup.object().shape({
  last_password,
  password,
});

export const profilePictureSchema = yup.object().shape({
  profile_picture,
});
