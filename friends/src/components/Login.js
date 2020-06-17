import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import Loader from "react-loader-spinner";

const initialState = {
  username: "",
  password: "",
};

const Login = (props) => {
  const [user, setUser] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axiosWithAuth()
      .post("/api/login", user)
      .then((res) => {
        // console.log(res)
        window.localStorage.setItem("token", res.data.payload);
        props.history.push("/protected");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          value={user.username}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
        {isLoading && (
          <Loader type="Rings" color="purple" height={80} width={80} />
        )}
        <button>Log in</button>
      </form>
    </div>
  );
};

export default Login;
