import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isVerified, setIsVerified] = useState(false);

  // Handle class selection after verification
  const handleClassSelection = (classNumber) => {
    // Store verification status
    localStorage.setItem("isVerified", "true");
    // Redirect to the selected class page
    navigate(`/subjects/${classNumber}`);
  };

  useEffect(() => {
    const verificationStatus = localStorage.getItem("isVerified");
    
    if (verificationStatus === "true") {
      const redirectPath = location.state?.redirectPath || "/subjects";
      navigate(redirectPath);
    } else {
      setIsVerified(false);
    }
  }, [navigate, location.state]);

  return (
    <div className="verify-container">
      <h2>Verification Completed</h2>
      <p>Please select your class:</p>
      <div className="class-selection">
        <button onClick={() => handleClassSelection(9)}>Class 9</button>
        <button onClick={() => handleClassSelection(10)}>Class 10</button>
        <button onClick={() => handleClassSelection(11)}>Class 11</button>
      </div>
    </div>
  );
};

export default Verify;