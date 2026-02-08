import { useParams } from "react-router-dom";
import axios from "../api/axios";

function BookEvent() {
  const { id } = useParams();

  const book = async () => {
    await axios.post(`/bookings/${id}`);
    alert("Booked Successfully!");
  };

  return (
    <div>
      <h2>Book Event</h2>
      <button onClick={book}>Confirm Booking</button>
    </div>
  );
}

export default BookEvent;
