import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <Link to="/dashboard">Dashboard</Link> |{" "}
      <button onClick={logout}>Logout</button>
      <hr />
    </div>
  );
}

export default Navbar;
