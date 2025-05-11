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
        {
          name: "Lecture 5",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/812608998691140200.pdf",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4358838/174541230763428296383/174541230763428296383_8296383.m3u8"
        },
        {
          name: "Lecture 6",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/692200381751812900.pdf",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359955/174549890921018296383/174549890921018296383_8296383.m3u8"
        },
        {
          name: "Lecture 7",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/635590807317661200.pdf",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361147/174558535223448296383/174558535223448296383_8296383.m3u8"
        },
        {
          name: "Lecture 8",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362037/174567339728038296383/174567339728038296383_8296383.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/214143229364161280.pdf"
        },
      ],
      1: [
        {
          name: "Lecture 1",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4365846/174601868499698296383/174601868499698296383_8296383.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/186368098857000600.pdf"
        },
        {
          name: "L 2",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367004/174610340159018296383/174610340159018296383_8296383.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/893692154902404400.pdf"
        },
        {
          name: "L 3",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368177/174619014979628296383/174619014979628296383_8296383.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/201395451636924200.pdf"
        },
        {
          name: "L 4",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370026/174627675448638296383/174627675448638296383_8296383.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/568390841661464500.pdf"
        },
        {
          name: "L 5",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374886/174662262789208296383/174662262789208296383_8296383.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/855806543563515300.pdf"
        },
        {
          name: "L 6",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376022/174670906343678296383/174670906343678296383_8296383.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/355378778094591700.pdf"
        },
        {
          name: "L 7",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377192/174679471966318296383/174679471966318296383_8296383.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/303485460972520450.pdf"
        },
      ],
      19: [
        {
          name: "ACP Chemical Reaction & Equation",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/151758065059113380.pdf"
        },
        {
          name: "ACP - Light",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/553368258434162370.pdf"
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
      1: [
        {
          name: "Lecture 1",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/461049038359672400.pdf",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4361323/174559737034061097666/174559737034061097666_1097666.m3u8"
        },
        {
          name: "Lecture 2",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4362134/174568400490071097666/174568400490071097666_1097666.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/454067914091926400.pdf"
        },
        {
          name: "Lecture 3",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363379/174585623134271097666/174585623134271097666_1097666.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/646208147845606100.pdf"
        },
       {
         name: "Lecture 4",
         m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364779/174594155534621097666/174594155534621097666_1097666.m3u8",
         notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/555085639820711100.pdf"
        },
        {
          name: "L 5",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4368398/174620142857631097666/174620142857631097666_1097666.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/5742474Polynomials%20L5%20Aarambh%202026.pdf_Polynomials%20L5%20Aarambh%202026.pdf"
        },
        {
          name: "L 6",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4370160/174628714218381097666/174628714218381097666_1097666.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/196833841022277150.pdf"
        },
      ],
      2: [
        {
          name: "L 1",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/459536335122701630.pdf",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372312/174646254284121097666/174646254284121097666_1097666.m3u8"
        },
        {
          name: "L 2",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/465914747232059840.pdf",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373921/174654659565961097666/174654659565961097666_1097666.m3u8"
        },
        {
          name: "L 3",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377325/174680602725391097666/174680602725391097666_1097666.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/17291855924611054.pdf"
        },
        {
          name: "L 4",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4377995/174689370672401097666/174689370672401097666_1097666.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/517673026874348160.pdf"
        },
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
        {
          name: "DPP 6",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/353737326249153000.pdf"
        },
        {
          name: "DPP 7",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/17162183325825642.pdf"
        },
        {
          name: "DPP 8",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/609681176298919600.pdf"
        },
        {
          name: "DPP 9",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540/admin_v1/file_manager/pdf/623728210th%20Aarambh%20DPP%209.pdf_10th%20Aarambh%20DPP%209.pdf"
        },
        {
          name: "DPP 10",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/629573474530629900.pdf"
        },
        {
          name: "DPP 11",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/360874131302271400.pdf"
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
        {
          name: "Lecture 2",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/389898906835482900.pdf",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4359018/174542319983487880624/174542319983487880624_7880624.m3u8"
        },
        {
          name: "Lecture 3",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/348520797704779900.pdf",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4360148/174550914289447880624/174550914289447880624_7880624.m3u8"
        },
        {
         name: "Lecture 4",
         m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4363238/174584423215647880624/174584423215647880624_7880624.m3u8",
         notesUrl: ""
        },
        {
          name: "Lecture 5",
          notesUrl: "",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4364563/174593072250617880624/174593072250617880624_7880624.m3u8"
        },
        {
          name: "L 6",
          noresUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/787564009170478300.pdf",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4366034/174602805446617880624/174602805446617880624_7880624.m3u8"
        },
        {
          name: "Doubt Solving",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4367150/174611369995057880624/174611369995057880624_7880624.m3u8"
        },
      ],
      2: [
        {
          name: "L 1",
          notesUrl: "",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4372168/174644893368577880624/174644893368577880624_7880624.m3u8"
        },
        {
          name: "L 2",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/111150181186659630.pdf",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4373745/174653484988497880624/174653484988497880624_7880624.m3u8"
        },
        {
          name: "L 3",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4374999/174663266860947880624/174663266860947880624_7880624.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/576161860331452400.pdf"
        },
        {
          name: "L 4",
          m3u8Url: "https://d1qcficr3lu37x.cloudfront.net/file_library/videos/channel_vod_non_drm_hls/4376187/174671890371767880624/174671890371767880624_7880624.m3u8",
          notesUrl: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/646580963654031700.pdf"
        },
      ],
      19: [
        {
          name: "WPP 01",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/346089666981640100.pdf"
        },
        {
          name: "WPP 01 Solution",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/761630106449919600.pdf"
        },
        {
          name: "WPP 02",
          redirect: "https://dxixtlyravvxx.cloudfront.net/540admin_v1/file_manager/pdf/190224942159109730.pdf"
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
      1:[
        {
          name: "L 1",
          m3u8Url: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362883/1745829064_8896744564209427/sunny/1745823405144_213803673785664260_video_VOD.m3u8"
        },
        {
          name: "L 2",
          m3u8Url: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362884/1745829304_9832761018325665/sunny/1745823991438_632000197320964000_video_VOD.m3u8"
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
      100: [
        {
          name: "L 1",
          m3u8Url: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355439/1745093044_4924087909410992/sunny/1745075811428_105843213207123620_video_VOD.m3u8",
          notesUrl: ""
        },
        {
          name: "L 2",
          m3u8Url: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4355440/1745093225_3967621876101546/sunny/1745075940281_157990210964759200_video_VOD.m3u8",
          notesUrl: ""
        },
      ],
      101: [
        {
          name: "L 1",
          m3u8Url: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362090/1745704264_4978832941989791/sunny/1745675953554_782663074466947200_video_VOD.m3u8",
          notesUrl: ""
        },
        {
          name: "L 2",
          m3u8Url: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4362091/1745704384_6312355312118548/sunny/1745676024180_88967490348689950_video_VOD.m3u8",
          notesUrl: ""
        },
      ],
    },
    Hindi: {
      0: [
        {
          name: "Lecture 1",
          notesUrl: "",
          m3u8Url: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4186201/1729265541_2410105506345580/1T-z7_tVWEOoVElSMKj6nYFwnPxaf5e1h.m3u8"
        },
        {
          name: "L 2",
          m3u8Url: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4186200/1729265538_7083754923792877/1zNCdHHMwJyWePiOVJe4J8BmsbVUmTAZ7.m3u8"
        },
        {
          name: "Ncert sol",
          m3u8Url: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4024977/1729246983_4599555018953880/1rg3wohpXBFYB05RJpzt6KKEMJlgNs4L7.m3u8"
        },
        {
         name: "L 4",
         m3u8Url: "https://d3cx6qbbd4cbso.cloudfront.net/file_library/videos/vod_non_drm_ios/4186199/1729265536_7680652203501416/1JK6BORv2rwZp2Uxm77iFjYbG2q36Drn_.m3u8"
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
              onClick={() => {
              // Store chapter name and index in localStorage for later use
              localStorage.setItem("lectureName", lecture.name);  // Store chapter name
            }}
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
