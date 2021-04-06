import * as yup from "yup";

export const setupSchema = yup.object().shape({
  foo: yup.string().required(),
  foo2: yup.string().required(),
});
