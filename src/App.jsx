import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop.jsx";

import HomePage from "./pages/HomePage/HomePage.jsx";
import ThePatchPage from "./pages/ThePatchPage/ThePatchPage.jsx";
import ExperiencesPage from "./pages/ExperiencesPage/ExperiencesPage.jsx";
import HowItWorksPage from "./pages/HowItWorksPage/HowItWorksPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/patch" element={<ThePatchPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;