'use client';

import { useMemo, useState } from 'react';
import { Send, CheckCircle2, LoaderCircle, MessageSquare, ShieldCheck, Sparkles, Building2 } from 'lucide-react';
import { products, companyInfo } from '@/data/siteData';

const roles = ['Architect / Interior Designer', 'Builder / Contractor', 'Modular Factory Owner', 'Homeowner / Individual'];

const initialState = {
  name: '',
  phone: '',
  email: '',
  city: '',
  role: roles[0],
  productInterest: 'Core King Club 710 (BWP)',
  sheetsQuantity: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isValid = useMemo(() => {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = 'Please enter your name.';
    if (!form.phone.trim()) nextErrors.phone = 'Please enter your phone number.';
    else if (!/^\+?[0-9\s-]{8,15}$/.test(form.phone)) nextErrors.phone = 'Please enter a valid phone number.';
    if (form.email.trim() && !/\S+@\S+\.\S+/.test(form.email)) nextErrors.email = 'Please enter a valid email.';
    if (!form.city.trim()) nextErrors.city = 'Please enter your city/state.';

    return { isValid: Object.keys(nextErrors).length === 0, nextErrors };
  }, [form]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setIsSuccess(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { isValid: valid, nextErrors } = isValid;

    if (!valid) {
      setErrors(nextErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    await new Promise((resolve) => setTimeout(resolve, 800));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hi Core King Ply Team! New Quote Request from Website:\n- Name: ${form.name || 'Not provided'}\n- Phone: ${form.phone || 'Not provided'}\n- Role: ${form.role}\n- Location: ${form.city || 'Not provided'}\n- Product Interest: ${form.productInterest}\n- Estimated Requirement: ${form.sheetsQuantity || 'Not specified'}\n- Message: ${form.message || 'None'}`;
    window.open(`https://wa.me/919624277017?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div style={{ marginBottom: '1.25rem' }}>
        <h3 style={{ fontSize: '1.45rem', color: 'var(--color-heading)', marginBottom: '0.35rem' }}>
          Request Direct Factory Quote & Samples
        </h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--color-muted)' }}>
          Get instant pricing, technical catalogs, and dealership information directly from Yamunanagar plant.
        </p>
      </div>

      <div className="field">
        <span>I Am A:</span>
        <select name="role" value={form.role} onChange={handleChange}>
          {roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </div>

      <div className="form-grid">
        <label className="field">
          <span>Full Name *</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            aria-invalid={Boolean(errors.name)}
            placeholder="e.g. Rajesh Malhotra"
          />
          {errors.name ? <small>{errors.name}</small> : null}
        </label>

        <label className="field">
          <span>Phone / WhatsApp *</span>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            aria-invalid={Boolean(errors.phone)}
            placeholder="+91 98765 43210"
          />
          {errors.phone ? <small>{errors.phone}</small> : null}
        </label>
      </div>

      <div className="form-grid">
        <label className="field">
          <span>Email Address</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            aria-invalid={Boolean(errors.email)}
            placeholder="name@company.com"
          />
          {errors.email ? <small>{errors.email}</small> : null}
        </label>

        <label className="field">
          <span>City / Project Location *</span>
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            aria-invalid={Boolean(errors.city)}
            placeholder="e.g. Mumbai / Delhi / Bengaluru"
          />
          {errors.city ? <small>{errors.city}</small> : null}
        </label>
      </div>

      <div className="form-grid">
        <div className="field">
          <span>Product Interest</span>
          <select name="productInterest" value={form.productInterest} onChange={handleChange}>
            {products.map((p) => (
              <option key={p.slug} value={p.name}>
                {p.name} ({p.grade})
              </option>
            ))}
            <option value="All Products / Complete Catalog">All Products / Full Catalog</option>
            <option value="Dealership & Distribution Inquiry">Dealership & Distribution Inquiry</option>
          </select>
        </div>

        <label className="field">
          <span>Estimated Quantity (Sheets)</span>
          <input
            type="text"
            name="sheetsQuantity"
            value={form.sheetsQuantity}
            onChange={handleChange}
            placeholder="e.g. 50 sheets / 1 Full Truckload"
          />
        </label>
      </div>

      <label className="field">
        <span>Project Details / Special Requirements</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="Thickness requirements (e.g. 19mm / 16mm), site timeline, or sample kit request..."
        />
      </label>

      <div className="contact-form__actions">
        <button type="submit" className="button button-primary" disabled={isSubmitting} style={{ flex: 1 }}>
          {isSubmitting ? (
            <>
              <LoaderCircle className="spin" size={18} /> Submitting...
            </>
          ) : (
            <>
              <Send size={18} /> Submit Inquiry
            </>
          )}
        </button>

        <button
          type="button"
          onClick={handleWhatsAppRedirect}
          className="button button-emerald"
          style={{ flex: 1 }}
        >
          <MessageSquare size={18} /> WhatsApp Quote
        </button>
      </div>

      {isSuccess ? (
        <div className="success-state" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }}>
          <CheckCircle2 size={20} color="#10b981" />
          <span>Thank you! Your quotation request has been received. Our sales engineer will call you shortly.</span>
        </div>
      ) : null}
    </form>
  );
}

