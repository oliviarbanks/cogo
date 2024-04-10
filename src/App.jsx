import "./style/global.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Trips from "./pages/Trips";
import Profile from "./pages/Profile";

function App() {
  return (
    <>
  <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/Trips" element={<Trips />} />
          <Route path="/Profile" element={<Profile />} />
        </Routes>
    
    </>
  );
}

export default App;
