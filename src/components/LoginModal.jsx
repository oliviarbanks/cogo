import { useState } from "react";
import { Link } from "react-router-dom";

const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>SoBe Social</h1>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <Link to="/forgot-password">Forgot Password?</Link>
      <Link to="/signUp">Sign Up</Link>
    </div>
  );
};

export default LoginModal;
