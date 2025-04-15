import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/global.css";
import tt from "../assets/tt.png";

const Subject10 = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) navigate("/login");
  }, [navigate]);

  const subjects = [
  { name: "Notice", path: "/lectures/10/Notice" },
  { name: "Science", path: "/lectures/10/Science" },
  { name: "Maths", path: "/lectures/10/Maths" },
  { name: "SST", path: "/lectures/10/SST" },
  { name: "English", path: "/lectures/10/English" },
  { name: "Hindi", path: "/lectures/10/Hindi" },
  { name: "IT", path: "/lectures/10/IT" },
  { name: "Sanskrit", path: "/lectures/10/Sanskrit" },
];

  return (
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
    <div className="subjects-container">
      <img src={tt} alt="Logo" className="tt" />
      <h2>Select Subject - Class 10</h2>
      <div className="live-class-container">
        <Link
          to={`/video/10/live`}
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

export default Subject10;
