import "./style/global.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Search from "./pages/Search";
import Chat from "./pages/Chat";
import Profile from "./pages/Profile";
import LoginModal from "./components/LoginModal";

function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/search" element={<Search />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<LoginModal/>} />
      </Routes>
    </div>
  );
}

export default App;