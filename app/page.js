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
  Mail,
  MapPin,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { companyInfo, aboutPoints, featureList, qualityPolicy, heroSlides } from '@/data/siteData';

const featureIconMap = {
  CheckCheck: <CheckCheck size={28} className="feature-icon-svg" />,
  Droplet: <Droplet size={28} className="feature-icon-svg" />,
  Wrench: <Wrench size={28} className="feature-icon-svg" />,
  Layers: <Layers size={28} className="feature-icon-svg" />,
  CircleDot: <CircleDot size={28} className="feature-icon-svg" />,
  Flame: <Flame size={28} className="feature-icon-svg" />,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Preload all hero slide images
    heroSlides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });

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
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            >
              {/* Ambient Blurred Backdrop for widescreen filling */}
              <img
                src={heroSlides[currentSlide].image}
                alt=""
                className="hero-slider-bg-blur"
                aria-hidden="true"
              />
              {/* Sharp 100% Uncropped Poster Graphic */}
              <img
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].alt}
                className="hero-slider-img"
              />
            </motion.div>
          </AnimatePresence>

          {/* Slider Navigation Controls */}
          <motion.button
            type="button"
            className="hero-arrow-btn prev"
            onClick={prevSlide}
            aria-label="Previous Slide"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.92 }}
          >
            <ChevronLeft size={28} />
          </motion.button>
          <motion.button
            type="button"
            className="hero-arrow-btn next"
            onClick={nextSlide}
            aria-label="Next Slide"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.92 }}
          >
            <ChevronRight size={28} />
          </motion.button>

          <div className="hero-dots-pagination">
            {heroSlides.map((slide, idx) => (
              <motion.button
                key={slide.id}
                type="button"
                className={`hero-dot-bullet ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 2. ABOUT SECTION */}
      <section id="about" className="briter-about-section">
        <div className="container">
          <div className="briter-about-grid">
            <motion.div
              className="about-image-col"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/images/IMG_20260902_000820.png"
                alt="Core King Plywood Elevate"
                className="about-featured-img"
              />
            </motion.div>

            <motion.div
              className="about-content-col"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Elevate Your Projects with {companyInfo.name}wood
              </motion.h3>

              <motion.p
                className="about-lead-p"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {companyInfo.name}wood is one of India&apos;s fastest-growing manufacturers and
                suppliers of premium calibrated plywood. Known for strength, precision,
                and durability, our plywood and laminate products are crafted to meet
                the highest standards for both residential and commercial applications.
                <br /><br />
                We ensure that our products reach every corner with the same promise of quality
                and reliability.
              </motion.p>

              <motion.ul
                className="about-checks-list"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {aboutPoints.map((point) => (
                  <motion.li
                    key={point}
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <CheckCheck size={18} className="check-icon" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p
                className="about-closing-p"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                From blockboards to shuttering plywood, each product reflects our
                commitment to excellence. With modern processes and expert craftsmanship,
                {companyInfo.name}wood delivers dependable solutions that
                stand the test of time.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section id="features" className="briter-features-section">
        <div className="container">
          <motion.div
            className="briter-section-title"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Features</h2>
            <p>CHECK OUR KEY-FEATURES</p>
          </motion.div>

          <motion.div
            className="briter-features-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {featureList.map((feature) => (
              <motion.div
                key={feature.id}
                className="briter-feature-card"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="feature-icon-box">
                  {featureIconMap[feature.icon] || <CheckCheck size={28} />}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4. QUOTE SECTION */}
      <section id="quote" className="briter-quote-section">
        <div className="quote-bg-wrapper">
          <img
            src="/images/plywood_banner_img.webp"
            alt="Core King Club710 Plywood"
            className="quote-bg-img"
          />
        </div>
        <div className="quote-overlay-dark" />
        <div className="container quote-container">
          <motion.div
            className="quote-box-inner"
            initial={{ opacity: 0, scale: 0.94 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h3>
              Rooted in Quality<br />
              <span>Elevated by Craft</span>
            </h3>
            <p className="quote-subtext">
              Trusted by professionals, crafted for perfection.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.96 }}>
              <Link href="/products" className="btn-briter-product">
                <span>Our Plywood Collection</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. QUALITY POLICY SECTION */}
      <section id="quality-policy" className="briter-quality-section">
        <div className="container">
          <motion.div
            className="briter-section-title"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{qualityPolicy.heading}</h2>
            <p>{qualityPolicy.subtitle}</p>
          </motion.div>

          <div className="briter-quality-grid">
            <motion.div
              className="quality-img-col"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={qualityPolicy.image}
                alt="Quality Policy"
                className="quality-featured-img"
              />
            </motion.div>

            <motion.div
              className="quality-text-col"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="quality-card-box"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="quality-card-heading">
                  <ShieldCheck size={26} className="text-primary-icon" />
                  <span>{qualityPolicy.cardTitle}</span>
                </h3>
                {qualityPolicy.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. CHAT WITH US SECTION */}
      <section id="chat-with-us" className="briter-chat-section">
        <div className="container">
          <div className="briter-chat-grid">
            <motion.div
              className="chat-icon-col"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="large-whatsapp-circle"
                whileHover={{ scale: 1.12, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <Mail size={80} color="#d4af37" />
              </motion.div>
            </motion.div>

            <motion.div
              className="chat-content-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 }}
            >
              <h3>CONTACT US FOR ASSISTANCE</h3>
              <p>
                Have any queries or need more information about our products or
                services? Feel free to get in touch with us. We&apos;re always ready
                to assist you.
              </p>
              <motion.a
                href={companyInfo.emailLink}
                className="btn-whatsapp-custom"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                EMAIL US TODAY
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT SECTION */}
      <section id="contact" className="briter-contact-section">
        <div className="container">
          <motion.div
            className="briter-section-title"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Get In Touch</h2>
            <p>READY TO START YOUR PROJECT? CONTACT US TODAY!</p>
          </motion.div>

          <div className="briter-contact-grid">
            {/* Info Cards Column */}
            <motion.div
              className="contact-cards-col"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className="briter-contact-card"
                variants={fadeInUp}
                whileHover={{ x: 6 }}
              >
                <div className="card-icon-wrap">
                  <Mail size={22} />
                </div>
                <div className="card-details">
                  <h4>Email</h4>
                  <p>
                    <a href={companyInfo.emailLink}>{companyInfo.email}</a>
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="briter-contact-card"
                variants={fadeInUp}
                whileHover={{ x: 6 }}
              >
                <div className="card-icon-wrap">
                  <MapPin size={22} />
                </div>
                <div className="card-details">
                  <h4>Location</h4>
                  <p>
                    {companyInfo.addressLine1}, {companyInfo.city}
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              className="contact-form-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
