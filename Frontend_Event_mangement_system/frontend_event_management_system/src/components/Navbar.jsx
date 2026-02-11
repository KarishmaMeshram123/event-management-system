import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div style={styles.navbar}>
      
      {/* LEFT: Logo + Title */}
      <div style={styles.left}>
        <img
          src="https://thesigndude.com/wp-content/uploads/2021/02/SIGN-DUDE-LOGOS-2020-EPIK-600x600.jpg"
          alt="Event Logo"
          style={styles.logoImg}
        />
        <h2 style={styles.logo}>
          <i>Event Management System</i>
        </h2>
      </div>

      {/* RIGHT: Links */}
      <div style={styles.navLinks}>
        <Link to="/" style={styles.link}><h2>Home</h2></Link>
        <Link to="/about" style={styles.link}><h2>About Us</h2></Link>
        <Link to="/contact" style={styles.link}><h2>Contact Us</h2></Link>

        {isLoggedIn && (
          <button onClick={handleLogout} style={styles.logoutBtn}>
          <h4>Logout</h4>  
          </button>
        )}
      </div>

    </div>
  );
};

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "5px 5px",
    background: "linear-gradient(135deg, #2563eb, #4facc9)",
    position: "sticky",
    top: 0,
    zIndex: 1000
  },

  left: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },

  logoImg: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
    borderRadius: "4px"
  },

  logo: {
    color: "white",
    fontWeight: "800",
    fontSize: "26px",
    letterSpacing: "1px"
  },

  navLinks: {
    display: "flex",
    alignItems: "center"
  },

  link: {
    color: "#ffffff",
    margin: "0 24px",
    textDecoration: "none",
    fontSize: "17px",
    fontWeight: "700",
    transition: "all 0.3s ease"
  },

  logoutBtn: {
    backgroundColor: "crimson",
    color: "#fff",
    border: "none",
    padding: "6px 12px",
    borderRadius: "6px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    marginLeft: "20px"
  }
};

export default Navbar;
