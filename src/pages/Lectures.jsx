import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../styles/Lectures.css"; 

const Lectures = () => {
  const { subject } = useParams();
  const navigate = useNavigate();

  // ✅ Redirect if user is not logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login"); // Redirect to login
    }
  }, [navigate]);

  const lectures = {
    Notice: [
      { name: "Introduction", index:0},
],
    Science: [
      {name: "ACP", index: 19 },
      { name: "Chemical Reaction & Equations", index: 0 },
      { name: "Chapter 2", index: 1 },
    ],
    Maths: [
      {name: "DPP", index: 19 },
      { name: "Real Number", index: 0 },
      { name: "Polynomial", index: 1 },
    ],
    SST: [
      { name: "WPP", index: 19 },
      { name: "Development", index: 0 },
      { name: "Resources and Development", index: 1 },
    ],
    IT: [
      { name: "Chapter 1", index: 0 },
      { name: "Chapter 2", index: 1 },
    ],
    English: [
      { name: "A Letter to God", index: 0 },
      { name: "A Dust of Snow", index: 1},
      { name: "Grammer", index: 19 },
    ],
    Hindi: [
      { name: "Chapter 1", index: 0 },
    ],
    Sanskrit: [
      { name: "Chapter 1", index: 0 },
    ],
  };

  return (
    <div className="lectures-container">
      <img src="https://dxixtlyravvxx.cloudfront.net/540/admin_v1/sample/49501700_Next%20toppers%20Slider%202025-2.png" alt="Weekly Planner" className="tt" />
      <h2>{subject} Lectures</h2>
      <div className="lecture-boxes">
        {lectures[subject]?.map((lecture, index) => (
          <Link
            key={index}
      to={`/chapter-lectures/10/${subject}/${lecture.index}`}
            className="lecture-box"
            onClick={() => {
              // Store chapter name and index in localStorage for later use
              localStorage.setItem("chapterName", lecture.name);  // Store chapter name
            }}
          >
            {lecture.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Lectures;
