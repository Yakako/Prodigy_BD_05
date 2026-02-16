# 🏨 Hotel Booking Platform – Backend API

**ProDigy Infotech – Task 05**
**Comillas Negras | Mini Project**

---

## 📌 Project Overview

This project is a fully functional **Backend API for a Hotel Booking Platform** that allows users to:

* Register and securely authenticate
* Create, update, and delete their own hotel room listings
* Search and filter available rooms
* Book hotel rooms
* Manage personal bookings

The API ensures **secure authentication, proper validation, and prevention of double booking** using a relational database.

---

## 🚀 Tech Stack

* **Backend:** Node.js + Express.js
* **Database:** PostgreSQL
* **ORM:** Sequelize
* **Authentication:** JWT (JSON Web Token)
* **Password Security:** bcrypt
* **Validation:** express-validator

---

## 🔐 Features

### 1️⃣ Authentication System

* User Registration
* User Login
* JWT-based authentication
* Password hashing
* Protected routes

---

### 2️⃣ Room Management

Authenticated users can:

* Create hotel room listings
* Update their own listings
* Delete their own listings
* View available rooms

Each room includes:

* Title
* Description
* Price per night
* Location
* Owner reference

---

### 3️⃣ Room Search & Filtering

Users can search rooms based on:

* Check-in date
* Check-out date
* Location
* Price range

The system:

* Checks availability
* Prevents double booking
* Returns only available rooms

---

### 4️⃣ Booking System

Users can:

* Book available rooms
* View their bookings
* Prevent overlapping reservations

---

## 📡 API Endpoints

### 🔐 Authentication

| Method | Endpoint             | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Login user        |

---

### 🏨 Rooms

| Method | Endpoint         | Description                     |
| ------ | ---------------- | ------------------------------- |
| POST   | `/api/rooms`     | Create new room (Auth required) |
| GET    | `/api/rooms`     | Get all rooms                   |
| PUT    | `/api/rooms/:id` | Update own room                 |
| DELETE | `/api/rooms/:id` | Delete own room                 |

---

### 📅 Bookings

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| POST   | `/api/bookings` | Book a room       |
| GET    | `/api/bookings` | Get user bookings |

---

## 🗄️ Database Schema

### Users Table

* id
* name
* email (unique)
* password (hashed)

### Rooms Table

* id
* title
* description
* price
* location
* ownerId (Foreign Key)

### Bookings Table

* id
* userId (Foreign Key)
* roomId (Foreign Key)
* checkIn
* checkOut

---

## 🔒 Security Features

* JWT Authentication Middleware
* Password hashing with bcrypt
* Authorization (users manage only their own rooms)
* Input validation
* Proper HTTP status codes
* Centralized error handling
* Sequelize ORM to prevent SQL injection

---

## ⚙️ Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/Yakako/Prodigy_BD_05.git
cd Prodigy_BD_05
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Create Environment File

Create `.env` file:

```
PORT=5000
DB_NAME=hotel_db
DB_USER=postgres
DB_PASSWORD=yourpassword
DB_HOST=localhost
JWT_SECRET=your_secret_key
```

### 4️⃣ Run Server

```bash
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

## 🧪 Testing

You can test the API using:

* Postman
* Thunder Client
* curl

---

## 📈 Future Improvements

* Payment Integration (Stripe)
* Admin Dashboard
* Image Upload Support
* Room Reviews & Ratings
* Pagination & Sorting
* Role-Based Access Control

---

## 👩‍💻 Author

**PRUONH KIMLIYA**
