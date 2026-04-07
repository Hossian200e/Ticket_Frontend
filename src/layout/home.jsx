import React, { useState, useEffect } from "react";

const Home = () => {
  const [notification, setNotification] = useState("");

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  const handleClick = () => {
    setNotification("🔔 Welcome to EMS Ticket System! Please login to continue.");
  };

  return (
    <div style={styles.page}>
      <div style={styles.blob1}></div>
      <div style={styles.blob2}></div>

      <div style={styles.card}>
        <div style={styles.headerBadge}>EMS • Education System</div>

        <h1 style={styles.title}>
          Education Management System <br />
          <span style={styles.highlight}>Ticket Portal</span>
        </h1>

        <p style={styles.subtitle}>
          Report institute issues, track progress, and resolve problems faster
          with a smart ticket management system.
        </p>

        <div style={styles.features}>
          <div style={styles.featureBox}>📌 Submit Tickets</div>
          <div style={styles.featureBox}>⚡ Fast Response</div>
          <div style={styles.featureBox}>📊 Track Status</div>
        </div>

        {notification && (
          <div style={styles.notification}>{notification}</div>
        )}

        <div style={styles.buttonGroup}>
          <button
            style={styles.primaryBtn}
            onClick={handleClick}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            🔔 Notification
          </button>

          <a
            href="/login"
            style={styles.loginBtn}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-2px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0px)")
            }
          >
            🔐 Login
          </a>
        </div>

        <p style={styles.footer}>© EMS Ticket System • All rights reserved</p>
      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "clamp(12px, 3vw, 24px)",
    fontFamily: "'Inter', sans-serif",
    background: "linear-gradient(135deg, #0f172a, #1e293b, #0f172a)",
    position: "relative",
    overflow: "hidden",
  },

  blob1: {
    position: "absolute",
    width: "clamp(180px, 30vw, 300px)",
    height: "clamp(180px, 30vw, 300px)",
    background: "rgba(59,130,246,0.4)",
    borderRadius: "50%",
    filter: "blur(80px)",
    top: "10%",
    left: "10%",
  },

  blob2: {
    position: "absolute",
    width: "clamp(160px, 25vw, 250px)",
    height: "clamp(160px, 25vw, 250px)",
    background: "rgba(16,185,129,0.4)",
    borderRadius: "50%",
    filter: "blur(80px)",
    bottom: "10%",
    right: "10%",
  },

  card: {
    width: "100%",
    maxWidth: "720px",
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
    backdropFilter: "blur(20px)",
    borderRadius: "20px",
    padding: "clamp(18px, 4vw, 40px)",
    textAlign: "center",
    boxShadow: "0 25px 60px rgba(0,0,0,0.4)",
    zIndex: 2,
  },

  headerBadge: {
    display: "inline-block",
    padding: "6px 14px",
    borderRadius: "50px",
    background: "rgba(59,130,246,0.2)",
    color: "#60a5fa",
    fontSize: "12px",
    marginBottom: "15px",
    border: "1px solid rgba(59,130,246,0.3)",
  },

  title: {
    fontSize: "clamp(20px, 5vw, 38px)",
    fontWeight: "800",
    color: "#fff",
    marginBottom: "12px",
    lineHeight: "1.2",
  },

  highlight: {
    color: "#38bdf8",
  },

  subtitle: {
    fontSize: "clamp(13px, 2.5vw, 15px)",
    color: "rgba(255,255,255,0.75)",
    marginBottom: "20px",
    lineHeight: "1.6",
  },

  features: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },

  featureBox: {
    padding: "10px 14px",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.08)",
    color: "#fff",
    fontSize: "13px",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  notification: {
    background: "rgba(59,130,246,0.15)",
    border: "1px solid rgba(59,130,246,0.4)",
    padding: "12px",
    borderRadius: "12px",
    marginBottom: "18px",
    fontSize: "14px",
    color: "#93c5fd",
  },

  buttonGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "12px",
    flexWrap: "wrap",
    marginTop: "10px",
  },

  primaryBtn: {
    padding: "12px 22px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    color: "#fff",
    background: "linear-gradient(135deg, #3b82f6, #2563eb)",
    transition: "0.3s",
    minWidth: "150px",
  },

  loginBtn: {
    padding: "12px 22px",
    borderRadius: "12px",
    fontWeight: "600",
    color: "#fff",
    textDecoration: "none",
    background: "linear-gradient(135deg, #10b981, #059669)",
    transition: "0.3s",
    display: "inline-block",
    minWidth: "150px",
  },

  footer: {
    marginTop: "25px",
    fontSize: "12px",
    color: "rgba(255,255,255,0.5)",
  },
};

export default Home;