import React from 'react';
import { Smartphone, Laptop, Shirt, Home, Sparkles, Tv, Gift, HelpCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function CategoryBar() {
  const { navigateTo, setSelectedCategory, resetFilters } = useApp();

  const categories = [
    { name: 'All', icon: Sparkles },
    { name: 'Mobiles', icon: Smartphone },
    { name: 'Electronics', icon: Laptop },
    { name: 'Fashion', icon: Shirt },
    { name: 'Home', icon: Home }
  ];

  const handleCategoryClick = (categoryName) => {
    resetFilters();
    setSelectedCategory(categoryName);
    navigateTo('search', categoryName);
  };

  return (
    <div className="category-bar">
      <div className="container category-list">
        {categories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div 
              key={idx} 
              className="category-item"
              onClick={() => handleCategoryClick(cat.name)}
            >
              <div className="category-icon-wrapper">
                <Icon size={22} />
              </div>
              <span className="category-name">{cat.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
