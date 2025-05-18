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
      1: [
        {
          name: "Lecture 1",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356754/174524546772032621696/174524546772032621696_2621696.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/835803105287866900.pdf"
        },
        {
          name: "Lecture 2",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357796/174533217995822621696/174533217995822621696_2621696.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/379080259263586700.pdf"
        },
        {
          name: "Lecture 3",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/24216229661638776.pdf",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359956/174549899862182621696/174549899862182621696_2621696.m3u8"
        },
        {
          name: "L 4",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/559946917947088400.pdf",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363375/174585552159492621696/174585552159492621696_2621696.m3u8"
        },
        {
          name: "L 5",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/634399216622604700.pdf",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364707/174593615136972621696/174593615136972621696_2621696.m3u8"
        },
        {
          name: "L 6",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366969/174610253788082621696/174610253788082621696_2621696.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/470449113809566500.pdf"
        },
        {
          name: "L 7",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372260/174645518133352621696/174645518133352621696_2621696.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/688116353569951400.pdf"
        },
        {
          name: "L 8",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373877/174654161051022621696/174654161051022621696_2621696.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/76093981534603400.pdf"
        },
        {
          name: "L 9",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376014/174670815163022621696/174670815163022621696_2621696.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/140042583048903940.pdf"
        },
        {
          name: "L 10",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379100/174705957021312621696/174705957021312621696_2621696.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/398695359949883840.pdf"
        },
      ],
      2:[
        {
          name: "L 1",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4380724/174714587348772621696/174714587348772621696_2621696.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/607933502624565900.pdf"
        },
        {
          name: "L 2",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4382830/174731342734562621696/174731342734562621696_2621696.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/552204249141935300.pdf"
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
        {
          name: "Lecture 3",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4356690/174524049345081097666/174524049345081097666_1097666.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/798181586567513700.pdf"
        },
        {
          name: "Lecture 4",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357736/174532685248651097666/174532685248651097666_1097666.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/452267096067597250.pdf"
        },
        {
          name: "Lecture 5",
          notesUrl: "",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359038/174542426999201097666/174542426999201097666_1097666.m3u8"
        },  
      ],
      1: [
        {
          name: "Lecture 1",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363249/174584513794761261798/174584513794761261798_1261798.m3u8",
          notesUrl: ""
        },
        {
          name: "Lecture 2",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364488/174592875146111261798/174592875146111261798_1261798.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/399242982850266700.pdf"
        },
        {
          name: "L 3",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366039/174602857795961261798/174602857795961261798_1261798.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/485152155798966900.pdf"
        },
        {
          name: "L 4",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367111/174610963914991261798/174610963914991261798_1261798.m3u8",
          
        },
        {
          name: "L 5",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373799/174653642467251261798/174653642467251261798_1261798.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/348718648836124700.pdf"
        },
        {
          name: "L 6",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4375005/174663383331301261798/174663383331301261798_1261798.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/446451742730990000.pdf"
        },
      ],
      2:[
        {
          name: "L 1",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379033/174705494887511097666/174705494887511097666_1097666.m3u8",
          notesUrl: ""
        },
      ],
      19: [
        {
          name: "DPP 1",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/759054519832697600.pdf"
        },
        {
          name: "Complex no DPP 1",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/331934519130572160.pdf"
        },
        {
          name: "Complex no DPP 2",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/831229669238566000.pdf"
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
        },
        {
          name: "Lecture 4",
          notesUrl: "",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360178/174551194721888296383/174551194721888296383_8296383.m3u8"
        },
        {
          name: "Lecture 5",
          notesUrl: "",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361337/174559902322678296383/174559902322678296383_8296383.m3u8"
        },
        {
          name: "L 6",
          notesUrl: "",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362139/174568479092198296383/174568479092198296383_8296383.m3u8"
        }
      ],
      1:[
        {
          name: "L 1",
          notesUrl: "",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367211/174611702457038296383/174611702457038296383_8296383.m3u8"
        },
        {
          name: "Basic maths L 1",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368402/174620181785161071993/174620181785161071993_1071993.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/63080286597865820.pdf"
        },
        {
          name: "Basic Maths L 2",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370179/174628987185681071993/174628987185681071993_1071993.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/781289778058012200.pdf"
        },
        {
          name: "Basic Math L 3",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376221/174672074184601071993/174672074184601071993_1071993.m3u8",
          notesUrl: ""
        },
        {
          name: "Basic Maths L 4",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377330/174680770411381071993/174680770411381071993_1071993.m3u8",
          notesUrl: ""
        },
        {
          name: "Basic Maths L 5",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377993/174689329024511071993/174689329024511071993_1071993.m3u8",
          notesUrl: ""
        },
      ],
      2:[
        {
          name: "L 1",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4384135/174741235930878296383/174741235930878296383_8296383.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/534474456291874800.pdf"
        },
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
      {
        name: "Lecture 3",
        m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4355452/174507897732027555169/174507897732027555169_7555169.m3u8",
        notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/563943491510636200.pdf"
      },
        {
          name: "Lecture 4",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357309/174530949861477555169/174530949861477555169_7555169.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/646257785235418800.pdf"
        },
        {
          name: "Lecture 5",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/492924385069963100.pdf",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4357831/174533736975997555169/174533736975997555169_7555169.m3u8"
        },
        {
          name: "Lecture 6",
          notesUrl: "",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358829/174541226159937555169/174541226159937555169_7555169.m3u8"
        },
      ],
      1: [
        {
         name: "Lecture 1",
         m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363320/174584946237347555169/174584946237347555169_7555169.m3u8",
         notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/648524728566613900.pdf"
        },
        {
         name: "Lecture 2",
         m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364789/174594373555637555169/174594373555637555169_7555169.m3u8",
         notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/882253112379514100.pdf"
        },
        {
          name: "L 3",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365831/174601791723957555169/174601791723957555169_7555169.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/725318515177342300.pdf"
        },
        {
          name: "L 4",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372294/174646064983197555169/174646064983197555169_7555169.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/129927195937409060.pdf"
        },
        {
          name: "L 5",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373927/174654700417617555169/174654700417617555169_7555169.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/64128366459183150.pdf"
        },
        {
          name: "L 6",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374900/174662289939277555169/174662289939277555169_7555169.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/295746695513876900.pdf"
        },
        {
          name: "L 7",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4379161/174706558456287555169/174706558456287555169_7555169.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/570113084186052900.pdf"
        },
        {
          name: "L 8",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4380760/174715119572127555169/174715119572127555169_7555169.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/793662167351692000.pdf"
        },
        {
          name: "L 9",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4381822/174722718560337555169/174722718560337555169_7555169.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/759793162637350300.pdf"
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
                onClick={() => {
              // Store chapter name and index in localStorage for later use
              localStorage.setItem("lectureName", lecture.name);  // Store chapter name
            }}
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
