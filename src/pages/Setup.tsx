import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import { setupSchema } from "../utils/schema";
import "./styles/setup.css";

export const Setup = () => {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(setupSchema),
  });

  const onSubmit = (data: any) => {
    history.push("/test", data);
  };

  return (
    <div className="setup-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>name</label>
          <input type="text" name="name" ref={register} />
          {errors.name && <div className="err"> {errors.name.message} </div>}
        </div>
        <div>
          <label>age</label>
          <input type="number" name="age" ref={register} />
          {errors.age && <div className="err"> {errors.age.message} </div>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
