import { useState } from "react";
import "./Footer.css";

const APP_LINKS = ["Features", "Benefits", "Pricing", "Explore", "Trails"];
const COMPANY_LINKS = ["About", "Jobs", "Press", "Support", "Members"];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__top">
          <a href="#" className="footer__logo">
            <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.2 0L16.4 14H0L8.2 0Z" fill="#d9efde" />
              <path d="M14.8 5.5L22 18H7.6L14.8 5.5Z" fill="#d9efde" />
            </svg>
            <span>TrailHive</span>
          </a>

          <div className="footer__col">
            <h4>App</h4>
            <ul>
              {APP_LINKS.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Company</h4>
            <ul>
              {COMPANY_LINKS.map((l) => (
                <li key={l}>
                  <a href="#">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <form className="footer__subscribe" onSubmit={handleSubmit}>
            <div className="footer__subscribe-row">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn--outline-light">
                Subscribe
              </button>
            </div>
            <p className="footer__policy">
              By subscribing you agree to with our{" "}
              <a href="#">Privacy Policy</a>
            </p>
          </form>
        </div>

        <div className="footer__bottom">
          <p>© 2023 TrailHive. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
          <div className="footer__social">
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.5 9.9v-7H7.9V12h2.6V9.8c0-2.6 1.5-4 3.9-4 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2c2.7 0 3.06 0 4.12.06 1.06.05 1.79.22 2.43.47a4.9 4.9 0 0 1 1.77 1.15 4.9 4.9 0 0 1 1.15 1.77c.25.64.42 1.37.47 2.43C22 8.94 22 9.3 22 12s0 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47C15.06 22 14.7 22 12 22s-3.06 0-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2 15.06 2 14.7 2 12s0-3.06.06-4.12c.05-1.06.22-1.79.47-2.43a4.9 4.9 0 0 1 1.15-1.77A4.9 4.9 0 0 1 5.45.53C6.09.28 6.82.11 7.88.06 8.94 0 9.3 0 12 0zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4zm5.2-8.4a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z"/></svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 4.9c-.8.4-1.7.6-2.6.8 1-.6 1.6-1.5 2-2.6-.9.6-1.9 1-3 1.2a4.5 4.5 0 0 0-7.7 4.1A12.9 12.9 0 0 1 2.3 3.6a4.5 4.5 0 0 0 1.4 6 4.5 4.5 0 0 1-2-.6v.1a4.5 4.5 0 0 0 3.6 4.4 4.5 4.5 0 0 1-2 .1 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 1 19a12.8 12.8 0 0 0 7 2c8.3 0 12.9-6.9 12.9-12.9v-.6c.9-.6 1.6-1.4 2.1-2.3z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21H17v-5.6c0-1.34-.02-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97V21H9z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
