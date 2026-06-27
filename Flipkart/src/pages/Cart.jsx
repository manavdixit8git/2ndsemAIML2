import React from 'react';
import { useApp } from '../context/AppContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';

export default function Cart() {
  const { 
    cart, 
    cartTotalItems, 
    cartTotalPrice, 
    cartTotalOriginalPrice, 
    cartTotalDiscount,
    updateQuantity, 
    removeFromCart, 
    navigateTo 
  } = useApp();

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handlePlaceOrder = () => {
    navigateTo('checkout');
  };

  if (cart.length === 0) {
    return (
      <div className="container" style={{ marginTop: '16px' }}>
        <div className="empty-cart-view">
          <div style={{
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            backgroundColor: 'var(--fk-green-light)',
            color: 'var(--fk-blue)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '16px'
          }}>
            <ShoppingBag size={64} style={{ color: 'var(--fk-blue)' }} />
          </div>
          <h2>Your cart is empty!</h2>
          <p className="rating-count" style={{ fontSize: '14px', marginBottom: '8px' }}>
            Add items to it now to shop.
          </p>
          <button className="btn-shop-now" onClick={() => navigateTo('home')}>
            Shop Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container cart-layout">
      {/* Left Area: Cart Items */}
      <div className="cart-items-card">
        <div className="cart-header">
          My Cart ({cartTotalItems})
        </div>

        {cart.map((item) => (
          <div key={item.product.id} className="cart-item">
            {/* Item Image */}
            <div className="cart-item-img-box">
              <img src={item.product.image} alt={item.product.name} className="cart-item-img" />
            </div>

            {/* Item Details */}
            <div className="cart-item-details">
              <h3 className="cart-item-name">{item.product.name}</h3>
              <p className="cart-item-seller">Seller: Flipkart Retailer</p>
              
              {/* Pricing */}
              <div className="price-row" style={{ marginTop: '8px' }}>
                <span className="price-current">{formatPrice(item.product.price)}</span>
                {item.product.originalPrice > item.product.price && (
                  <>
                    <span className="price-original">{formatPrice(item.product.originalPrice)}</span>
                    <span className="price-discount">{item.product.discount}% off</span>
                  </>
                )}
              </div>

              {/* Quantity Selectors */}
              <div className="quantity-row">
                <div className="quantity-control">
                  <button 
                    className="qty-btn" 
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  >
                    <Minus size={14} />
                  </button>
                  <span className="qty-value">{item.quantity}</span>
                  <button 
                    className="qty-btn" 
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <button 
                  className="btn-remove-item"
                  onClick={() => removeFromCart(item.product.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Place Order Footer */}
        <div className="cart-actions-footer">
          <button className="btn-place-order" onClick={handlePlaceOrder}>
            Place Order
          </button>
        </div>
      </div>

      {/* Right Area: Price Details Summary */}
      <div className="price-summary-card">
        <div className="price-summary-header">
          Price Details
        </div>
        
        <div className="price-summary-body">
          <div className="price-summary-row">
            <span>Price ({cartTotalItems} {cartTotalItems === 1 ? 'item' : 'items'})</span>
            <span>{formatPrice(cartTotalOriginalPrice)}</span>
          </div>
          
          <div className="price-summary-row green">
            <span>Discount</span>
            <span>- {formatPrice(cartTotalDiscount)}</span>
          </div>

          <div className="price-summary-row green">
            <span>Delivery Charges</span>
            <span>FREE</span>
          </div>
        </div>

        <div className="price-summary-total">
          <span>Total Amount</span>
          <span>{formatPrice(cartTotalPrice)}</span>
        </div>

        <div className="price-summary-savings">
          You will save {formatPrice(cartTotalDiscount)} on this order
        </div>
      </div>
    </div>
  );
}
