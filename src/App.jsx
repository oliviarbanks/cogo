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
import { UserProvider } from "./components/UserProvider";
import "./App.css"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const msToMinute = 60000
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: msToMinute * 30 } }
})
function App() {
  return (
    <div className="w-screen h-screen app-background">
      <QueryClientProvider client={queryClient}>
        <UserProvider>
          <div className="w-full h-[calc(100vh-80px)]">
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
        </UserProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;