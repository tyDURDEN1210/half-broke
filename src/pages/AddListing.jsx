import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddListing() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    price: "",
    location: "",
    image: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // basic validation
    if (!form.title || !form.price || !form.location) {
      alert("Please fill all required fields");
      return;
    }

    const existing = JSON.parse(localStorage.getItem("pgs")) || [];

    const newPG = {
      ...form,
      price: Number(form.price), // 🔥 important for filtering
      id: Date.now(),
    };

    localStorage.setItem("pgs", JSON.stringify([...existing, newPG]));

    navigate("/");
  };

  return (
    <div className="container">
      <h1>Add New PG</h1>

      <div className="form-card">
        <input name="title" placeholder="PG Title" onChange={handleChange} />

        <input
          name="price"
          type="number"
          placeholder="Price"
          onChange={handleChange}
        />

        <input name="location" placeholder="Location" onChange={handleChange} />

        <input
          name="image"
          placeholder="Image URL (optional)"
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Owner Phone Number"
          onChange={handleChange}
        />

        <button onClick={handleSubmit} className="btn">
          Add Listing
        </button>
      </div>
    </div>
  );
}

export default AddListing;
