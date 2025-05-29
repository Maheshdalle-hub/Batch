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
      { name: "Light", index: 1 },
      { name: "Life Processes", index: 2},
    ],
    Maths: [
      { name: "DPP", index: 19 },
      { name: "Real Number", index: 0 },
      { name: "Polynomial", index: 1 },
      { name: "Pair of Linear Eq in two var", index: 2 },
      { name: "Trigonometry", index: 3 },
    ],
    SST: [
      { name: "WPP", index: 19 },
      { name: "Development", index: 0 },
      { name: "Resources and Development", index: 1 },
      { name: "Power Sharing", index: 2 },
      { name: "Rise of Nationalism in Europe", index: 3},
    ],
    IT: [
      { name: "Notice", index: 0 },
      { name: "Communication Skills II", index: 1 },
    ],
    English: {
      B: [
        { name: "A Letter to God", index: 0 },
        { name: "A Dust of Snow", index: 1 },
        { name: "Fire & Ice", index: 2 },
        { name: "A Triumph of Surgery", index: 3 },
        { name: "Grammar", index: 19 },
      ],
      A: [
        { name: "Two Gentlemen of Verona", index: 100 },
        { name: "Frog and Nightingale", index: 101 },
        { name: "Mr Packletide's Tiger", index: 102 },
        { name: "Not Marble nor Glied Monuments", index: 103},
      ],
    },
    Hindi: {
      A: [
        { name: "Chapter 1", index: 0 },
        { name: "राम - लक्ष्मण - परशुराम संवाद", index: 1 },
        { name: "कृतिका, माता का अँचल शिवपूजन सहाय", index: 2 },
      ],
      B: [
        { name: "Kabir sakhi", index: 100 },
        { name: "मीरा बाई पद", index: 101 },
        { name: "मैथिलीशरण गुप्त मनुष्यता", index: 102 },
        { name: "प्रेमचंद (बड़े भाई साहब)", index: 103 },
        { name: "सुमित्रानंदन पंत पर्वत प्रदेश में पावस", index: 104 },
      ],
    },
    Sanskrit: [
      { name: "शुचिपर्यावरणम्", index: 0 },
    ],
  };

  const isCourseSubject = subject === "English" || subject === "Hindi" ;
  const chapters = isCourseSubject ? lectures[subject][selectedCourse] : lectures[subject];

  return (
    <div className="lectures-container">
      <img
        src="https://dxixtlyravvxx.cloudfront.net/540/admin_v1/sample/55335180_10th%20weekly.jpeg"
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
            Course A
          </button>
          <button
            className={`course-tab ${selectedCourse === "B" ? "active" : ""}`}
            onClick={() => setSelectedCourse("B")}
          >
            Course B
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
