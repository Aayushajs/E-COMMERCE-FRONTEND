import React from 'react';
import Navbar from '../shared/Navbar'; // Importing Navbar component
import Footer from '../shared/Footer'; // Importing Footer component
import ProductTable from './ProductTable'; // Importing ProductTable component

const Home = () => {
  return (
    <div>
      {/* Navbar: This is the top navigation bar that appears across all pages */}
      <Navbar />
      
      {/* Responsive Image Section: This section displays a banner image */}
      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img 
          src="https://chargebacks911.com/wp-content/uploads/2023/08/Online-vs-In-Store-Shopping-blog.jpg" // The image URL
          alt="Shopping Banner" // Descriptive text for the image for accessibility
          style={{ 
            width: '100%', // Makes the image take up the full width of its container
            maxWidth: '12100px', // Prevents the image from growing too large (correct typo here as '12100px' seems too large)
            height: 'auto', // Ensures the image keeps its aspect ratio when resized
            borderRadius: '8px', // Rounds the corners of the image
            marginTop:'10px'
          }} 
        />
      </div>
      
      {/* Product Table: Displays a table of products */}
      <ProductTable />
      
      {/* Footer: This is the footer section that appears at the bottom of the page */}
      <Footer />
    </div>
  );
}

export default Home;
