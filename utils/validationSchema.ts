import * as yup from "yup";

let schemas = {
  title: yup.string().min(3),
  content: yup.string(),
};

const { title, content } = schemas;

export const createProjectSchema = yup.object().shape({
  title,
  content,
});

export const updateProjectSchema = yup.object().shape({
  title,
});
