import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      {/* Product Image Wrapper */}
      <div className="product-image-wrapper">
        {/* If the product has an image, display it, otherwise show a placeholder */}
        {product.Image ? (
          <img
            src={product.Image} // The image URL for the product
            alt={product.Title || "Product"} // Alt text for accessibility, fallback to "Product" if title is not provided
            className="product-image" // CSS class for styling the image
          />
        ) : (
          <div className="no-image">No Image</div> // Placeholder text if no image is available
        )}
      </div>

      {/* Product Details Section */}
      <div className="product-details">
        {/* Product Title: Displays the product's title, or "N/A" if not available */}
        <h2 className="product-title">{product.Title || "N/A"}</h2>

        {/* Product Price: Displays the product's price, formatted as currency */}
        <p className="product-price">
          {product.Price !== undefined && !isNaN(product.Price)
            ? `$${parseFloat(product.Price).toFixed(2)}` // Formats price to 2 decimal places
            : "Price not available"} {/* If price is undefined or invalid, show a default message */}
        </p>

        {/* Product Description: Displays a brief description, or a fallback message */}
        <p className="product-description">
          {product.Description || "Description not available"} {/* If description is not provided, show a default message */}
        </p>

        {/* Product Category: Shows the category of the product */}
        <p className="product-category">
          <strong>Category:</strong> {product.Category || "N/A"} {/* Displays "N/A" if category is missing */}
        </p>

        {/* Product Sold Status: Shows whether the product is sold or not */}
        <p className="product-sold">
          <strong>Sold:</strong> {product.Sold ? "Yes" : "No"} {/* Displays "Yes" or "No" based on product's sold status */}
        </p>

        {/* Sale Status: Shows if the product is on sale */}
        <p
          className={`product-sale-status ${
            product["Is Sale"] ? "sale-true" : "sale-false"
          }`} // Adds a CSS class based on whether the product is on sale
        >
          {product["Is Sale"] ? "On Sale" : "Not on Sale"} {/* Displays sale status */}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
