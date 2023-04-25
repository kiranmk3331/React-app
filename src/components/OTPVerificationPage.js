import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OTPVerificationPage({ user, setUser }) {
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const credentials = { otp, user_id: user.id };
    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };
    axios.post("/users/verify_otp", credentials, { headers }).then((response) => {
      if (response.data.verified) {
        navigate("/login");
      }
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
        <br />
        <button type="submit">Verify</button>
      </form>
    </div>
  );
}

export default OTPVerificationPage;
