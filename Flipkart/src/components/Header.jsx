import React, { useState, useEffect, useRef } from 'react';
import { Search, ShoppingCart, User, HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { products } from '../data/products';

export default function Header() {
  const { 
    cartTotalItems, 
    searchQuery, 
    setSearchQuery, 
    navigateTo 
  } = useApp();

  const [inputVal, setInputVal] = useState(searchQuery);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [suggestions, setSuggestions] = useState([]);
  const suggestionsRef = useRef(null);

  // Sync state if searchQuery changes from context
  useEffect(() => {
    setInputVal(searchQuery);
  }, [searchQuery]);

  // Handle clicking outside suggestions to close them
  useEffect(() => {
    function handleClickOutside(event) {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Update suggestions as user types
  const handleInputChange = (e) => {
    const val = e.target.value;
    setInputVal(val);
    
    if (val.trim().length > 0) {
      const filtered = products
        .filter(p => 
          p.name.toLowerCase().includes(val.toLowerCase()) || 
          p.category.toLowerCase().includes(val.toLowerCase())
        )
        .slice(0, 5);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(inputVal);
    setShowSuggestions(false);
    navigateTo('search');
  };

  const handleSuggestionClick = (product) => {
    setInputVal(product.name);
    setSearchQuery(product.name);
    setShowSuggestions(false);
    navigateTo('detail', product.id);
  };

  return (
    <header className="header">
      <div className="container header-inner">
        {/* Logo */}
        <div className="logo-container" onClick={() => { setSearchQuery(''); navigateTo('home'); }}>
          <span className="logo-text">Flipkart</span>
          <span className="logo-subtext">
            Explore <span className="plus-text">Plus</span> 
            <Sparkles size={10} className="plus-text" fill="currentColor" />
          </span>
        </div>

        {/* Search */}
        <div className="search-container" ref={suggestionsRef}>
          <form onSubmit={handleSearchSubmit} className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search for products, brands and more"
              value={inputVal}
              onChange={handleInputChange}
              onFocus={() => inputVal.trim() && setShowSuggestions(true)}
            />
            <button type="submit" className="search-button">
              <Search size={20} />
            </button>
          </form>

          {/* Suggestions Dropdown */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="search-suggestions">
              {suggestions.map((product) => (
                <div 
                  key={product.id} 
                  className="suggestion-item"
                  onClick={() => handleSuggestionClick(product)}
                >
                  <Search size={14} className="text-grey" />
                  <span>{product.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Navigation Actions */}
        <div className="nav-buttons">
          <button className="login-btn">Login</button>
          
          <div className="nav-link" onClick={() => navigateTo('home')}>
            <span>Become a Seller</span>
          </div>

          <div className="nav-link">
            <span>More</span>
            <ChevronDown size={14} />
          </div>

          <div className="nav-link" onClick={() => navigateTo('cart')}>
            <ShoppingCart size={20} />
            <span>Cart</span>
            {cartTotalItems > 0 && (
              <span className="cart-badge">{cartTotalItems}</span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
