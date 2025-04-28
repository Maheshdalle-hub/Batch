import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/global.css";

const Subject11 = () => {
  const navigate = useNavigate();
  const [m3u8Url, setM3u8Url] = useState("");
  const [bioM3u8Url, setBioM3u8Url] = useState("");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) navigate("/login");
  }, [navigate]);

  const schedule = {
    Monday: { "17:00": "Maths", "18:30": "Chemistry", "20:00": "Biology" },
    Tuesday: { "17:00": "Maths", "18:30": "Biology", "20:00": "Chemistry" },
    Wednesday: { "17:00": "Chemistry", "20:00": "Maths" },
    Thursday: { "17:00": "Biology", "20:00": "Physics" },
    Friday: { "20:00": "Physics" },
    Saturday: { "20:00": "Physics" },
  };

  const subjectLinks = {
    Physics: "https://d2xqn12y4qo6nr.cloudfront.net/out/v1/4dacc3cc62ed4047b817b91580e11584/index.m3u8",
    Chemistry: "https://d3rho91jos7925.cloudfront.net/out/v1/04e48ce150b5494fa5bca97d1bea5bb0/index.m3u8",
    Maths: "https://d1kw75zcv4u98c.cloudfront.net/out/v1/5df5be72d17649f79577314291c6d2fc/index.m3u8",
    Biology: "https://d1kw75zcv4u98c.cloudfront.net/out/v1/c843fae2d8ac47ffbe15b3988abf9adb/index.m3u8",
  };

  useEffect(() => {
    const updateLiveClass = () => {
      const now = new Date();
      const day = now.toLocaleDateString("en-US", { weekday: "long" });
      const currentMinutes = now.getHours() * 60 + now.getMinutes();

      const slots = [
        { time: "17:00", start: 17 * 60, subject: schedule[day]?.["17:00"] },
        { time: "18:30", start: 18 * 60 + 30, subject: schedule[day]?.["18:30"] },
        { time: "20:00", start: 20 * 60, subject: schedule[day]?.["20:00"] },
      ];

      let normalClassUrl = "";
      let biologyClassUrl = "";

      for (let slot of slots) {
        if (slot.subject && currentMinutes >= slot.start - 15 && currentMinutes < slot.start + 120) {
          if (slot.subject === "Biology") {
            biologyClassUrl = subjectLinks["Biology"];
          } else {
            normalClassUrl = subjectLinks[slot.subject] || "";
          }
        }
      }

      setM3u8Url(normalClassUrl);
      setBioM3u8Url(biologyClassUrl);
    };

    updateLiveClass();
    const interval = setInterval(updateLiveClass, 60000);
    return () => clearInterval(interval);
  }, []);

  const subjects = [
    { name: "Physics", path: "/lectures/11/Physics" },
    { name: "Chemistry", path: "/lectures/11/Chemistry" },
    { name: "Maths", path: "/lectures/11/Maths" },
    { name: "Biology", path: "/lectures/11/Biology" },
    { name: "English", path: "/lectures/11/English" },
    { name: "IT", path: "/lectures/11/IT" },
  ];

  return (
    <div className="subjects-container">
      <img
        src="https://dxixtlyravvxx.cloudfront.net/540/admin_v1/sample/6874310_IMG-20250420-WA0012.jpg"
        alt="Logo"
        className="tt"
      />
      <h2>Select Subject - Class 11</h2>

      <div className="live-class-container">
        <Link
          to={`/video/11/live`}
          state={{ chapterName: "Live Class", m3u8Url }}
          className="subject-box live-class-section"
        >
          🔴 Live Class (Click to Join)
        </Link>

        <Link
          to={`/video/11/bio/live`}
          state={{ chapterName: "Biology Live Class", m3u8Url: bioM3u8Url }}
          className="subject-box live-class-section"
        >
          🔴 Biology Live Class (Click to Join)
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

export default Subject11;
