import { useState } from "react";
import axios from "../api/axios";

function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "USER",
  });

  const register = async () => {
    await axios.post("/auth/register", data);
    alert("Registered Successfully");
  };

  return (
    <div>
      <h2>Register</h2>

      <input
        placeholder="Name"
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <br />

      <input
        placeholder="Email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <br />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <br />

      <button onClick={register}>Register</button>
    </div>
  );
}

export default Register;
