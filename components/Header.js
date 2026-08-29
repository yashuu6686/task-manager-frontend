'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ChevronRight, Menu, MessageCircle, Phone, ShieldCheck, Sparkles, X } from 'lucide-react';
import { companyInfo, navItems } from '@/data/siteData';

export default function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Micro Top Announcement Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <ShieldCheck size={14} color="#10b981" />
              <span>IS:710 Marine & IS:303 Certified Manufacturing</span>
            </span>
            <span className="top-bar-badge">Yamunanagar Facility</span>
          </div>

          <div className="top-bar-right">
            <a href={companyInfo.phoneLink} className="top-bar-item">
              <Phone size={13} color="#f59e0b" />
              <span>Factory Sales: {companyInfo.phoneDisplay}</span>
            </a>
            <a href={companyInfo.whatsappLink} target="_blank" rel="noreferrer" className="top-bar-item">
              <MessageCircle size={13} color="#25d366" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Sticky Header */}
      <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-shell">
          <Link href="/" className="brand" aria-label="Core King Ply Home">
            <div className="brand-mark">
              <span className="brand-letter">CK</span>
            </div>
            <div className="brand-details">
              <span className="brand-text">
                Core King <span>Ply</span>
              </span>
              <span className="brand-tagline">Ply • Board • Door</span>
            </div>
          </Link>




          <nav className="desktop-nav" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={isActive ? 'active' : ''}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="nav-actions">
            <a href={companyInfo.phoneLink} className="header-phone">
              <Phone size={15} color="#d97706" />
              <span>{companyInfo.phone}</span>
            </a>

            <Link href="/contact" className="button button-primary small-button header-quote-btn">
              <span className="quote-btn-text">Get Instant Quote</span>
              <span className="quote-btn-short">Get Quote</span>
              <ArrowRight size={15} />
            </Link>

            <button
              type="button"
              className="menu-toggle"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Animated Mobile Drawer */}
        <AnimatePresence>
          {isOpen ? (
            <motion.div
              id="mobile-navigation"
              className="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav aria-label="Mobile Navigation">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={pathname === item.href ? 'active' : ''}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={18} opacity={0.6} />
                  </Link>
                ))}
              </nav>

              <div className="mobile-contact-box">
                <Link href="/contact" className="button button-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <Sparkles size={16} /> Get Instant Quote <ArrowRight size={16} />
                </Link>
                <a href={companyInfo.phoneLink} className="button button-dark" style={{ width: '100%' }}>
                  <Phone size={16} /> Call Sales Desk: {companyInfo.phone}
                </a>
                <a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-emerald"
                  style={{ width: '100%' }}
                >
                  <MessageCircle size={16} /> WhatsApp Inquiry
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}

