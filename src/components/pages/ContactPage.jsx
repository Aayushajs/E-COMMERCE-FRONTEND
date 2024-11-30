import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Contact = () => {
  return (
    <div> 
      {/* Navbar for navigation */}
      <Navbar />
      
      <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        
        {/* Hero Section */}
        <section
          style={{
            background: 'linear-gradient(135deg, #4e54c8, #8f94fb)', // Background gradient
            color: 'white', // White text color
            textAlign: 'center', // Center aligned text
            padding: '80px 20px', // Padding for spacing
          }}
        >
          {/* Heading for the page */}
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px' }}>Contact Us</h1>
          {/* Subtext below the heading */}
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            We're here to help. Reach out to us for any queries or support.
          </p>
        </section>

        {/* Contact Form Section */}
        <section
          style={{
            padding: '60px 20px',
            backgroundColor: '#f9f9f9', // Light background color
            display: 'flex', // Flexbox for centering the form
            flexDirection: 'column', // Arrange form fields vertically
            alignItems: 'center', // Center the form on the page
          }}
        >
          {/* Heading for the contact form */}
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>Get in Touch</h2>
          {/* Instructional text */}
          <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '40px', textAlign: 'center' }}>
            Fill out the form below, and our team will get back to you shortly.
          </p>
          
          {/* Contact Form */}
          <form
            style={{
              maxWidth: '600px',
              width: '100%', // Full width form
              display: 'flex', // Flexbox for form fields
              flexDirection: 'column', // Stack the fields vertically
              gap: '20px', // Spacing between fields
            }}
          >
            {/* Input for Name */}
            <input
              type="text"
              placeholder="Your Name"
              style={{
                padding: '15px',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '5px',
                width: '100%',
              }}
            />
            {/* Input for Email */}
            <input
              type="email"
              placeholder="Your Email"
              style={{
                padding: '15px',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '5px',
                width: '100%',
              }}
            />
            {/* Textarea for Message */}
            <textarea
              placeholder="Your Message"
              rows="5"
              style={{
                padding: '15px',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '5px',
                width: '100%',
                resize: 'none', // Disable resizing of the textarea
              }}
            ></textarea>
            
            {/* Submit Button */}
            <button
              type="submit"
              style={{
                padding: '15px',
                fontSize: '1rem',
                background: 'linear-gradient(135deg, #4e54c8, #8f94fb)', // Gradient button
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer', // Pointer cursor on hover
                transition: 'background 0.3s', // Smooth transition on hover
              }}
              onMouseOver={(e) => (e.target.style.background = '#3b3dbf')} // Darken on hover
              onMouseOut={(e) =>
                (e.target.style.background = 'linear-gradient(135deg, #4e54c8, #8f94fb)') // Reset on mouse out
              }
            >
              Submit
            </button>
          </form>
        </section>

        {/* Contact Details Section */}
        <section
          style={{
            padding: '60px 20px',
            backgroundColor: '#fff', // White background for the contact details
            textAlign: 'center', // Center the text
          }}
        >
          {/* Heading for contact details */}
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>Contact Details</h2>
          
          {/* Contact details displayed in a grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Responsive grid layout
              gap: '20px', // Space between grid items
              maxWidth: '800px',
              margin: '0 auto',
            }}
          >
            {/* Email information */}
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#4e54c8' }}>Email</h3>
              <p style={{ color: '#666' }}>support@ecommerce.com</p>
            </div>
            {/* Phone information */}
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#4e54c8' }}>Phone</h3>
              <p style={{ color: '#666' }}>+1 (800) 123-4567</p>
            </div>
            {/* Address information */}
            <div>
              <h3 style={{ fontSize: '1.5rem', color: '#4e54c8' }}>Address</h3>
              <p style={{ color: '#666' }}>123 E-commerce St, Online City, 56789</p>
            </div>
          </div>
        </section>

      </div>
      
      {/* Footer section */}
      <Footer />
    </div>
  );
};

export default Contact;
