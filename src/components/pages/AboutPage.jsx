import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const About = () => {
  return (
    <div>
      {/* Navbar Component - This is the top navigation bar for the page */}
      <Navbar /> 

      <div style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0, overflowX: 'hidden' }}>
         
        {/* Hero Section - This is the introductory section at the top of the page */}
        <section
          style={{
            background: 'linear-gradient(135deg, #4e54c8, #8f94fb)', // Gradient background for hero section
            color: 'white', // Text color
            textAlign: 'center', // Centered text alignment
            padding: '80px 20px', // Padding around the content
          }}
        >
          <h1 style={{ fontSize: '3rem', fontWeight: '700', marginBottom: '20px' }}>About Us</h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
            Discover our journey and how we are redefining the e-commerce experience.
          </p>
        </section>

        {/* Who We Are Section - A section that describes the company */}
        <section
          style={{
            backgroundColor: '#f9f9f9', // Light grey background
            padding: '60px 20px', // Padding around the content
            display: 'flex', // Flexbox layout for responsive design
            flexWrap: 'wrap', // Allow wrapping of content
            alignItems: 'center', // Align items vertically
            gap: '20px', // Space between elements
          }}
        >
          {/* Text content about who we are */}
          <div style={{ flex: 1 }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>Who We Are</h2>
            <p style={{ color: '#666', lineHeight: '1.6' }}>
              We are passionate about providing exceptional online shopping experiences. From curated
              products to unmatched customer service, we strive to exceed your expectations at every
              step.
            </p>
          </div>

          {/* Image representing the team or company */}
          <div style={{ flex: 1 }}>
            <img
              src="https://img.freepik.com/free-vector/online-shopping-concept-illustration_114360-1084.jpg"
              alt="Our Team"
              style={{
                maxWidth: '100%',
                borderRadius: '10px', // Rounded corners for the image
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Shadow effect for the image
              }}
            />
          </div>
        </section>

        {/* Our Mission Section - Describes the company's mission */}
        <section
          style={{
            backgroundColor: '#fff', // White background
            padding: '60px 20px', // Padding around the content
            textAlign: 'center', // Centered text alignment
          }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>Our Mission</h2>
          <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
            Our mission is to deliver a seamless shopping experience, empower small businesses, and
            innovate continuously to provide value to our customers and communities.
          </p>
        </section>

        {/* Image Grid Section - A section displaying our company values */}
        <section
          style={{
            backgroundColor: '#f9f9f9', // Light grey background
            padding: '60px 20px', // Padding around the content
            textAlign: 'center', // Centered text alignment
          }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>Our Values</h2>

          {/* Grid to display different values like Trust, Quality, Innovation, Service */}
          <div
            style={{
              display: 'grid', // Using grid layout
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Auto-fitting grid columns
              gap: '20px', // Space between grid items
              justifyContent: 'center', // Center grid items horizontally
            }}
          >
            {/* Each value (Trust, Quality, Innovation, Service) with its image */}
            {[ 
              { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTqsVxeIuVZmLymFAi46B7fZ8TBShqKkh2w&s', text: 'Trust' },
              { src: 'https://cdn.pixabay.com/photo/2021/07/10/15/45/online-shop-6401739_1280.png', text: 'Quality' },
              { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTAyIUmrnGjtg2SZPl1B9gVtTU3csJzo9n9pQID2rOyWyQ15uuYuILBcynsGlsCr6zwCk&usqp=CAU', text: 'Innovation' },
              { src: 'https://img.freepik.com/premium-photo/young-caucasian-woman-isolated-yellow-wall-holding-shopping-bags-writing-message-with-her-cell-phone-friend_1368-176888.jpg', text: 'Service' }
            ].map((item, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <img
                  src={item.src}
                  alt={item.text}
                  style={{
                    width: '100%', // Make the image fill the container
                    maxWidth: '300px', // Maximum image width
                    borderRadius: '8px', // Rounded corners for images
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Shadow effect for the images
                    marginBottom: '10px', // Space below the image
                  }}
                />
                <p style={{ fontSize: '1.1rem', color: '#666' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer Section - The footer at the bottom of the page */}
        <Footer/>
      </div>
    </div>
  );
};

export default About;
