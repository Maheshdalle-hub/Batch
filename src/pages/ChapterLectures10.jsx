import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "../styles/ChapterLectures.css";
import mlogo from "../assets/ntmlogo.jpg"; // ✅ Import logo

const ChapterLectures10 = () => {
  const { classId, subject, chapterIndex } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [navigate]);

  const chapterLectures = {
    Notice: {
      0: [
        {
          name: "Introduction Video",
          m3u8Url: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4312904/1740491033_1089325762901906/sunny/1740490966781_94603654451027820_video_VOD.m3u8",
          notesUrl: ""
        },
      ],
    },
    Science: {
      0: [
        {
          name: "Lecture 1 (Free on YouTube)",
          youtubeUrl: "https://www.youtube.com/live/TRS7cu_n108",
          notesUrl: ""
        },
        {
          name: "Lecture 2",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352723/174480784354101097666/174480784354101097666_1097666.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/92623582258554050.pdf"
        },
        {
          name: "Lecture 3",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4353809/174489432994287880624/174489432994287880624_7880624.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/467570420184705540.pdf"
        },
          {
            name: "Lecture 4",
            m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354717/174498038229378296383/174498038229378296383_8296383.m3u8",
            notesUrl:"https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/508994911186986560.pdf"
          },
      ],
      1: [
        {
          name: "Lecture 1",
          m3u8Url: "YOUR_M3U8_LINK_HERE",
          notesUrl: ""
        },
      ],
      19: [
        {
          name: "ACP 01",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/151758065059113380.pdf"
        },
      ],
    },
    Maths: {
      0: [
        {
          name: "Lecture 1 (Free on YouTube)",
          youtubeUrl: "https://www.youtube.com/live/_0ooaKrdubI",
          notesUrl: ""
        },
        {
          name: "Lecture 2",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4351817/174473442715988296383/174473442715988296383_8296383.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/22420916723093830.pdf"
        },
        {
          name: "Lecture 3",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354873/174499225616481097666/174499225616481097666_1097666.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/440507540857891140.pdf"
        },
        {
          name: "Lecture 4",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355458/174508004648941097666/174508004648941097666_1097666.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/805714130200073600.pdf"
        },
        {
          name: "Lecture 5",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356796/174525209654081097666/174525209654081097666_1097666.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/187284260099181220.pdf"
        },
        {
          name: "Lecture 6",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357843/174533856999441097666/174533856999441097666_1097666.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/601835403370027400.pdf"
        }
      ],
      19: [
        {
          name: "DPP 1",
          redirect: "https://drive.google.com/file/d/1M2C9SEvckkjzKpzR63fIpy-0GiDBYZYN/view?usp=sharing"
        },
        {
          name: "DPP 2",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/754506419720273500.pdf"
        },
        {
          name: "DPP 3",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/50352740213663790.pdf"
        },
        {
          name: "DPP 4",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/77872188217647540.pdf"
        },
        {
          name: "DPP 5",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/463630041745735040.pdf"
        },
      ],
    },
    SST: {
      0: [
        {
          name: "Lecture 1 (Free on YouTube)",
          youtubeUrl: "https://www.youtube.com/live/URGAO81IXXk",
          notesUrl: ""
        },
        {
          name: "Lecture 2",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4352990/174481810831487880624/174481810831487880624_7880624.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/499211942268668900.pdf"
        },
          {
            name: "Lecture 3",
            m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4354004/174490425923587880624/174490425923587880624_7880624.m3u8",
            notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/757785193454953700.pdf"
          },
        {
          name: "Lecture 4",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355307/174506622189247880624/174506622189247880624_7880624.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/531868284639640500.pdf"
        },
        {
          name: "Lecture 5",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356674/174523974370667880624/174523974370667880624_7880624.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/588945413789555000.pdf"
        },
      ],
      1: [
        {
          name: "Lecture 1",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357716/174532560751637880624/174532560751637880624_7880624.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/307992216764131200.pdf"
        },
      ],
      19: [
        {
          name: "WPP 01",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/346089666981640100.pdf"
        },
      ],
    },
    English: {
      0: [
        {
          name: "Lecture 1",
          m3u8Url: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355437/1745094964_5789358984187695/sunny/1745075625242_69087200894049560_video_VOD.m3u8"
        },
        {
          name: "Lecture 2",
          m3u8Url: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355438/1745092805_3842501733043505/sunny/1745075729856_273253030448162560_video_VOD.m3u8"
        },
      ],
      19: [
        {
          name: "Poetic Device 1",
          m3u8Url: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355433/1745094005_5545466457120453/sunny/1745074688660_697469926988172200_video_VOD.m3u8"
        },
        {
          name: "Poetic Device 2",
          m3u8Url: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355436/1745094844_9240190758365079/sunny/1745075412050_483337412598451650_video_VOD.m3u8"
        },
      ],
    },
  };

  return (
    <div className="chapter-lectures-container">
      <img src={mlogo} alt="Logo" className="big-logo" />

      <h2>{subject} - Chapter {parseInt(chapterIndex) + 1}</h2>
      <div className="lecture-boxes">
        {chapterLectures[subject]?.[chapterIndex]?.map((lecture, index) => {
          if (lecture.youtubeUrl) {
            return (
              <a
                key={index}
                href={lecture.youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="lecture-box"
              >
                {lecture.name}
              </a>
            );
          }

          if (lecture.redirect) {
            return (
              <div
                key={index}
                onClick={() => window.location.href = lecture.redirect}
                className="lecture-box"
              >
                {lecture.name}
              </div>
            );
          }

          return (
            <Link
              key={index}
              to={`/video/10/${subject}/${chapterIndex}`}
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
        })}
      </div>
    </div>
  );
};

export default ChapterLectures10;
