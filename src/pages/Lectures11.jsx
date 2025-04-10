import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../styles/Lectures.css";

const Lectures11 = () => {
  const { subject } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn11") === "true";
    if (!isLoggedIn) {
      navigate("/login11");
    }
  }, [navigate]);

  const lectures = {
    Physics: [
      { name: "Chapter 1", index: 0 },
      { name: "Chapter 2", index: 1 },
    ],
    Chemistry: [
      { name: "Chapter 1", index: 0 },
      { name: "Chapter 2", index: 1 },
    ],
    Maths: [
      { name: "Chapter 1", index: 0 },
      { name: "Chapter 2", index: 1 },
    ],
    Biology: [{ name: "Chapter 1", index: 0 }],
    English: [{ name: "Chapter 1", index: 0 }],
  };

  return (
    <div className="lectures-container">
      <h2>{subject} Lectures</h2>
      <div className="lecture-boxes">
        {lectures[subject]?.map((lecture, index) => (
          <Link
            key={index}
            to={`/chapter11/${subject}/${lecture.index}`}
            className="lecture-box"
          >
            {lecture.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Lectures11;
