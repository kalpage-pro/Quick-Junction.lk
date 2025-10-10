import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    setLoading(true);

    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";
      const payload = isLogin
        ? { email, password }
        : { name, email, password };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || `${isLogin ? "Login" : "Signup"} failed`);
      }

      setLoading(false);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setErr(error.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <div className="left-panel">
          <h2>{isLogin ? "WELCOME BACK" : "CREATE ACCOUNT"}</h2>
          <p>{isLogin ? "Login to Quick Junction.lk" : "Join Quick Junction.lk — it’s free."}</p>
        </div>

        <div className="right-panel">
          <h3>{isLogin ? "Login" : "Signup"}</h3>
          <form className="auth-form" onSubmit={handleSubmit}>
            {!isLogin && (
              <input
                required
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}
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

            {err && <div className="error">{err}</div>}

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? (isLogin ? "Logging in..." : "Signing up...") : isLogin ? "LOGIN" : "SIGN UP"}
            </button>

            <div className="toggle-text">
              {isLogin ? (
                <>
                  New user?{" "}
                  <span
                    className="toggle-link"
                    onClick={() => setIsLogin(false)}
                  >
                    Create an account
                  </span>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <span
                    className="toggle-link"
                    onClick={() => setIsLogin(true)}
                  >
                    Login here
                  </span>
                </>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
