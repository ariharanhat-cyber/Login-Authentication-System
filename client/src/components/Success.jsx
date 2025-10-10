import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  // Optional: redirect to login after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      textAlign: "center",
      background: "linear-gradient(135deg, #4f46e5, #9333ea)",
      color: "white",
      padding: "20px"
    }}>
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>✅ Registration Successful!</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "30px" }}>
        You can now login to your account.
      </p>
      <button
        onClick={() => navigate("/login")}
        style={{
          padding: "12px 24px",
          border: "none",
          borderRadius: "8px",
          background: "#facc15",
          color: "black",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer"
        }}
      >
        Go to Login
      </button>
    </div>
  );
};

export default Success;
