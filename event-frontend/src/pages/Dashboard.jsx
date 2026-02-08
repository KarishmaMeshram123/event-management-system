import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Dashboard() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get("/events").then((res) => setEvents(res.data));
  }, []);

  return (
    <div>
      <Navbar />
      <h2>Events</h2>

      {events.map((e) => (
        <div key={e.id}>
          <h3>{e.title}</h3>
          <p>{e.description}</p>
          <Link to={`/book/${e.id}`}>Book</Link>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
