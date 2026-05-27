import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const COLUMNS = [
  {
    title: "Product",
    links: [
      { label: "Experiences", to: "/experiences" },
      { label: "The Patch", to: "/patch" },
      { label: "How It Works", to: "/how-it-works" },
      { label: "Pricing", to: "/patch" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Ethics & Safety", to: "/about" },
      { label: "Research", to: "/about" },
      { label: "Careers", to: "/about" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", to: "#" },
      { label: "Safety Guidelines", to: "#" },
      { label: "Contact", to: "#" },
      { label: "FAQ", to: "#" },
    ],
  },
];

const Footer = () => (
  <footer className="relative border-t border-[rgba(139,92,246,0.1)] py-20 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-12 mb-16">
        <div>
          <Link to="/" className="mb-6 inline-block">
            <img src={logo} alt="DreamNet" className="h-24 w-auto" />
          </Link>
          <p className="opacity-60 text-sm leading-relaxed">
            Expanding human experience through advanced neural technology
          </p>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="mb-4 text-sm opacity-90">{col.title}</h4>
            <ul className="space-y-3 text-sm opacity-60">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="hover:opacity-100 transition-opacity duration-500"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="pt-8 border-t border-[rgba(139,92,246,0.1)] flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm opacity-40">
          © 2026 DreamNet. All experiences reserved.
        </p>
        <div className="flex gap-6 text-sm opacity-40">
          {["Privacy", "Terms", "Consent"].map((t) => (
            <a key={t} href="#" className="hover:opacity-70 transition-opacity duration-500">
              {t}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;