import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../styles/ChapterLectures.css";
import mlogo from "../assets/ntmlogo.jpg";

const ChapterLectures9 = () => {
  const { classId, subject, chapterIndex } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) navigate("/login");
  }, [navigate]);

  const chapterLectures = {
    Science: {
      0: [
        { name: "Lecture 1", m3u8Url: "YOUR_M3U8_LINK", notesUrl: "" },
      ],
    },
    // Add more subjects here...
  };

  return (
    <div className="chapter-lectures-container">
      <img src={mlogo} alt="Logo" className="big-logo" />
      <h2>{subject} - Chapter {parseInt(chapterIndex) + 1}</h2>
      <div className="lecture-boxes">
        {chapterLectures[subject]?.[chapterIndex]?.map((lecture, index) => (
          <Link
            key={index}
            to={`/video/9/${subject}/${chapterIndex}`}
            state={{
              chapterName: lecture.name,
              m3u8Url: lecture.m3u8Url,
              notesUrl: lecture.notesUrl,
            }}
            className="lecture-box"
          >
            {lecture.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChapterLectures9;
