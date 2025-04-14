import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./../../assets/css/Login.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const data = {
      email: email.trim(),
      password: password.trim(),
    };

    console.log("Sending login data:", JSON.stringify(data)); // Debugging

    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseText = await response.text();
      console.log("Raw response from server:", responseText);

      let responseData;
      try {
        responseData = JSON.parse(responseText);
      } catch (err) {
        throw new Error("Invalid JSON response from server");
      }

      if (!response.ok) {
        throw new Error(responseData.detail || "Login failed");
      }

      alert("Login successful!");
  
   // Store user data in localStorage
  localStorage.setItem("user", JSON.stringify(responseData.user));

  // Check user role properly
  const userRole = responseData.user.role;
  console.log("User Role:", userRole);

  // Ensure navigation occurs only after localStorage update
   setTimeout(() => {
    if (userRole === "67c60781ef6c253d32930552") {
      navigate("/admin/dashboard");
    } else {
      navigate("/dashboard");
     }
   }, 100);

    } catch (err) {
      setError(err.message);
      console.error("Login error:", err);
    }
  };

  return (
    <div className="login-page">
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
    </div>
  );
};

export default Login;
