import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import Header from './components/Header';
import CategoryBar from './components/CategoryBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductList from './pages/ProductList';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';

function AppContent() {
  const { activePage } = useApp();

  const renderActivePage = () => {
    switch (activePage) {
      case 'home':
        return <Home />;
      case 'search':
        return <ProductList />;
      case 'detail':
        return <ProductDetail />;
      case 'cart':
        return <Cart />;
      case 'checkout':
        return <Checkout />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="app-container">
      <Header />
      
      {/* Show Category Bar on Home and Product Search pages */}
      {(activePage === 'home' || activePage === 'search') && <CategoryBar />}
      
      <main className="main-content">
        {renderActivePage()}
      </main>
      
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
