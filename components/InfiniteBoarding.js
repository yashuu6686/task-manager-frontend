'use client';

import {
  Award,
  CheckCheck,
  Droplet,
  Layers,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
  Wrench,
  Zap,
} from 'lucide-react';
import { companyInfo } from '@/data/siteData';

const defaultBoardingItems = [
  {
    icon: <Sparkles size={16} />,
    title: companyInfo.name,
    subtitle: 'Premium Calibrated Plywood',
    highlight: true,
  },
  {
    icon: <Zap size={16} />,
    title: 'Premium Craftsmanship',
    subtitle: 'Strength, Precision & Durability',
    highlight: false,
  },
  {
    icon: <CheckCheck size={16} />,
    title: '100% Calibrated',
    subtitle: 'Precision Thickness & Smooth Finish',
    highlight: false,
  },
  {
    icon: <Droplet size={16} />,
    title: 'BWP & BWR Grade',
    subtitle: 'High Boiling Water Resistance',
    highlight: false,
  },
  {
    icon: <ShieldCheck size={16} />,
    title: 'Termite & Borer Protected',
    subtitle: 'Triple Chemically Treated',
    highlight: true,
  },
  {
    icon: <Wrench size={16} />,
    title: 'Superior Strength',
    subtitle: 'High Screw & Nail Holding Capacity',
    highlight: false,
  },
  {
    icon: <Trees size={16} />,
    title: 'Eco-Friendly Wood',
    subtitle: 'Sustainable Sourcing & Low Emission',
    highlight: false,
  },
  {
    icon: <Layers size={16} />,
    title: 'Zero Core Gaps',
    subtitle: 'Uniform Density & Anti-Warp',
    highlight: false,
  },
  {
    icon: <Award size={16} />,
    title: 'Core King BWR & Club710',
    subtitle: '15 & 21 Year Durability Benchmark',
    highlight: true,
  },
  {
    icon: <Star size={16} />,
    title: 'Trusted Quality',
    subtitle: 'Where Quality Meets Craftsmanship',
    highlight: false,
  },
];

export default function InfiniteBoarding({
  items = defaultBoardingItems,
  speed = 'normal',
  direction = 'left',
  variant = 'dark',
  className = '',
}) {
  const speedClass =
    speed === 'fast' ? 'speed-fast' : speed === 'slow' ? 'speed-slow' : '';
  const dirClass = direction === 'right' ? 'direction-right' : 'direction-left';
  const variantClass = variant === 'gold' ? 'variant-gold' : variant === 'light' ? 'variant-light' : 'variant-dark';

  return (
    <section
      className={`infinite-boarding-section ${variantClass} ${className}`}
      aria-label="Core King Ply Key Highlights"
    >
      <div className={`infinite-boarding-track ${speedClass} ${dirClass}`}>
        {/* First track set */}
        <div className="infinite-boarding-group">
          {items.map((item, idx) => (
            <div
              key={`item-1-${idx}`}
              className={`infinite-board-pill ${item.highlight ? 'pill-highlight' : ''}`}
            >
              <span className={`infinite-board-icon ${item.highlight ? 'emerald' : ''}`}>
                {item.icon}
              </span>
              <strong>{item.title}</strong>
              <span className="infinite-board-dot-sep" />
              <span className="sub">{item.subtitle}</span>
            </div>
          ))}
        </div>

        {/* Duplicate track set for seamless 100% infinite loop */}
        <div className="infinite-boarding-group" aria-hidden="true">
          {items.map((item, idx) => (
            <div
              key={`item-2-${idx}`}
              className={`infinite-board-pill ${item.highlight ? 'pill-highlight' : ''}`}
            >
              <span className={`infinite-board-icon ${item.highlight ? 'emerald' : ''}`}>
                {item.icon}
              </span>
              <strong>{item.title}</strong>
              <span className="infinite-board-dot-sep" />
              <span className="sub">{item.subtitle}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
