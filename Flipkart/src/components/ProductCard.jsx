import React, { useState } from 'react';
import { Heart, Star } from 'lucide-react';
import { useApp } from '../context/AppContext';
import assuredImg from '../assets/product_phone.png'; // standard fallback or custom SVG.
// Actually, let's create a beautiful custom SVG/CSS assured badge so we don't depend on loading a separate image, or use the phoneImg as a placeholder. Let's make a styled badge inside React!

export default function ProductCard({ product }) {
  const { navigateTo } = useApp();
  const [isLiked, setIsLiked] = useState(false);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleCardClick = () => {
    navigateTo('detail', product.id);
  };

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  return (
    <div className="product-card" onClick={handleCardClick}>
      {/* Wishlist Icon */}
      <button 
        className={`wishlist-icon ${isLiked ? 'active' : ''}`}
        onClick={handleWishlistClick}
        aria-label="Add to Wishlist"
      >
        <Heart size={18} fill={isLiked ? 'currentColor' : 'none'} />
      </button>

      {/* Product Image */}
      <div className="product-card-img-wrapper">
        <img src={product.image} alt={product.name} className="product-card-img" />
      </div>

      {/* Product Name */}
      <h3 className="product-card-name" title={product.name}>
        {product.name}
      </h3>

      {/* Ratings Row */}
      <div className="rating-row">
        <span className="rating-badge">
          {product.rating} <Star size={11} fill="currentColor" />
        </span>
        <span className="rating-count">
          ({product.ratingCount.toLocaleString('en-IN')})
        </span>
      </div>

      {/* Price Details */}
      <div className="price-row">
        <span className="price-current">{formatPrice(product.price)}</span>
        {product.originalPrice > product.price && (
          <>
            <span className="price-original">{formatPrice(product.originalPrice)}</span>
            <span className="price-discount">{product.discount}% off</span>
          </>
        )}
      </div>

      {/* Assured Badge */}
      {product.isAssured && (
        <div style={{ marginTop: '8px', display: 'flex', alignItems: 'center' }}>
          <span style={{
            fontSize: '9px',
            fontWeight: '900',
            color: '#1254c0',
            fontStyle: 'italic',
            border: '1px solid #1254c0',
            padding: '1px 3px',
            borderRadius: '2px',
            letterSpacing: '0.5px',
            textTransform: 'uppercase',
            backgroundColor: '#f1f8ff',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '2px'
          }}>
            <span>f</span>
            <span style={{ color: '#ff9f00' }}>★</span>
            <span>Assured</span>
          </span>
        </div>
      )}
    </div>
  );
}
