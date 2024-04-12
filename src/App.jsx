import "./style/global.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Experience from "./pages/Experience";
import Results from "./pages/Results";
import LoginModal from "./components/LoginModal";

import ChatBox from './components/chat/ChatBox'



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
          <Route path="/results" element={<Results />} />
          <Route path="/login" element={<LoginModal />} />
        </Routes>
      </div>
      <Navbar />
    </div>
  );
}

export default App;