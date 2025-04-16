import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../styles/ChapterLectures.css";
import mlogo from "../assets/ntmlogo.jpg";

const ChapterLectures11 = () => {
  const { classId, subject, chapterIndex } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) navigate("/login");
  }, [navigate]);

  const chapterLectures = {
    Biology: {
      0: [
        {
          name: "Lecture 1",
          youtubeUrl: "https://www.youtube.com/live/RF6xfHVo9xc", // example
          notesUrl: "",
        },
        {
          name: "Lecture 2",
          m3u8Url: "YOUR_M3U8_LINK_2",
          notesUrl: "",
        },
      ],
    },
    Maths: {
      0: [
        {
          name: "Lecture 1",
          youtubeUrl: "https://www.youtube.com/live/vcqyIgZfCog"
        },
      ],
    },

  };

  const handleLectureClick = (lecture) => {
    if (lecture.youtubeUrl) {
      window.location.href = lecture.youtubeUrl;
    }
  };

  return (
    <div className="chapter-lectures-container">
      <img src={mlogo} alt="Logo" className="big-logo" />
      <h2>{subject} - Chapter {parseInt(chapterIndex) + 1}</h2>
      <div className="lecture-boxes">
        {chapterLectures[subject]?.[chapterIndex]?.map((lecture, index) => (
          lecture.youtubeUrl ? (
            <div
              key={index}
              className="lecture-box"
              onClick={() => handleLectureClick(lecture)}
              style={{ cursor: "pointer" }}
            >
              {lecture.name} (YouTube)
            </div>
          ) : (
            <Link
              key={index}
              to={`/video/11/${subject}/${chapterIndex}`}
              state={{
                chapterName: lecture.name,
                m3u8Url: lecture.m3u8Url,
                notesUrl: lecture.notesUrl,
              }}
              className="lecture-box"
            >
              {lecture.name}
            </Link>
          )
        ))}
      </div>
    </div>
  );
};

export default ChapterLectures11;
