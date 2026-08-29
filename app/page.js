'use client';

import Link from 'next/link';
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

export default function HomePage() {
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
              Briterply manufactures ultra-flat calibrated plywood, marine grade BWP 710, and architectural
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
                <img
                  src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
                  alt="Briterply Calibrated Plywood Architectural Display"
                />
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

      {/* 2. STATS TICKER BAR */}
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
            title="The 6 Pillars of Briterply Quality"
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

