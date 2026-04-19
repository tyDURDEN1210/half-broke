import { Link } from "react-router-dom";

function PGCard({ pg }) {
  return (
    <div className="card">
      <img src={pg.image} alt="" />

      <h3>{pg.title}</h3>
      <p>₹{pg.price}</p>
      <p>{pg.location}</p>

      <Link to={`/pg/${pg.id}`} className="btn">
        View Details
      </Link>
    </div>
  );
}

export default PGCard;