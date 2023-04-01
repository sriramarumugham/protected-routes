import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Secret = ({ userInfo }) => {
  const navigate = useNavigate();
  useEffect(() => {
     checkUser();
     

  },[]);
  const checkUser=async()=>{
    let token = localStorage.getItem("testToken");
    console.log(token)

    let result= await axios.post('http://localhost:8000/use-info' , token);
    console.log(result);

  }
  const showuser = () => {
    // return <h1>{user.name}</h1>;
    console.log("user" , userInfo)
    
  };
  return <div>{showuser} somethign</div>;
};

export default Secret;
