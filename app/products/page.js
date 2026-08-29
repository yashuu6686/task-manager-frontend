'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, Filter, ShieldCheck, ArrowRight, MessageCircle, FileText } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ProductCard from '@/components/ProductCard';
import { products, companyInfo } from '@/data/siteData';

const categories = ['All Collections', 'Marine Grade BWP', 'Commercial & Residential BWR', 'Specialty Fire Retardant & Marine', 'High-Stability Blockboard', 'Heavy Construction Shuttering'];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Collections');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((p) => {
      const matchCategory = selectedCategory === 'All Collections' || p.category === selectedCategory;
      const matchSearch =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.grade.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.applications.some((app) => app.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow-dark">Engineered Timber Collection</span>
          <h1>Precision Calibrated Plywood</h1>
          <p>
            Explore our complete portfolio of IS:710 Marine Grade, IS:303 BWR Commercial, Fire-Retardant,
            and Solid Pine Core Blockboards crafted for architectural excellence.
          </p>
        </div>
      </div>

      <section className="products-section">
        <div className="container">
          {/* Filter & Search Bar */}
          <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', marginBottom: '3rem' }}>
            <div className="catalog-search-bar">
              <div style={{ position: 'relative' }}>
                <Search size={18} color="#94a3b8" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                <input
                  type="text"
                  placeholder="Search by grade (e.g. BWP, BWR, 19mm, Kitchen)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 2.85rem', borderRadius: '12px', border: '1px solid var(--color-border)', outline: 'none', background: 'var(--bg-main)', fontSize: '0.95rem' }}
                />
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className="pill"
                    style={{
                      cursor: 'pointer',
                      background: selectedCategory === cat ? 'var(--color-primary)' : 'var(--bg-main)',
                      color: selectedCategory === cat ? '#ffffff' : 'var(--color-body)',
                      borderColor: selectedCategory === cat ? 'var(--color-primary)' : 'var(--color-border)',
                      padding: '0.45rem 0.85rem',
                      fontSize: '0.825rem',
                      fontWeight: 600,
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 1rem', background: '#ffffff', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-muted)', marginBottom: '1rem' }}>
                No products found matching &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                type="button"
                className="button button-secondary"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All Collections');
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* Brochure & Sample Box */}
          <div className="banner-cta-grid" style={{ marginTop: '4.5rem', background: 'linear-gradient(135deg, #090e1a 0%, #1e293b 100%)', color: '#ffffff', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(217, 119, 6, 0.3)' }}>

            <div>
              <span className="eyebrow eyebrow-dark">Architect & Builder Support</span>
              <h2 style={{ color: '#ffffff', fontSize: '2rem', marginBottom: '0.75rem' }}>
                Need Custom Sizes or Direct Plant Quotation?
              </h2>
              <p style={{ color: 'rgba(255, 255, 255, 0.75)', fontSize: '0.95rem', lineHeight: 1.6 }}>
                We manufacture bespoke sizes (7x3, 7x4, 8x4 ft) and customized thicknesses from 6mm to 32mm
                for commercial contracts and bulk container shipments.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="button button-emerald"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={18} />
                <span>Chat with Product Specialist</span>
              </a>
              <Link href="/contact" className="button button-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                <span>Request Formal Price List</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

