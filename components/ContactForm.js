'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, LoaderCircle, MessageCircle } from 'lucide-react';
import { companyInfo } from '@/data/siteData';

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setIsSuccess(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const handleWhatsAppChat = () => {
    const text = `Hello ${companyInfo.name}, I would like to inquire about your plywood products.\nName: ${form.name || ''}\nEmail: ${form.email || ''}\nSubject: ${form.subject || ''}\nMessage: ${form.message || ''}`;
    window.open(`https://wa.me/917016059330?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <form className="contact-form-wrapper" onSubmit={handleSubmit} noValidate>
      <div className="contact-form-inner">
        <div className="form-row-2">
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <input
            type="text"
            name="subject"
            className="form-control"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            name="message"
            className="form-control"
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-actions-flex">
          <motion.button
            type="submit"
            className="button button-primary btn-submit-full"
            disabled={isSubmitting}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {isSubmitting ? (
              <>
                <LoaderCircle className="spin" size={18} /> Sending message...
              </>
            ) : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </motion.button>
          <motion.button
            type="button"
            onClick={handleWhatsAppChat}
            className="button button-emerald btn-whatsapp-direct"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle size={18} /> Chat on WhatsApp
          </motion.button>
        </div>

        <AnimatePresence>
          {isSuccess && (
            <motion.div
              className="sent-message"
              initial={{ opacity: 0, y: -10, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -10, height: 0 }}
              style={{ marginTop: '1rem', color: '#10b981', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}
            >
              <CheckCircle2 size={18} />
              <span>Your message has been sent successfully. Thank you!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </form>
  );
}
