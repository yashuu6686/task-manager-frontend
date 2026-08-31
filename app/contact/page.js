'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { companyInfo } from '@/data/siteData';

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

export default function ContactPage() {
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
            Get In Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Ready to start your project? Contact us today!
          </motion.p>
        </div>
      </div>

      {/* Chat with Us Section */}
      <section className="briter-chat-section" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div className="briter-chat-grid">
            <motion.div
              className="chat-icon-col"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="large-whatsapp-circle"
                whileHover={{ scale: 1.12, rotate: 8 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <MessageCircle size={80} color="#25D366" />
              </motion.div>
            </motion.div>

            <motion.div
              className="chat-content-col"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, delay: 0.15 }}
            >
              <h3>CONTACT US FOR ASSISTANCE</h3>
              <p>
                Have any queries or need more information about our products or
                services? Feel free to get in touch with us. We&apos;re always ready
                to assist you.
              </p>
              <motion.a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp-custom"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                CHAT ON WHATSAPP
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section id="contact" className="briter-contact-section" style={{ padding: '4rem 0 6rem' }}>
        <div className="container">
          <motion.div
            className="briter-section-title"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2>Get In Touch</h2>
            <p>READY TO START YOUR PROJECT? CONTACT US TODAY!</p>
          </motion.div>

          <div className="briter-contact-grid">
            {/* Info Cards Column */}
            <motion.div
              className="contact-cards-col"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <motion.div
                className="briter-contact-card"
                variants={fadeInUp}
                whileHover={{ x: 6 }}
              >
                <div className="card-icon-wrap">
                  <MapPin size={22} />
                </div>
                <div className="card-details">
                  <h4>Address</h4>
                  <p>
                    {companyInfo.addressLine1},<br />
                    {companyInfo.addressLine2},<br />
                    {companyInfo.addressLine3}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="briter-contact-card"
                variants={fadeInUp}
                whileHover={{ x: 6 }}
              >
                <div className="card-icon-wrap">
                  <Phone size={22} />
                </div>
                <div className="card-details">
                  <h4>Phone</h4>
                  <p>
                    <a href={companyInfo.phoneLink}>{companyInfo.phone}</a>
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="briter-contact-card"
                variants={fadeInUp}
                whileHover={{ x: 6 }}
              >
                <div className="card-icon-wrap">
                  <MessageCircle size={22} />
                </div>
                <div className="card-details">
                  <h4>WhatsApp</h4>
                  <p>
                    <a href={companyInfo.whatsappLink} target="_blank" rel="noreferrer">
                      {companyInfo.whatsapp}
                    </a>
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="briter-contact-card"
                variants={fadeInUp}
                whileHover={{ x: 6 }}
              >
                <div className="card-icon-wrap">
                  <Mail size={22} />
                </div>
                <div className="card-details">
                  <h4>Email</h4>
                  <p>
                    <a href={companyInfo.emailLink}>{companyInfo.email}</a>
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Form Column */}
            <motion.div
              className="contact-form-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
