import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  Phone,
  ChevronRight,
  Award,
  Layers,
  Sparkles,
  Wrench,
  CheckCheck,
} from 'lucide-react';
import { products, companyInfo } from '@/data/siteData';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const relatedProducts = products.filter((p) => p.slug !== slug);

  const whatsappInquiry = `https://wa.me/917016059330?text=${encodeURIComponent(
    `Hello ${companyInfo.name}, I am interested in ${product.name} (${product.grade}). Please share pricing and details.`
  )}`;

  return (
    <>
      {/* Page Header */}
      <div className="briter-products-hero-section" style={{ padding: '3.5rem 0 2.5rem' }}>
        <div className="container">
          <div className="breadcrumbs-wrap" style={{ marginBottom: '1.25rem' }}>
            <nav aria-label="breadcrumb">
              <ol className="briter-breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-separator">
                  <ChevronRight size={14} />
                </li>
                <li className="breadcrumb-item">
                  <Link href="/products">Products</Link>
                </li>
                <li className="breadcrumb-separator">
                  <ChevronRight size={14} />
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  {product.name}
                </li>
              </ol>
            </nav>
          </div>

          <div style={{ display: 'inline-flex', gap: '0.6rem', marginBottom: '0.75rem' }}>
            <span className="badge-grade">
              <Award size={13} /> {product.grade.split(' ')[0]} Grade
            </span>
            <span className="badge-warranty">
              <ShieldCheck size={14} /> {product.warranty}
            </span>
          </div>
          <h1 className="hero-title" style={{ fontSize: '2.6rem', marginBottom: '0.35rem' }}>
            {product.name}<span>.</span>
          </h1>
          <p className="hero-subtitle" style={{ marginBottom: 0 }}>
            {product.category} • Engineered for strength, precision, and lasting durability.
          </p>
        </div>
      </div>

      <section style={{ padding: '4.5rem 0', background: 'var(--bg-main)' }}>
        <div className="container">
          {/* Main Showcase Grid with Matching Heights */}
          <div className="product-fullscreen-grid" style={{ marginBottom: '5rem' }}>
            {/* Left: Product Visual */}
            <div className="product-image-col">
              <div className="luxury-product-showcase">
                <div className="product-img-card-inner">
                  {/* Floating Badges */}
                  <div className="product-floating-badges">
                    <span className="badge-grade">
                      <Award size={13} /> {product.grade.split(' ')[0]} Grade
                    </span>
                    <span className="badge-warranty">
                      <ShieldCheck size={14} /> {product.warranty}
                    </span>
                  </div>

                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-display-img"
                  />
                </div>

                {/* Bottom Highlight Strip */}
                <div className="product-card-bottom-strip">
                  <div className="bottom-feature-item">
                    <Layers size={14} />
                    <span>4-Time Hot Press</span>
                  </div>
                  <div className="bottom-feature-item">
                    <CheckCheck size={14} />
                    <span>Machine Calibrated</span>
                  </div>
                  <div className="bottom-feature-item">
                    <Sparkles size={14} />
                    <span>Termite Shield</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Overview & Specs */}
            <div className="product-content-col luxury-product-info">
              <span className="product-eyebrow">
                <Sparkles size={14} /> Architectural Grade Plywood
              </span>
              <h2>
                {product.name}<span>.</span>
              </h2>
              <p className="product-description-p">
                {product.description}
              </p>

              {/* 2x2 Specifications Grid */}
              <div className="luxury-specs-grid">
                <div className="luxury-spec-card">
                  <div className="spec-icon-wrap">
                    <Award size={20} />
                  </div>
                  <div className="spec-details">
                    <span className="spec-title-label">Grade Benchmark</span>
                    <strong className="spec-value-strong">{product.grade}</strong>
                  </div>
                </div>

                <div className="luxury-spec-card">
                  <div className="spec-icon-wrap">
                    <ShieldCheck size={20} />
                  </div>
                  <div className="spec-details">
                    <span className="spec-title-label">Warranty</span>
                    <strong className="spec-value-strong">{product.warranty} Replacement</strong>
                  </div>
                </div>

                <div className="luxury-spec-card">
                  <div className="spec-icon-wrap">
                    <Layers size={20} />
                  </div>
                  <div className="spec-details">
                    <span className="spec-title-label">Technology</span>
                    <strong className="spec-value-strong">{product.technology}</strong>
                  </div>
                </div>

                <div className="luxury-spec-card">
                  <div className="spec-icon-wrap">
                    <Wrench size={20} />
                  </div>
                  <div className="spec-details">
                    <span className="spec-title-label">Applications</span>
                    <strong className="spec-value-strong">{product.applications}</strong>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="product-key-features">
                <h4>
                  <CheckCheck size={18} />
                  <span>Key Performance Features</span>
                </h4>
                <ul className="luxury-features-pills">
                  {product.features.map((f) => (
                    <li key={f}>
                      <CheckCircle2 size={16} className="feature-bullet-icon" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Direct Actions */}
              <div className="product-cta-row">
                <a
                  href={whatsappInquiry}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-whatsapp-quote"
                >
                  <MessageCircle size={18} />
                  <span>Inquire on WhatsApp</span>
                </a>
                <a href={companyInfo.phoneLink} className="btn-call-quote">
                  <Phone size={16} />
                  <span>Call: {companyInfo.phoneDisplay}</span>
                </a>
                <Link href="/products" className="button button-secondary" style={{ padding: '0.9rem 1.5rem' }}>
                  <span>All Products</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '3.5rem' }}>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--color-heading)', marginBottom: '1.5rem' }}>
                Other Collections
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {relatedProducts.map((rel) => (
                  <div key={rel.slug} style={{ background: '#ffffff', borderRadius: '18px', padding: '1.75rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                      <span className="badge-grade" style={{ fontSize: '0.75rem', padding: '0.25rem 0.65rem' }}>{rel.grade.split(' ')[0]}</span>
                      <span style={{ fontSize: '0.85rem', color: '#059669', fontWeight: 700 }}>{rel.warranty}</span>
                    </div>
                    <h4 style={{ fontSize: '1.35rem', marginBottom: '0.5rem' }}>{rel.name}</h4>
                    <p style={{ color: 'var(--color-body)', fontSize: '0.9rem', marginBottom: '1.25rem', lineHeight: 1.6 }}>{rel.description.substring(0, 110)}...</p>
                    <Link href={`/products#${rel.slug}`} className="button button-primary small-button">
                      <span>View Collection</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}


