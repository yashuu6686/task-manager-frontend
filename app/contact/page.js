'use client';

import Link from 'next/link';
import { Mail, MapPin, MessageCircle, Phone, Clock, ShieldCheck, Award, Building2, Truck, Users } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import ContactForm from '@/components/ContactForm';
import FaqAccordion from '@/components/FaqAccordion';
import { companyInfo } from '@/data/siteData';

export default function ContactPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow-dark">Direct Factory Access</span>
          <h1>Contact Core King Ply Works</h1>
          <p>
            Connect directly with our manufacturing headquarters in Yamunanagar, Haryana.
            Request product quotations, dealer inquiries, or complimentary sample folders.
          </p>
        </div>
      </div>

      {/* Main Contact Grid */}
      <section className="contact-section">
        <div className="container contact-grid">
          <div>
            <div className="contact-info-card" style={{ marginBottom: '2rem' }}>
              <span className="eyebrow eyebrow-dark">Headquarters & Plant</span>
              <h3>Yamunanagar Manufacturing Works</h3>
              <p>
                Our production facility and central dispatch hub are located in the heart of India&apos;s
                timber capital with direct logistics connectivity across all Indian states.
              </p>

              <ul className="contact-details-list">
                <li className="contact-detail-item">
                  <div className="contact-icon-box">
                    <MapPin size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <strong>Plant & Office Address</strong>
                    <span>{companyInfo.address}</span>
                  </div>
                </li>

                <li className="contact-detail-item">
                  <div className="contact-icon-box">
                    <Phone size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <strong>Direct Factory Phone</strong>
                    <a href={companyInfo.phoneLink}>{companyInfo.phone}</a>
                  </div>
                </li>

                <li className="contact-detail-item">
                  <div className="contact-icon-box">
                    <MessageCircle size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <strong>WhatsApp Direct Hotline</strong>
                    <a href={companyInfo.whatsappLink} target="_blank" rel="noreferrer">
                      +91 96242 77017 (Instant Quote)
                    </a>
                  </div>
                </li>

                <li className="contact-detail-item">
                  <div className="contact-icon-box">
                    <Mail size={20} />
                  </div>
                  <div className="contact-detail-text">
                    <strong>Sales & Inquiries Email</strong>
                    <a href={companyInfo.emailLink}>{companyInfo.email}</a>
                  </div>
                </li>
              </ul>

              <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent('Khajoori Road, Yamunanagar, Haryana')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="button button-secondary"
                  style={{ fontSize: '0.85rem', padding: '0.6rem 1rem' }}
                >
                  <MapPin size={15} />
                  <span>Get Driving Directions</span>
                </a>
              </div>
            </div>

            {/* Quick Inquiries Support Cards */}
            <div className="two-col-grid">

              <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                <Users size={24} color="#d97706" style={{ marginBottom: '0.6rem' }} />
                <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-heading)' }}>
                  Dealership Inquiries
                </strong>
                <p style={{ fontSize: '0.825rem', color: 'var(--color-muted)', marginTop: '0.25rem' }}>
                  Exclusive territory distribution rights for Tier 1 & Tier 2 cities.
                </p>
              </div>

              <div style={{ background: '#ffffff', padding: '1.5rem', borderRadius: '16px', border: '1px solid var(--color-border)' }}>
                <Truck size={24} color="#059669" style={{ marginBottom: '0.6rem' }} />
                <strong style={{ display: 'block', fontSize: '1rem', color: 'var(--color-heading)' }}>
                  Direct Project Dispatch
                </strong>
                <p style={{ fontSize: '0.825rem', color: 'var(--color-muted)', marginTop: '0.25rem' }}>
                  Full truckload (FTL) direct factory billing with customized sizes.
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* FAQ Section */}
      <FaqAccordion />
    </>
  );
}
