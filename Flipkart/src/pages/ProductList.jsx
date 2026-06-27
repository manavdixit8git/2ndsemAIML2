import React, { useState, useMemo } from 'react';
import Filters from '../components/Filters';
import ProductCard from '../components/ProductCard';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';
import { SearchSlash, SlidersHorizontal, AlertCircle } from 'lucide-react';

export default function ProductList() {
  const { 
    searchQuery, 
    selectedCategory, 
    filters, 
    navigateTo, 
    setSearchQuery,
    setSelectedCategory,
    resetFilters
  } = useApp();

  const [sortBy, setSortBy] = useState('relevance');

  // Filter and Sort products
  const processedProducts = useMemo(() => {
    // 1. Filter
    let items = products.filter((p) => {
      // Category check
      if (
        selectedCategory && 
        selectedCategory !== 'All' && 
        p.category.toLowerCase() !== selectedCategory.toLowerCase()
      ) {
        return false;
      }
      
      // Search query check
      if (searchQuery.trim().length > 0) {
        const query = searchQuery.toLowerCase();
        const inName = p.name.toLowerCase().includes(query);
        const inDesc = p.description.toLowerCase().includes(query);
        const inCat = p.category.toLowerCase().includes(query);
        if (!inName && !inDesc && !inCat) {
          return false;
        }
      }

      // Price slider check
      if (p.price > filters.priceRange) {
        return false;
      }

      // Min rating check
      if (p.rating < filters.minRating) {
        return false;
      }

      // Min discount check
      if (p.discount < filters.minDiscount) {
        return false;
      }

      return true;
    });

    // 2. Sort
    if (sortBy === 'priceLowToHigh') {
      items.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceHighToLow') {
      items.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
      items.sort((a, b) => b.rating - a.rating);
    }

    return items;
  }, [searchQuery, selectedCategory, filters, sortBy]);

  const handleResetSearch = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    resetFilters();
    navigateTo('home');
  };

  return (
    <div className="container search-page-layout">
      {/* Filters Sidebar */}
      <Filters />

      {/* Results Section */}
      <div className="results-container">
        {/* Results Header */}
        <div className="results-header-card">
          <div className="results-breadcrumb">
            Home &gt; {selectedCategory || 'All Categories'} {searchQuery && `> Search: "${searchQuery}"`}
          </div>

          <div className="results-summary">
            <h1 className="results-query-title" style={{ fontSize: '16px', margin: '0' }}>
              {searchQuery ? `Showing results for "${searchQuery}"` : `Showing ${selectedCategory} products`}
            </h1>
            <span className="rating-count" style={{ fontSize: '13px' }}>
              ({processedProducts.length} items found)
            </span>
          </div>

          {/* Sort options */}
          <div className="sort-by-row">
            <span className="sort-label">Sort By</span>
            {[
              { id: 'relevance', label: 'Popularity' },
              { id: 'priceLowToHigh', label: 'Price -- Low to High' },
              { id: 'priceHighToLow', label: 'Price -- High to Low' },
              { id: 'rating', label: 'Customer Rating' }
            ].map((opt) => (
              <span
                key={opt.id}
                className={`sort-option ${sortBy === opt.id ? 'active' : ''}`}
                onClick={() => setSortBy(opt.id)}
              >
                {opt.label}
              </span>
            ))}
          </div>
        </div>

        {/* Products Grid or Empty State */}
        {processedProducts.length > 0 ? (
          <div className="products-grid">
            {processedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <AlertCircle size={48} className="text-grey" style={{ color: 'var(--text-grey)' }} />
            <h2>No results found</h2>
            <p className="rating-count" style={{ fontSize: '14px', marginBottom: '8px' }}>
              Try adjusting your filters or checking your spelling.
            </p>
            <button className="btn-home-back" onClick={handleResetSearch}>
              Go Back Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
