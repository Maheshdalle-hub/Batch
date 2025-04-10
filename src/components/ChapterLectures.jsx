// src/components/ChapterLectures.jsx
import React from "react";
import { useParams } from "react-router-dom";
import classData from "../data/classData";

const ChapterLectures = () => {
  const { classId, subject, chapterIndex } = useParams();
  const lectures = classData[classId]?.lectures[subject]?.[chapterIndex] || [];

  return (
    <div>
      <h2>Lectures</h2>
      {lectures.map((lecture, index) => (
        <div key={index}>
          <p>{lecture.name}</p>
          {/* Video player component can be integrated here */}
        </div>
      ))}
    </div>
  );
};

export default ChapterLectures;