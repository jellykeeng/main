import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Experiences", path: "/experiences" },
  { label: "The Patch", path: "/patch" },
  { label: "How It Works", path: "/how-it-works" },
  { label: "About", path: "/about" },
];

const Header = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
        ? "bg-[#000814]/80 backdrop-blur-xl border-b border-purple-500/15"
        : "bg-transparent border-b border-transparent"
        }`}
    >
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/">
<img src={logo} alt="DreamNet" className="h-20 w-auto object-contain mt-4" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className={`text-sm relative group transition-opacity duration-500 ${pathname === item.path ? "opacity-100" : "opacity-70 hover:opacity-100"
                }`}
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground/30 group-hover:w-full transition-all duration-700" />
            </Link>
          ))}
        </div>

        <Link
          to="/account"
          className="hidden md:inline-flex px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm shadow-lg shadow-purple-500/30 transition-all duration-700 hover:opacity-90"
        >
          Account
        </Link>
      </div>
    </nav>
  );
};

export default Header;