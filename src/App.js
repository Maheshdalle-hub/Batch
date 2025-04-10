import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Subjects from "./pages/Subjects";
import Lectures from "./pages/Lectures";
import VideoPlayer from "./pages/VideoPlayer";
import ChapterLectures from "./pages/ChapterLectures";
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
        <Route path="/subjects" element={<ProtectedRoute><Subjects /></ProtectedRoute>} />
        
        {/* Dynamic Route for Subjects */}
        <Route path="/lectures/:subject" element={<ProtectedRoute><Lectures /></ProtectedRoute>} />
        
        {/* Dynamic Route for Chapter Lectures within each subject */}
        <Route path="/chapter-lectures/:subject/:chapterIndex" element={<ProtectedRoute><ChapterLectures /></ProtectedRoute>} />

        {/* Dynamic Video Player Route for each lecture */}
        <Route path="/video/:subject/:chapterIndex" element={<ProtectedRoute><VideoPlayer /></ProtectedRoute>} />
        
        {/* Live Video Route */}
        <Route path="/video/live" element={<ProtectedRoute><VideoPlayer /></ProtectedRoute>} />
      </Routes>
    </>
  );
}

export default App;
