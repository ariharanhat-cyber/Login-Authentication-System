
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Success from "./components/Success";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
     <Router> 
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="success" element={<Success />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
