import { useEffect, useMemo, useState } from "react";
import PGCard from "../components/PGCard";

function Home() {
  const [pgs, setPgs] = useState([]);
  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  useEffect(() => {
    const defaultPGs = [
      {
        id: 1,
        title: "Boys PG near Metro",
        price: 5000,
        location: "Noida",
        image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
        phone: "919876543210",
        favorite: false,
      },
      {
        id: 2,
        title: "Girls PG with WiFi",
        price: 7000,
        location: "Delhi",
        image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
        phone: "919876543210",
        favorite: false,
      },
    ];

    let stored = JSON.parse(localStorage.getItem("pgs"));

    if (!stored || stored.length === 0) {
      localStorage.setItem("pgs", JSON.stringify(defaultPGs));
      setPgs(defaultPGs);
    } else {
      setPgs(stored);
    }
  }, []);

  // 🔥 useMemo optimization
  const filteredPGs = useMemo(() => {
    let data = [...pgs];

    data = data.filter((pg) => {
      const matchesSearch =
        pg.title.toLowerCase().includes(search.toLowerCase()) ||
        pg.location.toLowerCase().includes(search.toLowerCase());

      const matchesPrice =
        !maxPrice || pg.price <= Number(maxPrice);

      return matchesSearch && matchesPrice;
    });

    if (sortOrder === "low") {
      data.sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high") {
      data.sort((a, b) => b.price - a.price);
    }

    return data;
  }, [pgs, search, maxPrice, sortOrder]);

  // 🗑 Delete
  const deletePG = (id) => {
    const updated = pgs.filter((pg) => pg.id !== id);
    setPgs(updated);
    localStorage.setItem("pgs", JSON.stringify(updated));
  };

  // ❤️ Favorite
  const toggleFavorite = (id) => {
    const updated = pgs.map((pg) =>
      pg.id === id ? { ...pg, favorite: !pg.favorite } : pg
    );
    setPgs(updated);
    localStorage.setItem("pgs", JSON.stringify(updated));
  };

  return (
    <div className="home-page">
      <div className="home-container">

        <h1>Find Your PG</h1>

        {/* FILTERS */}
        <div className="filter-bar">
          <input
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />

          <select onChange={(e) => setSortOrder(e.target.value)}>
            <option value="">Sort</option>
            <option value="low">Low → High</option>
            <option value="high">High → Low</option>
          </select>

          {/* CLEAR */}
          <button
            className="btn"
            onClick={() => {
              setSearch("");
              setMaxPrice("");
              setSortOrder("");
            }}
          >
            Clear
          </button>
        </div>

        {/* LIST */}
        {filteredPGs.length === 0 ? (
          <p>No PGs found</p>
        ) : (
          <div className="grid">
            {filteredPGs.map((pg) => (
              <PGCard
                key={pg.id}
                pg={pg}
                deletePG={deletePG}
                toggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default Home;