import { Link } from "react-router-dom";

function PGCard({ pg, deletePG, toggleFavorite }) {
  return (
    <div className="card">

      <img src={pg.image} alt="" />

      <h3>{pg.title}</h3>
      <p>₹{pg.price}</p>
      <p>{pg.location}</p>

      <div className="card-actions">
        <Link to={`/pg/${pg.id}`} className="btn">
          View
        </Link>

        <button onClick={() => deletePG(pg.id)} className="btn danger">
          Delete
        </button>

        <button onClick={() => toggleFavorite(pg.id)} className="btn">
          {pg.favorite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}

export default PGCard;