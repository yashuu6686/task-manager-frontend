'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { faqs, companyInfo } from '@/data/siteData';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Frequently Asked Questions</span>
          <h2>Everything You Need to Know</h2>
          <p>
            Key insights on wood grades, calibration technology, warranty claims, and bulk factory supply.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question} className={`faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  type="button"
                  className="faq-question"
                  onClick={() => toggleIndex(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <div className="faq-icon">
                    <ChevronDown size={18} />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="faq-answer">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
          <p style={{ color: '#64748b', fontSize: '0.95rem', marginBottom: '0.75rem' }}>
            Have a custom architectural requirement or need physical test samples?
          </p>
          <a
            href={companyInfo.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="button button-emerald small-button"
            style={{ display: 'inline-flex' }}
          >
            <MessageCircle size={16} />
            <span>Chat Directly with Technical Support</span>
          </a>
        </div>
      </div>
    </section>
  );
}
