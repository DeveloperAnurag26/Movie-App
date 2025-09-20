import "./css/App.css";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import Favorite from "./Pages/Favorite";
import Navbar from "./Components/Navbar";
import { MovieProvider } from "./contexts/MovieContext";

const App = () => {
  return (
    <MovieProvider>
      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorite />} />
        </Routes>
      </div>
    </MovieProvider>
  );
};

export default App;
