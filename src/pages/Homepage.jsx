import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import imageUrl from "./IMG_20250227_100103_636.jpg";
import mlogo from "../assets/ntmlogo.jpg";

const Homepage = () => {
  const navigate = useNavigate();

  const handleClick = (path) => {
    sessionStorage.setItem("redirectAfterLogin", path);
    navigate("/login");
  };

  return (
    <div className="container">
      <img src={mlogo} alt="Logo" className="big-logo" />

      <div className="click-box" onClick={() => handleClick("/subject10")}>
        <img src={imageUrl} alt="Aarambh Batch 2025-26" className="homepage-image" />
        <h1>Aarambh Batch 2025-26</h1>
      </div>

      <div className="click-box" onClick={() => handleClick("/subject9")}>
        <h1>Class 9</h1>
      </div>

      <div className="click-box" onClick={() => handleClick("/subject11")}>
        <h1>Class 11</h1>
      </div>
    </div>
  );
};

export default Homepage;
