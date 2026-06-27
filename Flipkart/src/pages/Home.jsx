import React from 'react';
import BannerSlider from '../components/BannerSlider';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useApp } from '../context/AppContext';
import { ArrowRight, Smartphone, Sparkles, Laptop, Award } from 'lucide-react';

export default function Home() {
  const { navigateTo, setSelectedCategory } = useApp();

  // Get specific category subsets for home page showcases
  const mobiles = products.filter(p => p.category === 'Mobiles').slice(0, 4);
  const electronics = products.filter(p => p.category === 'Electronics').slice(0, 4);
  const trending = products.slice(0, 4);

  const handleShowcaseViewAll = (category) => {
    setSelectedCategory(category);
    navigateTo('search', category);
  };

  return (
    <div className="container">
      {/* Banner Carousel */}
      <BannerSlider />

      {/* Top Deals Section */}
      <div className="section-card">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Award className="text-orange" />
            <h2 className="section-title">Today's Hot Deals</h2>
          </div>
          <button 
            className="btn-view-all"
            onClick={() => handleShowcaseViewAll('All')}
          >
            View All
          </button>
        </div>
        <div className="product-row-scroll">
          {trending.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Mobiles Showcase */}
      <div className="section-card">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Smartphone className="text-blue" style={{ color: 'var(--fk-blue)' }} />
            <h2 className="section-title">Best of Smartphones</h2>
          </div>
          <button 
            className="btn-view-all"
            onClick={() => handleShowcaseViewAll('Mobiles')}
          >
            View All
          </button>
        </div>
        <div className="product-row-scroll">
          {mobiles.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Electronics Showcase */}
      <div className="section-card">
        <div className="section-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Laptop className="text-blue" style={{ color: 'var(--fk-blue)' }} />
            <h2 className="section-title">Top Electronics Deals</h2>
          </div>
          <button 
            className="btn-view-all"
            onClick={() => handleShowcaseViewAll('Electronics')}
          >
            View All
          </button>
        </div>
        <div className="product-row-scroll">
          {electronics.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
