'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCheck, Droplet, Wrench, Layers, CircleDot, Flame, Mail } from 'lucide-react';
import { featureList, companyInfo } from '@/data/siteData';

const featureIconMap = {
  CheckCheck: <CheckCheck size={30} className="feature-icon-svg" />,
  Droplet: <Droplet size={30} className="feature-icon-svg" />,
  Wrench: <Wrench size={30} className="feature-icon-svg" />,
  Layers: <Layers size={30} className="feature-icon-svg" />,
  CircleDot: <CircleDot size={30} className="feature-icon-svg" />,
  Flame: <Flame size={30} className="feature-icon-svg" />,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export default function FeaturesEngineeringPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <motion.span
            className="eyebrow eyebrow-dark"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {companyInfo.name}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Key Features & Quality
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Check our key features crafted to deliver strength, precision, and lasting durability.
          </motion.p>
        </div>
      </div>

      {/* 6 Key Features Section */}
      <section className="briter-features-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <motion.div
            className="briter-section-title"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Features</h2>
            <p>CHECK OUR KEY-FEATURES</p>
          </motion.div>

          <motion.div
            className="briter-features-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {featureList.map((feature) => (
              <motion.div
                key={feature.id}
                className="briter-feature-card"
                variants={fadeInUp}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <div className="feature-icon-box">
                  {featureIconMap[feature.icon] || <CheckCheck size={30} />}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            style={{ marginTop: '3.5rem', textAlign: 'center', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link href="/products" className="button button-primary">
                <span>Explore Products</span>
                <ArrowRight size={16} />
              </Link>
            </motion.div>
            <motion.a
              href={companyInfo.emailLink}
              className="button button-emerald"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={16} />
              <span>Inquire via Email</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
