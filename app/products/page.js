'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, ChevronRight, MessageCircle } from 'lucide-react';
import { products, companyInfo } from '@/data/siteData';

export default function ProductsPage() {
  const goldProduct = products.find((p) => p.slug === 'core-king-gold') || products[0];
  const clubProduct = products.find((p) => p.slug === 'core-king-club') || products[1];

  return (
    <>
      {/* Products Hero Section */}
      <section id="products-hero" className="briter-products-hero-section">
        <div className="container">
          {/* Breadcrumbs */}
          <div className="breadcrumbs-wrap">
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
          </div>

          <div className="products-hero-content text-center">
            <h1 className="hero-title">
              Our Plywood Collection<span>.</span>
            </h1>
            <p className="hero-subtitle">
              Engineered for strength, durability, and reliability.
            </p>
            <div className="hero-description-block">
              <p>
                Experience strength, reliability, and design versatility with our premium plywood
                collection. Crafted from carefully selected raw materials and processed with advanced
                technology, each sheet reflects durability and long-lasting performance. At {companyInfo.name}wood,
                we understand that plywood is the backbone of furniture and interiors, which is
                why we offer a wide range tailored for diverse applications—from modular kitchens and
                wardrobes to paneling and premium projects. Our collection balances performance with
                aesthetics, ensuring not just utility but also timeless appeal. Step into a world of
                quality you can trust, and let our plywood products lay the foundation for spaces that
                embody elegance, strength, and sophistication.
              </p>
            </div>

            <div className="hero-cta-buttons">
              <a href="#core-king-gold" className="btn btn-outline-light me-3">
                View Gold
              </a>
              <a href="#core-king-club" className="btn btn-outline-light">
                View Club
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Core King Gold Product Section */}
      <section id="core-king-gold" className="briter-product-fullscreen-section">
        <div className="container">
          <div className="product-fullscreen-grid">
            <div className="product-image-col order-image-right">
              <div className="product-img-card">
                <img
                  src={goldProduct.image}
                  alt={goldProduct.name}
                  className="product-display-img"
                />
              </div>
            </div>

            <div className="product-content-col order-content-left">
              <div className="product-details-inner">
                <h2>{goldProduct.name}</h2>
                <div className="product-specs-box">
                  <p><strong>Grade:</strong> {goldProduct.grade}</p>
                  <p><strong>Warranty:</strong> {goldProduct.warranty}</p>
                  <p><strong>Technology:</strong> {goldProduct.technology}</p>
                  <p><strong>Applications:</strong> {goldProduct.applications}</p>
                </div>

                <p className="product-description-p">
                  {goldProduct.description}
                </p>

                <div className="product-key-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {goldProduct.features.map((feat) => (
                      <li key={feat}>
                        <CheckCircle2 size={16} className="feature-bullet-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '1.75rem' }}>
                  <a
                    href={`https://wa.me/919624277017?text=${encodeURIComponent(`Hi, I am interested in ${goldProduct.name} (${goldProduct.grade}). Please share pricing and details.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp-custom"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <MessageCircle size={18} />
                    <span>Inquire About Gold</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core King Club Product Section */}
      <section id="core-king-club" className="briter-product-fullscreen-section alt-bg">
        <div className="container">
          <div className="product-fullscreen-grid">
            <div className="product-image-col">
              <div className="product-img-card">
                <img
                  src={clubProduct.image}
                  alt={clubProduct.name}
                  className="product-display-img"
                />
              </div>
            </div>

            <div className="product-content-col">
              <div className="product-details-inner">
                <h2>{clubProduct.name}</h2>
                <div className="product-specs-box">
                  <p><strong>Grade:</strong> {clubProduct.grade}</p>
                  <p><strong>Warranty:</strong> {clubProduct.warranty}</p>
                  <p><strong>Technology:</strong> {clubProduct.technology}</p>
                  <p><strong>Applications:</strong> {clubProduct.applications}</p>
                </div>

                <p className="product-description-p">
                  {clubProduct.description}
                </p>

                <div className="product-key-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {clubProduct.features.map((feat) => (
                      <li key={feat}>
                        <CheckCircle2 size={16} className="feature-bullet-icon" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: '1.75rem' }}>
                  <a
                    href={`https://wa.me/919624277017?text=${encodeURIComponent(`Hi, I am interested in ${clubProduct.name} (${clubProduct.grade}). Please share pricing and details.`)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-whatsapp-custom"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <MessageCircle size={18} />
                    <span>Inquire About Club</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          EXTRA PRODUCTS / ADVANCED SEARCH COMMENTED OUT TO MATCH BRITERPLY
          =====================================================================
      <section className="extra-products-catalog">
        <div className="container">
          ...
        </div>
      </section>
      ===================================================================== */}
    </>
  );
}


