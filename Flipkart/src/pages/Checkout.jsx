import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, CreditCard, Landmark, CircleDot, Truck, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Checkout() {
  const { 
    cart, 
    cartTotalItems, 
    cartTotalPrice, 
    cartTotalOriginalPrice, 
    cartTotalDiscount,
    clearCart, 
    navigateTo 
  } = useApp();

  // Form states
  const [formData, setFormData] = useState({
    name: 'Manav Dixit',
    phone: '9876543210',
    pincode: '560103',
    locality: 'Bellandur',
    address: 'Flat 405, Orchid Residency',
    city: 'Bengaluru',
    state: 'Karnataka'
  });

  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [orderId, setOrderId] = useState('');

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    
    // Generate a random Order ID
    const generatedId = 'OD' + Math.floor(100000000000000 + Math.random() * 900000000000000);
    setOrderId(generatedId);
    
    // Launch Confetti!
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 }
    });

    setOrderCompleted(true);
  };

  const handleContinueShopping = () => {
    clearCart();
    navigateTo('home');
  };

  if (orderCompleted) {
    return (
      <div className="container">
        <div className="success-screen">
          <div className="success-icon-wrapper">
            <CheckCircle2 size={48} />
          </div>
          <h1 className="success-title">Order Placed Successfully!</h1>
          <p className="success-msg">
            Thank you for shopping with us. Your order has been placed and is currently being processed.
          </p>

          <div className="success-details">
            <div className="success-detail-row">
              <span className="success-detail-label">Order ID:</span>
              <span className="success-detail-val">{orderId}</span>
            </div>
            <div className="success-detail-row">
              <span className="success-detail-label">Deliver to:</span>
              <span className="success-detail-val">{formData.name}</span>
            </div>
            <div className="success-detail-row">
              <span className="success-detail-label">Address:</span>
              <span className="success-detail-val">{formData.address}, {formData.city} - {formData.pincode}</span>
            </div>
            <div className="success-detail-row">
              <span className="success-detail-label">Amount Paid:</span>
              <span className="success-detail-val" style={{ color: 'var(--fk-green)' }}>{formatPrice(cartTotalPrice)}</span>
            </div>
            <div className="success-detail-row">
              <span className="success-detail-label">Payment Method:</span>
              <span className="success-detail-val" style={{ textTransform: 'uppercase' }}>{paymentMethod}</span>
            </div>
          </div>

          <button className="btn-continue-shopping" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container" style={{ padding: '48px', textAlign: 'center' }}>
        <h2>No items in cart to checkout</h2>
        <button className="btn-home-back" style={{ marginTop: '16px' }} onClick={() => navigateTo('home')}>
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container checkout-layout">
      {/* Left: Address and Payment steps */}
      <form onSubmit={handleSubmitOrder} className="checkout-steps-card">
        {/* Step 1 */}
        <div className="checkout-step">
          <h3 className="checkout-step-title">
            <span className="checkout-step-num">1</span>
            <span>Delivery Address</span>
          </h3>
          
          <div className="address-form">
            <div className="form-field">
              <label htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleInputChange} 
                required 
              />
            </div>
            
            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div className="form-field">
              <label htmlFor="pincode">Pincode</label>
              <input 
                type="text" 
                id="pincode" 
                name="pincode" 
                value={formData.pincode} 
                onChange={handleInputChange} 
                maxLength={6}
                required 
              />
            </div>

            <div className="form-field">
              <label htmlFor="locality">Locality</label>
              <input 
                type="text" 
                id="locality" 
                name="locality" 
                value={formData.locality} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div className="form-field form-full-width">
              <label htmlFor="address">Address (Area and Street)</label>
              <input 
                type="text" 
                id="address" 
                name="address" 
                value={formData.address} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div className="form-field">
              <label htmlFor="city">City/District/Town</label>
              <input 
                type="text" 
                id="city" 
                name="city" 
                value={formData.city} 
                onChange={handleInputChange} 
                required 
              />
            </div>

            <div className="form-field">
              <label htmlFor="state">State</label>
              <select 
                id="state" 
                name="state" 
                value={formData.state} 
                onChange={handleInputChange}
                required
              >
                <option value="Karnataka">Karnataka</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
              </select>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="checkout-step">
          <h3 className="checkout-step-title">
            <span className="checkout-step-num">2</span>
            <span>Payment Options</span>
          </h3>

          <div className="payment-options">
            <label className="payment-option">
              <input 
                type="radio" 
                name="payment" 
                value="card" 
                checked={paymentMethod === 'card'} 
                onChange={() => setPaymentMethod('card')}
              />
              <CreditCard size={18} className="text-grey" />
              <span>Credit / Debit Card (Visa, MasterCard, RuPay)</span>
            </label>

            <label className="payment-option">
              <input 
                type="radio" 
                name="payment" 
                value="netbanking" 
                checked={paymentMethod === 'netbanking'} 
                onChange={() => setPaymentMethod('netbanking')}
              />
              <Landmark size={18} className="text-grey" />
              <span>Net Banking</span>
            </label>

            <label className="payment-option">
              <input 
                type="radio" 
                name="payment" 
                value="upi" 
                checked={paymentMethod === 'upi'} 
                onChange={() => setPaymentMethod('upi')}
              />
              <CircleDot size={18} className="text-grey" />
              <span>UPI (PhonePe, GPay, BHIM)</span>
            </label>

            <label className="payment-option">
              <input 
                type="radio" 
                name="payment" 
                value="cod" 
                checked={paymentMethod === 'cod'} 
                onChange={() => setPaymentMethod('cod')}
              />
              <Truck size={18} className="text-grey" />
              <span>Cash on Delivery (COD)</span>
            </label>
          </div>
        </div>

        <button type="submit" className="btn-complete-order">
          Complete Purchase
        </button>
      </form>

      {/* Right Price details breakdown */}
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
          <span>Total Payable</span>
          <span>{formatPrice(cartTotalPrice)}</span>
        </div>

        <div className="price-summary-savings">
          You will save {formatPrice(cartTotalDiscount)} on this order
        </div>
      </div>
    </div>
  );
}
