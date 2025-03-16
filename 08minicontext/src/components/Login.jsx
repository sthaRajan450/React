import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../context/UserContext";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    setUser({ username, password });
    
  };

  return (
    <div>
      <h1>Login Form</h1>
      <input
        type="text"
        placeholder="username"
        {...register("username", { required: true })}
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        {...register("password", { required: true })}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit(onSubmit)}>Submit</button>
    </div>
  );
};

export default Login;
