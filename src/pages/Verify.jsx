import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../styles/Verify.css";

const Verify = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [verificationCompleted, setVerificationCompleted] = useState(false);

  // Handle the verification logic
  const completeVerification = () => {
    // Mark the verification as completed
    localStorage.setItem("isVerified", "true");

    // Redirect to the selected class page
    const redirectPath = location.state?.redirectPath || "/subjects";
    navigate(redirectPath);
  };

  // Handle class selection after verification
  const handleClassSelection = (classNumber) => {
    // Store the class in localStorage to manage the redirect after verification
    localStorage.setItem("selectedClass", classNumber);
    setVerificationCompleted(true);
  };

  useEffect(() => {
    const isVerified = localStorage.getItem("isVerified") === "true";
    if (isVerified) {
      // If already verified, directly redirect to the selected class
      const redirectPath = location.state?.redirectPath || "/subjects";
      navigate(redirectPath);
    }
  }, [navigate, location.state]);

  return (
    <div className="verify-container">
      <h2>Complete Verification</h2>
      {!verificationCompleted ? (
        <div>
          <p>Verification Pending...</p>
          {/* Add a button or other verification flow */}
          <button onClick={completeVerification}>Complete Verification</button>
        </div>
      ) : (
        <div>
          <p>Please select your class:</p>
          <div className="class-selection">
            <button onClick={() => handleClassSelection(9)}>Class 9</button>
            <button onClick={() => handleClassSelection(10)}>Class 10</button>
            <button onClick={() => handleClassSelection(11)}>Class 11</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Verify;