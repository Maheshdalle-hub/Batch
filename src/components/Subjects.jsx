// src/components/Subjects.jsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import classData from "../data/classData";

const Subjects = () => {
  const { classId } = useParams();
  const subjects = classData[classId]?.subjects || [];

  return (
    <div>
      <h2>Class {classId} Subjects</h2>
      {subjects.map((subject, index) => (
        <Link key={index} to={`/class/${classId}/${subject}`}>
          {subject}
        </Link>
      ))}
    </div>
  );
};

export default Subjects;
