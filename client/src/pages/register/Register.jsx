import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  const hundleSubmit = async (e) => {
    e.preventDefault();
    setError(false);

    try {
      const res = await axios.post("/auth/register", {
        username,
        password,
        email,
      });
      res.data && navigate("/login");
      setEmail("");
      setUsername("");
      setPassword("");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={hundleSubmit}>
        <label>Username</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter Your Username..."
          onChange={(e) => setUsername(e.target.value)}
          required="required"
          value={username}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter Your Email..."
          onChange={(e) => setEmail(e.target.value)}
          required="required"
          value={email}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter Password Email..."
          onChange={(e) => setPassword(e.target.value)}
          required="required"
          value={password}
        />
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link to="/login" className="link">
          Login
        </Link>
      </button>
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong
        </span>
      )}
    </div>
  );
}
