import { Link } from "react-router-dom";


const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="hero">
          <h1>Welcome to Our Website 🌟</h1>
          <p>
            This is a simple React homepage with a clean and modern look.  
            Navigate to Login or Register to continue your journey.
          </p>
          <div className="buttons">
            <Link to="/login"><a style={{textDecoration: "none"}} className="btn">Login</a></Link>
            <Link to="/register"><a style={{textDecoration: "none"}} className="btn btn-alt">Register</a></Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        .home-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background: linear-gradient(135deg, #716af0ff, #c6a3e8ff);
          color: white;
          text-align: center;
          padding: 20px;
        }

        .hero {
          max-width: 600px;
          animation: fadeIn 1s ease;
        }

        h1 {
          font-size: 2.5rem;
          margin-bottom: 15px;
        }

        p {
          font-size: 1.1rem;
          margin-bottom: 25px;
          color: #e0e0e0;
        }

        .buttons {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .btn {
          padding: 12px 24px;
          background: linear-gradient(90deg, #facc15, #f59e0b);
          color: black;
          font-weight: bold;
          border-radius: 8px;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        .btn-alt {
          background: linear-gradient(90deg, #06b6d4, #3b82f6);
          color: white;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.8rem;
          }
          p {
            font-size: 1rem;
          }
          .buttons {
            flex-direction: column;
          }
          .btn {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>
    </>
  );
};

export default Home;
