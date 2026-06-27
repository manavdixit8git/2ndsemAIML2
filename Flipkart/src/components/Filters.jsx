import React from 'react';
import { Star } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Filters() {
  const { filters, applyFilters, resetFilters } = useApp();

  const handlePriceChange = (e) => {
    applyFilters({ priceRange: Number(e.target.value) });
  };

  const handleRatingChange = (rating) => {
    // If clicking active, toggle off, otherwise set
    const currentRating = filters.minRating === rating ? 0 : rating;
    applyFilters({ minRating: currentRating });
  };

  const handleDiscountChange = (discount) => {
    const currentDiscount = filters.minDiscount === discount ? 0 : discount;
    applyFilters({ minDiscount: currentDiscount });
  };

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  return (
    <aside className="filters-sidebar">
      <div className="filters-header">
        <h3 className="filters-title">Filters</h3>
        <button className="btn-clear-filters" onClick={resetFilters}>
          Clear All
        </button>
      </div>

      {/* Price Slider */}
      <div className="filter-section">
        <h4 className="filter-section-title">Price Range</h4>
        <input 
          type="range" 
          min="500" 
          max="100000" 
          step="500"
          value={filters.priceRange} 
          onChange={handlePriceChange}
          className="slider-input"
        />
        <div className="price-slider-info">
          <span>Min: {formatPrice(500)}</span>
          <span>Max: {formatPrice(filters.priceRange)}</span>
        </div>
      </div>

      {/* Ratings Filter */}
      <div className="filter-section">
        <h4 className="filter-section-title">Customer Ratings</h4>
        <div className="filter-checkbox-group">
          {[4, 3, 2].map((star) => (
            <label key={star} className="filter-label">
              <input 
                type="checkbox"
                checked={filters.minRating === star}
                onChange={() => handleRatingChange(star)}
              />
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                {star} <Star size={12} fill="currentColor" className="text-orange" /> & above
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Discount Filter */}
      <div className="filter-section">
        <h4 className="filter-section-title">Discount</h4>
        <div className="filter-checkbox-group">
          {[50, 30, 10].map((disc) => (
            <label key={disc} className="filter-label">
              <input 
                type="checkbox"
                checked={filters.minDiscount === disc}
                onChange={() => handleDiscountChange(disc)}
              />
              <span>{disc}% or more</span>
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
