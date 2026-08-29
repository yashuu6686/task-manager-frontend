'use client';

import {
  Layers3,
  Droplets,
  ShieldCheck,
  Sparkles,
  Leaf,
  Shield,
  Flame,
  CheckCircle2,
} from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap = {
  Layers3,
  Droplets,
  ShieldCheck,
  Sparkles,
  Leaf,
  Shield,
  Flame,
};

export default function FeatureCard({ title, description, icon, stat, highlight }) {
  const Icon = iconMap[icon] || Layers3;

  return (
    <motion.article
      className="feature-card"
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
    >
      <div className="feature-card__top">
        <div className="feature-card__icon-wrap">
          <Icon size={26} strokeWidth={2.2} />
        </div>
        {stat ? <span className="feature-card__stat">{stat}</span> : null}
      </div>

      <h3>{title}</h3>
      <p>{description}</p>

      {highlight ? (
        <div className="feature-card__highlight">
          <CheckCircle2 size={16} />
          <span>{highlight}</span>
        </div>
      ) : null}
    </motion.article>
  );
}

