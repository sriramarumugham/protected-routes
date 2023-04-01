import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUser, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const { data } = await axios.post("http://localhost:8000/login", {
      email,
      password,
    });
    if (data) {
      localStorage.setItem("testToken", data.token);
      setUser(data);
      console.log(user);

      navigate('/home');
    }
  };
  //  localStorage.setItem("userInfo", JSON.stringify());
  return (
    <div className="App">
      <div>
        <h1>Login form</h1>
        <form>
          <label>Email</label>

          <input
            placeholder="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label>Password</label>

          <input
            placeholder="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <button type="submit" onClick={(e) => handleRegister(e)}>
            register
          </button>
        </form>
      </div>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
