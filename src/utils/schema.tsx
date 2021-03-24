import * as yup from "yup";

export const setupSchema = yup.object().shape({
  name: yup.string().required(),
  age: yup.string().required(),
});
