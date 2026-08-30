'use client';

import Link from 'next/link';
import { ArrowRight, CheckCheck, ShieldCheck, MessageCircle } from 'lucide-react';
import { companyInfo, aboutPoints, qualityPolicy } from '@/data/siteData';

export default function AboutPage() {
  return (
    <>
      {/* Header Banner */}
      <div className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow-dark">{companyInfo.name}</span>
          <h1>About Our Company</h1>
          <p>
            Where Quality Meets Craftsmanship. Supplying quality plywoods with trust and speed.
          </p>
        </div>
      </div>

      {/* Main About Section */}
      <section className="briter-about-section" style={{ padding: '5rem 0' }}>
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

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/products" className="button button-primary">
                  <span>View Products</span>
                  <ArrowRight size={16} />
                </Link>
                <a href={companyInfo.whatsappLink} target="_blank" rel="noreferrer" className="button button-emerald">
                  <MessageCircle size={16} />
                  <span>Chat WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="briter-quality-section" style={{ padding: '5rem 0', background: 'var(--bg-card)' }}>
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
          EXTRA TIMELINE & MACHINERY SECTIONS COMMENTED OUT TO MATCH BRITERPLY
          =====================================================================
      <section className="timeline-section">...</section>
      ===================================================================== */}
    </>
  );
}

