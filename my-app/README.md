🎟️ Event Booking System

A modern **Event & Movie Ticket Booking Web Application** built with **React, TailwindCSS, Context API, and LocalStorage**.
The application allows users to browse events, select seats, and confirm bookings through an interactive cinema-style interface. Administrators can manage events including creating, editing, and deleting them.

🔗 **Live Demo**
[https://gilded-frangollo-5d0134.netlify.app/](https://gilded-frangollo-5d0134.netlify.app/)

---

🚀 Features:

🎬 Event Browsing

* Browse a list of available events with **interactive image previews**
* Filter events by status:
  * Live
  * Upcoming
  * Ended
* Search events by title or location

🎟️ Seat Booking

* Interactive cinema-style seat selection
* Clear seat status indicators:

  * ⚪ Available seats
  * 🔵 Seats booked by the current user
  * 🔴 Seats already booked by others
* Booking confirmation modal before finalizing reservations

👤 Authentication System

* User registration and login
* Role-based functionality:

  * User: Browse events and book seats
  * Admin: Manage events

🧑‍💻 Admin Capabilities

* Create new events
* Edit existing events
* Delete events
* Restore default events automatically from seed data

💾 Persistent Storage

Application data is stored locally using LocalStorage, including:

* Event information
* Booking records
* User accounts

🎨 UI / UX Design

* Fully responsive layout
* Smooth UI interactions
* TailwindCSS-based styling
* Modern card-based event display
* Interactive cinema seat map

---
🛠️ Tech Stack

| Technology   | Purpose                   |
| ------------ | ------------------------- |
| React        | Frontend framework        |
| React Router | Application routing       |
| Context API  | Global state management   |
| Tailwind CSS | Styling and layout        |
| LocalStorage | Persistent client storage |
| Lucide Icons | UI icons                  |
| UUID         | Unique ID generation      |
| Netlify      | Application deployment    |

---

📂 Project Structure


**src
│
├── components
│   ├── layout
│   │   ├── Booking.jsx
│   │   └── MainLayout.jsx
│   │
│   ├── ui
│   │   ├── Cards.jsx
│   │   ├── ConfirmModal.jsx
│   │   ├── CinemaScreen.jsx
│   │   ├── DisplayCard.jsx
│   │   ├── Slider.jsx
│   │   └── NotFound.jsx
│
├── context
│   ├── EventBooking.jsx
│   └── AuthContext.jsx
│
├── pages
│   ├── EventBooking.jsx
│   ├── BookingTicket.jsx
│   └── Login.jsx
│
├── utils
│   └── eventStatus.js
│
├── events.json
└── App.jsx**

---

⚙️ Installation

1️⃣ Clone the Repository

**bash**
git clone https://github.com/yourusername/event-booking-app.git


2️⃣ Install Dependencies

**bash**
npm install

3️⃣ Run the Development Server

**bash**
npm run dev


Open the application in your browser:
http://localhost:5173

---

📸 Application Overview

**Event List**

Browse events, filter by status, and search by title or location.

**Seat Booking Interface**

Select available seats and confirm your reservation through an interactive seat map.

**Admin Event Management**

Admins can create, edit, and manage events through the admin interface.

---

📦 Data Handling

The application includes a default seed file:
events.json


This file provides initial event data and is automatically restored if the stored data is removed.

Example structure:

**json
{
  "id": "event-id",
  "title": "Avatar: The Way of Water",
  "imageOne": "image-url",
  "imageTwo": "image-url",
  "date": "2026-03-05",
  "location": "IMAX Cinema",
  "price": "16",
  "seats": "60",
  "booked": []
}**

---

🧠 Key Concepts Demonstrated

* React **Context API state management**
* Dynamic seat generation
* Event status calculation (Live / Upcoming / Ended)
* Role-based UI rendering
* LocalStorage data persistence
* Responsive UI development with TailwindCSS

---

🌍 Deployment

The application is deployed using **Netlify**.

🔗 Live Application
[https://gilded-frangollo-5d0134.netlify.app/](https://gilded-frangollo-5d0134.netlify.app/)

---

📌 Future Improvements

Potential features to enhance the application:

* Online **payment integration**
* Real-time seat locking
* Backend database integration (MongoDB / Firebase)
* JWT-based authentication
* Event categories and filtering
* User booking history dashboard

---

👨‍💻 Author

Developed by **Dev_Life**

---

⭐ If you find this project helpful, consider giving it a **star on GitHub**.

