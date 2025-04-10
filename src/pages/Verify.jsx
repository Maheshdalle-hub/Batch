import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Verify = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const [verified, setVerified] = useState(false);
  const [invalidToken, setInvalidToken] = useState(false);

  useEffect(() => {
    const storedToken = localStorage.getItem("currentToken");

    if (!storedToken) {
      setInvalidToken(true);
      return;
    }

    if (!token || token !== storedToken) {
      setInvalidToken(true);
      return;
    }

    const expirationTime = Date.now() + 2 * 24 * 60 * 60 * 1000;
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("isVerified", "true");
    localStorage.setItem("verificationExpires", expirationTime);
    localStorage.removeItem("currentToken");

    setVerified(true);
    const redirectPath = sessionStorage.getItem("redirectAfterLogin") || "/subjects";

    setTimeout(() => {
      sessionStorage.removeItem("redirectAfterLogin");
      navigate(redirectPath);
    }, 2000);
  }, [token, navigate]);

  return (
    <div>
      {verified ? (
        <p>✅ Verification successful! Redirecting...</p>
      ) : invalidToken ? (
        <p>❌ Tumhe sahi se karna nahi aa rha. Website ka data clear karo chrome pe jaake, and then chrome pe meri website ko kholna. Jab tum "Click Here" dabaoge tab meri website chrome pe open honi chahiye.</p>
      ) : (
        <p>🔄 Verifying...</p>
      )}
    </div>
  );
};

export default Verify;
