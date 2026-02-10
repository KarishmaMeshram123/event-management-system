import { useEffect, useState } from "react";
import axios from "../api/axios";

function Dashboard() {
  // 🔹 TEMP: auto set userId for booking (NO backend change)
  useEffect(() => {
    localStorage.setItem("userId", "1");
  }, []);

  const [events, setEvents] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [price, setPrice] = useState("");
  const [availableSeats, setAvailableSeats] = useState("");

  // LOAD EVENTS
  const loadEvents = async () => {
    const res = await axios.get("/events");
    setEvents(res.data);
  };

  useEffect(() => {
    loadEvents();
  }, []);

  // ADD EVENT
  const addEvent = async () => {
    try {
      await axios.post("/events", {
        title,
        description,
        location,
        date,
        price: Number(price),
        availableSeats: Number(availableSeats),
      });

      alert("Event Added Successfully");

      setTitle("");
      setDescription("");
      setLocation("");
      setDate("");
      setPrice("");
      setAvailableSeats("");

      loadEvents();
    } catch (error) {
      alert("Failed to add event");
      console.error(error);
    }
  };

  const deleteEvent = async (id) => {
  try {
    await axios.delete(`/events/${id}`);
    alert("Event Deleted");
    loadEvents();
  } catch (error) {
    alert("Failed to delete event");
    console.error(error);
  }
};


  // BOOK EVENT
  const bookEvent = async (eventId) => {
    try {
      const userId = localStorage.getItem("userId");

      await axios.post("/bookings", null, {
        params: {
          userId: userId,
          eventId: eventId,
        },
      });

      alert("Event booked successfully");
    } catch (error) {
      alert("Booking failed");
      console.error(error);
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      {/* ADD EVENT */}
      <div className="add-event">
        <h3>Add Event</h3>

        <input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <input
          type="number"
          placeholder="Available Seats"
          value={availableSeats}
          onChange={(e) => setAvailableSeats(e.target.value)}
        />

        <button onClick={addEvent}>Add Event</button>
      </div>

      {/* EVENT LIST */}
      <h3>Event List</h3>

      {events.map((e) => (
        <div key={e.id} className="event-row">
          <div>
            <p><b>Title:</b> {e.title}</p>
            <p><b>Description:</b> {e.description}</p>
            <p><b>Location:</b> {e.location}</p>
            <p><b>Date:</b> {e.date}</p>
            <p><b>Price:</b> ₹{e.price}</p>
            <p><b>Available Seats:</b> {e.availableSeats}</p>
          </div>

          <div>
            <button className="delete-btn" onClick={() => deleteEvent(e.id)}>
              Delete
            </button>

            <button
              style={{ marginLeft: "10px" }}
              onClick={() => bookEvent(e.id)}
            >
              Book Event
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Dashboard;
