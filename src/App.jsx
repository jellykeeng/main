import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/GlobalStyles";
import ScrollToTop from "./components/common/ScrollToTop";

import HomePage from "./pages/HomePage/HomePage";
import ThePatchPage from "./pages/ThePatchPage/ThePatchPage";
import ExperiencesPage from "./pages/ExperiencesPage/ExperiencesPage";
import HowItWorksPage from "./pages/HowItWorksPage/HowItWorksPage";
import AccountPage from "./pages/AccountPage/AccountPage";
import AboutPage from "./pages/AboutPage/AboutPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/experiences" element={<ExperiencesPage />} />
          <Route path="/patch" element={<ThePatchPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;