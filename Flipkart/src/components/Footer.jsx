import React from 'react';
import { Mail, HelpCircle, Shield, Briefcase } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          {/* About Column */}
          <div>
            <h4 className="footer-column-title">About</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">Contact Us</a>
              <a href="#" className="footer-link">About Us</a>
              <a href="#" className="footer-link">Careers</a>
              <a href="#" className="footer-link">Flipkart Stories</a>
              <a href="#" className="footer-link">Corporate Information</a>
            </div>
          </div>

          {/* Help Column */}
          <div>
            <h4 className="footer-column-title">Help</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">Payments</a>
              <a href="#" className="footer-link">Shipping</a>
              <a href="#" className="footer-link">Cancellation & Returns</a>
              <a href="#" className="footer-link">FAQ</a>
              <a href="#" className="footer-link">Report Infringement</a>
            </div>
          </div>

          {/* Policy Column */}
          <div>
            <h4 className="footer-column-title">Consumer Policy</h4>
            <div className="footer-links">
              <a href="#" className="footer-link">Cancellation & Returns</a>
              <a href="#" className="footer-link">Terms Of Use</a>
              <a href="#" className="footer-link">Security</a>
              <a href="#" className="footer-link">Privacy</a>
              <a href="#" className="footer-link">Sitemap</a>
            </div>
          </div>

          {/* Mail Column */}
          <div>
            <h4 className="footer-column-title">Mail Us</h4>
            <p style={{ fontSize: '12px', lineHeight: '1.6', color: '#fff' }}>
              Flipkart Internet Private Limited,<br />
              Buildings Alyssa, Begonia &<br />
              Clove Embassy Tech Village,<br />
              Outer Ring Road, Devarabeesanahalli Village,<br />
              Bengaluru, 560103,<br />
              Karnataka, India
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="footer-bottom">
          <div style={{ display: 'flex', gap: '24px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Briefcase size={14} className="text-orange" />
              <span>Become a Seller</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Mail size={14} className="text-orange" />
              <span>Advertise</span>
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <HelpCircle size={14} className="text-orange" />
              <span>Help Center</span>
            </span>
          </div>

          <div className="footer-copyright">
            <Shield size={14} className="text-orange" />
            <span>&copy; {new Date().getFullYear()} FlipkartClone. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
