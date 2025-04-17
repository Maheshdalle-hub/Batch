import React, { useEffect, useRef, useState } from "react"; import videojs from "video.js"; import "video.js/dist/video-js.css"; import "videojs-contrib-quality-levels"; import "videojs-hls-quality-selector"; import { useLocation, useNavigate } from "react-router-dom";

const VideoPlayer = () => { const location = useLocation(); const navigate = useNavigate(); const videoRef = useRef(null); const playerRef = useRef(null); const lastTap = useRef(0); const [studiedMinutes, setStudiedMinutes] = useState(0); const [selectedQuality, setSelectedQuality] = useState(null);

const { chapterName, lectureName, m3u8Url, notesUrl } = location.state || {}; const isLive = location.pathname.includes("/video/live"); const defaultLiveUrl = "m3u8_link_here";

const baseUrl = (m3u8Url || "").replace(/index(\d+)?.m3u8/, "index"); const isMaster = (m3u8Url || "").includes("index.m3u8") && !/(index\d+.m3u8)/.test(m3u8Url || "");

const manualQualities = [ { label: "240p", value: "index_1.m3u8" }, { label: "360p", value: "index_2.m3u8" }, { label: "480p", value: "index_3.m3u8" }, { label: "720p", value: "index_4.m3u8" }, ];

useEffect(() => { const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"; if (!isLoggedIn) { navigate("/login"); } }, [navigate]);

useEffect(() => { const today = new Date().toLocaleDateString(); const lastDate = localStorage.getItem("lastStudyDate"); if (lastDate !== today) { Object.keys(localStorage).forEach((key) => { if (key.startsWith("studyTime_")) localStorage.removeItem(key); }); localStorage.setItem("lastStudyDate", today); }

const stored = parseFloat(localStorage.getItem(`studyTime_${today}`)) || 0;
setStudiedMinutes(Math.floor(stored / 60));

}, []);

const getFinalVideoUrl = () => {
  if (selectedQuality) {
    return `${baseUrl}${selectedQuality}`;
  }
  return m3u8Url || defaultLiveUrl;
};

useEffect(() => { if (!videoRef.current) return;

const videoSource = isLive ? defaultLiveUrl : getFinalVideoUrl();

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

playerRef.current.src({
  src: videoSource,
  type: "application/x-mpegURL",
});

playerRef.current.ready(() => {
  playerRef.current.qualityLevels();
  if (isMaster) {
    playerRef.current.hlsQualitySelector({
      displayCurrentQuality: true,
    });
  }
});

const controlBar = playerRef.current.controlBar;
const playToggleEl = controlBar.getChild("playToggle")?.el();
if (playToggleEl) {
  const timeDisplay = document.createElement("div");
  timeDisplay.className = "vjs-custom-time-display";
  timeDisplay.style.position = "absolute";
  timeDisplay.style.bottom = "50px";
  timeDisplay.style.left = "0";
  timeDisplay.style.background = "rgba(0, 0, 0, 0.7)";
  timeDisplay.style.color = "#fff";
  timeDisplay.style.fontSize = "13px";
  timeDisplay.style.padding = "4px 8px";
  timeDisplay.style.borderRadius = "4px";
  timeDisplay.style.whiteSpace = "nowrap";
  timeDisplay.style.pointerEvents = "none";
  timeDisplay.style.zIndex = "999";
  timeDisplay.textContent = "00:00 / 00:00";

  playToggleEl.style.position = "relative";
  playToggleEl.appendChild(timeDisplay);

  playerRef.current.on("loadedmetadata", () => {
    const duration = formatTime(playerRef.current.duration());
    timeDisplay.textContent = `00:00 / ${duration}`;
  });

  playerRef.current.on("timeupdate", () => {
    const currentTime = formatTime(playerRef.current.currentTime());
    const duration = formatTime(playerRef.current.duration());
    timeDisplay.textContent = `${currentTime} / ${duration}`;
  });
}

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

const videoContainer = videoRef.current.parentElement;
videoContainer.addEventListener("touchend", (event) => {
  const currentTime = Date.now();
  const tapGap = currentTime - lastTap.current;
  lastTap.current = currentTime;

  const touch = event.changedTouches[0];
  const rect = videoContainer.getBoundingClientRect();
  const tapX = touch.clientX - rect.left;
  const videoWidth = rect.width;

  if (tapGap < 300) {
    if (tapX < videoWidth / 3) {
      playerRef.current.currentTime(playerRef.current.currentTime() - 10);
    } else if (tapX > (2 * videoWidth) / 3) {
      playerRef.current.currentTime(playerRef.current.currentTime() + 10);
    } else {
      playerRef.current.paused()
        ? playerRef.current.play()
        : playerRef.current.pause();
    }
  }
});

return () => {
  if (playerRef.current) {
    playerRef.current.dispose();
  }
  clearInterval(studyTimer);
};

}, [m3u8Url, selectedQuality]);

const formatTime = (timeInSeconds) => {
  if (isNaN(timeInSeconds) || timeInSeconds < 0) return "00:00";
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};
return ( <div> <h2> {isLive ? "🔴 Live Class" : Now Playing: ${chapterName} - ${lectureName || "Unknown Lecture"}} </h2>

{!isMaster && (
    <div style={{ textAlign: "center", marginBottom: 10 }}>
      {manualQualities.map((q) => (
        <button
          key={q.label}
          onClick={() => setSelectedQuality(q.value)}
          style={{
            margin: "0 8px",
            padding: "8px 16px",
            background: selectedQuality === q.value ? "#007bff" : "#eee",
            color: selectedQuality === q.value ? "#fff" : "#000",
            border: "none",
            borderRadius: "6px",
          }}
        >
          {q.label}
        </button>
      ))}
    </div>
  )}

  <div style={{ position: "relative" }}>
    <video ref={videoRef} className="video-js vjs-default-skin" />
  </div>

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

); };

export default VideoPlayer;

