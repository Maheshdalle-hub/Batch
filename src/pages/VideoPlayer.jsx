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
  const [currentQuality, setCurrentQuality] = useState(""); // To track selected quality
  const [isMasterPlaylist, setIsMasterPlaylist] = useState(false); // To check if it's a master playlist

  const { chapterName, lectureName, m3u8Url, notesUrl } = location.state || {};
  const isLive = location.pathname.includes("/video/live");
  const defaultLiveUrl = "m3u8_link_here";

  // Check if it's a master playlist or non-master
  useEffect(() => {
    if (m3u8Url) {
      setIsMasterPlaylist(m3u8Url === "index.m3u8");
    }
  }, [m3u8Url]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
    }
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

    // Decide the video URL based on the playlist type (master or non-master)
    let videoSource = "";
    if (isMasterPlaylist) {
      videoSource = m3u8Url || defaultLiveUrl;
    } else {
      videoSource = currentQuality || m3u8Url || defaultLiveUrl; // Use the selected quality URL
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
      controlBar: {
        children: [
          "playToggle",
          "progressControl",
          "volumePanel",
          "playbackRateMenuButton",
          "qualitySelector", // For quality selector
          "fullscreenToggle",
        ],
      },
    });

    playerRef.current.src({
      src: videoSource,
      type: "application/x-mpegURL",
    });

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

    playerRef.current.ready(() => {
      const controlBar = playerRef.current.controlBar;
      const playToggleEl = controlBar.getChild("playToggle")?.el();

      // Handle the quality selector button based on master or non-master playlist
      if (!isMasterPlaylist) {
        playerRef.current.hlsQualitySelector({
          displayCurrentQuality: true,
        });
      }

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
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose();
      }
      clearInterval(studyTimer);
    };
  }, [m3u8Url, isLive, currentQuality, isMasterPlaylist]);

  const formatTime = (timeInSeconds) => {
    if (isNaN(timeInSeconds) || timeInSeconds < 0) return "00:00";
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleQualityChange = (quality) => {
    let qualityUrl = "";

    // Based on selected quality, update the video URL
    if (quality === "240p") {
      qualityUrl = "index_1.m3u8";
    } else if (quality === "360p") {
      qualityUrl = "index_2.m3u8";
    } else if (quality === "480p") {
      qualityUrl = "index_3.m3u8";
    } else if (quality === "720p") {
      qualityUrl = "index_4.m3u8";
    }

    // Update the current quality and set the new video source
    setCurrentQuality(qualityUrl);
    playerRef.current.src({
      src: qualityUrl,
      type: "application/x-mpegURL",
    });
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

      {isMasterPlaylist && !isLive && (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "4px",
            }}
            onClick={() => handleQualityChange("240p")}
          >
            240p
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "4px",
              marginLeft: "10px",
            }}
            onClick={() => handleQualityChange("360p")}
          >
            360p
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "4px",
              marginLeft: "10px",
            }}
            onClick={() => handleQualityChange("480p")}
          >
            480p
          </button>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#007bff",
              color: "#fff",
              borderRadius: "4px",
              marginLeft: "10px",
            }}
            onClick={() => handleQualityChange("720p")}
          >
            720p
          </button>
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
            View Notes
          </a>
        </div>
      )}

      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <p>
          {isLive
            ? "Watching live. Please stay tuned for the latest updates!"
            : `You have studied for: ${formatTime(studiedMinutes * 60)}`}
        </p>
      </div>
    </div>
  );
};

export default VideoPlayer;
