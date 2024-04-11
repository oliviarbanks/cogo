import "./style/global.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Search from "./pages/Search";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import Experience from "./pages/Experience";

function App() {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="w-full h-[calc(100vh-60px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
}

export default App;