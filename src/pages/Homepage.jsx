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
      {/* Dark overlay + center popup */}
      {showPopup && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.85)",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#1e1e1e",
              padding: "24px",
              borderRadius: "10px",
              width: "90%",
              maxWidth: "400px",
              textAlign: "center",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 1001,
              color: "#fff",
              boxShadow: "0 0 20px rgba(255,255,255,0.1)",
            }}
          >
            <h2 style={{ fontWeight: "bold", marginBottom: "12px" }}>
              Welcome to EduVibe!
            </h2>
            <p style={{ marginBottom: "16px", color: "#ccc" }}>
              Explore batches and start learning with ease. This website is aboslutely free of cost. If you don't have joined the telegram channel, join it because I will give there updates 👇👇
            </p>
            <a
              href="https://t.me/eduvibe_all_classes"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: "#229ED9",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "6px",
                textDecoration: "none",
                marginBottom: "10px",
              }}
            >
              Join Telegram
            </a>
            <br />
            <button
              onClick={handleClosePopup}
              style={{
                backgroundColor: "#333",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Dark Header */}
      <div
        style={{
          width: "100%",
          padding: "10px 0",
          backgroundColor: "#111",
          borderBottom: "1px solid #444",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "20px",
          color: "#eee",
          position: "sticky",
          top: "0",
          zIndex: "10",
        }}
      >
        EduVibe-NT
      </div>

      {/* Main content in dark mode */}
      <div className="container" style={{ backgroundColor: "#121212", minHeight: "100vh", paddingBottom: "40px" }}>
        <img src={mlogo} alt="Logo" className="big-logo" />
        <h2 className="section-heading" style={{ color: "#fff" }}>Our Batches</h2>

        <div className="batch-container">
          <div className="click-box" onClick={() => handleClick(10)}>
            <img
              src={imageUrl10}
              alt="Aarambh Batch 2025-26"
              className="homepage-image"
            />
            <h1 style={{ color: "#fff" }}>Aarambh Batch 2025-26</h1>
          </div>

          <div className="click-box" onClick={() => handleClick(9)}>
            <img src={imageUrl9} alt="Class 9 Batch" className="homepage-image" />
            <h1 style={{ color: "#fff" }}>Class 9</h1>
          </div>

          <div className="click-box" onClick={() => handleClick(11)}>
            <img src={imageUrl11} alt="Class 11 Batch" className="homepage-image" />
            <h1 style={{ color: "#fff" }}>Class 11</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
