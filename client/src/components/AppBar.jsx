import { useState } from "react";

const AppBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="appbar">
        <div className="logo">Logo</div>

        {/* Desktop Menu */}
        <nav className={`nav-links ${open ? "open" : ""}`}>
          <a href="#">Login</a>
          <a href="#">Register</a>
        </nav>

        {/* Hamburger Button */}
        <div className="menu-btn" onClick={() => setOpen(!open)}>
          <div className={`bar ${open ? "open" : ""}`}></div>
          <div className={`bar ${open ? "open" : ""}`}></div>
        </div>
      </header>

      {/* Styles */}
      <style jsx>{`
        .appbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: linear-gradient(90deg, #4f46e5, #9333ea);
          padding: 15px 25px;
          color: white;
          box-shadow: 0 2px 8px rgba(0,0,0,0.15);
        }

        .logo {
          font-size: 22px;
          font-weight: bold;
          cursor: pointer;
        }

        .nav-links {
          display: flex;
          gap: 20px;
        }

        .nav-links a {
          text-decoration: none;
          color: white;
          font-size: 16px;
          font-weight: 500;
          transition: color 0.3s ease;
        }

        .nav-links a:hover {
          color: #facc15; /* yellow on hover */
        }

        .menu-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
        }

        .bar {
          width: 25px;
          height: 3px;
          background: white;
          transition: 0.4s;
        }

        /* Mobile Styles */
        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 60px;
            right: -200px;
            background: #4f46e5;
            flex-direction: column;
            gap: 15px;
            padding: 20px;
            border-radius: 8px;
            transition: right 0.4s ease;
          }

          .nav-links.open {
            right: 20px;
          }

          .menu-btn {
            display: flex;
          }
        }
      `}</style>
    </>
  );
};

export default AppBar;
