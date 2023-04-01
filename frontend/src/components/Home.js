import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("testToken");
    if (!token) {
      navigate("/");
    }
  });
  const handleLogout = () => {
    localStorage.removeItem("testToken");
    navigate("/");
  };
  return (
    <div>
      <h1>Home</h1>
      <Link onClick={handleLogout}>Logout</Link>
      <br />
      <Link to={"/secret"}> view profile</Link>
    </div>
  );
};

export default Home;
