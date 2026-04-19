import { useParams } from "react-router-dom";

function Details() {
  const { id } = useParams();
  const data = JSON.parse(localStorage.getItem("pgs")) || [];

  const pg = data.find((p) => p.id == id);

  if (!pg) return <p>PG not found</p>;

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
              className="btn secondary"
            >
              💬 WhatsApp
            </a>

            <button
              className="btn outline"
              onClick={() => alert("Booking request sent!")}
            >
              🏠 Book Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Details;