import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePassword = (password) => /^(?=.*\d).{6,}$/.test(password);

  const handleSignIn = (e) => {
    e.preventDefault();

    if (!name || !email || !role || !password || !confirmPassword) {
      setNotification("❌ Please fill all fields");
      return;
    }

    if (!validateEmail(email)) {
      setNotification("❌ Invalid email format");
      return;
    }

    if (!validatePassword(password)) {
      setNotification("❌ Weak password (min 6 chars + number)");
      return;
    }

    if (password !== confirmPassword) {
      setNotification("❌ Passwords do not match");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setNotification(`✅ ${role} account created successfully!`);
      setTimeout(() => navigate("/login"), 2000);
    }, 1500);
  };

  const roleUI = {
    Admin: "🔑 You will have full control over the system.",
    "Development Team": "💻 You will manage bugs & system updates.",
    "Support Team": "🎧 You will handle tickets and user issues.",
    KAM: "📊 You will manage key accounts.",
    Institute: "🏫 You can submit and track issues.",
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.badge}>EMS Portal</div>

        <h2 style={styles.title}>Create Account</h2>
        <p style={styles.subtitle}>Sign up for EMS Dashboard</p>

        {notification && (
          <div style={styles.notification}>{notification}</div>
        )}

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

          {/* FIXED Role Selection */}
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            style={styles.select}
          >
            <option value="" style={styles.option}>Select Role</option>
            <option value="Admin" style={styles.option}>Admin</option>
            <option value="Development Team" style={styles.option}>Development Team</option>
            <option value="Support Team" style={styles.option}>Support Team</option>
            <option value="KAM" style={styles.option}>KAM</option>
            <option value="Institute" style={styles.option}>Institute</option>
          </select>

          {role && <div style={styles.roleBox}>{roleUI[role]}</div>}

          <div style={{ position: "relative" }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              style={styles.toggle}
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            style={styles.input}
          />

          <button type="submit" style={styles.signUpBtn} disabled={loading}>
            {loading ? "⏳ Creating..." : "🆕 Sign Up"}
          </button>
        </form>

        <button onClick={() => navigate("/login")} style={styles.loginLinkBtn}>
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
    maxWidth: "420px",
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

  /* FIXED SELECT STYLE */
  select: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: "#1e293b",
    color: "#fff",
    appearance: "none",
  },

  option: {
    backgroundColor: "#1e293b",
    color: "#fff",
  },

  toggle: {
    position: "absolute",
    right: "12px",
    top: "50%",
    transform: "translateY(-50%)",
    cursor: "pointer",
  },

  roleBox: {
    background: "rgba(59,130,246,0.15)",
    border: "1px solid rgba(59,130,246,0.4)",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "8px",
    color: "#93c5fd",
    fontSize: "13px",
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