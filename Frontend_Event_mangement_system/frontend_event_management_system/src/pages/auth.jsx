import { useState } from "react";

const Auth = () => {
  const [active, setActive] = useState("login");

  return (
    <div style={styles.page}>
      <div style={styles.card}>

        {/* TABS */}
        <div style={styles.tabBar}>
          <button
            onClick={() => setActive("login")}
            style={active === "login" ? styles.activeTab : styles.tab}
          >
            Login
          </button>
          <button
            onClick={() => setActive("register")}
            style={active === "register" ? styles.activeTab : styles.tab}
          >
            Register
          </button>
        </div>

        {/* LOGIN FORM */}
        {active === "login" && (
          <div style={styles.form}>
            <input style={styles.input} placeholder="User ID" />
            <input style={styles.input} placeholder="Password" type="password" />
            <button style={styles.mainBtn}>Login</button>
          </div>
        )}

        {/* REGISTER FORM */}
        {active === "register" && (
          <div style={styles.form}>
            <input style={styles.input} placeholder="User ID" />
            <input style={styles.input} placeholder="Name" />
            <input style={styles.input} placeholder="Password" type="password" />
            <input style={styles.input} placeholder="Re-enter Password" type="password" />
            <input style={styles.input} placeholder="Email" />
            <input style={styles.input} placeholder="Student" />
            <div style={styles.btnRow}>
              <button style={styles.mainBtn}>Register</button>
              <button style={styles.secondaryBtn}>Home</button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #6a85f1, #8fd3f4)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },

  card: {
    width: "380px",
    background: "#fff",
    padding: "25px",
    borderRadius: "6px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  },

  tabBar: {
    display: "flex",
    marginBottom: "20px"
  },

  tab: {
    flex: 1,
    padding: "10px",
    border: "none",
    background: "#f1f5f9",
    cursor: "pointer",
    fontWeight: "600"
  },

  activeTab: {
    flex: 1,
    padding: "10px",
    border: "none",
    background: "#34d399",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600"
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "14px"
  },

  input: {
    border: "none",
    borderBottom: "1px solid #34d399",
    padding: "8px",
    outline: "none"
  },

  mainBtn: {
    background: "#34d399",
    border: "none",
    padding: "8px",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600"
  },

  secondaryBtn: {
    background: "#e5e7eb",
    border: "none",
    padding: "8px",
    cursor: "pointer"
  },

  btnRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px"
  }
};

export default Auth;