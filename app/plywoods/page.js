'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Droplets, ShieldCheck, Sparkles, HelpCircle, Layers3, AlertTriangle, MessageCircle, FileText } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ComparisonTable from '@/components/ComparisonTable';
import InteractiveCalculator from '@/components/InteractiveCalculator';
import { companyInfo } from '@/data/siteData';

const thicknessGuide = [
  { thickness: '6mm & 9mm', uses: 'Drawer bottoms, rear paneling of wardrobes, curved furniture, decorative wall trims, and false ceiling backing.' },
  { thickness: '12mm', uses: 'Lightweight storage racks, partition wall paneling, modular cabinet backs, and under-bed storage frames.' },
  { thickness: '16mm & 19mm', uses: 'Heavy-duty modular kitchen cabinets, wardrobe carcasses, internal partitions, study tables, and bed headboards.' },
  { thickness: '25mm & 30mm', uses: 'Heavy conference tables, load-bearing bookshelves, long-span structural counters, and architectural staircase treads.' },
];

const qualityTestsToTry = [
  { title: 'The Boiling Water Test (BWP)', desc: 'Cut a 2-inch sample and boil it in water for 72 hours. True BWP Marine plywood like Briter Club will show zero layer delamination or glue line failure.' },
  { title: 'The Cross-Section Core Gap Check', desc: 'Inspect the exposed edges. Cheap plywood shows hollow air cavities and overlapping veneers, which leads to weak screw holding and sagging.' },
  { title: 'The Thickness Caliper Test', desc: 'Measure thickness across all 4 corners and center with a digital vernier micrometer. Briterply maintains uniform thickness within ±0.1mm tolerance.' },
  { title: 'Nail & Screw Retention Test', desc: 'Drive a 2-inch drywall screw 10mm from the edge. High-density hardwood plywood holds firmly without edge splitting.' },
];

export default function PlywoodsGuidePage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow-dark">Architectural Knowledge Base</span>
          <h1>The Definitive Plywood Guide</h1>
          <p>
            Understand the critical engineering differences between BWP, BWR, and Commercial grades
            to make informed decisions for your residential and commercial interior projects.
          </p>
        </div>
      </div>

      {/* Grade Comparison Breakdown */}
      <section style={{ padding: '5.5rem 0', background: 'var(--bg-main)' }}>
        <div className="container">
          <SectionHeading
            eyebrow="Understanding Grades"
            title="BWP Marine (IS:710) vs. BWR (IS:303)"
            description="Choosing the right grade prevents expensive water damage, wood rot, and premature interior refurbishment."
            align="center"
          />

          <div className="grade-comparison-grid">
            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '2.25rem', border: '2px solid #d97706', boxShadow: 'var(--shadow-md)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-14px', right: '1.5rem', background: 'var(--accent-gradient)', color: '#ffffff', padding: '0.25rem 0.75rem', borderRadius: '999px', fontSize: '0.75rem', fontWeight: 800 }}>
                RECOMMENDED FOR KITCHENS
              </div>
              <span className="pill emerald" style={{ marginBottom: '0.75rem' }}>
                IS:710 Marine Grade
              </span>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-heading)', marginBottom: '0.6rem' }}>
                BWP (Boiling Water Proof)
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Bonded with 100% pure Phenol Formaldehyde resin. Can withstand 72+ hours of continuous boiling water.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span>Modular Kitchen under-sink units</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span>Bathroom vanities & coastal homes</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span>Up to 30-year lifetime durability</span>
                </li>
              </ul>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '2.25rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <span className="pill" style={{ marginBottom: '0.75rem' }}>
                IS:303 BWR Grade
              </span>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-heading)', marginBottom: '0.6rem' }}>
                BWR (Boiling Water Resistant)
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Bonded with fortified Melamine Urea Formaldehyde resin. Withstands 8 hours of boiling water.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span>Wardrobes & bedroom furniture</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span>Living room TV units & study tables</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={16} color="#059669" />
                  <span>20-Year warranty protection</span>
                </li>
              </ul>
            </div>

            <div style={{ background: '#ffffff', borderRadius: '20px', padding: '2.25rem', border: '1px solid var(--color-border)', opacity: 0.9 }}>
              <span className="pill ghost" style={{ marginBottom: '0.75rem', color: '#dc2626', borderColor: '#fca5a5' }}>
                Ordinary Commercial MR
              </span>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-heading)', marginBottom: '0.6rem' }}>
                MR (Moisture Resistant)
              </h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--color-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                Bonded with ordinary urea resin glue. Fails in boiling water within 30 to 60 minutes.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem', color: 'var(--color-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertTriangle size={16} color="#dc2626" />
                  <span>Not recommended for wet areas</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertTriangle size={16} color="#dc2626" />
                  <span>Prone to termite attack & warping</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <AlertTriangle size={16} color="#dc2626" />
                  <span>Limited structural life</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Thickness Selection Matrix */}
          <div style={{ background: '#ffffff', borderRadius: '24px', padding: '2.5rem', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)', marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.85rem', color: 'var(--color-heading)', marginBottom: '1.5rem' }}>
              Standard Thickness Recommendation Matrix
            </h3>
            <div className="two-col-grid">
              {thicknessGuide.map((tg) => (
                <div key={tg.thickness} style={{ background: 'var(--bg-main)', padding: '1.5rem', borderRadius: '14px', border: '1px solid var(--color-border-light)' }}>
                  <strong style={{ fontSize: '1.25rem', color: '#d97706', display: 'block', marginBottom: '0.4rem', fontFamily: 'var(--font-display)' }}>
                    {tg.thickness}
                  </strong>
                  <p style={{ fontSize: '0.95rem', color: 'var(--color-body)', lineHeight: 1.6 }}>{tg.uses}</p>
                </div>
              ))}
            </div>
          </div>

          {/* How to Test Plywood */}
          <div style={{ background: 'linear-gradient(135deg, #090e1a 0%, #17223b 100%)', color: '#ffffff', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: 'var(--shadow-xl)' }}>
            <div style={{ maxWidth: '750px', marginBottom: '2.5rem' }}>
              <span className="eyebrow eyebrow-dark">Field Verification</span>
              <h2 style={{ color: '#ffffff', fontSize: '2.3rem', margin: '0.4rem 0 0.75rem' }}>
                4 Practical Ways to Test Genuine Plywood Quality
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.05rem' }}>
                Before starting your interior woodworking, verify your plywood sheets with these simple tests.
              </p>
            </div>

            <div className="two-col-grid">
              {qualityTestsToTry.map((qt, idx) => (
                <div key={qt.title} style={{ background: 'rgba(255,255,255,0.05)', padding: '1.75rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                    <span style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'var(--accent-gradient)', color: '#ffffff', display: 'grid', placeItems: 'center', fontSize: '0.85rem', fontWeight: 800 }}>
                      {idx + 1}
                    </span>
                    <h4 style={{ color: '#ffffff', fontSize: '1.15rem' }}>{qt.title}</h4>
                  </div>
                  <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.925rem', lineHeight: 1.6 }}>{qt.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable />

      {/* Interactive Estimator */}
      <InteractiveCalculator />
    </>
  );
}
