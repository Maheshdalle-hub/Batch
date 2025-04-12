import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/global.css";
import tt from "../assets/tt.png";

const Subject9 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) navigate("/login");
  }, [navigate]);

  const subjects = [
    { name: "Science", path: "/lectures/9/Science" },
    { name: "Maths", path: "/lectures/9/Maths" },
    { name: "SST", path: "/lectures/9/SST" },
    { name: "English", path: "/lectures/9/English" },
    { name: "Hindi", path: "/lectures/9/Hindi" },
    { name: "IT", path: "/lectures/9/IT" },
    { name: "Sanskrit", path: "/lectures/9/Sanskrit" },
  ];

  return (
    <div className="subjects-container">
      <img src={tt} alt="Logo" className="tt" />
      <h2>Select Subject - Class 9</h2>
      <div className="live-class-container">
        <Link
          to={`/video/9/live`}
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

export default Subject9;
