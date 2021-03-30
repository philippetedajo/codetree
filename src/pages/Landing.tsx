import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./styles/landing.css";

export const Landing = () => {
  const history = useHistory();

  const handleOnClick = (event: any) => {
    history.push("/playground");
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Codetree</title>
        <link rel="canonical" href="https://codetree.vercel.app/" />
      </Helmet>
      <div className="land-style bg-green-500 h-screen flex justify-center">
        <div className="absolute font-medium border-2 text-green-900 border-white w-full bg-white opacity-90 flex justify-center">
          Beta version 🌱
        </div>
        <div className="flex flex-col items-center text-gray-200 h-96 m-32">
          <h1 className="text-7xl">CodeTree</h1>
          <p className="text-2xl text-center text-gray-500 mt-5">
            Powerful tiny playground for rapid web prototyping
          </p>
          <div className="flex mt-10" onClick={handleOnClick}>
            Start prototyping
          </div>
        </div>
      </div>
    </>
  );
};
