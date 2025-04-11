import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import imageUrl from "./IMG_20250227_100103_636.jpg";
import mlogo from "../assets/ntmlogo.jpg";

const Homepage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleClick = (classNumber) => {
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    navigate(`/subjects/${classNumber}`);
  };

  return (
    <div className="container">
      <img src={mlogo} alt="Logo" className="big-logo" />

      <div className="click-box" onClick={() => handleClick(10)}>
        <img src={imageUrl} alt="Aarambh Batch 2025-26" className="homepage-image" />
        <h1>Aarambh Batch 2025-26</h1>
      </div>

      <div className="click-box" onClick={() => handleClick(9)}>
        <h1>Class 9</h1>
      </div>

      <div className="click-box" onClick={() => handleClick(11)}>
        <h1>Class 11</h1>
      </div>
    </div>
  );
};

export default Homepage;