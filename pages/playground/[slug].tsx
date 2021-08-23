import React from "react";
import { GetServerSideProps } from "next";
import { useForm } from "react-hook-form";
import Router from "next/router";
import { useAxios } from "../../hooks/useAxios";
import { ProjectProps } from "../../_types/uiTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import { projectForm } from "../../_types/form";
import { projectSchema } from "../../utils/formSchema";

type Props = {
  project: ProjectProps;
};

const Slug = ({ project }: Props) => {
  console.log(project);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<projectForm>({
    resolver: yupResolver(projectSchema),
  });

  const { getData } = useAxios();

  const onSubmit = async (data: projectForm) => {
    await getData({
      url: `/api/project/${project.id}`,
      method: "PUT",
      input: {
        title: data.project_title,
      },
      onSuccess: (response) => {
        Router.push(
          `/playground/${response.title}?key=${response.id}`,
          undefined,
          { shallow: true }
        );
      },
    });
  };

  return (
    <div className="p-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className=" bg-transparent"
          defaultValue={project.title}
          {...register("project_title")}
        />
        <small className="mb-1 text-red-500">
          {errors.project_title?.message}
        </small>

        <button type="submit">Change</button>
      </form>
    </div>
  );
};

export default Slug;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `http://localhost:3000/api/project/${context.query.key}`
  );
  const project = await res.json();
  return {
    props: {
      project,
    },
  };
};
