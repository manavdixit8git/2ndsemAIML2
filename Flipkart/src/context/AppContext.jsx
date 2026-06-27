import React, { createContext, useState, useContext, useEffect } from 'react';
import { products } from '../data/products';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Navigation State
  const [activePage, setActivePage] = useState('home'); // 'home', 'search', 'detail', 'cart', 'checkout'
  const [selectedProductId, setSelectedProductId] = useState(null);
  
  // Filtering state
  const [filters, setFilters] = useState({
    priceRange: 100000,
    minRating: 0,
    minDiscount: 0
  });

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, selectedProductId]);

  // Cart operations
  const addToCart = (product, qty = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + qty }
            : item
        );
      }
      return [...prevCart, { product, quantity: qty }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId, qty) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.product.id === productId ? { ...item, quantity: qty } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Navigation Helper
  const navigateTo = (page, param = null) => {
    if (page === 'detail') {
      setSelectedProductId(param);
    } else if (page === 'search') {
      // If param is a category, set the selectedCategory
      if (param) {
        setSelectedCategory(param);
      } else {
        setSelectedCategory('All');
      }
    }
    setActivePage(page);
  };

  const applyFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  const resetFilters = () => {
    setFilters({
      priceRange: 100000,
      minRating: 0,
      minDiscount: 0
    });
  };

  const cartTotalItems = cart.reduce((total, item) => total + item.quantity, 0);
  
  const cartTotalPrice = cart.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  
  const cartTotalOriginalPrice = cart.reduce(
    (total, item) => total + item.product.originalPrice * item.quantity,
    0
  );
  
  const cartTotalDiscount = cartTotalOriginalPrice - cartTotalPrice;

  return (
    <AppContext.Provider
      value={{
        cart,
        cartTotalItems,
        cartTotalPrice,
        cartTotalOriginalPrice,
        cartTotalDiscount,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        activePage,
        selectedProductId,
        filters,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        navigateTo,
        applyFilters,
        resetFilters
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
