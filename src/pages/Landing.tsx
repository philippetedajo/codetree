import { useHistory } from "react-router-dom";
import { Icon } from "@iconify/react";
import javascriptIcon from "@iconify-icons/logos/javascript";
import reactIcon from "@iconify-icons/logos/react";
import "./styles/landing.css";

export const Landing = () => {
  const history = useHistory();

  const handleOnClick = (event: any) => {
    history.push("/playground", event.currentTarget.name);
  };

  return (
    <div className="land-style bg-green-500 h-screen flex justify-center">
      <div className="flex flex-col items-center text-gray-200 h-96 m-32">
        <h1 className="text-7xl">CodeTree</h1>
        <p className="text-2xl text-center mt-5">
          Powerful little playground for rapid web prototyping
        </p>
        <div className="flex mt-10">
          <button
            name="javascript"
            onClick={handleOnClick}
            className="mr-10 transform hover:scale-125 focus:outline-none transition-700 cursor-pointer duration-500"
          >
            <Icon icon={javascriptIcon} width={45} />
          </button>
          <button
            name="react"
            onClick={handleOnClick}
            className="transform hover:scale-125 focus:outline-none transition-700 cursor-pointer duration-500"
          >
            <Icon icon={reactIcon} width={50} />
          </button>
        </div>
      </div>
    </div>
  );
};
