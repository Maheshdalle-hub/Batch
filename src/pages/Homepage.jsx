import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import imageUrl10 from "../assets/10img.jpg"; // 10th class image
import imageUrl9 from "../assets/9img.png"; // Class 9 image
import imageUrl11 from "../assets/11sci.jpg"; // Class 11 image
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
  <h2 className="section-heading">Our Batches</h2>

  <div className="batch-container">
    <div className="click-box" onClick={() => handleClick(10)}>
      <img src={imageUrl10} alt="Aarambh Batch 2025-26" className="homepage-image" />
      <h1>Aarambh Batch 2025-26</h1>
    </div>

    <div className="click-box" onClick={() => handleClick(9)}>
      <img src={imageUrl9} alt="Class 9 Batch" className="homepage-image" />
      <h1>Class 9</h1>
    </div>

    <div className="click-box" onClick={() => handleClick(11)}>
      <img src={imageUrl11} alt="Class 11 Batch" className="homepage-image" />
      <h1>Class 11</h1>
    </div>
  </div>
</div>
  );
};

export default Homepage;
