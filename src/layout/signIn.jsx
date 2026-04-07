import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setNotification("❌ Please fill all fields");
      return;
    }

    setNotification("✅ Account created successfully!");
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.badge}>EMS Portal</div>

        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>Sign up for EMS Dashboard</p>

        {notification && <div style={styles.notification}>{notification}</div>}

        <form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.signUpBtn}>
            🆕 Sign Up
          </button>
        </form>

        <button
          onClick={() => navigate("/login")}
          style={styles.loginLinkBtn}
        >
          🔙 Back to Login
        </button>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    fontFamily: "'Inter', sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "380px",
    padding: "35px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    backdropFilter: "blur(18px)",
    textAlign: "center",
  },

  badge: {
    padding: "5px 12px",
    borderRadius: "50px",
    background: "rgba(16,185,129,0.2)",
    color: "#34d399",
    fontSize: "12px",
    marginBottom: "12px",
    display: "inline-block",
  },

  title: {
    fontSize: "24px",
    fontWeight: "800",
    color: "#fff",
  },

  subtitle: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.7)",
    marginBottom: "15px",
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
  },

  signUpBtn: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "12px",
    border: "none",
    background: "linear-gradient(135deg, #10b981, #059669)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
  },

  loginLinkBtn: {
    width: "100%",
    marginTop: "10px",
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "transparent",
    color: "#fff",
    cursor: "pointer",
  },

  notification: {
    background: "rgba(16,185,129,0.15)",
    border: "1px solid rgba(16,185,129,0.4)",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    color: "#6ee7b7",
    fontSize: "13px",
  },
};

export default SignIn;