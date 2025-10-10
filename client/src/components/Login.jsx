import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      navigate("/success");
    } else {
      alert(data.message);
    }
  };

  return (
    <>
      <div className="login-container">
        <form className="login-box" onSubmit={handleSubmit}>
          <h2 className="title">Welcome Back 👋</h2>

          <div className="input-group">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>

          <button type="submit" className="btn">
            Login
          </button>

          <p className="extra">
            Don’t have an account? <Link to="/register"><a>Register</a></Link>
          </p>
        </form>
      </div>

      <style jsx>{`
        .login-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .login-box {
          background: linear-gradient(135deg, #4f46e5, #9333ea);
          padding: 40px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 350px;
          text-align: center;
          animation: fadeIn 0.8s ease;
        }

        .title {
          font-size: 24px;
          margin-bottom: 20px;
          color: white;
        }

        .input-group {
          position: relative;
          margin-bottom: 25px;
        }

        .input-group input {
          width: 100%;
          padding: 12px;
          border: none;
          border-bottom: 2px solid #ccc;
          outline: none;
          background: transparent;
          color: white;
          font-size: 16px;
          transition: border-color 0.3s ease;
        }

        .input-group input:focus {
          border-color: #facc15; /* yellow highlight */
        }

        .input-group label {
          position: absolute;
          left: 0;
          top: 12px;
          color: #ddd;
          font-size: 16px;
          pointer-events: none;
          transition: 0.3s ease;
        }

        .input-group input:focus + label,
        .input-group input:not(:placeholder-shown) + label {
          top: -10px;
          font-size: 13px;
          color: #facc15;
        }

        .btn {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 8px;
          background: linear-gradient(90deg, #facc15, #f59e0b);
          color: black;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .btn:hover {
          transform: scale(1.05);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }

        .extra {
          margin-top: 15px;
          font-size: 14px;
          color: #eee;
        }

        .extra a {
          color: #facc15;
          text-decoration: none;
          font-weight: bold;
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

        /* Mobile */
        @media (max-width: 480px) {
          .login-box {
            width: 90%;
            padding: 30px 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Login;
