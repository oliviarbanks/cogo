import { useState } from "react";
import { Link } from "react-router-dom";

const SignUpModal1 = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input
        type="password"
        id="confirmPassword"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        required
      />
      <Link to="/SignUpModal2">
        <button>Next</button>
      </Link>
      <Link to="/signin">Sign In</Link>
    </div>
  );
};

export default SignUpModal1;
