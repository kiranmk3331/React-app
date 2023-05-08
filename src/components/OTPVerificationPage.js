import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function OTPVerificationPage() {
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();
  const pRef = useRef(null);
  let userId = localStorage.getItem("id");

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = { otp, user_id: userId };
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .post("/users/verify_otp", credentials, { headers })
      .then((response) => {
        if (response.data.verified) {
          navigate("/login");
        }
      })
      .catch((error) => {
        pRef.current.style.color = "red";
        pRef.current.innerText = "Otp mismatched or expired";
      });
  };

  const handleResendOtp = (e) => {
    e.preventDefault();
    const credentials = { user_id: userId };
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios
      .post("/users/resent_otp", credentials, { headers })
      .then((response) => {
        pRef.current.style.color = "blue";
        pRef.current.innerText = "Otp has been send";
      });
  };

  return (
    <div className="otp-verification-page">
      <form onSubmit={handleSubmit}>
        <label>
          Enter the OTP code sent to your email:
          <input
            type="text"
            value={otp}
            onChange={(event) => setOTP(event.target.value)}
          />
        </label>
        <p ref={pRef}></p>
        <br />
        <a href="" onClick={handleResendOtp}>
          Resent Otp
        </a>
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}

export default OTPVerificationPage;
