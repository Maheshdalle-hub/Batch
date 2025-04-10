import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import imageUrl from "./IMG_20250227_100103_636.jpg";
import mlogo from "../assets/ntmlogo.jpg";

const Homepage = () => {
  const navigate = useNavigate();

  const handleClick = (className) => {
    navigate(`/login?class=${className}`);
  };

  return (
    <div className="container">
      <img src={mlogo} alt="Logo" className="big-logo" />

      <div className="batch-grid">
        <div className="click-box" onClick={() => handleClick("class9")}>
          <img src={imageUrl} alt="Class 9 Batch" className="homepage-image" />
          <h1>Aarambh batch Class 9</h1>
        </div>

        <div className="click-box" onClick={() => handleClick("class10")}>
          <img src={imageUrl} alt="Class 10 Batch" className="homepage-image" />
          <h1>Aarambh Batch Class 10</h1>
        </div>

        <div className="click-box" onClick={() => handleClick("class11")}>
          <img src={imageUrl} alt="Class 11 Batch" className="homepage-image" />
          <h1>Prarambh Batch Class 11 </h1>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
