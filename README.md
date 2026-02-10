# Event Management System

## 📌 Project Overview
The Event Management System is a full-stack web application that allows administrators to create and manage events, and users to view and book available events.  
The project is developed as a group academic project following proper software development practices.

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Axios
- React Router
- CSS

### Backend
- Spring Boot
- REST APIs
- MySQL
- JPA / Hibernate

---

## ✨ Features
- Admin can add, view, and delete events
- Events contain:
  - Event Name
  - Description
  - Location
  - Date
  - Price
  - Available Seats
- Users can view available events
- Users can book events
- Role-based logic handled at application level

---

## 📂 Project Structure

event-management-system/
│
├── backend/
│ ├── src/
│ └── pom.xml
│
├── frontend/
│ ├── src/
│ ├── package.json
│ └── vite.config.js
│
└── README.md

---

## 🚀 How to Run the Project

### Backend Setup
1. Open backend folder
2. Configure MySQL database
3. Run Spring Boot application
4. Backend runs on:
http://localhost:8080

---

### Frontend Setup
1. Open frontend folder
2. Install dependencies:

3. Run frontend:
4. Frontend runs on:
http://localhost:5173

---

## 🔗 API Endpoints

### Events
- GET `/events`
- POST `/events`
- DELETE `/events/{id}`

### Bookings
- POST `/bookings?userId={id}&eventId={id}`

### Authentication
- POST `/auth/register`
- POST `/auth/login`

---

## 📄 License
This project is developed for academic purposes only.


