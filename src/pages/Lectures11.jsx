import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../styles/Lectures.css";

const Lectures11 = () => {
  const { subject } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const lectures = {
    Physics: [
      {name: "PCP", index: 19 },
      { name: "Units and Measurement", index: 0 },
      { name: "Basic Maths", index: 1 },
      { name: "Motion in a straight line", index: 2},
    ],
    Chemistry: [
      { name: "Basic concept of Chemistry", index: 0 },
      { name: "Structure of an Atom", index: 1 },
    ],
    Maths: [
      { name: "DPP 01", index: 19 },
      { name: "Sets", index: 0 },
      { name: "Complex no and quad eq", index: 1 },
      { name: "Relations and Functions", index: 2},
    ],
    Biology: [
      { name: "Living World", index: 0 },
      { name: "Biological Classisfication", index: 1 },
      { name: "Living World", index: 2},
    ],
    English: [
      { name: "Grammer", index: 19 },
      { name: "Chapter 1", index: 0 },
    ],
  };

  return (
    <div className="lectures-container">
      <img src="https://dxixtlyravvxx.cloudfront.net/540/admin_v1/sample/12287030_WhatsApp%20Image%202025-04-26%20at%2016.12.39.jpeg" alt="Logo" className="big-logo" />
      <h2>{subject} Lectures</h2>
      <div className="lecture-boxes">
        {lectures[subject]?.map((lecture, index) => (
          <Link
            key={index}
     to={`/chapter-lectures/11/${subject}/${lecture.index}`}
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

export default Lectures11;
