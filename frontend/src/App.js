import "./App.css";
import axios from "axios";
import { useState } from "react";
import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Home from "./components/Home";
import Secret from "./components/Secret";

function App() {
  const [user, setUser] = useState({});

  return (
    <Routes>
      <Route path="/" element={<Login setUser={setUser} user={user} />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/secret" element={<Secret userInfo={user} />} />
    </Routes>
  );
}

export default App;
