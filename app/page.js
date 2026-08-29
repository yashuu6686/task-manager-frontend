'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Award, Layers3, Flame, Droplets, Phone, MessageCircle } from 'lucide-react';
import AnimationWrapper from '@/components/AnimationWrapper';
import FeatureCard from '@/components/FeatureCard';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import InteractiveCalculator from '@/components/InteractiveCalculator';
import ComparisonTable from '@/components/ComparisonTable';
import QualityLabSection from '@/components/QualityLabSection';
import TestimonialSlider from '@/components/TestimonialSlider';
import FaqAccordion from '@/components/FaqAccordion';
import { companyInfo, featureList, homeHighlights, products, quickStats, trustPoints, whyPlywood } from '@/data/siteData';

const heroBoards = [
  {
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    title: 'Core King Club 710',
    tag: 'IS:710 BWP Marine Grade',
    desc: '4-Stage Press • 72h Boil Proof Gurjan Core',
  },
  {
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=1200&q=80',
    title: 'Core King Pine Blockboard',
    tag: 'IS:1659 Warp-Free Pine Core',
    desc: 'Kiln-Seasoned Solid Pine Battens',
  },
  {
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    title: 'Core King Gold BWR',
    tag: 'IS:303 Commercial Interior',
    desc: '±0.1mm Dual-Sided Machine Calibrated',
  },
  {
    image: 'https://images.unsplash.com/photo-1541123437800-1bb1317badc2?auto=format&fit=crop&w=1200&q=80',
    title: 'Core King Platinum Fire-Shield',
    tag: 'IS:5509 Fire Retardant',
    desc: 'Vacuum Impregnated • 30+ Min Flame Shield',
  },
];

const marqueeBoards = [
  { title: 'Core King Club 710', sub: 'IS:710 Marine BWP', icon: '🪵' },
  { title: '±0.1mm Dual Calibration', sub: 'CNC Wide Belt Sanded', icon: '📐' },
  { title: 'Kiln-Seasoned Pine Blockboard', sub: 'Warp-Free Solid Core', icon: '🌲' },
  { title: '72-Hour Boiling Water Proof', sub: 'Pure Phenolic Bond', icon: '💧' },
  { title: '30-Year Replacement Guarantee', sub: 'Direct Factory Warranty', icon: '🛡️' },
  { title: 'Core King Gold BWR', sub: 'IS:303 Commercial Grade', icon: '✨' },
  { title: 'Platinum Fire-Shield', sub: 'IS:5509 Fire Retardant', icon: '🔥' },
  { title: 'Yamunanagar Works', sub: '4X Hot Press Facility', icon: '🏭' },
  { title: 'E0 Eco Emission Grade', sub: 'Safe Indoor Air', icon: '🌿' },
  { title: 'Pro Shuttering Board', sub: '30+ Repetitions', icon: '🏗️' },
];

export default function HomePage() {
  const [activeBoard, setActiveBoard] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveBoard((prev) => (prev + 1) % heroBoards.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-grid">
          <AnimationWrapper className="hero-copy" delay={0.05}>
            <span className="eyebrow">
              <Sparkles size={14} /> Yamunanagar Manufacturing Excellence
            </span>
            <h1>
              Engineered <span className="text-highlight">Calibrated Plywood</span> For Luxury Spaces.
            </h1>
            <p>
              Core King Ply manufactures ultra-flat calibrated plywood, marine grade BWP 710, and architectural
              blockboards using 4-time hydraulic press technology and pure phenolic resins.
            </p>

            <div className="hero-actions">
              <Link href="/products" className="button button-primary">
                <span>Explore Products</span>
                <ArrowRight size={17} />
              </Link>
              <Link href="/contact" className="button button-secondary">
                <span>Request Sample Kit</span>
              </Link>
            </div>

            <div className="hero-trust-bar">
              <div className="trust-item">
                <ShieldCheck size={18} />
                <span>IS:710 Marine Certified</span>
              </div>
              <div className="trust-item">
                <CheckCircle2 size={18} />
                <span>±0.1mm Calibrated Tolerance</span>
              </div>
              <div className="trust-item">
                <Award size={18} />
                <span>30-Year Replacement Guarantee</span>
              </div>
            </div>
          </AnimationWrapper>

          <AnimationWrapper className="hero-visual" delay={0.15}>
            <div className="hero-visual-card">
              <div className="hero-image-wrapper">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeBoard}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
                  >
                    <img
                      src={heroBoards[activeBoard].image}
                      alt={heroBoards[activeBoard].title}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="hero-board-overlay" />

                {/* Interactive Board Indicators */}
                <div className="hero-board-indicators">
                  {heroBoards.map((board, i) => (
                    <button
                      key={board.title}
                      type="button"
                      onClick={() => setActiveBoard(i)}
                      className={`hero-board-dot ${i === activeBoard ? 'active' : ''}`}
                      aria-label={`View ${board.title}`}
                      title={board.title}
                    />
                  ))}
                </div>

                {/* Active Board Live Info */}
                <div className="hero-board-info">
                  <span className="hero-board-tag">
                    <span className="live-pulse-dot" />
                    <span>{heroBoards[activeBoard].tag}</span>
                  </span>
                  <h3>{heroBoards[activeBoard].title}</h3>
                  <p>{heroBoards[activeBoard].desc}</p>
                </div>
              </div>

              {/* Floating Stat Top */}
              <div className="hero-floating-stat top-left">
                <div className="stat-icon-wrap">
                  <Layers3 size={22} />
                </div>
                <div className="stat-text">
                  <strong>100% Calibrated</strong>
                  <span>Zero thickness variation</span>
                </div>
              </div>

              {/* Floating Stat Bottom */}
              <div className="hero-floating-stat bottom-right">
                <div className="stat-icon-wrap emerald">
                  <Droplets size={22} />
                </div>
                <div className="stat-text">
                  <strong>72h Boiling Proof</strong>
                  <span>100% BWP Marine resin</span>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>

      {/* 2. INFINITE BOARDING & BRAND MARQUEE RIBBON */}
      <section className="infinite-boarding-section" aria-label="Core King Wood Technologies Marquee">
        <div className="infinite-boarding-track">
          {marqueeBoards.map((item, index) => (
            <div key={`m1-${index}`} className="infinite-board-pill">
              <span className="infinite-board-icon">{item.icon}</span>
              <strong>{item.title}</strong>
              <span className="infinite-board-dot-sep" />
              <span className="sub">{item.sub}</span>
            </div>
          ))}
          {marqueeBoards.map((item, index) => (
            <div key={`m2-${index}`} className="infinite-board-pill">
              <span className="infinite-board-icon">{item.icon}</span>
              <strong>{item.title}</strong>
              <span className="infinite-board-dot-sep" />
              <span className="sub">{item.sub}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 3. STATS TICKER BAR */}
      <section className="stats-ticker-section">
        <div className="container">
          <div className="stats-grid">
            {quickStats.map((st) => (
              <div key={st.label} className="stat-card-clean">
                <div className="stat-number">{st.value}</div>
                <div className="stat-label">{st.label}</div>
                <div className="stat-sub">{st.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FLAGSHIP PRODUCTS */}
      <section id="products" className="products-section">
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '3rem' }}>
            <SectionHeading
              eyebrow="Engineered Catalog"
              title="Flagship Plywood & Wood Range"
              description="Manufactured with zero core gaps, Gurjan faces, and unextended phenolic bond chemistry."
              align="left"
            />
            <Link href="/products" className="button button-dark" style={{ marginBottom: '3rem' }}>
              <span>View All 5 Series</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="product-grid">
            {products.slice(0, 4).map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE CALCULATOR */}
      <InteractiveCalculator />

      {/* 5. ENGINEERING & FEATURES */}
      <section id="features" className="features-section">
        <div className="container">
          <SectionHeading
            eyebrow="Precision Engineering"
            title="The 6 Pillars of Core King Ply Quality"
            description="Every sheet is engineered to outperform standard commercial plywood in water resistance, tensile strength, and joinery finish."
            align="center"
          />

          <div className="feature-grid">
            {featureList.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* 6. COMPARISON TABLE */}
      <ComparisonTable />

      {/* 7. QUALITY TESTING LAB */}
      <QualityLabSection />

      {/* 8. TESTIMONIALS */}
      <TestimonialSlider />

      {/* 9. FAQ ACCORDION */}
      <FaqAccordion />

      {/* 10. DIRECT CONTACT & INQUIRY */}
      <section id="contact" className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info-card">
            <span className="eyebrow eyebrow-dark">Direct Factory Access</span>
            <h3>Connect with Yamunanagar Works</h3>
            <p>
              Whether you require 50 sheets for a bespoke penthouse or 5,000 sheets for a commercial tower,
              our technical sales desk is at your service.
            </p>

            <ul className="contact-details-list">
              <li className="contact-detail-item">
                <div className="contact-icon-box">
                  <Phone size={20} />
                </div>
                <div className="contact-detail-text">
                  <strong>Direct Factory Phone</strong>
                  <a href={companyInfo.phoneLink}>{companyInfo.phone}</a>
                </div>
              </li>

              <li className="contact-detail-item">
                <div className="contact-icon-box">
                  <MessageCircle size={20} />
                </div>
                <div className="contact-detail-text">
                  <strong>WhatsApp Sales Hotline</strong>
                  <a href={companyInfo.whatsappLink} target="_blank" rel="noreferrer">
                    +91 96242 77017 (24x7 Chat)
                  </a>
                </div>
              </li>

              <li className="contact-detail-item">
                <div className="contact-icon-box">
                  <ShieldCheck size={20} />
                </div>
                <div className="contact-detail-text">
                  <strong>Plant & Dispatch Address</strong>
                  <span>{companyInfo.address}</span>
                </div>
              </li>
            </ul>

            <div style={{ padding: '1.25rem', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
              <strong style={{ display: 'block', color: '#f59e0b', fontSize: '0.9rem', marginBottom: '0.25rem' }}>
                Complimentary Architect Sample Kit
              </strong>
              <span style={{ fontSize: '0.825rem', color: 'rgba(255,255,255,0.7)' }}>
                Includes 19mm cross-sections, calibration test blocks, and physical IS:710 test certificates delivered directly to your studio.
              </span>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </>
  );
}

