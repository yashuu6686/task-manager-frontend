'use client';

import Link from 'next/link';
import { ArrowRight, CheckCheck, Droplet, Wrench, Layers, CircleDot, Flame, MessageCircle } from 'lucide-react';
import { featureList, companyInfo } from '@/data/siteData';

const featureIconMap = {
  CheckCheck: <CheckCheck size={30} className="feature-icon-svg" />,
  Droplet: <Droplet size={30} className="feature-icon-svg" />,
  Wrench: <Wrench size={30} className="feature-icon-svg" />,
  Layers: <Layers size={30} className="feature-icon-svg" />,
  CircleDot: <CircleDot size={30} className="feature-icon-svg" />,
  Flame: <Flame size={30} className="feature-icon-svg" />,
};

/* =========================================================================
   EXTRA PROCESS STEPS COMMENTED OUT TO MATCH BRITERPLY.COM EXACT CONTENT
   =========================================================================
const processSteps = [
  { step: '01', title: 'Hardwood Sourcing & Peeling', desc: 'Dense hardwood & Gurjan logs peeled into high-grade core veneers.' },
  { step: '02', title: 'Continuous Jet Veneer Drying', desc: 'Veneers dried to optimal moisture level of 6% to 8%.' },
  { step: '03', title: 'Automated Core Composing', desc: 'Full-sheet scarf joinery ensures zero core gaps.' },
  { step: '04', title: 'Unextended Phenolic Glue Coating', desc: 'Veneers coated with pure synthetic Phenol Formaldehyde resin.' },
  { step: '05', title: 'Cold Pre-Press Stabilization', desc: 'Initial hydraulic cold-pressing for uniform glue spread.' },
  { step: '06', title: 'Quad-Stage Heavy Hot Press', desc: '4-Stage thermal pressing under 150°C and 18 kg/cm² pressure.' },
  { step: '07', title: 'Double-Sided Wide-Belt Calibration', desc: 'Dual-head sanding lines calibrate thickness to ±0.1mm tolerance.' },
  { step: '08', title: 'Laser Quality Inspection', desc: 'Inspected for bonding strength and stamped with quality holograms.' },
];
========================================================================= */

export default function FeaturesEngineeringPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow-dark">{companyInfo.name}</span>
          <h1>Key Features & Quality</h1>
          <p>
            Check our key features crafted to deliver strength, precision, and lasting durability.
          </p>
        </div>
      </div>

      {/* 6 Key Features Section */}
      <section className="briter-features-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="briter-section-title">
            <h2>Features</h2>
            <p>CHECK OUR KEY-FEATURES</p>
          </div>

          <div className="briter-features-grid">
            {featureList.map((feature) => (
              <div key={feature.id} className="briter-feature-card">
                <div className="feature-icon-box">
                  {featureIconMap[feature.icon] || <CheckCheck size={30} />}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3.5rem', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/products" className="button button-primary">
              <span>Explore Products</span>
              <ArrowRight size={16} />
            </Link>
            <a href={companyInfo.whatsappLink} target="_blank" rel="noreferrer" className="button button-emerald">
              <MessageCircle size={16} />
              <span>Inquire on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* =====================================================================
          EXTRA PROCESS & LAB SECTIONS COMMENTED OUT TO MATCH BRITERPLY
          =====================================================================
      <section className="process-section">...</section>
      <QualityLabSection />
      ===================================================================== */}
    </>
  );
}

