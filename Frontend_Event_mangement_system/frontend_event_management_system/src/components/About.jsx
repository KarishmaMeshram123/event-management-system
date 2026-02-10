import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      {/* HERO */}
      <section className="about-hero">
        <h1>About <span>Event Management System</span></h1>
        <p>
         <b>Event Management System</b> designed to
          simplify planning, organizing, and managing events efficiently.
        </p>
      </section>

      {/* WHAT WE DO */}
      <section className="about-section">
        <h2>What We Do</h2>

        <div className="about-cards">
          <div className="about-card"><b>Create and manage events easily</b></div>
          <div className="about-card"><b>Online event booking</b></div>
          <div className="about-card"><b>View upcoming and past events</b></div>
          <div className="about-card"><b>Secure event data management</b></div>
          <div className="about-card"><b>Responsive and user-friendly UI</b></div>
        </div>
      </section>

      {/* WHY US */}
      <section className="about-section light">
        <h2>Why Choose Event Management System?</h2>
        <p>
          <b>
            <h5>
           Event Management System provides a simple, secure, and efficient platform for event
            organizers and users. It reduces manual work and improves the overall
            event management experience.</h5>
          </b>
        </p>
      </section>

      {/* VISION */}
      <section className="about-section">
        <h2>Our Vision</h2>
        <p>
          <b>
            Our vision is to build a scalable and reliable event management
            platform that can be enhanced with advanced features in the future.
          </b>
        </p>
      </section>

      {/* TECH */}
      <section className="about-tech">
        <h3><b>Technologies Used</b></h3>
        <p><b>•Java Full Stack Developer </b></p>
      </section>
    </div>
  );
};

export default About;