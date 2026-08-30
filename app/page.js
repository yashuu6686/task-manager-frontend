'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCheck,
  Droplet,
  Wrench,
  Layers,
  CircleDot,
  Flame,
  ShieldCheck,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { companyInfo, aboutPoints, featureList, qualityPolicy, heroSlides } from '@/data/siteData';

/* =========================================================================
   EXTRA COMPONENTS COMMENTED OUT TO MATCH BRITERPLY.COM EXACT CONTENT
   =========================================================================
import InteractiveCalculator from '@/components/InteractiveCalculator';
import ComparisonTable from '@/components/ComparisonTable';
import QualityLabSection from '@/components/QualityLabSection';
import TestimonialSlider from '@/components/TestimonialSlider';
import FaqAccordion from '@/components/FaqAccordion';
import FeatureCard from '@/components/FeatureCard';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/SectionHeading';
========================================================================= */

const featureIconMap = {
  CheckCheck: <CheckCheck size={28} className="feature-icon-svg" />,
  Droplet: <Droplet size={28} className="feature-icon-svg" />,
  Wrench: <Wrench size={28} className="feature-icon-svg" />,
  Layers: <Layers size={28} className="feature-icon-svg" />,
  CircleDot: <CircleDot size={28} className="feature-icon-svg" />,
  Flame: <Flame size={28} className="feature-icon-svg" />,
};

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section id="hero" className="briter-hero-section">
        <div className="hero-slider-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="hero-slide-active"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].alt}
                className="hero-slider-img"
              />
            </motion.div>
          </AnimatePresence>

          <div className="hero-slider-overlay" />

          {/* Slider Navigation Controls */}
          <button
            type="button"
            className="hero-arrow-btn prev"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            type="button"
            className="hero-arrow-btn next"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            <ChevronRight size={28} />
          </button>

          <div className="hero-dots-pagination">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                className={`hero-dot-bullet ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="hero-caption-box">
            <div className="container">
              <h2>
                Where Quality Meets Craftsmanship<span>.</span>
              </h2>
              <p>Supplying quality plywoods with trust and speed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          EXTRA INFOBARS / STATS COMMENTED OUT
          =====================================================================
      <section className="infinite-boarding-section">...</section>
      <section className="stats-ticker-section">...</section>
      ===================================================================== */}

      {/* 2. ABOUT SECTION */}
      <section id="about" className="briter-about-section">
        <div className="container">
          <div className="briter-about-grid">
            <div className="about-image-col">
              <img
                src="/images/elevate.webp"
                alt="Core King Plywood Elevate"
                className="about-featured-img"
              />
            </div>

            <div className="about-content-col">
              <h3>Elevate Your Projects with {companyInfo.name}wood</h3>
              <p className="about-lead-p">
                {companyInfo.name}wood is one of India&apos;s fastest-growing manufacturers and
                suppliers of premium calibrated plywood. Known for strength, precision,
                and durability, our plywood and laminate products are crafted to meet
                the highest standards for both residential and commercial applications.
                <br /><br />
                Proudly marketed and distributed by <strong>{companyInfo.marketedBy}</strong>, we ensure
                that our products reach every corner with the same promise of quality
                and reliability.
              </p>

              <ul className="about-checks-list">
                {aboutPoints.map((point) => (
                  <li key={point}>
                    <CheckCheck size={18} className="check-icon" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <p className="about-closing-p">
                From blockboards to shuttering plywood, each product reflects our
                commitment to excellence. With modern processes and expert craftsmanship,
                {companyInfo.name}wood - marketed by {companyInfo.marketedBy} - delivers dependable solutions that
                stand the test of time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section id="features" className="briter-features-section">
        <div className="container">
          <div className="briter-section-title">
            <h2>Features</h2>
            <p>CHECK OUR KEY-FEATURES</p>
          </div>

          <div className="briter-features-grid">
            {featureList.map((feature) => (
              <div key={feature.id} className="briter-feature-card">
                <div className="feature-icon-box">
                  {featureIconMap[feature.icon] || <CheckCheck size={28} />}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          EXTRA CATALOG / INTERACTIVE CALCULATOR COMMENTED OUT
          =====================================================================
      <section id="products" className="products-section">
        <InteractiveCalculator />
      </section>
      ===================================================================== */}

      {/* 4. QUOTE SECTION */}
      <section id="quote" className="briter-quote-section">
        <div className="quote-bg-wrapper">
          <img
            src="/images/plywood_banner_img.webp"
            alt="Core King Club Plywood"
            className="quote-bg-img"
          />
        </div>
        <div className="quote-overlay-dark" />
        <div className="container quote-container">
          <div className="quote-box-inner">
            <h3>
              Rooted in Quality<br />
              <span>Elevated by Craft</span>
            </h3>
            <p className="quote-subtext">
              Trusted by professionals, crafted for perfection.
            </p>
            <Link href="/products" className="btn-briter-product">
              <span>Our Plywood Collection</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. QUALITY POLICY SECTION */}
      <section id="quality-policy" className="briter-quality-section">
        <div className="container">
          <div className="briter-section-title">
            <h2>{qualityPolicy.heading}</h2>
            <p>{qualityPolicy.subtitle}</p>
          </div>

          <div className="briter-quality-grid">
            <div className="quality-img-col">
              <img
                src={qualityPolicy.image}
                alt="Quality Policy"
                className="quality-featured-img"
              />
            </div>

            <div className="quality-text-col">
              <div className="quality-card-box">
                <h3 className="quality-card-heading">
                  <ShieldCheck size={26} className="text-primary-icon" />
                  <span>{qualityPolicy.cardTitle}</span>
                </h3>
                {qualityPolicy.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          EXTRA TESTIMONIALS / COMPARISON TABLE / LAB SECTION COMMENTED OUT
          =====================================================================
      <ComparisonTable />
      <QualityLabSection />
      <TestimonialSlider />
      <FaqAccordion />
      ===================================================================== */}

      {/* 6. CHAT WITH US SECTION */}
      <section id="chat-with-us" className="briter-chat-section">
        <div className="container">
          <div className="briter-chat-grid">
            <div className="chat-icon-col">
              <div className="large-whatsapp-circle">
                <MessageCircle size={80} color="#25D366" />
              </div>
            </div>

            <div className="chat-content-col">
              <h3>CONTACT US FOR ASSISTANCE</h3>
              <p>
                Have any queries or need more information about our products or
                services? Feel free to get in touch with us. We&apos;re always ready
                to assist you.
              </p>
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp-custom"
              >
                CHAT ON WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="briter-contact-section">
        <div className="container">
          <div className="briter-section-title">
            <h2>Get In Touch</h2>
            <p>READY TO START YOUR PROJECT? CONTACT US TODAY!</p>
          </div>

          <div className="briter-contact-grid">
            {/* Info Cards Column */}
            <div className="contact-cards-col">
              <div className="briter-contact-card">
                <div className="card-icon-wrap">
                  <MapPin size={22} />
                </div>
                <div className="card-details">
                  <h4>Address</h4>
                  <p>
                    {companyInfo.addressLine1},<br />
                    {companyInfo.addressLine2},<br />
                    {companyInfo.addressLine3}
                  </p>
                </div>
              </div>

              <div className="briter-contact-card">
                <div className="card-icon-wrap">
                  <Phone size={22} />
                </div>
                <div className="card-details">
                  <h4>Phone</h4>
                  <p>
                    <a href={companyInfo.phoneLink}>{companyInfo.phone}</a>
                  </p>
                </div>
              </div>

              <div className="briter-contact-card">
                <div className="card-icon-wrap">
                  <MessageCircle size={22} />
                </div>
                <div className="card-details">
                  <h4>WhatsApp</h4>
                  <p>
                    <a href={companyInfo.whatsappLink} target="_blank" rel="noreferrer">
                      {companyInfo.whatsapp}
                    </a>
                  </p>
                </div>
              </div>

              <div className="briter-contact-card">
                <div className="card-icon-wrap">
                  <Mail size={22} />
                </div>
                <div className="card-details">
                  <h4>Email</h4>
                  <p>
                    <a href={companyInfo.emailLink}>{companyInfo.email}</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form-col">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


