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
    <div style={styles.container}>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>EMS Login</h2>
        <p style={styles.subtitle}>Education Management System</p>

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

          <button type="submit" style={styles.loginBtn}>
            🔐 Login
          </button>
        </form>

        <p style={styles.footer}>
          Forgot password? Contact admin
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #141e30, #243b55)",
    fontFamily: "Arial",
  },

  loginBox: {
    width: "350px",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
  },

  title: {
    fontSize: "24px",
    marginBottom: "5px",
    fontWeight: "bold",
  },

  subtitle: {
    fontSize: "13px",
    color: "#666",
    marginBottom: "20px",
  },

  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    border: "1px solid #ddd",
    borderRadius: "8px",
    outline: "none",
  },

  loginBtn: {
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    background: "#2a5298",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  notification: {
    background: "#e6f7ff",
    border: "1px solid #91d5ff",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "10px",
    fontSize: "13px",
  },

  footer: {
    marginTop: "10px",
    fontSize: "12px",
    color: "#888",
  },
};

export default Login;