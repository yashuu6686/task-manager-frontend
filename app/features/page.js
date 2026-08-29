'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck, Flame, Layers3, Droplets, Sparkles, Leaf, Cpu, Award, Zap, Microscope } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import FeatureCard from '@/components/FeatureCard';
import QualityLabSection from '@/components/QualityLabSection';
import { featureList, companyInfo } from '@/data/siteData';

const processSteps = [
  { step: '01', title: 'Hardwood Sourcing & Peeling', desc: 'Dense hardwood & Gurjan logs peeled into high-grade, uniform 1.5mm to 2.5mm thick core veneers.' },
  { step: '02', title: 'Continuous Jet Veneer Drying', desc: 'Veneers dried to an optimal moisture level of 6% to 8% to prevent future warping, bubbles, and shrinkage.' },
  { step: '03', title: 'Automated Core Composing', desc: 'Full-sheet automated scarf joinery ensures edge-to-edge alignment with zero core gaps or overlapping veneers.' },
  { step: '04', title: 'Unextended Phenolic Glue Coating', desc: 'Veneers coated with pure, synthetic Phenol Formaldehyde resin formulated in-house for maximum cross-linking.' },
  { step: '05', title: 'Cold Pre-Press Stabilization', desc: 'Initial hydraulic cold-pressing at 10 kg/cm² for uniform glue spread and initial structural stabilization.' },
  { step: '06', title: 'Quad-Stage Heavy Hot Press', desc: '4-Stage thermal pressing under 150°C and 18 kg/cm² pressure, fusing veneers into an impenetrable composite.' },
  { step: '07', title: 'Double-Sided Wide-Belt Calibration', desc: 'Heavy dual-head sanding lines calibrate thickness to ±0.1mm tolerance for ultra-flat joinery.' },
  { step: '08', title: 'Laser Quality Inspection & Stamping', desc: 'Every sheet inspected for bonding strength, squareness, and stamped with unique BIS quality holograms.' },
];

export default function FeaturesEngineeringPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow-dark">Yamunanagar R&D & Engineering</span>
          <h1>Precision Wood Engineering</h1>
          <p>
            Discover the thermal fusion, automated core composing, and Japanese wide-belt calibration
            technologies that give Core King Ply an unbreakable structural advantage.
          </p>
        </div>
      </div>

      {/* 6 Pillars */}
      <section className="features-section">
        <div className="container">
          <SectionHeading
            eyebrow="Core Technologies"
            title="The 6 Pillars of Structural Superiority"
            description="Engineered to satisfy demanding architectural applications where failure is not an option."
            align="center"
          />

          <div className="feature-grid">
            {featureList.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Process Flow */}
      <section style={{ padding: '5.5rem 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Manufacturing Protocol"
            title="8-Stage Precision Production Flow"
            description="From raw timber selection to laser micrometer inspection, each stage is monitored with strict ISO quality protocols."
            align="center"
          />

          <div className="process-flow-grid">
            {processSteps.map((ps) => (
              <div key={ps.step} className="process-card">
                <div className="process-step-num">{ps.step}</div>
                <h3 style={{ fontSize: '1.15rem', color: 'var(--color-heading)', marginBottom: '0.45rem' }}>
                  {ps.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', lineHeight: 1.6 }}>{ps.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Quality Lab */}
      <QualityLabSection />

      {/* CTA Box */}
      <section style={{ padding: '4rem 0', background: '#ffffff' }}>
        <div className="container">
          <div style={{ background: 'linear-gradient(135deg, #090e1a 0%, #1e293b 100%)', color: '#ffffff', padding: '3.5rem', borderRadius: '24px', textAlign: 'center', boxShadow: 'var(--shadow-xl)', border: '1px solid rgba(217, 119, 6, 0.3)' }}>
            <h2 style={{ color: '#ffffff', fontSize: '2.4rem', marginBottom: '0.85rem' }}>
              Experience the Calibration Difference
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '650px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>
              Order a complimentary Architect Sample Kit with 19mm cross-sections and physical test certificates.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/contact" className="button button-primary">
                <span>Request Sample Kit</span>
                <ArrowRight size={16} />
              </Link>
              <a href={companyInfo.whatsappLink} target="_blank" rel="noreferrer" className="button button-emerald">
                <span>Chat On WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
