import { Link } from "react-router-dom";


const Home = () => {
  const events = [
    {
      name: "Music Concert",
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2"
    },
    {
      name: "Tech Conference",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df"
    },
    {
      name: "Wedding Event",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
      name: "Corporate Meetup",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
    }
  ];

  return (
    <>

      <div style={styles.page}>

        {/* INFO SECTION */}
        <div style={styles.info}>
          <h1>Welcome to Event Management System</h1>
          <p>
            Plan, manage and book events effortlessly.
            Your one-stop platform for all kinds of events.
          </p>

          {/* LOGIN / REGISTER BUTTONS */}
          <div style={{ marginTop: "25px" }}>
            <Link to="/login">
              <button style={styles.authBtn}>Login</button>
            </Link>

            <Link to="/register">
              <button style={styles.authBtn}>Register</button>
            </Link>
          </div>
        </div>

        {/* SLIDER */}
        <div style={styles.sliderWrapper}>
          <div style={styles.slider}>
            {[...events, ...events].map((e, i) => (
              <div key={i} style={styles.card}>
                <img src={e.image} alt={e.name} style={styles.image} />
                <h3>{e.name}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* ABOUT SECTION */}
        <div style={styles.info1}>
          <div style={styles.infoCard}>
            <h3>Easy Booking</h3>
            <p>Book events quickly with a simple interface.</p>
          </div>

          <div style={styles.infoCard}>
            <h3>Multiple Events</h3>
            <p>Concerts, conferences, weddings & more.</p>
          </div>

          <div style={styles.infoCard}>
            <h3>Secure Platform</h3>
            <p>Authentication & authorization enabled.</p>
          </div>
        </div>

      </div>
    </>
  );
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundImage:
      "url('https://img.freepik.com/free-vector/ombre-blue-curve-light-blue-background_53876-173299.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    paddingBottom: "60px"
  },

  info: {
    maxWidth: "750px",
    margin: "60px auto",
    padding: "40px",
    textAlign: "center",
    background: "rgba(255,255,255,0.88)",
    borderRadius: "12px"
  },

  authBtn: {
    padding: "10px 24px",
    margin: "10px",
    background: "#0a2540",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "16px"
  },

  sliderWrapper: {
    overflow: "hidden",
    width: "100%",
    marginTop: "40px"
  },

  slider: {
    display: "flex",
    gap: "25px",
    width: "max-content",
    animation: "scroll 25s linear infinite"
  },

  card: {
    width: "260px",
    background: "#fff",
    borderRadius: "12px",
    padding: "15px",
    textAlign: "center",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
  },

  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
    borderRadius: "10px"
  },

  info1: {
    display: "flex",
    justifyContent: "space-around",
    padding: "50px",
    marginTop: "40px"
  },

  infoCard: {
    maxWidth: "260px",
    textAlign: "center",
    lineHeight: "1.6"
  }
};

export default Home;