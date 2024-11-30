import React, { useState } from "react";
import axios from "axios";
import "./LoginModal.css";

// LoginModal component to handle user login
const LoginModal = ({ onClose, onLoginSuccess }) => {
  // State to store the email, password, and any error messages
  const [email, setEmail] = useState(""); // Store email input value
  const [password, setPassword] = useState(""); // Store password input value
  const [error, setError] = useState(""); // Store error message if login fails

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the page from reloading on form submission

    try {
      // Sending login request to backend with email and password
      const response = await axios.post("https://e-comerce-backend-mf8i.onrender.com/api/v1/user/login", {
        email,
        password,
      });

      // Log the response data from backend
      console.log("Login response:", response.data);

      // If login is successful (success is true from backend)
      if (response.data.success) {
        onLoginSuccess(); // Call the parent component's success handler
      } else {
        // If login failed, show the error message from backend
        setError(response.data.message);
      }
    } catch (error) {
      // If there is any error while making the request
      console.error("Login error:", error);
      // Display a generic error message
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {/* Button to close the modal */}
        <button className="close-btn" onClick={onClose}>
          &times; {/* X symbol to close the modal */}
        </button>
        <h2 className="modal-title">Login</h2>
        
        {/* Display error message if login fails */}
        {error && <p className="error-message">{error}</p>}
        
        {/* Form for the login inputs */}
        <form onSubmit={handleSubmit} className="login-form">
          <label>Email</label>
          {/* Input for email */}
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state on input change
            required // Makes the field mandatory
          />
          <label>Password</label>
          {/* Input for password */}
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on input change
            required // Makes the field mandatory
          />
          
          {/* Submit button for the form */}
          <button type="submit" className="submit-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginModal;
