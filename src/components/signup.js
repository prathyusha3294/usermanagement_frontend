import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
import googleicon from "../assets/google.jpg";
import facebookicon from "../assets/facebooklogo.webp";
import appleicon from "../assets/appleicon.png";
import jobportal from "../assets/job portal.jpg";
import accenture from "../assets/accenture.png";
import aws from "../assets/aws logo.png";
import at from "../assets/at&t.png";
import samsung from "../assets/samsung logo.png";
import visma from "../assets/Visma_logo.png";

function Signup() {
  const [isSignIn, setIsSignIn] = useState(true); // Toggle between sign-in and sign-up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const data = { email, password };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/signin/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log("Sign in successful:", responseData);
        navigate("/customerprofile");
      } else {
        setError(responseData.message || "Sign in failed. Please try again.");
      }
    } catch (err) {
      setError("Sign in failed. Please try again.");
    }
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();

    if (createPassword !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const data = {
      fullname,
      email,
      phone,
      create_password: createPassword,
      confirm_password: confirmPassword,
    };

    try {
      const response = await fetch("http://127.0.0.1:8000/api/signup/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();
      if (response.ok) {
        console.log("Sign up successful:", responseData);
        navigate("/login");
      } else {
        setError(responseData.message || "Sign up failed. Please try again.");
      }
    } catch (err) {
      setError("Sign up failed. Please try again.");
    }
  };

  return (
    <div className="main-container">
      <div className="left-container">
        <img src={jobportal} alt="Job Portal Logo" className="job-portal-logo" />
        <h1 className="brand-title">CANDIGATE</h1>
        <p>Welcome to the Candidate Verification Platform!</p>
        <div className="sponsor-container">
          <div className="sponsor-logos">
            <img src={accenture} alt="Accenture Logo" className="sponsor-logo" />
            <img src={aws} alt="AWS Logo" className="sponsor-logo" />
            <img src={at} alt="AT&T Logo" className="sponsor-logo" />
            <img src={samsung} alt="Samsung Logo" className="sponsor-logo" />
            <img src={visma} alt="Visma Logo" className="sponsor-logo" />
          </div>
        </div>
      </div>
      <div className="signup-container">
        {isSignIn ? (
          <div className="right-container">
            <h2><center>Sign In</center></h2>
            <div className="social-login">
              <button className="google-login">
                <img src={googleicon} alt="Google logo" className="social-icon" />
                <span>Continue with Google</span>
              </button>
              <button className="facebook-login">
                <img src={facebookicon} alt="Facebook logo" className="social-icon" />
                <span>Continue with Facebook</span>
              </button>
              <button className="apple-login">
                <img src={appleicon} alt="Apple logo" className="social-icon" />
                <span>Continue with Apple</span>
              </button>
            </div>
            <div className="divider">
              <span>or</span>
            </div>
            <form onSubmit={handleSignInSubmit}>
              <div className="form-group">
                <label>Email address / Mobile Number</label>
                <input
                  type="email"
                  placeholder="Enter your email or mobile number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p onClick={() => navigate("/forget-password")} className="link">
                  Forgot password?
                </p>
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </form>
            <p>
              Create Account{" "}
              <span onClick={() => setIsSignIn(false)} className="link">
                Signup
              </span>
            </p>
          </div>
        ) : (
          <div className="right-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUpSubmit}>
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  value={createPassword}
                  onChange={(e) => setCreatePassword(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className="error">{error}</p>}
              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsSignIn(true)} className="link">
                Login
              </span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Signup;
