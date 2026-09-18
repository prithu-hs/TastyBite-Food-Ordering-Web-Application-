import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  // useState hooks to control the form inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    // Simple hard-coded demo check, no real backend involved
    if (username === "tastybite" && password === "tastybite123") {
      setError("");
      navigate("/home");
    } else {
      setError("Invalid username or password. Try the demo credentials below.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-logo">🍱</div>

        <h1>TastyBite</h1>
        <p className="login-subtitle">Fresh cravings, delivered fast.</p>

        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          {/* Conditional rendering: only shown when there is an error */}
          {error && <p className="login-error">{error}</p>}

          <button className="login-button" type="submit">
            Log In
          </button>
        </form>

        <div className="demo-login">
          <p>Demo Login</p>
          <span>Username: tastybite</span>
          <span>Password: tastybite123</span>
        </div>

        <p className="login-footer">🍜 Order. Track. Enjoy.</p>
      </div>
    </div>
  );
}

export default Login;
