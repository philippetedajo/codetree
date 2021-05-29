import Link from "next/link";
import Router from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  UserCircleIcon,
  ShieldCheckIcon,
  MailIcon,
  ChevronLeftIcon,
  CameraIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { useUser } from "../../hooks";
import { fetcher, profilePictureSchema } from "../../utils";

export const SettingsLayout = ({ children }) => {
  const { user } = useUser();

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(profilePictureSchema),
  });

  const onSubmitPicture = async (data) => {
    console.log(data);
  };

  return (
    <div className="pt-4 sm:pt-8 px-3 lg:px-24 flex flex-col sm:flex-row">
      <nav className="sm:w-72 sm:pt-5">
        <ChevronLeftIcon
          onClick={() => Router.push("/profile")}
          className="w-5 h-5 text-3xl mb-5 sm:mb-4 cursor-pointer"
        />

        <div className="flex flex-row sm:pl-10 sm:flex-col justify-around sm:justify-start ">
          <form
            onSubmit={handleSubmit(onSubmitPicture)}
            style={{ paddingBottom: "1px" }}
            className="w-40 h-40 relative inline-block mb-12 sm:mb-20 rounded-full mr-5 shadow-lg"
          >
            <img
              className="rounded-full w-40 h-40 object-cover"
              src={user?.profile?.data?.profile}
              alt="Profile image"
            />

            <div className="file-upload">
              <input ref={register} type="file" name="profile_picture" />
              <CameraIcon className="w-5 h-5 cursor-pointer" />
            </div>

            <small className="w-44 text-red-500 absolute left-1 -bottom-6">
              {errors.profile_picture?.message}
            </small>
            <button className="bg-green-500 flex justify-center items-center px-3 text-white py-1 absolute left-1 -bottom-16">
              <UploadIcon className="w-4 h-4 mr-2" /> Upload photo
            </button>

            {/* ====================================================*/}
          </form>

          <Link href="/settings">
            <a className="flex items-center sm:mb-4">
              <UserCircleIcon className="w-7 h-7 mr-2" />
              <div className="hidden sm:block">Profile</div>
            </a>
          </Link>
          <Link href="/settings/email">
            <a className="flex items-center sm:mb-4">
              <MailIcon className="w-7 h-7 mr-2" />
              <div className="hidden sm:block">Email</div>
            </a>
          </Link>
          <Link href="/settings/password">
            <a className="flex items-center sm:mb-4">
              <ShieldCheckIcon className="w-7 h-7 mr-2" />
              <div className="hidden sm:block">Password</div>
            </a>
          </Link>
        </div>
      </nav>
      <div className="sm:w-full flex justify-center sm:justify-start sm:pl-10">
        {children}
      </div>
    </div>
  );
};
