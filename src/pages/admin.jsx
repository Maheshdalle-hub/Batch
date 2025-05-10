import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set login flags
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("verificationExpires", "false");

    // Optional: Redirect or load admin dashboard
    // navigate("/admin/dashboard");
  }, []);

  return (
    <div>
      <h1>Welcome, Admin</h1>
      <p>Login status has been set.</p>
    </div>
  );
};

export default Admin;
