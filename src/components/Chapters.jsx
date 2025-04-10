// src/components/Chapters.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import classData from "../data/classData";

const Chapters = () => {
  const { classId, subject } = useParams();
  const chapters = classData[classId]?.chapters[subject] || [];

  return (
    <div>
      <h2>{subject} Chapters</h2>
      {chapters.map((chapter, index) => (
        <Link key={index} to={`/class/${classId}/${subject}/${index}`}>
          {chapter}
        </Link>
      ))}
    </div>
  );
};

export default Chapters;
