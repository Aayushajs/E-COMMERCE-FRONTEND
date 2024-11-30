import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductFilters from "./ProductFilters.jsx";  // Import the filter component
import ProductCard from "./ProductCard.jsx";  // Import the individual product card component
import "./ProductCardPage.css";  // Import the styles for this page

const ProductTable = () => {
  // State variables
  const [products, setProducts] = useState([]);  // Stores all fetched products
  const [filteredProducts, setFilteredProducts] = useState([]);  // Stores filtered products based on user selections
  const [loading, setLoading] = useState(true);  // Indicates whether the products are still being fetched
  const [error, setError] = useState(null);  // Stores any error messages encountered during data fetching

  useEffect(() => {
    // Function to fetch products from the backend API
    const fetchProducts = async () => {
      try {
        // Making a GET request to the backend API to fetch product data
        const response = await axios.get("https://e-comerce-backend-mf8i.onrender.com/api/v1/product"); // Replace with your actual API URL
        
        // Check if the response data is an array (valid format)
        if (Array.isArray(response.data)) {
          setProducts(response.data);  // Store the fetched products in state
          setFilteredProducts(response.data);  // Initially, show all products before applying filters
        } else {
          setError("Invalid data format received.");  // Error handling for invalid response format
        }
      } catch (err) {
        setError("Failed to fetch products. Please try again.");  // Error handling for network or server errors
      } finally {
        setLoading(false);  // Set loading to false once the data has been fetched or if an error occurs
      }
    };

    fetchProducts();  // Call the fetchProducts function when the component mounts
  }, []);  // Empty dependency array ensures this effect runs only once when the component mounts

  // If the data is still loading, display a loading message
  if (loading) {
    return <p>Loading products...</p>;
  }

  // If there's an error fetching the data, display the error message
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="product-card-page">
      {/* Filters Section */}
      <ProductFilters 
        products={products}  // Pass all products to ProductFilters for filtering
        setFilteredProducts={setFilteredProducts}  // Pass the setFilteredProducts function to update filtered products
      />

      <h1 className="page-title">Product ✅</h1>

      {/* Display filtered products in product cards */}
      <div className="product-card-container">
        {filteredProducts.map((product) => (
          <ProductCard key={product._id} product={product} />  // Render a ProductCard for each filtered product
        ))}
      </div>
    </div>
  );
};

export default ProductTable;
