import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="nav">
      <Link to="/" className="nav-mark">
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="13"
            cy="13"
            r="12"
            stroke="#B99A5B"
            strokeWidth="1"
          />

          <path
            d="M13 6c2 3-2 3-2 6s4 3 2 6"
            stroke="#8E6EA6"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>

        <span className="nav-title">
          Take Your Time
        </span>
      </Link>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#info">Visit Us</a>
      </div>

      <button className="nav-cta">
        Book a session
      </button>
    </nav>
  );
}