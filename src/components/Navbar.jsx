import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <h1>halfBroke.com</h1>
      <div>
        <Link to="/">Home</Link>
        <Link to="/add">Add PG</Link>
      </div>
    </nav>
  );
}

export default Navbar;