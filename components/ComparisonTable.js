'use client';

import { Check, X, ShieldCheck, Sparkles } from 'lucide-react';
import { comparisonData } from '@/data/siteData';

export default function ComparisonTable() {
  return (
    <section className="comparison-section">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Engineering Superiority</span>
          <h2>Briterply vs. Ordinary Market Plywood</h2>
          <p>
            Why leading architects and premium modular interior manufacturers insist on Briterply
            calibrated boards over conventional market alternatives.
          </p>
        </div>

        <div className="table-wrapper">
          <table className="comp-table">
            <thead>
              <tr>
                <th>Technical Parameter</th>
                <th className="featured">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Sparkles size={18} />
                    <span>Briter Club 710 (Flagship)</span>
                  </div>
                </th>
                <th>Briter Gold (BWR Grade)</th>
                <th>Regular Local Plywood</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row) => (
                <tr key={row.parameter}>
                  <td className="parameter-name">{row.parameter}</td>
                  <td className="featured-col">
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                      <Check size={16} color="#d97706" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                      <span>{row.briterClub}</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                      <Check size={16} color="#059669" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                      <span>{row.briterGold}</span>
                    </div>
                  </td>
                  <td style={{ color: '#94a3b8' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                      <X size={16} color="#ef4444" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                      <span>{row.regularMarket}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
