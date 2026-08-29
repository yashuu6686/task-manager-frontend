'use client';

import { ShieldCheck, TestTube, CheckCircle, Clock, Zap, Microscope } from 'lucide-react';
import { testingStandards } from '@/data/siteData';

export default function QualityLabSection() {
  return (
    <section className="lab-section">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Quality Assurance Laboratory</span>
          <h2>Zero Compromise. Verified by Science.</h2>
          <p>
            Every single batch manufactured at our Yamunanagar plant undergoes rigorous physical,
            mechanical, and chemical stress testing in compliance with Bureau of Indian Standards (BIS).
          </p>
        </div>

        <div className="lab-grid">
          {testingStandards.map((test) => (
            <div key={test.name} className="lab-card">
              <div className="lab-card__header">
                <span className="lab-card__badge">{test.standard}</span>
                <span style={{ fontSize: '0.8rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <Clock size={14} /> {test.duration}
                </span>
              </div>

              <h3>{test.name}</h3>
              <p>{test.description}</p>

              <div className="lab-card__result">
                <strong>Certified Lab Result:</strong>
                <span>{test.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
