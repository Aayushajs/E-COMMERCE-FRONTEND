import React, { useState, useEffect } from "react";
import Login from "./LoginModal";  // Assuming LoginModal is the modal component
import Logout from "./Logout";    // Assuming Logout is the logout component
import { useAuth } from "../context/AuthProvider";  // Custom hook to get auth status
import "./Navbar.css";  // External CSS for styling

function Navbar() {
  const [authUser] = useAuth();  // Check if the user is authenticated
  const [sticky, setSticky] = useState(false);  // State for sticky navbar
  const [isMenuOpen, setIsMenuOpen] = useState(false);  // State for mobile menu toggle
  const [isModalOpen, setIsModalOpen] = useState(false);  // State to handle modal visibility

  // Handle sticky navbar when scrolling
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);  // If scrolled more than 0px, make navbar sticky
    };
    window.addEventListener("scroll", handleScroll);  // Listen for scroll events
    return () => {
      window.removeEventListener("scroll", handleScroll);  // Cleanup the event listener on unmount
    };
  }, []);

  const navItems = (
    <>
      <li><a href="/" className="nav-item">Home</a></li>  {/* Home link */}
      <li><a href="/Contact" className="nav-item">Contact</a></li>  {/* Contact link */}
      <li><a href="/About" className="nav-item">About</a></li>  {/* About link */}
    </>
  );

  return (
    <div className={`navbar ${sticky ? "navbar-sticky" : ""}`}>  {/* Apply sticky class if scrollY > 0 */}
      <div className="container">
        {/* Left Section (Logo and Hamburger) */}
        <div className="left">
          <button
            className="hamburger"
            onClick={() => setIsMenuOpen(!isMenuOpen)}  // Toggle mobile menu visibility
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="hamburger-icon">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />  {/* Hamburger icon */}
            </svg>
          </button>
          <a href="/" className="logo">SHOPPING <span style={{color:'black'}} > STORE</span> </a>  {/* Logo */}
        </div>

        {/* Center Section (Desktop navigation) */}
        <div className="center">
          <ul className="nav-list">
            {navItems}  {/* Render navigation items */}
          </ul>
        </div>

        {/* Right Section (Login/Logout Button) */}
        <div className="right">
          {authUser ? (
            <Logout />  // If the user is authenticated, show the Logout component
          ) : (
            <button
              className="login-btn"
              onClick={() => document.getElementById("login-container").showModal()}  // Open the login modal when clicked
            >
              Login
            </button>
          )}
        </div>
      </div>

      {/* Hamburger Menu for Mobile */}
      {isMenuOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-list">
            {navItems}  {/* Render navigation items in mobile menu */}
          </ul>
        </div>
      )}

      {/* Login Modal */}
      <Login isOpen={isModalOpen} setIsOpen={setIsModalOpen} />  {/* Pass modal state to Login component */}
    </div>
  );
}

export default Navbar;
