import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/global.css";
import tt from "../assets/tt.png";

const Subject11 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) navigate("/login");
  }, [navigate]);

  const subjects = [
    { name: "Maths", path: "/lecture/11/Maths" },
    { name: "Physics", path: "/lecture11/Physics" },
    { name: "Chemistry", path: "/lecture/11/Chemistry" },
    { name: "Biology", path: "/lecture/11/Biology" },
    { name: "English", path: "/lecture/11/English" },
    { name: "IP", path: "/lecture/11/IP" },
  ];

  return (
    <div className="subjects-container">
      <img src={tt} alt="Logo" className="tt" />
      <h2>Select Subject - Class 11</h2>
      <div className="live-class-container">
        <Link
          to={`/video/live`}
          state={{ chapterName: "Live Class", m3u8Url: "m3u8_link_here" }}
          className="subject-box live-class-section"
        >
          🔴 Live Class (Click to Join)
        </Link>
      </div>
      <div className="subject-boxes">
        {subjects.map((subject, index) => (
          <Link key={index} to={subject.path} className="subject-box">
            {subject.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Subject11;
