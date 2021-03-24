import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <div>
      Landing page
      <Link to="/setup">start using playground</Link>
    </div>
  );
};
