'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  return (
    <motion.article
      className="product-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className="product-card__header">
        <img src={product.image} alt={product.name} loading="lazy" />
        <div className="product-card__badge-top">
          <span className="pill" style={{ background: '#121215', color: '#d4af37', border: '1px solid rgba(212, 175, 55, 0.4)', fontWeight: 800 }}>
            {product.grade}
          </span>
        </div>
        <div className="product-card__warranty-top">
          <ShieldCheck size={14} color="#d4af37" />
          <span>{product.warranty}</span>
        </div>
      </div>

      <div className="product-card__content">
        <span className="product-card__category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-card__summary">{product.description}</p>

        <div className="product-card__specs-grid">
          <div className="spec-item">
            <span className="spec-label">Pressing Tech</span>
            <strong>{product.technology}</strong>
          </div>
          <div className="spec-item">
            <span className="spec-label">Resin Type</span>
            <strong>{product.resin}</strong>
          </div>
        </div>

        <ul className="product-card__features">
          {product.features.slice(0, 3).map((feature) => (
            <li key={feature}>
              <CheckCircle2 size={16} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="product-card__footer">
          <Link href={`/products/${product.slug}`} className="button button-primary">
            <span>Explore Specs</span>
            <ArrowRight size={16} />
          </Link>
          <a
            href={`https://wa.me/917016059329?text=Hi%2C%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(
              product.name
            )}`}
            target="_blank"
            rel="noreferrer"
            className="button button-secondary"
            style={{ padding: '0.85rem 1rem' }}
            title="Instant WhatsApp inquiry"
          >
            Quick Inquiry
          </a>
        </div>
      </div>
    </motion.article>
  );
}

