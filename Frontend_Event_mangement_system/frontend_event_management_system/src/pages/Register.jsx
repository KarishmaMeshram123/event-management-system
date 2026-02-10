import { useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
  });

  const register = async () => {
    try {
      await axios.post("/auth/register", data);
      alert("Registered Successfully");
    } catch {
      alert("Registration Failed");
    }
  };

  return (
    <div className="auth-container">
      {/* LEFT SIDE */}
      <div className="auth-left">
        <h1>Event Management System</h1>
        <p>Create account & start booking events</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">
        <div className="auth-card">
          <h2>Register</h2>

          <input
            placeholder="Name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setData({ ...data, password: e.target.value })}
          />

          <button onClick={register}>Register</button>

          <p className="auth-switch">
            Already registered? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;