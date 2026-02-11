import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import About from "./components/About";
import PrivateRoute from "./components/PrivateRoute";
import Contact from "./components/Contact";


function App() {
  return (
  <BrowserRouter>
      <Navbar />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />   {/* 👈 ABOUT ADDED */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
         <Route path="/contact" element={<Contact />} />

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;