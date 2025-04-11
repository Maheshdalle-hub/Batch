import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Subjects from "./pages/Subjects";
import Lectures from "./pages/Lectures";        // Class 10
import Lectures9 from "./pages/Lectures9";      // Class 9
import Lectures11 from "./pages/Lectures11";    // Class 11
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

        {/* Subjects Page */}
        <Route
          path="/subjects"
          element={<ProtectedRoute><Subjects /></ProtectedRoute>}
        />

        {/* Class-specific Lectures Pages */}
        <Route
          path="/lectures/9/:subject"
          element={<ProtectedRoute><Lectures9 /></ProtectedRoute>}
        />
        <Route
          path="/lectures/:subject"   // This is for Class 10
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