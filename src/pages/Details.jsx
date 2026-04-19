import { useParams } from "react-router-dom";
import { useState } from "react";

function Details() {
  const { id } = useParams();

  const data = JSON.parse(localStorage.getItem("pgs")) || [];
  const pg = data.find((p) => p.id == id);

  const [isEditing, setIsEditing] = useState(false);
  const [form, setForm] = useState({
    title: pg?.title || "",
    price: pg?.price || "",
    location: pg?.location || "",
    phone: pg?.phone || "",
  });

  if (!pg) return <p>PG not found</p>;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveChanges = () => {
    const updated = data.map((p) =>
      p.id == id
        ? {
            ...p,
            title: form.title,
            price: Number(form.price),
            location: form.location,
            phone: form.phone,
          }
        : p
    );

    localStorage.setItem("pgs", JSON.stringify(updated));
    setIsEditing(false);
    window.location.reload(); // simple refresh
  };

  return (
    <div className="details-page">
      <div className="details-card">

        <img src={pg.image} className="detail-img" />

        <div className="details-content">
          <h2>{pg.title}</h2>
          <p><strong>₹{pg.price}</strong> / month</p>
          <p className="location">{pg.location}</p>

          <div className="action-buttons">
            <a href={`tel:${pg.phone}`} className="btn primary">
              📞 Call
            </a>

            <a
              href={`https://wa.me/${pg.phone}`}
              target="_blank"
              rel="noreferrer"
              className="btn secondary"
            >
              💬 WhatsApp
            </a>

            <button
              className="btn outline"
              onClick={() => alert("Booking request sent!")}
            >
              🏠 Book
            </button>

            <button
              className="btn"
              onClick={() => setIsEditing(true)}
            >
              ✏️ Edit
            </button>
          </div>
        </div>
      </div>

      {/* 🔥 EDIT MODAL */}
      {isEditing && (
        <div className="modal">
          <div className="modal-card">

            <h2>Edit Listing</h2>

            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Title"
            />

            <input
              name="price"
              type="number"
              value={form.price}
              onChange={handleChange}
              placeholder="Price"
            />

            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Location"
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone"
            />

            <div className="modal-actions">
              <button className="btn primary" onClick={saveChanges}>
                Save
              </button>

              <button
                className="btn outline"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}

export default Details;