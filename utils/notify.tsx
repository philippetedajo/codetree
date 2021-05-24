import { toast } from "react-toastify";
import { responseType } from "../_types/share_types";
import { RiCheckboxCircleFill } from "react-icons/ri";
import { MdError } from "react-icons/md";

export const notify = (type: responseType, message: string) => {
  let icon;

  switch (type) {
    case responseType.success:
      icon = (
        <RiCheckboxCircleFill className="mr-2" size={22} color="#34D399" />
      );
      break;
    case responseType.error:
      icon = <MdError className="mr-2" size={22} color="#EF4444" />;
      break;
  }

  toast(
    <small className="font-weight-normal text-gray-500 flex">
      {icon}
      {message}
    </small>
  );
};
