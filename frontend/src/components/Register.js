
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate=useNavigate('/')
  
    const handleRegister = async (e) => {
      e.preventDefault();
      const { data } = await axios.post("http://localhost:8000/register", {
        name,
        email,
        password,
      });
      if (data) {
        localStorage.setItem("testToken", data.token);
        console.log(data);
        navigate('/')
      }
    };
    //  localStorage.setItem("userInfo", JSON.stringify());
    return (
      <div className="App">
        <div>
          <h1>Register form</h1>
          <form>
            <label>Name</label>
            <input
              placeholder="name"
              name="name "
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
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
      </div>
    );
}

export default Register