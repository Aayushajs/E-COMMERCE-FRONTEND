import React, { useState } from "react";  // Importing React and useState hook
import "./Navbar.css";  // Importing the CSS file for styling
import LoginModal from "./LoginModal.jsx";  // Importing the LoginModal component for user login

// Navbar component
const Navbar = () => {
  // State hooks to manage the menu, login modal, login status, and alert message
  const [menuOpen, setMenuOpen] = useState(false);  // To toggle menu visibility
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);  // To control login modal visibility
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // To track user login status
  const [alertMessage, setAlertMessage] = useState("");  // To manage the alert message shown to the user

  // Function to toggle the menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Function to toggle the login modal
  const toggleLoginModal = () => setIsLoginModalOpen(!isLoginModalOpen);

  // Function to handle login/logout actions
  const handleAuth = () => {
    if (isLoggedIn) {
      // If the user is logged in, handle logout
      setIsLoggedIn(false);  // Set loggedIn state to false
      setAlertMessage("You have been logged out!");  // Show logout alert message
      setTimeout(() => setAlertMessage(""), 3000);  // Clear the alert message after 3 seconds
    } else {
      // If the user is not logged in, open the login modal
      toggleLoginModal();
    }
  };

  // Function to handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);  // Set loggedIn state to true
    setIsLoginModalOpen(false);  // Close the login modal
    setAlertMessage("Login Successful!");  // Show success alert message
    setTimeout(() => setAlertMessage(""), 3000);  // Clear the alert message after 3 seconds
  };

  return (
    <header className="navbar">
      {/* Display alert message if there's any */}
      {alertMessage && <div className="alert-message">{alertMessage}</div>}

      <div className="container">
        {/* Logo */}
        <a href="/" className="logo">
          <span className="highlight">SHOPPING STORE</span>
        </a>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <a href="/" className="nav-link">Home</a>
          <a href="/about" className="nav-link">About</a>
          <a href="/contact" className="nav-link">Contact</a>
          
          {/* Login/Logout Button */}
          <button className="nav-link button" onClick={handleAuth}>
            {isLoggedIn ? "Logout" : "Login"}  {/* Display "Logout" if user is logged in, else "Login" */}
          </button>
          
          {/* Cart Icon */}
          <a href="/cart" className="nav-link button">
            🛒
          </a>
        </nav>

        {/* Hamburger Menu for mobile view */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`line ${menuOpen ? "rotate" : ""}`}></span>
          <span className={`line ${menuOpen ? "fade-out" : ""}`}></span>
          <span className={`line ${menuOpen ? "rotate-back" : ""}`}></span>
        </div>
      </div>

      {/* Show the login modal when it's open */}
      {isLoginModalOpen && <LoginModal onClose={toggleLoginModal} onLoginSuccess={handleLoginSuccess} />}
      
    </header>
  );
};

export default Navbar;
