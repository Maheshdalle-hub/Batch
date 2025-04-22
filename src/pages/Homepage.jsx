import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/global.css";
import imageUrl10 from "../assets/10img.jpg";
import imageUrl9 from "../assets/9img.png";
import imageUrl11 from "../assets/11sci.jpg";
import mlogo from "../assets/ntmlogo.jpg";

const Homepage = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showPopup, setShowPopup] = useState(true);

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

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <>
          {/* Background overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40 pointer-events-none" />

          {/* Centered Popup */}
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-sm text-center relative z-50">
              <h2 className="text-xl font-bold mb-2">Welcome to EduVibe!</h2>
              <p className="text-gray-600 mb-4">
                Explore batches and start learning with ease. This website is aboslutely free of cost. If you don't have joined the telegram channel yet, join it because I will give there updates about the lectures and live classes.👇👇
              </p>

              <a
                href="https://t.me/+PEKf79OMNfQxYjNl" // Replace with your channel link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#229ED9] text-white px-4 py-2 rounded-md mb-3 hover:bg-[#1e8dbf]"
              >
                Join Telegram
              </a>

              <br />

              <button
                onClick={handleClosePopup}
                className="bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800"
              >
                Close
              </button>
            </div>
          </div>
        </>
      )}

      {/* Top Bar */}
      <div
        style={{
          width: "100%",
          padding: "10px 0",
          backgroundColor: "#ffffff",
          borderBottom: "1px solid #ddd",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "20px",
          color: "#222",
          position: "sticky",
          top: "0",
          zIndex: "1000",
        }}
      >
        EduVibe-NT
      </div>

      {/* Main Content */}
      <div className="container">
        <img src={mlogo} alt="Logo" className="big-logo" />
        <h2 className="section-heading">Our Batches</h2>

        <div className="batch-container">
          <div className="click-box" onClick={() => handleClick(10)}>
            <img
              src={imageUrl10}
              alt="Aarambh Batch 2025-26"
              className="homepage-image"
            />
            <h1>Aarambh Batch 2025-26</h1>
          </div>

          <div className="click-box" onClick={() => handleClick(9)}>
            <img
              src={imageUrl9}
              alt="Class 9 Batch"
              className="homepage-image"
            />
            <h1>Class 9</h1>
          </div>

          <div className="click-box" onClick={() => handleClick(11)}>
            <img
              src={imageUrl11}
              alt="Class 11 Batch"
              className="homepage-image"
            />
            <h1>Class 11</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
