import { useParams, useNavigate } from "react-router-dom";
import axios from "../api/axios";

function BookEvent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const book = async () => {
    try {
      const userId = localStorage.getItem("userId") || 1;

      await axios.post("/bookings", null, {
        params: {
          userId: userId,
          eventId: id,
        },
      });

      alert("Event booked successfully!");
      navigate("/dashboard");
    } catch {
      alert("Booking failed");
    }
  };

  return (
    <div className="center">
      <h2>Confirm Booking</h2>
      <button onClick={book}>Confirm</button>
    </div>
  );
}

export default BookEvent;