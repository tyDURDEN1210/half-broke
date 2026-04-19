# 🏠 halfBroke — Smart PG Finder

A modern React-based web application that helps students find affordable PG (Paying Guest) accommodations **without brokers**, featuring real-time filtering, direct contact, and full CRUD operations.

---

## 🚀 Live Features

* 🔍 Search PGs by **location or title**
* 💰 Filter listings by **maximum price**
* ↕️ Sort listings (**Low → High / High → Low**)
* ➕ Add new PG listings
* 📄 View detailed listing pages
* ✏️ **Edit listings (modal-based UI)**
* 🗑️ Delete listings
* ❤️ Mark PGs as favorites
* 📞 Contact owner directly (Call / WhatsApp)
* 🏠 Simulated booking feature
* 🧠 Optimized filtering using **useMemo**
* 💾 Persistent data using **LocalStorage**
* 🎨 Clean **Glassmorphism UI**

---

## 🧠 Problem It Solves

Students often struggle to find PG accommodations due to:

* High broker fees
* Outdated or unreliable listings
* Lack of direct owner contact

👉 **halfBroke** provides a simple, transparent solution by enabling:

* Direct owner communication
* Easy listing management
* Smart filtering and sorting

---

## 🛠️ Tech Stack

* **React (Vite)**
* **JavaScript (ES6+)**
* **React Router DOM**
* **Vanilla CSS (Glass UI)**
* **LocalStorage (simulated backend)**

---

## 📂 Project Structure

```id="t1x6yd"
src/
 ├── components/
 │    ├── Navbar.jsx
 │    ├── PGCard.jsx
 │
 ├── pages/
 │    ├── Home.jsx
 │    ├── AddListing.jsx
 │    ├── Details.jsx
 │
 ├── App.jsx
 ├── main.jsx
 ├── index.css
```

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash id="l6m1wt"
git clone <your-repo-link>
cd half-broke
```

### 2. Install dependencies

```bash id="r4kx7n"
npm install
```

### 3. Run the development server

```bash id="6jjq2t"
npm run dev
```

### 4. Open in browser

```id="fjx2x7"
http://localhost:5173
```

---

## ✨ Key Features Explained

### 🔍 Smart Filtering & Sorting

* Search by title or location
* Filter by maximum price
* Sort listings by price

---

### 🧾 Full CRUD Operations

* **Create** → Add new PG listings
* **Read** → View detailed listing
* **Update** → Edit via modal UI
* **Delete** → Remove listings

---

### ❤️ Favorites System

* Mark/unmark listings as favorite
* Stored persistently in LocalStorage

---

### 📞 Contact Owner

* Direct call using `tel:`
* WhatsApp integration using `wa.me`

---

### 🧠 Performance Optimization

* Implemented **useMemo** to optimize filtering and sorting
* Prevents unnecessary re-renders

---

### 💾 Data Persistence

* Uses LocalStorage to simulate backend storage
* Data remains after refresh

---

## 🎯 Future Improvements

* 🔐 User authentication
* ☁️ Backend integration (Firebase / Node.js)
* 🗺️ Map integration (Google Maps)
* 📱 Mobile responsiveness improvements
* ⭐ Reviews & ratings system

---

## 📸 Screenshots

*(Add screenshots of Home, Details, Edit Modal here)*

---

## 🧑‍💻 Author

**Ash**

---

## 📌 Notes

This project demonstrates:

* Strong understanding of React fundamentals
* Component-based architecture
* State management & hooks
* Real-world problem solving

---


