import React, { useEffect, useRef, useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-contrib-quality-levels";
import "videojs-hls-quality-selector";
import { useLocation, useNavigate } from "react-router-dom";

const VideoPlayer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const lastTap = useRef(0);
  const [studiedMinutes, setStudiedMinutes] = useState(0);
  const [currentQuality, setCurrentQuality] = useState(null);

  const { chapterName, lectureName, m3u8Url, notesUrl } = location.state || {};
  const isLive = location.pathname.includes("/video/live");
  const defaultLiveUrl = "m3u8_link_here";

  const isMaster = m3u8Url && m3u8Url.includes("index.m3u8");
  const nonMasterBase = m3u8Url?.replace("index.m3u8", "index_");

  const qualities = [
    { label: "240p", value: "1" },
    { label: "360p", value: "2" },
    { label: "480p", value: "3" },
    { label: "720p", value: "4" },
  ];

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) navigate("/login");
  }, [navigate]);

  useEffect(() => {
    const today = new Date().toLocaleDateString();
    const lastDate = localStorage.getItem("lastStudyDate");
    if (lastDate !== today) {
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith("studyTime_")) localStorage.removeItem(key);
      });
      localStorage.setItem("lastStudyDate", today);
    }

    const stored = parseFloat(localStorage.getItem(`studyTime_${today}`)) || 0;
    setStudiedMinutes(Math.floor(stored / 60));
  }, []);

  useEffect(() => {
    if (!videoRef.current) return;

    const source =
      isLive
        ? defaultLiveUrl
        : isMaster || !currentQuality
        ? m3u8Url || defaultLiveUrl
        : `${nonMasterBase}${currentQuality}.m3u8`;

    if (playerRef.current) {
      playerRef.current.dispose();
    }

    playerRef.current = videojs(videoRef.current, {
      controls: true,
      autoplay: false,
      fluid: true,
      playbackRates: [0.5, 1, 1.25, 1.5, 1.75, 2],
      html5: {
        vhs: {
          overrideNative: true,
          enableLowInitialPlaylist: true,
        },
      },
    });

    playerRef.current.src({ src: source, type: "application/x-mpegURL" });

    if (isMaster) {
      playerRef.current.ready(() => {
        playerRef.current.qualityLevels();
        playerRef.current.hlsQualitySelector({
          displayCurrentQuality: true,
        });
      });
    }

    // Time Tracking
    let sessionStart = null;
    let studyTimer = null;

    const updateStudyTime = () => {
      const now = Date.now();
      const elapsed = sessionStart ? (now - sessionStart) / 1000 : 0;
      sessionStart = now;
      const today = new Date().toLocaleDateString();
      const key = `studyTime_${today}`;
      const existing = parseFloat(localStorage.getItem(key)) || 0;
      const newTotal = existing + elapsed;
      localStorage.setItem(key, newTotal.toString());
      setStudiedMinutes(Math.floor(newTotal / 60));
    };

    playerRef.current.on("play", () => {
      sessionStart = Date.now();
      clearInterval(studyTimer);
      studyTimer = setInterval(updateStudyTime, 10000);
    });

    playerRef.current.on("pause", () => {
      updateStudyTime();
      clearInterval(studyTimer);
    });

    playerRef.current.on("ended", () => {
      updateStudyTime();
      clearInterval(studyTimer);
    });

    // Time Display
    const controlBar = playerRef.current.controlBar;
    const playToggleEl = controlBar.getChild("playToggle")?.el();
    if (playToggleEl) {
      const timeDisplay = document.createElement("div");
      timeDisplay.className = "vjs-custom-time-display";
      Object.assign(timeDisplay.style, {
        position: "absolute",
        bottom: "50px",
        left: "0",
        background: "rgba(0, 0, 0, 0.7)",
        color: "#fff",
        fontSize: "13px",
        padding: "4px 8px",
        borderRadius: "4px",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        zIndex: "999",
      });
      timeDisplay.textContent = "00:00 / 00:00";

      playToggleEl.style.position = "relative";
      playToggleEl.appendChild(timeDisplay);

      playerRef.current.on("loadedmetadata", () => {
        const duration = formatTime(playerRef.current.duration());
        timeDisplay.textContent = `00:00 / ${duration}`;
      });

      playerRef.current.on("timeupdate", () => {
        const current = formatTime(playerRef.current.currentTime());
        const duration = formatTime(playerRef.current.duration());
        timeDisplay.textContent = `${current} / ${duration}`;
      });
    }

    // Gesture
    const container = videoRef.current.parentElement;
    container.addEventListener("touchend", (event) => {
      const now = Date.now();
      const gap = now - lastTap.current;
      lastTap.current = now;

      const touch = event.changedTouches[0];
      const rect = container.getBoundingClientRect();
      const tapX = touch.clientX - rect.left;
      const width = rect.width;

      if (gap < 300) {
        if (tapX < width / 3) {
          playerRef.current.currentTime(playerRef.current.currentTime() - 10);
        } else if (tapX > (2 * width) / 3) {
          playerRef.current.currentTime(playerRef.current.currentTime() + 10);
        } else {
          playerRef.current.paused()
            ? playerRef.current.play()
            : playerRef.current.pause();
        }
      }
    });

    return () => {
      if (playerRef.current) playerRef.current.dispose();
      clearInterval(studyTimer);
    };
  }, [m3u8Url, isLive, currentQuality]);

  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return "00:00";
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds % 60);
    return `${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <h2>
        {isLive
          ? "🔴 Live Class"
          : `Now Playing: ${chapterName} - ${lectureName || "Unknown Lecture"}`}
      </h2>

      <div style={{ position: "relative" }}>
        <video ref={videoRef} className="video-js vjs-default-skin" />
      </div>

      {!isMaster && (
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <span style={{ fontWeight: "bold" }}>Quality:</span>{" "}
          {qualities.map((q) => (
            <button
              key={q.value}
              onClick={() => setCurrentQuality(q.value)}
              style={{
                margin: "5px",
                padding: "6px 12px",
                backgroundColor:
                  currentQuality === q.value ? "#007bff" : "#f0f0f0",
                color: currentQuality === q.value ? "#fff" : "#000",
                border: "none",
                borderRadius: "4px",
              }}
            >
              {q.label}
            </button>
          ))}
        </div>
      )}

      {notesUrl && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <a
            href={notesUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "12px 24px",
              backgroundColor: "#007bff",
              color: "#fff",
              textDecoration: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              fontSize: "16px",
              fontWeight: "bold",
            }}
          >
            Download Notes
          </a>
        </div>
      )}

      <div
        style={{
          textAlign: "center",
          fontSize: "12px",
          marginTop: "30px",
          color: "#555",
        }}
      >
        Today’s Study Time: <strong>{studiedMinutes} min</strong>
      </div>
    </div>
  );
};

export default VideoPlayer;