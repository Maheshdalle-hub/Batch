import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Verify from "./pages/Verify";
import Subject9 from "./pages/Subject9";
import Subject10 from "./pages/Subject10";
import Subject11 from "./pages/Subject11";
import Lectures9 from "./pages/Lectures9";
import Lectures from "./pages/Lectures"; // For Class 10
import Lectures11 from "./pages/Lectures11";
import ChapterLectures from "./pages/ChapterLectures";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/verify/:token" element={<Verify />} />

        {/* Subject Pages */}
        <Route path="/subject/9" element={<ProtectedRoute><Subject9 /></ProtectedRoute>} />
        <Route path="/subject/10" element={<ProtectedRoute><Subject10 /></ProtectedRoute>} />
        <Route path="/subject/11" element={<ProtectedRoute><Subject11 /></ProtectedRoute>} />

        {/* Lecture Pages */}
        <Route path="/lectures/9/:subject" element={<ProtectedRoute><Lectures9 /></ProtectedRoute>} />
        <Route path="/lectures/:subject" element={<ProtectedRoute><Lectures /></ProtectedRoute>} /> {/* Only for Class 10 */}
        <Route path="/lectures/11/:subject" element={<ProtectedRoute><Lectures11 /></ProtectedRoute>} />

        {/* Chapter Lectures */}
        <Route path="/chapter/:class/:subject/:index" element={<ProtectedRoute><ChapterLectures /></ProtectedRoute>} />

      </Routes>
    </Router>
  );
}

export default App;