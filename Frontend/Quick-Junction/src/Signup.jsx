import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      const res = await fetch("/api/auth/signup", { // change to your endpoint
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Signup failed");
      }

      // success
      setLoading(false);
      navigate("/login");
    } catch (error) {
      setLoading(false);
      setErr(error.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card small">
        <div className="left-panel sign-left">
          <h2>Create Account</h2>
          <p>Join Quick Junction.lk — it's quick and free.</p>
        </div>

        <div className="right-panel">
          <form className="auth-form" onSubmit={submit}>
            <input required placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
            <input required type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input required type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />

            {err && <div className="error">{err}</div>}

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Signing up..." : "SIGN UP"}
            </button>

            <div style={{ marginTop: 10 }}>
              Already a user? <a href="/login">Login</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
