'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Factory, Award, Sparkles, Building2, Trees, Flame } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import AnimationWrapper from '@/components/AnimationWrapper';
import { companyInfo, timelineEvents, trustPoints } from '@/data/siteData';

export default function AboutPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow-dark">Since 1998 • Yamunanagar Works</span>
          <h1>Engineered For Generations</h1>
          <p>
            Crafting India’s most dependable calibrated plywood, marine grade BWP, and architectural
            timber panels with uncompromising precision.
          </p>
        </div>
      </div>

      {/* Heritage & Story */}
      <section className="about-section" style={{ padding: '5.5rem 0' }}>
        <div className="container split-showcase-grid">
          <div>
            <span className="eyebrow">Our Heritage</span>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.25rem', color: 'var(--color-heading)' }}>
              Rooted in Yamunanagar, India&apos;s Timber Capital
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-body)', lineHeight: 1.7, marginBottom: '1rem' }}>
              Founded over 25 years ago in Yamunanagar (Haryana), Core King Ply was born out of a single
              obsessive goal: to eliminate thickness variation, core voids, and delamination from Indian
              plywood.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--color-body)', lineHeight: 1.7, marginBottom: '1.75rem' }}>
              Today, our fully automated industrial plant houses 4-times hydraulic press lines, Japanese
              wide-belt sanding stations, and high-pressure chemical impregnation chambers — processing
              over 1.2 million sheets annually for prestigious architectural landmarks across the subcontinent.
            </p>

            <div className="two-col-grid" style={{ marginBottom: '2rem' }}>
              <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <strong style={{ fontSize: '1.85rem', color: '#d97706', display: 'block', fontFamily: 'var(--font-display)' }}>
                  1.2M+
                </strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)', fontWeight: 600 }}>
                  Annual Sheet Output
                </span>
              </div>
              <div style={{ background: '#ffffff', padding: '1.25rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                <strong style={{ fontSize: '1.85rem', color: '#059669', display: 'block', fontFamily: 'var(--font-display)' }}>
                  15,000+
                </strong>
                <span style={{ fontSize: '0.85rem', color: 'var(--color-muted)', fontWeight: 600 }}>
                  Completed Projects
                </span>
              </div>
            </div>


            <Link href="/contact" className="button button-primary">
              <span>Visit Our Factory</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: 'var(--shadow-xl)', border: '1px solid var(--color-border)' }}>
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
              alt="Core King Ply Yamunanagar Manufacturing Plant"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>
      </section>

      {/* Industrial Machinery & Infrastructure */}
      <section style={{ padding: '5.5rem 0', background: '#ffffff', borderTop: '1px solid var(--color-border-light)', borderBottom: '1px solid var(--color-border-light)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Plant Machinery"
            title="State-of-the-Art Infrastructure"
            description="Our manufacturing setup is equipped with the world’s most advanced wood processing machinery."
            align="center"
          />

          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-card__top">
                <div className="feature-card__icon-wrap">
                  <Flame size={24} />
                </div>
                <span className="pill">4-Times Press</span>
              </div>
              <h3>Multi-Daylight Hot Presses</h3>
              <p>
                Quad-cycle high-pressure hydraulic hot presses operating at 150°C and 18 kg/cm² pressure
                fuse wood fibers and resin with zero core bubbles.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card__top">
                <div className="feature-card__icon-wrap">
                  <Sparkles size={24} />
                </div>
                <span className="pill">±0.1mm Tolerance</span>
              </div>
              <h3>Japanese Wide Belt Sanders</h3>
              <p>
                Heavy-duty dual-head calibration sanders guarantee mirror-flat surface finishes on both
                sides, making acrylic pressing seamless.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-card__top">
                <div className="feature-card__icon-wrap">
                  <ShieldCheck size={24} />
                </div>
                <span className="pill">3.5 Bar Vacuum</span>
              </div>
              <h3>Chemical Impregnation Chambers</h3>
              <p>
                Vacuum pressure cylinders infuse nano-biocides deep into the cellular structure of
                every single veneer layer for permanent anti-termite immunity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <SectionHeading
            eyebrow="Our Journey"
            title="25+ Years of Wood Innovation"
            description="A timeline of milestones shaping India’s architectural plywood standards."
            align="center"
          />

          <div className="timeline-list">
            {timelineEvents.map((ev) => (
              <div key={ev.year} className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-year">{ev.year}</div>
                <h3>{ev.title}</h3>
                <p style={{ color: 'var(--color-muted)', fontSize: '0.95rem' }}>{ev.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <div style={{ background: 'var(--color-primary)', color: '#ffffff', padding: '3.5rem', borderRadius: '24px', textAlign: 'center', boxShadow: 'var(--shadow-xl)', position: 'relative', overflow: 'hidden' }}>
            <h2 style={{ color: '#ffffff', fontSize: '2.4rem', marginBottom: '0.85rem' }}>
              Partner With India&apos;s Calibrated Plywood Leader
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '650px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>
              Request free sample folders for your architectural practice or connect with our dealer network.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="button button-primary">
                <span>Request Sample Kit</span>
                <ArrowRight size={16} />
              </Link>
              <a href={companyInfo.phoneLink} className="button button-secondary">
                <span>Call +91 96242 77017</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
