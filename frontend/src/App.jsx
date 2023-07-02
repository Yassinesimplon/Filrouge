import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Heading from './components/Heading'
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Events from "./pages/Events";
import Careers from "./pages/Careers";
import Calander from "./pages/Calander";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import Registration from "./pages/regestration/Registration";
import Login from "./pages/login/Login";
import Postproject from "./pages/postproject/Postproject";
import Apply from "./pages/APPLY/Apply";
import Profile from "./pages/profile/Profile";





function App() {
  const [darkMode, setDarkMode] = useState(false);

  function handleToggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      {/* <h1>CineStream</h1> */}
      <button onClick={handleToggleDarkMode}>
        {darkMode ? "Passer en mode clair" : "Passer en mode sombre"}
      </button>
      <Heading />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/:projectId" element={<Apply/>} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/events" element={<Events />} />
        <Route path="/calander" element={<Calander />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Postproject" element={<Postproject />} />
        <Route path="/Apply" element={<Apply />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
