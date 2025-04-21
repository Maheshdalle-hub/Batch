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
          youtubeUrl: "https://www.youtube.com/live/RF6xfHVo9xc",
          notesUrl: "",
        },
        {
          name: "Lecture 2",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353875/174489575453452621696/174489575453452621696_2621696.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/840347643747496200.pdf"
        },
        {
          name: "Lecture 3",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354742/174498168131232621696/174498168131232621696_2621696.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/568137344888524700.pdf"
        },
      ],
    },
    Maths: {
      0: [
        {
          name: "Lecture 1",
          youtubeUrl: "https://www.youtube.com/live/vcqyIgZfCog"
        },
        {
          name: "Lecture 2",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353889/174489667533668296383/174489667533668296383_8296383.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5110820Sets%20L2.pdf_Sets%20L2.pdf"
        },
      ],
    },
    Physics: {
      0: [
        {
          name: "Lecture 1",
          youtubeUrl: "https://www.youtube.com/live/eYHkwzP0TkY"
        },
        {
          name: "Lecture 2",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354032/174490568189301097666/174490568189301097666_1097666.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/320554157609896960.pdf"
        },
        {
          name: "Lecture 3",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354885/174499396879388296383/174499396879388296383_8296383.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/282566967198221150.pdf"
        }
      ],
      19: [
        {
          name: "PCP 01",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/798807099203843300.pdf"
        }
      ],
    },
    Chemistry: {
      0: [
        {
          name: "Lecture 1",
          youtubeUrl: "https://www.youtube.com/live/EVU_Bvc3HpE"
        },
        {
          name: "Lecture 2",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353000/174481993295887555169/174481993295887555169_7555169.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/60665227316336800.pdf"
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
        {chapterLectures[subject]?.[chapterIndex]?.map((lecture, index) => {
          if (lecture.redirect) {
            return (
              <div
                key={index}
                onClick={() => window.location.href = lecture.redirect}
                className="lecture-box"
                style={{ cursor: "pointer" }}
              >
                {lecture.name} (PDF)
              </div>
            );
          } else if (lecture.youtubeUrl) {
            return (
              <div
                key={index}
                onClick={() => handleLectureClick(lecture)}
                className="lecture-box"
                style={{ cursor: "pointer" }}
              >
                {lecture.name} (YouTube)
              </div>
            );
          } else if (lecture.m3u8Url) {
            return (
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
            );
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ChapterLectures11;
