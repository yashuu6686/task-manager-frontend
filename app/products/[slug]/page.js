import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShieldCheck, ArrowRight, CheckCircle2, Droplets, Sparkles, MessageCircle, Phone, Award, Layers, Clock } from 'lucide-react';
import { products, companyInfo } from '@/data/siteData';
import ProductCard from '@/components/ProductCard';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const relatedProducts = products.filter((p) => p.slug !== slug).slice(0, 2);

  const whatsappInquiry = `https://wa.me/919624277017?text=${encodeURIComponent(
    `Hello Core King Ply, I am interested in ${product.name} (${product.grade}). Please share pricing and minimum order quantity.`
  )}`;

  return (
    <>
      <div className="page-header">
        <div className="container">
          <div style={{ display: 'inline-flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
            <span className="pill" style={{ background: '#ffffff', color: '#090e1a', fontWeight: 800 }}>
              {product.grade}
            </span>
            <span className="pill emerald">
              <ShieldCheck size={13} /> {product.warranty}
            </span>
          </div>
          <h1>{product.name}</h1>
          <p>{product.category}</p>
        </div>
      </div>

      <section style={{ padding: '5rem 0', background: 'var(--bg-main)' }}>
        <div className="container">
          {/* Main Showcase Grid */}
          <div className="split-showcase-grid" style={{ marginBottom: '5rem' }}>
            {/* Left: Product Visuals */}
            <div>
              <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)', height: '460px', marginBottom: '1.25rem', background: '#090e1a' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Highlights Box */}
              <div style={{ background: '#ffffff', padding: '1.75rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-heading)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <Sparkles size={18} color="#d97706" />
                  <span>Key Manufacturing Highlights</span>
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {product.highlights ? (
                    product.highlights.map((hl) => (
                      <li key={hl} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--color-body)' }}>
                        <CheckCircle2 size={18} color="#059669" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                        <span>{hl}</span>
                      </li>
                    ))
                  ) : (
                    product.features.map((f) => (
                      <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--color-body)' }}>
                        <CheckCircle2 size={18} color="#059669" style={{ marginTop: '0.15rem', flexShrink: 0 }} />
                        <span>{f}</span>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>

            {/* Right: Overview & CTA */}
            <div>
              <span className="eyebrow">{product.badge || 'Architectural Grade'}</span>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--color-heading)', margin: '0.35rem 0 1rem' }}>
                {product.name}
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-body)', lineHeight: 1.7, marginBottom: '2rem' }}>
                {product.description}
              </p>

              {/* Available Thicknesses */}
              <div style={{ marginBottom: '2rem' }}>
                <strong style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.6rem' }}>
                  Available Thickness Options
                </strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {product.thicknessOptions.map((t) => (
                    <span key={t} className="pill" style={{ background: '#ffffff', color: 'var(--color-heading)', fontSize: '0.85rem', padding: '0.4rem 0.85rem', fontWeight: 700 }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recommended Applications */}
              <div style={{ marginBottom: '2.5rem' }}>
                <strong style={{ display: 'block', fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--color-muted)', marginBottom: '0.6rem' }}>
                  Recommended Applications
                </strong>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {product.applications.map((app) => (
                    <span key={app} className="pill ghost" style={{ fontSize: '0.85rem', padding: '0.35rem 0.75rem' }}>
                      {app}
                    </span>
                  ))}
                </div>
              </div>

              {/* Direct Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <a
                  href={whatsappInquiry}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-emerald"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <MessageCircle size={18} />
                  <span>Get Instant Pricing On WhatsApp</span>
                </a>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Link href="/contact" className="button button-primary" style={{ flex: 1 }}>
                    <span>Request Sample Kit</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a href={companyInfo.phoneLink} className="button button-secondary" style={{ flex: 1 }}>
                    <Phone size={16} />
                    <span>Call Sales Desk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '2.5rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', marginBottom: '5rem' }}>
            <h3 style={{ fontSize: '1.65rem', color: 'var(--color-heading)', marginBottom: '1.5rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--color-border-light)' }}>
              Complete Technical Specifications Matrix
            </h3>

            <div className="two-col-grid">

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem', background: 'var(--bg-main)', borderRadius: '10px' }}>
                <span style={{ color: 'var(--color-muted)', fontWeight: 600 }}>Standard Benchmark</span>
                <strong>{product.grade}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem', background: 'var(--bg-main)', borderRadius: '10px' }}>
                <span style={{ color: 'var(--color-muted)', fontWeight: 600 }}>Hot Press Technology</span>
                <strong>{product.technology}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem', background: 'var(--bg-main)', borderRadius: '10px' }}>
                <span style={{ color: 'var(--color-muted)', fontWeight: 600 }}>Core Timber Species</span>
                <strong>{product.coreWood}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem', background: 'var(--bg-main)', borderRadius: '10px' }}>
                <span style={{ color: 'var(--color-muted)', fontWeight: 600 }}>Face Veneer Species</span>
                <strong>{product.faceVeneer}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem', background: 'var(--bg-main)', borderRadius: '10px' }}>
                <span style={{ color: 'var(--color-muted)', fontWeight: 600 }}>Resin Chemistry</span>
                <strong>{product.resin}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem', background: 'var(--bg-main)', borderRadius: '10px' }}>
                <span style={{ color: 'var(--color-muted)', fontWeight: 600 }}>Boiling Water Proof</span>
                <strong style={{ color: '#059669' }}>{product.boilingWaterResistance}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem', background: 'var(--bg-main)', borderRadius: '10px' }}>
                <span style={{ color: 'var(--color-muted)', fontWeight: 600 }}>Material Density</span>
                <strong>{product.density}</strong>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem', background: 'var(--bg-main)', borderRadius: '10px' }}>
                <span style={{ color: 'var(--color-muted)', fontWeight: 600 }}>Warranty Guarantee</span>
                <strong style={{ color: '#d97706' }}>{product.warranty}</strong>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div>
            <h3 style={{ fontSize: '1.75rem', color: 'var(--color-heading)', marginBottom: '2rem' }}>
              Explore Other Engineered Variants
            </h3>
            <div className="product-grid">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.slug} product={rel} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

