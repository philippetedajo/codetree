import * as yup from "yup";

let schemas = {
  project_title: yup.string().min(5).max(50),
};

const { project_title } = schemas;

export const projectSchema = yup.object().shape({
  project_title,
});
