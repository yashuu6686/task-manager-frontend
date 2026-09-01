'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ChevronRight,
  MessageCircle,
  Phone,
  ShieldCheck,
  Award,
  Layers,
  Sparkles,
  Wrench,
  CheckCheck,
} from 'lucide-react';
import { products, companyInfo } from '@/data/siteData';

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerList = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export default function ProductsPage() {
  const goldProduct = products.find((p) => p.slug === 'core-king-gold') || products[0];
  const clubProduct = products.find((p) => p.slug === 'core-king-club') || products[1];

  return (
    <>
      {/* Products Hero Section */}
      <section id="products-hero" className="briter-products-hero-section">
        <div className="container">
          {/* Breadcrumbs */}
          <motion.div
            className="breadcrumbs-wrap"
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <nav aria-label="breadcrumb">
              <ol className="briter-breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-separator">
                  <ChevronRight size={14} />
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Plywood Collection
                </li>
              </ol>
            </nav>
          </motion.div>

          <div className="products-hero-content text-center">
            <motion.h1
              className="hero-title"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              Our Plywood Collection<span>.</span>
            </motion.h1>
            <motion.p
              className="hero-subtitle"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.2 }}
            >
              Engineered for strength, precision, and lasting durability.
            </motion.p>
            <motion.div
              className="hero-description-block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3 }}
            >
              <p>
                Experience strength, reliability, and design versatility with our premium plywood
                collection. Crafted from carefully selected raw materials and processed with advanced
                technology, each sheet reflects durability and long-lasting performance. At {companyInfo.name}wood,
                we understand that plywood is the backbone of furniture and interiors, which is
                why we offer a wide range tailored for diverse applications—from modular kitchens and
                wardrobes to paneling and premium projects.
              </p>
            </motion.div>

            <motion.div
              className="hero-cta-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.4 }}
            >
              <motion.a
                href="#core-king-gold"
                className="btn btn-outline-light me-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Gold
              </motion.a>
              <motion.a
                href="#core-king-club"
                className="btn btn-outline-light"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Club
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 1. Core King Gold Product Section */}
      <section id="core-king-gold" className="briter-product-fullscreen-section">
        <div className="container">
          <div className="product-fullscreen-grid">
            {/* Visual Display Frame */}
            <motion.div
              className="product-image-col order-image-right"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="luxury-product-showcase">
                <div className="product-img-card-inner">
                  {/* Floating Badges */}
                  <div className="product-floating-badges">
                    <span className="badge-grade">
                      <Award size={13} /> {goldProduct.grade.split(' ')[0]} Grade
                    </span>
                    <span className="badge-warranty">
                      <ShieldCheck size={14} /> {goldProduct.warranty}
                    </span>
                  </div>

                  <img
                    src={goldProduct.image}
                    alt={goldProduct.name}
                    className="product-display-img"
                  />
                </div>

                {/* Bottom Highlight Strip */}
                <div className="product-card-bottom-strip">
                  <div className="bottom-feature-item">
                    <Layers size={14} />
                    <span>4-Time Press</span>
                  </div>
                  <div className="bottom-feature-item">
                    <CheckCheck size={14} />
                    <span>100% Calibrated</span>
                  </div>
                  <div className="bottom-feature-item">
                    <Sparkles size={14} />
                    <span>Smooth Finish</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Information Column */}
            <motion.div
              className="product-content-col order-content-left luxury-product-info"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="product-eyebrow">
                <Sparkles size={14} /> Premium Architectural Plywood
              </span>
              <h2>{goldProduct.name}<span>.</span></h2>

              <p className="product-description-p">
                {goldProduct.description}
              </p>

              {/* 2x2 Specifications Grid */}
              <div className="luxury-specs-grid">
                <div className="luxury-spec-card">
                  <div className="spec-icon-wrap">
                    <Award size={20} />
                  </div>
                  <div className="spec-details">
                    <span className="spec-title-label">Grade Benchmark</span>
                    <strong className="spec-value-strong">{goldProduct.grade}</strong>
                  </div>
                </div>

                <div className="luxury-spec-card">
                  <div className="spec-icon-wrap">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="spec-details">
                    <span className="spec-title-label">Warranty</span>
                    <strong className="spec-value-strong">{goldProduct.warranty}</strong>
                  </div>
                </div>

                <div className="luxury-spec-card">
                  <div className="spec-icon-wrap">
                    <Layers size={20} />
                  </div>
                  <div className="spec-details">
                    <span className="spec-title-label">Technology</span>
                    <strong className="spec-value-strong">{goldProduct.technology}</strong>
                  </div>
                </div>

                <div className="luxury-spec-card">
                  <div className="spec-icon-wrap">
                    <Wrench size={20} />
                  </div>
                  <div className="spec-details">
                    <span className="spec-title-label">Applications</span>
                    <strong className="spec-value-strong">{goldProduct.applications}</strong>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="product-key-features">
                <h4>
                  <CheckCheck size={18} />
                  <span>Key Features:</span>
                </h4>
                <ul className="luxury-features-pills">
                  {goldProduct.features.map((feat) => (
                    <li key={feat}>
                      <CheckCircle2 size={16} className="feature-bullet-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="product-cta-row">
                <motion.a
                  href={`https://wa.me/917016059330?text=${encodeURIComponent(`Hi, I am interested in ${goldProduct.name} (${goldProduct.grade}). Please share pricing and details.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp-quote"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </motion.a>

                <motion.a
                  href="tel:+917016059330"
                  className="btn-call-quote"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Phone size={16} />
                  <span>Call: +91 7016059330</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Core King Club Product Section */}
      <section id="core-king-club" className="briter-product-fullscreen-section alt-bg">
        <div className="container">
          <div className="product-fullscreen-grid">
            {/* Visual Display Frame */}
            <motion.div
              className="product-image-col"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="luxury-product-showcase">
                <div className="product-img-card-inner">
                  {/* Floating Badges */}
                  <div className="product-floating-badges">
                    <span className="badge-grade">
                      <Award size={13} /> {clubProduct.grade.split(' ')[0]} Marine Grade
                    </span>
                    <span className="badge-warranty">
                      <ShieldCheck size={14} /> {clubProduct.warranty}
                    </span>
                  </div>

                  <img
                    src={clubProduct.image}
                    alt={clubProduct.name}
                    className="product-display-img"
                  />
                </div>

                {/* Bottom Highlight Strip */}
                <div className="product-card-bottom-strip">
                  <div className="bottom-feature-item">
                    <Layers size={14} />
                    <span>4-Time Press</span>
                  </div>
                  <div className="bottom-feature-item">
                    <CheckCheck size={14} />
                    <span>100% Calibrated</span>
                  </div>
                  <div className="bottom-feature-item">
                    <Sparkles size={14} />
                    <span>Waterproof BWP</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Information Column */}
            <motion.div
              className="product-content-col luxury-product-info"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="product-eyebrow">
                <Sparkles size={14} /> Flagship Luxury Plywood
              </span>
              <h2>{clubProduct.name}<span>.</span></h2>

              <p className="product-description-p">
                {clubProduct.description}
              </p>

              {/* 2x2 Specifications Grid */}
              <div className="luxury-specs-grid">
                <div className="luxury-spec-card">
                  <div className="spec-icon-wrap">
                    <Award size={20} />
                  </div>
                  <div className="spec-details">
                    <span className="spec-title-label">Grade Benchmark</span>
                    <strong className="spec-value-strong">{clubProduct.grade}</strong>
                  </div>
                </div>

                <div className="luxury-spec-card">
                  <div className="spec-icon-wrap">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="spec-details">
                    <span className="spec-title-label">Warranty</span>
                    <strong className="spec-value-strong">{clubProduct.warranty}</strong>
                  </div>
                </div>

                <div className="luxury-spec-card">
                  <div className="spec-icon-wrap">
                    <Layers size={20} />
                  </div>
                  <div className="spec-details">
                    <span className="spec-title-label">Technology</span>
                    <strong className="spec-value-strong">{clubProduct.technology}</strong>
                  </div>
                </div>

                <div className="luxury-spec-card">
                  <div className="spec-icon-wrap">
                    <Wrench size={20} />
                  </div>
                  <div className="spec-details">
                    <span className="spec-title-label">Applications</span>
                    <strong className="spec-value-strong">{clubProduct.applications}</strong>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="product-key-features">
                <h4>
                  <CheckCheck size={18} />
                  <span>Key Features:</span>
                </h4>
                <ul className="luxury-features-pills">
                  {clubProduct.features.map((feat) => (
                    <li key={feat}>
                      <CheckCircle2 size={16} className="feature-bullet-icon" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="product-cta-row">
                <motion.a
                  href={`https://wa.me/917016059330?text=${encodeURIComponent(`Hi, I am interested in ${clubProduct.name} (${clubProduct.grade}). Please share pricing and details.`)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp-quote"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <MessageCircle size={18} />
                  <span>Chat on WhatsApp</span>
                </motion.a>

                <motion.a
                  href="tel:+917016059330"
                  className="btn-call-quote"
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Phone size={16} />
                  <span>Call: +91 7016059330</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
