import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/common/ScrollToTop.jsx";

import HomePage from "./pages/HomePage.jsx";
import ThePatchPage from "./pages/ThePatchPage.jsx";
import ExperiencesPage from "./pages/ExperiencesPage.jsx";
import HowItWorksPage from "./pages/HowItWorksPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiences" element={<ExperiencesPage />} />
        <Route path="/patch" element={<ThePatchPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;