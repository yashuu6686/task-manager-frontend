import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ShieldCheck, ArrowRight, CheckCircle2, MessageCircle, Phone, ChevronRight } from 'lucide-react';
import { products, companyInfo } from '@/data/siteData';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetail({ params }) {
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);
  if (!product) return notFound();

  const relatedProducts = products.filter((p) => p.slug !== slug);

  const whatsappInquiry = `https://wa.me/919624277017?text=${encodeURIComponent(
    `Hello ${companyInfo.name}, I am interested in ${product.name} (${product.grade}). Please share pricing and details.`
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
            {/* Left: Product Visual */}
            <div>
              <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)', height: '460px', marginBottom: '1.25rem', background: '#090e1a' }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right: Overview & Specs */}
            <div>
              <span className="eyebrow">{product.grade}</span>
              <h2 style={{ fontSize: '2.4rem', color: 'var(--color-heading)', margin: '0.35rem 0 1rem' }}>
                {product.name}
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-body)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {product.description}
              </p>

              {/* Specs Box */}
              <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--color-border)', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.95rem' }}>
                  <p><strong>Grade:</strong> {product.grade}</p>
                  <p><strong>Warranty:</strong> {product.warranty}</p>
                  <p><strong>Technology:</strong> {product.technology}</p>
                  <p><strong>Applications:</strong> {product.applications}</p>
                </div>
              </div>

              {/* Key Features */}
              <div style={{ marginBottom: '2rem' }}>
                <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--color-heading)', marginBottom: '0.75rem' }}>
                  Key Features:
                </strong>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {product.features.map((f) => (
                    <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.925rem', color: 'var(--color-body)' }}>
                      <CheckCircle2 size={16} color="#059669" style={{ flexShrink: 0 }} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
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
                  <span>Inquire on WhatsApp</span>
                </a>
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <Link href="/products" className="button button-secondary" style={{ flex: 1 }}>
                    <span>All Products</span>
                  </Link>
                  <a href={companyInfo.phoneLink} className="button button-dark" style={{ flex: 1 }}>
                    <Phone size={16} />
                    <span>Call Sales</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--color-heading)', marginBottom: '1.5rem' }}>
                Other Collections
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                {relatedProducts.map((rel) => (
                  <div key={rel.slug} style={{ background: '#ffffff', borderRadius: '16px', padding: '1.5rem', border: '1px solid var(--color-border)' }}>
                    <h4 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{rel.name}</h4>
                    <p style={{ color: 'var(--color-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>{rel.grade} • {rel.warranty}</p>
                    <Link href={`/products#${rel.slug}`} className="button button-primary small-button">
                      <span>View Details</span>
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


