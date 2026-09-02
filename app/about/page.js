'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCheck, ShieldCheck, MessageCircle } from 'lucide-react';
import { companyInfo, aboutPoints, qualityPolicy } from '@/data/siteData';

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
      staggerChildren: 0.1,
    },
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Header Banner */}
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
            About Our Company
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Where Quality Meets Craftsmanship. Supplying quality plywoods with trust and speed.
          </motion.p>
        </div>
      </div>

      {/* Main About Section */}
      <section className="briter-about-section" style={{ padding: '5rem 0' }}>
        <div className="container">
          <div className="briter-about-grid">
            <motion.div
              className="about-image-col"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src="/images/IMG_20260902_000820.png"
                alt="Core King Plywood Elevate"
                className="about-featured-img"
              />
            </motion.div>

            <motion.div
              className="about-content-col"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.h3
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Elevate Your Projects with {companyInfo.name}wood
              </motion.h3>
              <motion.p
                className="about-lead-p"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {companyInfo.name}wood is one of India&apos;s fastest-growing manufacturers and
                suppliers of premium calibrated plywood. Known for strength, precision,
                and durability, our plywood and laminate products are crafted to meet
                the highest standards for both residential and commercial applications.
                <br /><br />
                Proudly marketed and distributed by <strong>{companyInfo.marketedBy}</strong>, we ensure
                that our products reach every corner with the same promise of quality
                and reliability.
              </motion.p>

              <motion.ul
                className="about-checks-list"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {aboutPoints.map((point) => (
                  <motion.li
                    key={point}
                    variants={fadeInUp}
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 400 }}
                  >
                    <CheckCheck size={18} className="check-icon" />
                    <span>{point}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p
                className="about-closing-p"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
              >
                From blockboards to shuttering plywood, each product reflects our
                commitment to excellence. With modern processes and expert craftsmanship,
                {companyInfo.name}wood - marketed by {companyInfo.marketedBy} - delivers dependable solutions that
                stand the test of time.
              </motion.p>

              <motion.div
                style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
              >
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Link href="/products" className="button button-primary">
                    <span>View Products</span>
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
                <motion.a
                  href={companyInfo.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-emerald"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <MessageCircle size={16} />
                  <span>Chat WhatsApp</span>
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Policy Section */}
      <section className="briter-quality-section" style={{ padding: '5rem 0', background: 'var(--bg-card)' }}>
        <div className="container">
          <motion.div
            className="briter-section-title"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>{qualityPolicy.heading}</h2>
            <p>{qualityPolicy.subtitle}</p>
          </motion.div>

          <div className="briter-quality-grid">
            <motion.div
              className="quality-img-col"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <img
                src={qualityPolicy.image}
                alt="Quality Policy"
                className="quality-featured-img"
              />
            </motion.div>

            <motion.div
              className="quality-text-col"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div
                className="quality-card-box"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="quality-card-heading">
                  <ShieldCheck size={26} className="text-primary-icon" />
                  <span>{qualityPolicy.cardTitle}</span>
                </h3>
                {qualityPolicy.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
