import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddListing from "./pages/AddListing";
import Details from "./pages/Details";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddListing />} />
        <Route path="/pg/:id" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
