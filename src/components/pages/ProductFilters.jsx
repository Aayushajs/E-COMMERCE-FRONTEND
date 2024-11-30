import React, { useState, useEffect } from "react";
import "./Search&Filter.css";  // Ensure the path is correct

const ProductFilters = ({ products, setFilteredProducts }) => {
  // State variables to manage the filter values
  const [categoryFilter, setCategoryFilter] = useState("");  // Stores selected category
  const [soldFilter, setSoldFilter] = useState(null); // Stores the sold status filter, null means no filter
  const [priceRange, setPriceRange] = useState([0, 1000]); // Stores the selected price range (min and max)
  const [searchQuery, setSearchQuery] = useState(""); // Stores the search query for product title

  useEffect(() => {
    // Start by assuming all products are valid, then filter them based on the conditions
    let filtered = products;

    // Filter products by category if a category is selected
    if (categoryFilter) {
      filtered = filtered.filter(product => product.Category === categoryFilter);
    }

    // Filter products by sold status (true/false/null)
    if (soldFilter !== null) {
      filtered = filtered.filter(product => product.Sold === soldFilter);
    }

    // Filter products by price range (min to max)
    filtered = filtered.filter(product => product.Price >= priceRange[0] && product.Price <= priceRange[1]);

    // Filter products by title search query (case insensitive)
    if (searchQuery) {
      filtered = filtered.filter(product => 
        product.Title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Update the parent component with the filtered list of products
    setFilteredProducts(filtered);
  }, [categoryFilter, soldFilter, priceRange, searchQuery, products, setFilteredProducts]);  // Dependencies that trigger the effect

  return (
    <div className="filters">
      {/* Search Bar for filtering products by title */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by product title"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}  // Update searchQuery state on change
        />
      </div>

      {/* Category Filter */}
      <div className="filter">
        <label>Category</label>
        <select onChange={e => setCategoryFilter(e.target.value)} value={categoryFilter}>
          <option value="">All</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Electronics">Electronics</option>
          {/* Add more categories as needed */}
        </select>
      </div>

      {/* Sold Filter */}
      <div className="filter">
        <label>Sold</label>
        <select 
          onChange={e => setSoldFilter(e.target.value === "true" ? true : e.target.value === "false" ? false : null)} 
          value={soldFilter !== null ? soldFilter.toString() : ""}
        >
          <option value="">All</option>
          <option value="true">Sold</option>
          <option value="false">Not Sold</option>
        </select>
      </div>

      {/* Price Range Filter */}
      <div className="filter">
        <label>Price</label>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          value={priceRange[1]}  // Use the maximum price value for display
          onChange={e => setPriceRange([priceRange[0], e.target.value])} // Update price range on change
        />
        <span>{`$${priceRange[0]} - $${priceRange[1]}`}</span>  {/* Display the selected price range */}
      </div>
    </div>
  );
};

export default ProductFilters;
