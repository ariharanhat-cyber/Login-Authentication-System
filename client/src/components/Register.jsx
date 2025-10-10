import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(form.password !== form.confirmPassword){
      alert("Password and conferm password should be same");
      return;
    }
    try {
      console.log("form Data: ", form);
      const res = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = await res.json();
      if (res.ok) {
        alert("Registration successful! Please login.");
        navigate("/login");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  return (
    <>
      <div className="register-container">
        <form className="register-box" onSubmit={handleSubmit}>
          <h2 className="title">Create Account ✨</h2>

          <div className="input-group">
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
            />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
            />
            <label>Password</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              required
              value={form.confirmPassword}
              onChange={handleChange}
            />
            <label>Confirm Password</label>
          </div>

          <button type="submit" className="btn">
            Register
          </button>

          <p className="extra">
            Already have an account? <Link to="/login"><a href="#">Login</a></Link>
          </p>
        </form>
      </div>

      <style jsx>{`
        .register-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        .register-box {
          background: linear-gradient(135deg, #4f46e5, #9333ea);
          padding: 40px;
          border-radius: 16px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
          width: 100%;
          max-width: 380px;
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
          border-color: #facc15;
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

        @media (max-width: 480px) {
          .register-box {
            width: 90%;
            padding: 30px 20px;
          }
        }
      `}</style>
    </>
  );
};

export default Register;
