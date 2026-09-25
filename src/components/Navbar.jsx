import { useState } from "react";
import "./Navbar.css";

const NAV_LINKS = ["Features", "Pricing", "Blog", "About us"];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__inner container">
        <a href="#" className="navbar__logo">
          <svg
            className="navbar__logo-icon"
            width="22"
            height="20"
            viewBox="0 0 22 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8.2 0L16.4 14H0L8.2 0Z" fill="#232E26" />
            <path d="M14.8 5.5L22 18H7.6L14.8 5.5Z" fill="#232E26" />
          </svg>
          <span>TrailHive</span>
        </a>

        <nav className="navbar__links">
          {NAV_LINKS.map((link) => (
            <a key={link} href="#">
              {link}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="#" className="btn btn--outline">
            Contact Us
          </a>
          <a href="#" className="btn btn--dark">
            Download the App
          </a>
        </div>

        <button
          type="button"
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div className={`navbar__mobile ${open ? "is-open" : ""}`}>
        {NAV_LINKS.map((link) => (
          <a key={link} href="#" onClick={() => setOpen(false)}>
            {link}
          </a>
        ))}
        <div className="navbar__mobile-actions">
          <a href="#" className="btn btn--outline">
            Contact Us
          </a>
          <a href="#" className="btn btn--dark">
            Download the App
          </a>
        </div>
      </div>
    </header>
  );
}
