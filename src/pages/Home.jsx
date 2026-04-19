import { useEffect, useState } from "react";
import PGCard from "../components/PGCard";

function Home() {
  const [pgs, setPgs] = useState([]);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("pgs")) || [];
    setPgs(data);
  }, []);

  const filteredPGs = pgs.filter((pg) => {
    const matchesSearch =
      pg.title.toLowerCase().includes(search.toLowerCase()) ||
      pg.location.toLowerCase().includes(search.toLowerCase());

    const matchesPrice =
      maxPrice === "" || pg.price <= Number(maxPrice);

    return matchesSearch && matchesPrice;
  });

  return (
    <div className="home-page">
      <div className="home-container">

        <h1 className="heading">Find Your PG</h1>

        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search location or title..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>

        {filteredPGs.length === 0 ? (
          <p className="empty">No matching PGs found</p>
        ) : (
          <div className="grid">
            {filteredPGs.map((pg) => (
              <PGCard key={pg.id} pg={pg} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Home;