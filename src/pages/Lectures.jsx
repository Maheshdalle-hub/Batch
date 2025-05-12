import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../styles/Lectures.css";

const Lectures = () => {
  const { subject } = useParams();
  const navigate = useNavigate();
  const [selectedCourse, setSelectedCourse] = useState("A");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const lectures = {
    Notice: [
      { name: "Introduction", index: 0 },
    ],
    Science: [
      { name: "ACP", index: 19 },
      { name: "Chemical Reaction & Equations", index: 0 },
      { name: "Chapter 2", index: 1 },
    ],
    Maths: [
      { name: "DPP", index: 19 },
      { name: "Real Number", index: 0 },
      { name: "Polynomial", index: 1 },
      { name: "Pair of Linear Eq in two var", index: 2 },
    ],
    SST: [
      { name: "WPP", index: 19 },
      { name: "Development", index: 0 },
      { name: "Resources and Development", index: 1 },
      { name: "Power Sharing", index: 2 },
    ],
    IT: [
      { name: "Chapter 1", index: 0 },
      { name: "Chapter 2", index: 1 },
    ],
    English: {
      A: [
        { name: "A Letter to God", index: 0 },
        { name: "A Dust of Snow", index: 1 },
        { name: "Grammar", index: 2 },
      ],
      B: [
        { name: "Ch 1", index: 100 },
        { name: "Ch 2", index: 101 },
      ],
    },
    Hindi: {
      A: [
        { name: "Chapter 1", index: 0 },
        { name: "Chapter 2", index: 1 },
      ],
      B: [
        { name: "Chapter 3", index: 2 },
        { name: "Chapter 4", index: 3 },
      ],
    },
    Sanskrit: [
      { name: "Chapter 1", index: 0 },
    ],
  };

  const isCourseSubject = subject === "English" || subject === "Hindi";
  const chapters = isCourseSubject ? lectures[subject][selectedCourse] : lectures[subject];

  return (
    <div className="lectures-container">
      <img
        src="https://dxixtlyravvxx.cloudfront.net/540/admin_v1/sample/49501700_Next%20toppers%20Slider%202025-2.png"
        alt="Weekly Planner"
        className="tt"
      />
      <h2>{subject} Lectures</h2>

      {isCourseSubject && (
        <div className="course-tabs">
          <button
            className={`course-tab ${selectedCourse === "A" ? "active" : ""}`}
            onClick={() => setSelectedCourse("A")}
          >
            Lang & Lit
          </button>
          <button
            className={`course-tab ${selectedCourse === "B" ? "active" : ""}`}
            onClick={() => setSelectedCourse("B")}
          >
            Communicative
          </button>
        </div>
      )}

      <div className="lecture-boxes">
        {chapters?.map((lecture, index) => (
          <Link
            key={index}
            to={`/chapter-lectures/10/${subject}/${lecture.index}`}
            state={{ course: isCourseSubject ? selectedCourse : null }}
            className="lecture-box"
            onClick={() => {
              localStorage.setItem("chapterName", lecture.name);
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
