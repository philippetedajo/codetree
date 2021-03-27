import { useHistory } from "react-router-dom";

export const Landing = () => {
  const history = useHistory();

  const handleOnClick = (event: any) => {
    history.push("/playground", event.currentTarget.name);
  };

  return (
    <div className="bg-green-500 h-screen">
      <div>Landing Page</div>
      <button name="javascript" onClick={handleOnClick}>
        Vanilla Js
      </button>
      <button name="react" onClick={handleOnClick}>
        React
      </button>
    </div>
  );
};
