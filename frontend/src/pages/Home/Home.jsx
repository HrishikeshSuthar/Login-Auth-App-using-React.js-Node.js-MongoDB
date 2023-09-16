import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  });

  return (
    <>
      <div className="container mt-5 d-flex justify-content-center">
        <div className=""></div>
        <h1>Welcome,{user && user.name}</h1>
        <div className=""></div>
      </div>
    </>
  );
}

export default Home;
