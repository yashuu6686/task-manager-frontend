'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronRight, Mail, Menu, X } from 'lucide-react';
import { companyInfo, navItems } from '@/data/siteData';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const isManualScrolling = useRef(false);

  // Scroll detection & Smooth Scroll Spy
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrolled = currentScrollY > 20;
          setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));

          // Don't override activeSection if user just clicked a menu link
          if (!isManualScrolling.current && pathname === '/') {
            const sections = [
              { id: 'contact', name: 'contact' },
              { id: 'features', name: 'features' },
              { id: 'about', name: 'about' },
              { id: 'hero', name: 'hero' },
            ];

            const scrollPosition = currentScrollY + 140;

            for (const s of sections) {
              const el = document.getElementById(s.id);
              if (el) {
                const top = el.offsetTop;
                if (scrollPosition >= top) {
                  setActiveSection((prev) => (prev !== s.name ? s.name : prev));
                  break;
                }
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Update active state when route changes
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
      setIsProductsDropdownOpen(false);

      if (pathname === '/products') {
        setActiveSection('products');
      } else if (pathname === '/about') {
        setActiveSection('about');
      } else if (pathname === '/features') {
        setActiveSection('features');
      } else if (pathname === '/contact') {
        setActiveSection('contact');
      } else if (pathname === '/') {
        const hash = window.location.hash.replace('#', '');
        if (hash) {
          setActiveSection(hash);
        } else {
          setActiveSection('hero');
        }
      }
    }, 0);

    return () => clearTimeout(timer);
  }, [pathname]);

  // Smooth scroll handler on menu click
  const handleNavClick = (e, href, sectionId) => {
    setIsOpen(false);
    setIsProductsDropdownOpen(false);

    if (sectionId) {
      setActiveSection(sectionId);
    }

    // If on homepage and clicking a section link, smoothly scroll to it without router re-render
    if (pathname === '/' && sectionId && sectionId !== 'products') {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        isManualScrolling.current = true;
        const headerOffset = 70;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: 'smooth',
        });

        // Update URL hash smoothly without jump
        window.history.pushState(null, '', `#${sectionId}`);

        setTimeout(() => {
          isManualScrolling.current = false;
        }, 700);
      }
    }
  };

  const isItemActive = (item) => {
    if (pathname === '/products' && item.href.includes('products')) return true;
    if (pathname === '/about' && item.label === 'About') return true;
    if (pathname === '/features' && item.label === 'Features') return true;
    if (pathname === '/contact' && item.label === 'Contact') return true;

    if (pathname === '/') {
      if (item.label === 'Home' && activeSection === 'hero') return true;
      if (item.label === 'About' && activeSection === 'about') return true;
      if (item.label === 'Features' && activeSection === 'features') return true;
      if (item.label === 'Contact' && activeSection === 'contact') return true;
      if (item.label === 'Products' && activeSection === 'products') return true;
    }

    return false;
  };

  return (
    <>
      {/* Main Sticky Header */}
      <header id="header" className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-shell">
          <Link
            href="/#hero"
            className="brand"
            aria-label="Core King Ply Home"
            onClick={(e) => handleNavClick(e, '/#hero', 'hero')}
          >
            <img
              src="/images/LOGO.svg"
              alt="Core King Ply Logo"
              className="brand-logo-img"
            />
          </Link>

          <nav className="desktop-nav" aria-label="Main Navigation">
            {navItems.map((item) => {
              const active = isItemActive(item);

              if (item.dropdown) {
                return (
                  <div
                    key={item.label}
                    className="nav-item-dropdown-wrap"
                    onMouseEnter={() => setIsProductsDropdownOpen(true)}
                    onMouseLeave={() => setIsProductsDropdownOpen(false)}
                    style={{ position: 'relative' }}
                  >
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href, 'products')}
                      className={`nav-link-item ${active ? 'active' : ''}`}
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} style={{ transition: 'transform 0.2s', transform: isProductsDropdownOpen ? 'rotate(180deg)' : 'rotate(0)' }} />
                    </Link>

                    <AnimatePresence>
                      {isProductsDropdownOpen && (
                        <motion.div
                          className="dropdown-menu-glass"
                          initial={{ opacity: 0, y: 8, scale: 0.96 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.96 }}
                          transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            minWidth: '220px',
                            background: '#121215',
                            borderRadius: '12px',
                            boxShadow: '0 16px 36px rgba(0,0,0,0.8), 0 0 15px rgba(212,175,55,0.15)',
                            padding: '0.5rem 0',
                            zIndex: 100,
                            border: '1px solid rgba(212, 175, 55, 0.35)',
                          }}
                        >
                          {item.dropdown.map((dropItem) => (
                            <Link
                              key={dropItem.label}
                              href={dropItem.href}
                              onClick={() => setIsProductsDropdownOpen(false)}
                              style={{
                                display: 'block',
                                padding: '0.65rem 1.25rem',
                                fontSize: '0.9rem',
                                color: '#ffffff',
                                fontWeight: 600,
                                transition: 'all 0.2s',
                              }}
                              className="dropdown-item-link"
                            >
                              {dropItem.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const sectionTarget =
                item.label === 'Home'
                  ? 'hero'
                  : item.label === 'About'
                  ? 'about'
                  : item.label === 'Features'
                  ? 'features'
                  : item.label === 'Contact'
                  ? 'contact'
                  : '';

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href, sectionTarget)}
                  className={`nav-link-item ${active ? 'active' : ''}`}
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="nav-actions">
            <a href={companyInfo.emailLink} className="button button-primary small-button header-quote-btn">
              <Mail size={15} />
              <span className="quote-btn-text">Email Us</span>
              <span className="quote-btn-short">Email</span>
            </a>

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
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            >
              <nav className="mobile-nav-list" aria-label="Mobile Navigation">
                {navItems.map((item) => {
                  const active = isItemActive(item);
                  const sectionTarget =
                    item.label === 'Home'
                      ? 'hero'
                      : item.label === 'About'
                      ? 'about'
                      : item.label === 'Features'
                      ? 'features'
                      : item.label === 'Contact'
                      ? 'contact'
                      : 'products';

                  return (
                    <div key={item.label} className="mobile-nav-item">
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href, sectionTarget)}
                        className={`mobile-nav-link ${active ? 'active' : ''}`}
                      >
                        <span className="mobile-nav-text">{item.label}</span>
                        <ChevronRight size={18} className="mobile-nav-arrow" />
                      </Link>

                      {item.dropdown && (
                        <div className="mobile-submenu">
                          {item.dropdown.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setIsOpen(false)}
                              className="mobile-sub-link"
                            >
                              <span className="mobile-sub-dot">◆</span>
                              <span>{sub.label}</span>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </nav>

              <div className="mobile-contact-box">
                <a
                  href={companyInfo.emailLink}
                  className="button button-primary"
                >
                  <Mail size={16} /> Email: {companyInfo.email}
                </a>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </header>
    </>
  );
}




