import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage";
import Login from "./pages/Login";
import Subject9 from "./pages/Subject9";     // Class 9 subjects
import Subject10 from "./pages/Subject10";   // Class 10 subjects
import Subject11 from "./pages/Subject11";   // Class 11 subjects
import Lectures9 from "./pages/Lectures9";
import Lectures from "./pages/Lectures";     // Class 10
import Lectures11 from "./pages/Lectures11";
import ChapterLectures from "./pages/ChapterLectures";
import Verify from "./pages/Verify";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify/:token" element={<Verify />} />

        {/* Subjects */}
        <Route
          path="/subjects/9"
          element={<ProtectedRoute><Subject9 /></ProtectedRoute>}
        />
        <Route
          path="/subjects/10"
          element={<ProtectedRoute><Subject10 /></ProtectedRoute>}
        />
        <Route
          path="/subjects/11"
          element={<ProtectedRoute><Subject11 /></ProtectedRoute>}
        />

        {/* Lectures */}
        <Route
          path="/lectures/9/:subject"
          element={<ProtectedRoute><Lectures9 /></ProtectedRoute>}
        />
        <Route
          path="/lectures/:subject"  // Class 10
          element={<ProtectedRoute><Lectures /></ProtectedRoute>}
        />
        <Route
          path="/lectures/11/:subject"
          element={<ProtectedRoute><Lectures11 /></ProtectedRoute>}
        />

        {/* Chapter Lectures */}
        <Route
          path="/chapter-lectures/:classId/:subject/:chapterIndex"
          element={<ProtectedRoute><ChapterLectures /></ProtectedRoute>}
        />
      </Routes>
    </Router>
  );
};

export default App;