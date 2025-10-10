import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/login", { // change to full URL if needed
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Login failed");
      }

      const data = await res.json();
      // store token or user as needed:
      // localStorage.setItem('token', data.token);
      setLoading(false);
      navigate("/"); // redirect to homepage on success
    } catch (error) {
      setLoading(false);
      setErr(error.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="left-panel">
          <h2>WELCOME TO</h2>
          <div className="logo">NerdByte</div>
          <p>Your one-stop solution for all your quick service needs in Sri Lanka.</p>
        </div>

        <div className="right-panel">
          <h3>Login to Quick-Junction Dashboard</h3>

          <div className="social-row">
            <button className="social facebook">Continue with Facebook</button>
            <button className="social google">Continue with Google</button>
          </div>

          <div className="or-divider">OR</div>

          <form className="auth-form" onSubmit={submit}>
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="form-row">
              <a className="forgot" href="#">Forgot Password?</a>
            </div>

            {err && <div className="error">{err}</div>}

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "LOGIN"}
            </button>

            <div className="signup-line">
              If you are a new user, <Link to="/signup">Signup here</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
