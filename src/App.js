import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Subjects9 from "./pages/Subject9";
import Subjects10 from "./pages/Subject10";
import Subjects11 from "./pages/Subject11";
import Lectures9 from "./pages/Lectures9";
import Lectures from "./pages/Lectures";
import Lectures11 from "./pages/Lectures11";
import VideoPlayer from "./pages/VideoPlayer";
import ChapterLectures9 from "./pages/ChapterLectures9";
import ChapterLectures10 from "./pages/ChapterLectures10";
import ChapterLectures11 from "./pages/ChapterLectures11";
import Login from "./pages/Login";
import Verify from "./pages/Verify"; 
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify/:token" element={<Verify />} />

        {/* ✅ Protected Routes */}
        <Route path="/subjects/9" element={<ProtectedRoute><Subjects9 /></ProtectedRoute>} />
        <Route path="/subjects/10" element={<ProtectedRoute><Subjects10 /></ProtectedRoute>} />
        <Route path="/subjects/11" element={<ProtectedRoute><Subjects11 /></ProtectedRoute>} />

        <Route path="/lectures/9" element={<ProtectedRoute><Lectures9 /></ProtectedRoute>} />
        <Route path="/lectures" element={<ProtectedRoute><Lectures /></ProtectedRoute>} />
        <Route path="/lectures/11" element={<ProtectedRoute><Lectures11 /></ProtectedRoute>} />

        {/* Chapter Lectures Routes for 9th, 10th, and 11th */}
        <Route path="/chapter-lectures/9/:chapterIndex" element={<ProtectedRoute><ChapterLectures9 /></ProtectedRoute>} />
        <Route path="/chapter-lectures/10/:chapterIndex" element={<ProtectedRoute><ChapterLectures10 /></ProtectedRoute>} />
        <Route path="/chapter-lectures/11/:chapterIndex" element={<ProtectedRoute><ChapterLectures11 /></ProtectedRoute>} />

        <Route path="/video/:grade/:chapterIndex" element={<ProtectedRoute><VideoPlayer /></ProtectedRoute>} />
        <Route path="/video/live" element={<ProtectedRoute><VideoPlayer /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
