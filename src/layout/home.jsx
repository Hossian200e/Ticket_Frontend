import React, { useState } from "react";

const Home = () => {
  const [notification, setNotification] = useState("");

  const handleClick = () => {
    setNotification("🔔 Welcome to EMS Ticket System! Please login to continue.");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>
          Education Management System (EMS) Ticket
        </h1>

        <p style={styles.subtitle}>
          Welcome to EMS Ticket System. If any problem exists in your institute,
          you can report it here by submitting a detailed ticket.
        </p>

        <p style={styles.description}>
          🎯 This system helps students, teachers, and admins to track issues,
          solve problems faster, and improve communication inside the institute.
        </p>

        {notification && (
          <div style={styles.notification}>{notification}</div>
        )}

        <div style={styles.buttonGroup}>
          <button style={styles.primaryBtn} onClick={handleClick}>
            🔔 Notification
          </button>

          <a href="/login" style={styles.loginBtn}>
            🔐 Login
          </a>
        </div>
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
    background: "linear-gradient(135deg, #1e3c72, #2a5298)",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "600px",
    background: "white",
    padding: "30px",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },

  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  subtitle: {
    fontSize: "16px",
    color: "#444",
    marginBottom: "10px",
  },

  description: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "20px",
  },

  notification: {
    background: "#e6f7ff",
    border: "1px solid #91d5ff",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "15px",
    fontSize: "14px",
  },

  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },

  primaryBtn: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "8px",
    background: "#2a5298",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },

  loginBtn: {
    padding: "10px 15px",
    borderRadius: "8px",
    background: "#28a745",
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default Home;