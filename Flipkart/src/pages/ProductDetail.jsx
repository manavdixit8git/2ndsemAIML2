import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { getProductById } from '../data/products';
import { Star, ShieldAlert, BadgePercent, MapPin, Check, ShoppingCart, Zap, Heart } from 'lucide-react';

export default function ProductDetail() {
  const { selectedProductId, addToCart, navigateTo } = useApp();
  const [pincode, setPincode] = useState('');
  const [pincodeStatus, setPincodeStatus] = useState(null); // 'success', 'error', null
  const [pincodeMsg, setPincodeMsg] = useState('');

  const product = getProductById(selectedProductId);

  if (!product) {
    return (
      <div className="container" style={{ padding: '48px', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <button className="btn-home-back" style={{ marginTop: '16px' }} onClick={() => navigateTo('home')}>
          Back to Home
        </button>
      </div>
    );
  }

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handlePincodeCheck = (e) => {
    e.preventDefault();
    if (/^\d{6}$/.test(pincode)) {
      setPincodeStatus('success');
      setPincodeMsg(`Delivery available. Typically delivered in ${product.deliveryDays} days.`);
    } else {
      setPincodeStatus('error');
      setPincodeMsg('Please enter a valid 6-digit pincode.');
    }
  };

  const handleAddToCart = () => {
    addToCart(product, 1);
    navigateTo('cart');
  };

  const handleBuyNow = () => {
    addToCart(product, 1);
    navigateTo('checkout');
  };

  return (
    <div className="container detail-layout">
      {/* Left Column: Image & Buttons */}
      <div className="detail-left">
        <div className="detail-img-box">
          <img src={product.image} alt={product.name} className="detail-img" />
        </div>
        
        <div className="action-buttons">
          <button className="btn-action btn-add-cart" onClick={handleAddToCart}>
            <ShoppingCart size={20} /> Add to Cart
          </button>
          <button className="btn-action btn-buy-now" onClick={handleBuyNow}>
            <Zap size={20} /> Buy Now
          </button>
        </div>
      </div>

      {/* Right Column: Specs & Info */}
      <div className="detail-right">
        {/* Title */}
        <h1 className="detail-name">{product.name}</h1>

        {/* Rating */}
        <div className="detail-rating-row">
          <span className="rating-badge">
            {product.rating} <Star size={11} fill="currentColor" />
          </span>
          <span className="rating-count" style={{ fontWeight: '600', color: 'var(--fk-blue)' }}>
            {product.ratingCount.toLocaleString('en-IN')} Ratings & Reviews
          </span>
          {product.isAssured && (
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
          )}
        </div>

        {/* Price Card */}
        <div className="detail-price-box">
          <span style={{ fontSize: '12px', fontWeight: '700', color: 'var(--fk-green)' }}>
            Special Price
          </span>
          <div className="detail-price-row">
            <span className="detail-price-current">{formatPrice(product.price)}</span>
            {product.originalPrice > product.price && (
              <>
                <span className="detail-price-original">{formatPrice(product.originalPrice)}</span>
                <span className="detail-price-discount">{product.discount}% off</span>
              </>
            )}
          </div>
        </div>

        {/* Bank Offers */}
        <div className="detail-offers">
          <h3 className="offers-title">Available Offers</h3>
          <div className="offer-item">
            <BadgePercent size={18} className="offer-icon" />
            <span>
              <span className="offer-bold">Bank Offer</span> 10% instant discount on Signature Credit Cards, up to ₹1,500. <span style={{ color: 'var(--fk-blue)', fontWeight: '600' }}>T&C</span>
            </span>
          </div>
          <div className="offer-item">
            <BadgePercent size={18} className="offer-icon" />
            <span>
              <span className="offer-bold">Bank Offer</span> 5% Unlimited Cashback on Flipkart Co-branded Card. <span style={{ color: 'var(--fk-blue)', fontWeight: '600' }}>T&C</span>
            </span>
          </div>
          <div className="offer-item">
            <BadgePercent size={18} className="offer-icon" />
            <span>
              <span className="offer-bold">Partner Offer</span> Sign-up for Flipkart Pay Later & get free ₹100 Gift Voucher. <span style={{ color: 'var(--fk-blue)', fontWeight: '600' }}>T&C</span>
            </span>
          </div>
        </div>

        {/* Pincode Checker */}
        <div className="pincode-check-box">
          <h3 className="pincode-title">Delivery & Pincode</h3>
          <form onSubmit={handlePincodeCheck} className="pincode-input-row">
            <input 
              type="text" 
              className="pincode-input"
              placeholder="Enter Delivery Pincode"
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
              maxLength={6}
            />
            <button type="submit" className="pincode-btn">Check</button>
          </form>
          {pincodeStatus && (
            <span className={`pincode-msg ${pincodeStatus}`}>
              {pincodeMsg}
            </span>
          )}
        </div>

        {/* Highlights */}
        <div className="specs-section">
          <h3 className="specs-title">Product Highlights</h3>
          <ul className="highlights-list">
            {product.highlights.map((highlight, idx) => (
              <li key={idx} className="highlight-item">{highlight}</li>
            ))}
          </ul>
        </div>

        {/* Specifications */}
        <div className="specs-section">
          <h3 className="specs-title">Specifications</h3>
          <table className="specs-table">
            <tbody>
              {Object.entries(product.specs).map(([key, val]) => (
                <tr key={key} className="specs-row">
                  <td className="specs-label">{key}</td>
                  <td className="specs-value">{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
