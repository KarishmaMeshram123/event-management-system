import { useState } from "react";
import { motion } from "framer-motion";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon 😊");
    setFormData({ name: "", email: "", message: "" });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      style={styles.container}
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        style={styles.heading}
      >
        Contact Us
      </motion.h1>

      <p style={styles.subText}>
        Have questions or ideas? We’d love to hear from you!
      </p>

      <motion.form
        onSubmit={handleSubmit}
        style={styles.form}
        whileHover={{ scale: 1.02 }}
      >
        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <motion.input
          whileFocus={{ scale: 1.05 }}
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <motion.textarea
          whileFocus={{ scale: 1.05 }}
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          style={styles.textarea}
        ></motion.textarea>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          style={styles.button}
        >
          Send Message 🚀
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

const styles = {
  container: {
    minHeight: "100vh",
    background: "#f5f7fb",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "80px",
  },
  heading: {
    fontSize: "36px",
    fontWeight: "bold",
  },
  subText: {
    marginBottom: "30px",
    fontSize: "16px",
    color: "#555",
    fontWeight: "bold",
  },
  form: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    width: "350px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontWeight: "bold",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    height: "100px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};
export default Contact; 
