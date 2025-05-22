import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/global.css";
import tt from "../assets/tt.png";

const Subject10 = () => {
  const navigate = useNavigate();
  const [m3u8Url, setM3u8Url] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) navigate("/login");
  }, [navigate]);

  const schedule = {
    Monday: { "17:00": "SST", "20:00": "Maths" },
    Tuesday: { "17:00": "SST", "20:00": "Maths" },
    Wednesday: { "17:00": "Science", "20:00": "SST" },
    Thursday: { "17:00": "Science", "20:00": "Maths" },
    Friday: { "17:00": "Science", "20:00": "Maths" },
    Saturday: { "17:00": "Science", "20:00": "Maths" },
    Sunday: { "20:00": "Maths" },
  };

  const subjectLinks = {
    SST: "https://d1kw75zcv4u98c.cloudfront.net/out/v1/c32c373c9874430cb6039408745a1a5e/index.m3u8",
    Maths: "https://d1kw75zcv4u98c.cloudfront.net/out/v1/287810d967cc428e9bd992002e55b72c/index.m3u8",
    Science: "https://d2xqn12y4qo6nr.cloudfront.net/out/v1/4dacc3cc62ed4047b817b91580e11584/index.m3u8",
  };

  useEffect(() => {
    const updateLiveClass = () => {
      const now = new Date();
      const day = now.toLocaleDateString("en-US", { weekday: "long" });
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      const slots = [
        { time: "17:00", start: 17 * 60, subject: schedule[day]?.["17:00"] },
        { time: "20:00", start: 20 * 60, subject: schedule[day]?.["20:00"] },
      ];

      for (let slot of slots) {
        if (slot.subject && currentMinutes >= slot.start - 15 && currentMinutes < slot.start + 120) {
          setM3u8Url(subjectLinks[slot.subject] || "");
          return;
        }
      }

      setM3u8Url("");
    };

    updateLiveClass();
    const interval = setInterval(updateLiveClass, 60000);
    return () => clearInterval(interval);
  }, []);

  const subjects = [
    { name: "Notice", path: "/lectures/10/Notice" },
    { name: "Science", path: "/lectures/10/Science" },
    { name: "Maths", path: "/lectures/10/Maths" },
    { name: "SST", path: "/lectures/10/SST" },
    { name: "English", path: "/lectures/10/English" },
    { name: "Hindi", path: "/lectures/10/Hindi" },
    { name: "IT", path: "/lectures/10/IT" },
    { name: "Sanskrit", path: "/lectures/10/Sanskrit" },
  ];

  return (
    <div className="subjects-container">
      <img src={tt} alt="Logo" className="tt" />
      <h2>Select Subject - Class 10</h2>

      <div className="live-class-container">
        <Link
          to={`/video/10/live`}
          state={{ chapterName: "Live Class", m3u8Url }}
          className="subject-box live-class-section"
        >
          🔴 Live Class (Click to Join)
        </Link>
      </div>

      <div className="subject-boxes">
        {subjects.map((subject, index) => (
          <Link key={index} to={subject.path} className="subject-box">
            {subject.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Subject10;
