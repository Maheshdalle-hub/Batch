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
    { name: "Maths", path: "/lectures/11/Maths" },
    { name: "Physics", path: "/lectures/11/Physics" },
    { name: "Chemistry", path: "/lectures/11/Chemistry" },
    { name: "Biology", path: "/lectures/11/Biology" },
    { name: "English", path: "/lectures/11/English" },
    { name: "Hindi", path: "/lectures/11/Hindi" },
  ];

  return (
    <div className="subjects-container">
      <img src="https://dxixtlyravvxx.cloudfront.net/540/admin_v1/sample/48308950_WhatsApp%20Image%202025-04-08%20at%2017.44.46_5cf1db33.jpg" alt="Logo" className="tt" />
      <h2>Select Subject - Class 11</h2>
      <div className="live-class-container">
        <Link
          to={`/video/11/live`}
          state={{ chapterName: "Live Class", m3u8Url: "https://d2xqn12y4qo6nr.cloudfront.net/out/v1/4dacc3cc62ed4047b817b91580e11584/index.m3u8" }}
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
