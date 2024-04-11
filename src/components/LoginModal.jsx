import { useState } from "react";
import { Link } from "react-router-dom";
import Input from "./Input";
import Button from "./Button";

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
    <div className="text-white bg-conic-gradient from-27deg at-50-50 bg-gradient-to-br to-[#1D0F2C] from-[#5a0c46] via-[#361752]  flex flex-col justify-center m-auto min-h-screen flex-grow">
      <div className="p-10">
        <h1 className="text-5xl text-center font-bold mb-2 bg-gradient-to-r from-miami-pink to-neon-blue text-transparent bg-clip-text">
          SoBe Social
        </h1>
        <h2 className="text-lg font-light my-3">Login into your account</h2>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col items-left gap-[20px] pb-[24px]"
        >
          <Input
            label="Email"
            placeholder="Email Address"
            type="email"
            onChange={handleEmailChange}
            required
          />
          <Input
            label="Password"
            placeholder="Your Password"
            type="password"
            onChange={handlePasswordChange}
            required
          />
          <Button
            type="submit"
            className="bg-black text-white bg-gradient-to-r hover:from-miami-pink hover:to-miami-blue m-auto"
          >
            {" "}
            Sign In{" "}
          </Button>
        </form>

        <div className="flex flex-row justify-center ">
          <p className="font-light mr-2 ">Forgot Password? </p>
          <Link to="/forgot-password">Reset Password</Link>
        </div>
        <div className="flex flex-row justify-center ">
          <p className="font-light mr-2">Don't have an account?</p>
          <Link to="/signUp">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
