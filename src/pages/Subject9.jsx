import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "../styles/global.css";

const Subject9 = () => {
  const navigate = useNavigate();
  const [isLive, setIsLive] = useState(false);
  const [currentSubject, setCurrentSubject] = useState(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) navigate("/login");

    const interval = setInterval(() => {
      handleLiveClass();
    }, 60000); // Check every minute

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [navigate]);

  const handleLiveClass = () => {
    const currentTime = new Date();
    const day = currentTime.getDay(); // 0 - Sunday, 1 - Monday, etc.
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();

    // Define the timetable for Class 9
    const timetable = {
      1: { // Monday
        17: "Science", // 5:00 PM - Science
        20: "SST", // 8:00 PM - SST
      },
      2: { // Tuesday
        17: "Science", // 5:00 PM - Science
        19: "Maths", // 7:00 PM - Maths
      },
      3: { // Wednesday
        17: "SST", // 5:00 PM - SST
        20: "Science", // 8:00 PM - Science
      },
      4: { // Thursday
        17: "SST", // 5:00 PM - SST
        20: "Maths", // 8:00 PM - Maths
      },
      5: { // Friday
        17: "Maths", // 5:00 PM - Maths
      },
      6: { // Saturday
        17: "Maths", // 5:00 PM - Maths
      },
    };

    // Check if there's a class scheduled at the current time
    if (timetable[day] && timetable[day][hour] && minute >= 45 && minute <= 59) {
      const subject = timetable[day][hour];
      setIsLive(true);
      setCurrentSubject(subject);
    } else {
      setIsLive(false);
      setCurrentSubject(null);
    }
  };

  const subjects = [
    { name: "Science", path: "/lectures/9/Science" },
    { name: "Maths", path: "/lectures/9/Maths" },
    { name: "SST", path: "/lectures/9/SST" },
    { name: "English", path: "/lectures/9/English" },
    { name: "Hindi", path: "/lectures/9/Hindi" },
    { name: "IT", path: "/lectures/9/IT" },
    { name: "Sanskrit", path: "/lectures/9/Sanskrit" },
  ];

  // Map the subject to the corresponding live m3u8 link
  const liveLinks = {
    Science: "https://d2xqn12y4qo6nr.cloudfront.net/out/v1/4dacc3cc62ed4047b817b91580e11584/index.m3u8",
    SST: "https://d1kw75zcv4u98c.cloudfront.net/out/v1/c32c373c9874430cb6039408745a1a5e/index.m3u8",
    Maths: "https://d1kw75zcv4u98c.cloudfront.net/out/v1/287810d967cc428e9bd992002e55b72c/index.m3u8",
  };

  return (
    <div className="subjects-container">
      <img
        src="https://dxixtlyravvxx.cloudfront.net/540/admin_v1/sample/50028900_07%20%3B00%20PM.png"
        alt="Logo"
        className="tt"
      />
      <h2>Select Subject - Class 9</h2>
      <div className="live-class-container">
        {isLive && currentSubject && (
          <Link
            to={`/video/9/live`}
            state={{
              chapterName: "Live Class",
              m3u8Url: liveLinks[currentSubject],
            }}
            className="subject-box live-class-section"
          >
            🔴 Live Class (Click to Join)
          </Link>
        )}
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

export default Subject9;
