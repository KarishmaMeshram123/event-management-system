import { useState } from "react";
import axios from "../api/axios";
import { useNavigate, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    try {
      const res = await axios.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data);
      alert("Login Successful");
      navigate("/dashboard");
    } catch {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="auth-container">
      {/* LEFT SIDE */}
      <div className="auth-left">
        <h1>Event Management System</h1>
        <p>Plan • Organize • Book events easily</p>
      </div>

      {/* RIGHT SIDE */}
      <div className="auth-right">
        <div className="auth-card">
          <h2>Login</h2>

          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={login}>Login</button>

          <p className="auth-switch">
            New user? <Link to="/register">Register</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;