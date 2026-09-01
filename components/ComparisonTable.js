'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ShieldCheck, Sparkles } from 'lucide-react';
import { comparisonData } from '@/data/siteData';

const grades = [
  {
    id: 'club',
    name: 'Core King Club710',
    shortName: 'Club710',
    subtitle: 'Flagship BWP Marine Grade',
    badge: 'Recommended',
    warranty: '21 Yrs Warranty',
    color: '#d97706',
    dataKey: 'coreKingClub',
    isRecommended: true,
  },
  {
    id: 'gold',
    name: 'Core King BWR',
    shortName: 'Core King BWR',
    subtitle: 'Commercial & Residential BWR',
    badge: 'Best Seller',
    warranty: '15 Yrs Warranty',
    color: '#059669',
    dataKey: 'coreKingGold',
    isRecommended: false,
  },
  {
    id: 'market',
    name: 'Regular Market Plywood',
    shortName: 'Regular Ply',
    subtitle: 'Conventional Local Timber',
    badge: 'Uncalibrated',
    warranty: 'No Warranty',
    color: '#ef4444',
    dataKey: 'regularMarket',
    isRecommended: false,
  },
];

export default function ComparisonTable() {
  const [activeGrade, setActiveGrade] = useState('club');

  const selectedGradeObj = grades.find((g) => g.id === activeGrade) || grades[0];

  return (
    <section className="comparison-section">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Engineering Superiority</span>
          <h2>Core King Ply vs. Ordinary Market Plywood</h2>
          <p>
            Why leading architects and premium modular interior manufacturers insist on Core King Ply
            calibrated boards over conventional market alternatives.
          </p>
        </div>

        {/* MOBILE CARD VIEW (Shown only on mobile viewports < 920px) */}
        <div className="comp-mobile-card-container">
          {/* 3 Equal Grid Tabs */}
          <div className="comp-grade-tabs-grid">
            {grades.map((g) => (
              <button
                key={g.id}
                type="button"
                className={`comp-grade-tab-item ${activeGrade === g.id ? 'active' : ''} ${g.isRecommended ? 'recommended' : ''}`}
                onClick={() => setActiveGrade(g.id)}
              >
                <span>{g.shortName}</span>
              </button>
            ))}
          </div>

          {/* Active Grade Spec Card */}
          <motion.div
            key={activeGrade}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className={`comp-mobile-card ${selectedGradeObj.isRecommended ? 'recommended-card' : ''}`}
          >
            <div className="comp-card-header">
              <div className="comp-card-badge-row">
                <span className="comp-card-badge" style={{ color: selectedGradeObj.color, background: `${selectedGradeObj.color}15` }}>
                  {selectedGradeObj.badge}
                </span>
                <span className="comp-card-warranty">
                  <ShieldCheck size={14} color={selectedGradeObj.color} />
                  <span>{selectedGradeObj.warranty}</span>
                </span>
              </div>

              <h3 className="comp-card-title">{selectedGradeObj.name}</h3>
              <span className="comp-card-subtitle">{selectedGradeObj.subtitle}</span>
            </div>

            <div className="comp-card-specs">
              {comparisonData.map((row) => {
                const val = row[selectedGradeObj.dataKey];
                const isNegative = selectedGradeObj.id === 'market';

                return (
                  <div key={row.parameter} className="comp-spec-row">
                    <div className="comp-spec-param">{row.parameter}</div>
                    <div className="comp-spec-val">
                      {isNegative ? (
                        <X size={16} color="#ef4444" style={{ flexShrink: 0, marginTop: '2px' }} />
                      ) : (
                        <Check size={16} color={selectedGradeObj.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                      )}
                      <span>{val}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* DESKTOP TABLE VIEW (Shown only on desktop viewports >= 920px) */}
        <div className="table-wrapper comp-desktop-table-container">
          <table className="comp-table">
            <thead>
              <tr>
                <th>Technical Parameter</th>
                <th className="featured">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Sparkles size={16} />
                    <span>Core King Club710 (Flagship)</span>
                  </div>
                </th>
                <th>Core King BWR (BWR Grade)</th>
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
                      <span>{row.coreKingClub}</span>
                    </div>
                  </td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.45rem' }}>
                      <Check size={16} color="#059669" style={{ marginTop: '0.2rem', flexShrink: 0 }} />
                      <span>{row.coreKingGold}</span>
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
