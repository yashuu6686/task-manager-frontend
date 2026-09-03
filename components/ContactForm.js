'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, LoaderCircle, Mail } from 'lucide-react';
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
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
    setIsSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const trimmedForm = Object.fromEntries(
      Object.entries(form).map(([field, value]) => [field, value.trim()]),
    );
    const nextErrors = {};

    if (!trimmedForm.name) nextErrors.name = 'Please enter your name.';
    if (!trimmedForm.email) {
      nextErrors.email = 'Please enter your email.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedForm.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!trimmedForm.subject) nextErrors.subject = 'Please enter a subject.';
    if (!trimmedForm.message) nextErrors.message = 'Please enter your message.';

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    const subject = encodeURIComponent(trimmedForm.subject);
    const body = encodeURIComponent(
      `Name: ${trimmedForm.name}\nEmail: ${trimmedForm.email}\n\nMessage:\n${trimmedForm.message}`,
    );
    window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleEmailDirect = () => {
    const subject = encodeURIComponent(form.subject || `Inquiry from ${form.name || 'Website Visitor'}`);
    const body = encodeURIComponent(`Name: ${form.name || ''}\nEmail: ${form.email || ''}\n\nMessage:\n${form.message || ''}`);
    window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`;
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
              aria-invalid={Boolean(errors.name)}
            />
            {errors.name && <span className="form-error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
            />
            {errors.email && <span className="form-error">{errors.email}</span>}
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
            aria-invalid={Boolean(errors.subject)}
          />
          {errors.subject && <span className="form-error">{errors.subject}</span>}
        </div>

        <div className="form-group">
          <textarea
            name="message"
            className="form-control"
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
          />
          {errors.message && <span className="form-error">{errors.message}</span>}
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
            onClick={handleEmailDirect}
            className="button button-emerald btn-whatsapp-direct"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Mail size={18} /> Email Directly
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
