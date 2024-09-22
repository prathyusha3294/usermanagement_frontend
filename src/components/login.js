import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import axiosInstance from "./axiosInstance"; // Correct import path
 // Import the instance

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/api/usersignin/", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email,
            password: password,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Sign up successful:', data);
        navigate("/dashboard");
    } else {
        console.error('Sign up failed:', data);
        setError(data.message || "Signup failed. Please try again."); // Update error message
    }
    } catch (err) {
        console.error("login error:", err);
        setError("login failed. Please try again.");
    }
    };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
      <p>
        Don't have an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          style={{ color: "blue", cursor: "pointer" }}
        >
          Sign Up
        </span>
      </p>
    </div>
  );
}

export default Login;
