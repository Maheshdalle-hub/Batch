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
  const [showModal, setShowModal] = useState(true); // Always show on load

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

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      {/* Modal */}
      {showModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
    <div className="bg-white rounded-xl shadow-xl p-6 w-[90%] max-w-md text-center">
      <h2 className="text-xl font-bold mb-3">Welcome to EduVibe!</h2>
      <p className="mb-4">Explore batches and start learning with ease. This website is aboslutely free of cost. If you don't have joined the telegram channel, join it because I will give there updates 👇👇</p>

      <a
        href="https://t.me/+PEKf79OMNfQxYjNl" // <-- Replace this with your actual channel
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition mb-3"
      >
        Join Telegram
      </a>

      <br />

      <button
        onClick={handleCloseModal}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Close
      </button>
    </div>
  </div>
)}
      {/* Top Bar */}
      <div style={{
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
        zIndex: "1000"
      }}>
        EduVibe-NT
      </div>

      {/* Content */}
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
    </>
  );
};

export default Homepage;
