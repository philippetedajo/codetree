import * as yup from "yup";

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
