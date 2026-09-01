import Link from 'next/link';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import { companyInfo, navItems } from '@/data/siteData';

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="footer" className="site-footer">
      <div className="container">
        <div className="footer-top-grid">
          <div>
            <Link href="/" className="brand footer-brand" aria-label="Core King Ply Home">
              <div className="brand-mark">
                <span className="brand-letter">CK</span>
              </div>
              <div className="brand-details">
                <span className="brand-text">
                  Core King <span style={{ color: '#f59e0b' }}>Ply</span>
                </span>
                <span className="brand-tagline" style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
                  Premium Calibrated Plywood
                </span>
              </div>
            </Link>

            <p className="footer-copy">
              {companyInfo.shortDescription}
            </p>

            {/* Extra badges commented out
            <div className="footer-badges-strip">
              <span className="pill emerald">IS:710 Marine</span>
              <span className="pill emerald">IS:303 BWR</span>
            </div>
            */}
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>Products</h3>
            <ul className="footer-links">
              <li>
                <Link href="/products#core-king-gold">
                  <span>Core King BWR</span>
                </Link>
              </li>
              <li>
                <Link href="/products#core-king-club">
                  <span>Core King Club710</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Contact Us</h3>
            <ul className="footer-contact">
              <li>
                <Phone size={18} />
                <a href={companyInfo.phoneLink}>{companyInfo.phone}</a>
              </li>
              <li>
                <MessageCircle size={18} />
                <a href={companyInfo.whatsappLink} target="_blank" rel="noreferrer">
                  WhatsApp: +91 7016059330
                </a>
              </li>
              <li>
                <InstagramIcon size={18} />
                <a href={companyInfo.instagramLink} target="_blank" rel="noreferrer">
                  Instagram
                </a>
              </li>
              <li>
                <Mail size={18} />
                <a href={companyInfo.emailLink}>{companyInfo.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2026 <strong>{companyInfo.name}</strong> | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}


