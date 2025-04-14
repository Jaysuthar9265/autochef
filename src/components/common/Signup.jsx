import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../../assets/css/Login.css"


const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
  
    const data = {
      name,
      email,
      password,
      role_id: "67c60781ef6c253d32930550",
    };
  
    try {
      const response = await fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
  
      const responseData = await response.json();
  
      if (!response.ok) {
     
        const errorMessage = responseData.detail
          ? Array.isArray(responseData.detail) 
            ? responseData.detail.map((err) => err.msg).join(", ") 
            : responseData.detail
          : "Signup failed";
  
        throw new Error(errorMessage);
      }
  
      alert("Signup successful!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };
  

  return (
    <div className="login-page">
    <div className="login-container">
      <h2>AutoChef SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Display Name</label>
          <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email ID</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="input-group">
          <label htmlFor="password">Create Password</label>
          <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="login-button">Submit</button>
        <button className="login-button" type="button" onClick={() => navigate("/login")}>Go To Login</button>

      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
    </div>
  );
};

export default Signup;
