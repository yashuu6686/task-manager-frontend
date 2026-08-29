import Link from 'next/link';
import { Mail, MapPin, MessageCircle, Phone, ShieldCheck, Award, ArrowUpRight } from 'lucide-react';
import { companyInfo, navItems, products } from '@/data/siteData';

export default function Footer() {
  return (
    <footer className="site-footer">
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
                  Yamunanagar, India
                </span>
              </div>
            </Link>

            <p className="footer-copy">
              India’s premier manufacturer of high-precision calibrated plywood, marine grade BWP 710,
              and architectural wood solutions. Engineered for architects, interior designers, and luxury spaces.
            </p>


            <div className="footer-badges-strip">
              <span className="pill emerald">
                <ShieldCheck size={13} /> IS:710 Marine
              </span>
              <span className="pill emerald">
                <Award size={13} /> IS:303 BWR
              </span>
              <span className="pill ghost" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>
                E0 Emission
              </span>
            </div>
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
            <h3>Product Range</h3>
            <ul className="footer-links">
              {products.map((product) => (
                <li key={product.slug}>
                  <Link href={`/products/${product.slug}`}>
                    <span>{product.name}</span>
                    <ArrowUpRight size={14} opacity={0.6} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-column">
            <h3>Factory & Sales Desk</h3>
            <ul className="footer-contact">
              <li>
                <MapPin size={18} />
                <span>{companyInfo.address}</span>
              </li>
              <li>
                <Phone size={18} />
                <a href={companyInfo.phoneLink}>Call: {companyInfo.phone}</a>
              </li>
              <li>
                <MessageCircle size={18} />
                <a href={companyInfo.whatsappLink} target="_blank" rel="noreferrer">
                  WhatsApp: +91 96242 77017
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
          <p>© {new Date().getFullYear()} Core King Ply Industries. All Rights Reserved. Crafted for Architectural Excellence.</p>
          <p>BIS Certified Manufacturing Unit • Yamunanagar, Haryana</p>
        </div>


      </div>
    </footer>
  );
}

