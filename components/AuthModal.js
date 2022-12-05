import React, { useState } from "react";
const AuthModal = ({ setShowModal, setIsSignUp, isSignUp }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isSignUp && password !== confirmPassword) {
        setError("Passwords do not match.");
      } else {
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="auth-modal">
      <div className="close-icon" onClick="">
        ⓧ
      </div>
      <h2> {isSignUp ? "CREATE ACCOUNT" : "SIGN IN"} </h2>
      <p>By clicking Sign In, you agree to our terms and conditions.</p>
      <form onSubmit="">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required={true}
          onChange={(e) => setPassword(e.target.value)}
        />
        {isSignUp && (
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            placeholder="Confirm Password"
            required={true}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        )}
        <input className="secondary-button" type="submit" />
        <p> {error} </p>
      </form>
      <hr />
      <h2>GET THE APP ON PLAY STORE</h2>
      MUMU APP
    </div>
  );
};

export default AuthModal;
