'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, CheckCircle2, ArrowRight, Sparkles, Mail, HelpCircle } from 'lucide-react';
import { companyInfo } from '@/data/siteData';

const applications = [
  { id: 'kitchen', label: 'Modular Kitchen & Wet Zone', defaultThickness: '16mm / 19mm', recommended: 'Core King Club710 (BWP)', factor: 1.4 },
  { id: 'wardrobe', label: 'Full-Height Wardrobe & Closets', defaultThickness: '19mm Pine Blockboard', recommended: 'Core King Pine Blockboard', factor: 1.2 },
  { id: 'living', label: 'Living Room & TV Units', defaultThickness: '12mm / 16mm', recommended: 'Core King BWR', factor: 1.1 },
  { id: 'ceiling', label: 'Wall Paneling & Ceiling', defaultThickness: '6mm / 9mm', recommended: 'Core King BWR', factor: 0.9 },
  { id: 'commercial', label: 'Commercial & Hospitality Fire Zone', defaultThickness: '16mm / 19mm', recommended: 'Core King Platinum Fire-Shield', factor: 1.5 },
];

export default function InteractiveCalculator() {
  const [selectedApp, setSelectedApp] = useState(applications[0].id);
  const [areaSqFt, setAreaSqFt] = useState(250);
  const [isCommercial, setIsCommercial] = useState(false);

  const currentApp = useMemo(() => {
    return applications.find((a) => a.id === selectedApp) || applications[0];
  }, [selectedApp]);

  // Standard 8x4 ft plywood sheet = 32 sq.ft. Accounting for ~15% cutting & joinery wastage.
  const estimatedSheets = useMemo(() => {
    const effectiveSqFt = areaSqFt * 1.15;
    const sheets = Math.ceil(effectiveSqFt / 32);
    return Math.max(1, sheets);
  }, [areaSqFt]);

  const emailInquiryUrl = `mailto:${companyInfo.email}?subject=${encodeURIComponent(
    `Factory Price Inquiry - ${currentApp.label}`
  )}&body=${encodeURIComponent(
    `Hello Core King Ply,\n\nI calculated my requirement on your website:\n- Application: ${currentApp.label}\n- Approximate Area: ${areaSqFt} sq.ft\n- Recommended Grade: ${currentApp.recommended}\n- Estimated Sheets (8x4 ft): ~${estimatedSheets} sheets\n\nPlease share direct factory quotation and dealer availability.\n\nThank you.`
  )}`;

  return (
    <section className="calculator-section">
      <div className="container">
        <div className="calc-grid">
          <div>
            <div className="section-heading dark" style={{ marginBottom: '2rem' }}>
              <span className="eyebrow eyebrow-dark">Interactive Estimator</span>
              <h2>Plywood Requirement & Grade Calculator</h2>
              <p>
                Select your application and surface dimensions to instantly calculate the recommended
                calibrated grade, optimal thickness, and total 8x4 ft sheets needed.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.85)' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Zero Core Gap calculation with 15% standard cutting allowance</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.85)' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>100% Calibrated thickness for flawless edge-banding fitment</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'rgba(255,255,255,0.85)' }}>
                <CheckCircle2 size={18} color="#10b981" />
                <span>Instant dispatch of test certificates and physical wood samples</span>
              </div>
            </div>
          </div>

          <div className="calc-card">
            <div className="calc-form-group">
              <label className="calc-label">1. Choose Application Area</label>
              <div className="calc-chips">
                {applications.map((app) => (
                  <button
                    key={app.id}
                    type="button"
                    className={`calc-chip ${selectedApp === app.id ? 'active' : ''}`}
                    onClick={() => setSelectedApp(app.id)}
                  >
                    {app.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="calc-form-group">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <label className="calc-label" style={{ marginBottom: 0 }}>
                  2. Approximate Room / Interior Area
                </label>
                <strong style={{ color: '#f59e0b', fontSize: '1rem' }}>{areaSqFt} Sq.Ft</strong>
              </div>
              <input
                type="range"
                min="50"
                max="2500"
                step="25"
                value={areaSqFt}
                onChange={(e) => setAreaSqFt(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#d97706', cursor: 'pointer' }}
              />
              <div className="calc-slider-labels">
                <span>50 sq.ft (Single)</span>
                <span>1000 sq.ft (3BHK)</span>
                <span>2500+ sq.ft (Villa)</span>
              </div>
            </div>

            <div className="calc-result-box">
              <div className="calc-result-header">
                <span className="calc-result-title">Recommended Specification</span>
                <span className="pill calc-spec-pill" style={{ background: 'rgba(255,255,255,0.15)', color: '#ffffff' }}>
                  Standard 8x4 Ft Sheets
                </span>
              </div>

              <div className="calc-result-body">
                <div className="calc-result-grade">
                  <div className="calc-meta-label">Ideal Grade</div>
                  <strong className="calc-recommended-title">
                    {currentApp.recommended}
                  </strong>
                  <div className="calc-thickness-tag">
                    Recommended Thickness: {currentApp.defaultThickness}
                  </div>
                </div>

                <div className="calc-result-sheets">
                  <div className="calc-meta-label">Estimated Sheets</div>
                  <div className="calc-result-number">
                    ~{estimatedSheets} <span className="calc-sheets-unit">Sheets</span>
                  </div>
                </div>
              </div>

              <a
                href={emailInquiryUrl}
                className="button button-emerald calc-whatsapp-btn"
              >
                <Mail size={18} />
                <span>Get Exact Factory Price Via Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
