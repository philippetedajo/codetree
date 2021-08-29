import React from "react";
import { ProjectProps } from "../../_types/uiTypes";

type Props = {
  project: ProjectProps;
};

const Slug = ({ project }: Props) => {
  return <div className="p-10">Single project</div>;
};

export default Slug;
