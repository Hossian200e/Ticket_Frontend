import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setNotification("❌ Please enter email and password");
      return;
    }

    setNotification("✅ Login Successful! Welcome to EMS Dashboard");
  };

  return (
    <div style={styles.page}>
      {/* Background Blobs */}
      <div style={styles.blob1}></div>
      <div style={styles.blob2}></div>

      <div style={styles.card}>
        <div style={styles.badge}>EMS Portal</div>

        <h2 style={styles.title}>Welcome Back</h2>
        <p style={styles.subtitle}>
          Education Management System Login
        </p>

        {notification && (
          <div style={styles.notification}>{notification}</div>
        )}

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          <button
            type="submit"
            style={styles.loginBtn}
            onMouseEnter={(e) =>
              (e.target.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.target.style.transform = "translateY(0px)")
            }
          >
            🔐 Login
          </button>
        </form>

        <p style={styles.footer}>
          Forgot password? Contact administrator
        </p>
      </div>
    </div>
  );
};

const styles = {
  /* ===== PAGE BACKGROUND ===== */
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    background: "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",
    fontFamily: "'Inter', sans-serif",
    position: "relative",
    overflow: "hidden",
  },

  /* ===== BLUR BLOBS ===== */
  blob1: {
    position: "absolute",
    width: "250px",
    height: "250px",
    background: "rgba(59,130,246,0.4)",
    borderRadius: "50%",
    filter: "blur(80px)",
    top: "15%",
    left: "15%",
  },

  blob2: {
    position: "absolute",
    width: "220px",
    height: "220px",
    background: "rgba(16,185,129,0.4)",
    borderRadius: "50%",
    filter: "blur(80px)",
    bottom: "15%",
    right: "15%",
  },

  /* ===== LOGIN CARD ===== */
  card: {
    width: "100%",
    maxWidth: "380px",
    padding: "35px",
    borderRadius: "20px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    backdropFilter: "blur(18px)",
    boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
    textAlign: "center",
    zIndex: 2,
  },

  badge: {
    display: "inline-block",
    padding: "5px 12px",
    borderRadius: "50px",
    background: "rgba(59,130,246,0.2)",
    color: "#60a5fa",
    fontSize: "12px",
    marginBottom: "12px",
    border: "1px solid rgba(59,130,246,0.3)",
  },

  /* ===== TEXT ===== */
  title: {
    fontSize: "26px",
    fontWeight: "800",
    color: "#fff",
    marginBottom: "5px",
  },

  subtitle: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.7)",
    marginBottom: "20px",
  },

  /* ===== INPUT ===== */
  input: {
    width: "100%",
    padding: "12px 14px",
    margin: "8px 0",
    borderRadius: "12px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "rgba(255,255,255,0.05)",
    color: "#fff",
    outline: "none",
    fontSize: "14px",
  },

  /* ===== BUTTON ===== */
  loginBtn: {
    width: "100%",
    padding: "12px",
    marginTop: "12px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(135deg, #3b82f6, #2563eb)",
    transition: "0.3s",
  },

  /* ===== NOTIFICATION ===== */
  notification: {
    background: "rgba(59,130,246,0.15)",
    border: "1px solid rgba(59,130,246,0.4)",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "12px",
    fontSize: "13px",
    color: "#93c5fd",
  },

  footer: {
    marginTop: "15px",
    fontSize: "12px",
    color: "rgba(255,255,255,0.5)",
  },
};

export default Login;