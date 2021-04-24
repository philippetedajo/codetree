import * as yup from "yup";

export const loginSchema = yup.object().shape({
  email: yup.string().required("You must enter an email"),
  password: yup
    .string()
    .required("You must enter a password")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-8]).{8,}$/,
      "Must contain at least 8 characters with one uppercase, one lowercase and one digit"
    ),
});
