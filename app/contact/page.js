'use client';

import { Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import { companyInfo } from '@/data/siteData';

export default function ContactPage() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <span className="eyebrow eyebrow-dark">{companyInfo.name}</span>
          <h1>Get In Touch</h1>
          <p>
            Ready to start your project? Contact us today!
          </p>
        </div>
      </div>

      {/* Chat with Us Section */}
      <section className="briter-chat-section" style={{ padding: '3.5rem 0' }}>
        <div className="container">
          <div className="briter-chat-grid">
            <div className="chat-icon-col">
              <div className="large-whatsapp-circle">
                <MessageCircle size={80} color="#25D366" />
              </div>
            </div>

            <div className="chat-content-col">
              <h3>CONTACT US FOR ASSISTANCE</h3>
              <p>
                Have any queries or need more information about our products or
                services? Feel free to get in touch with us. We&apos;re always ready
                to assist you.
              </p>
              <a
                href={companyInfo.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp-custom"
              >
                CHAT ON WHATSAPP
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section id="contact" className="briter-contact-section" style={{ padding: '4rem 0 6rem' }}>
        <div className="container">
          <div className="briter-section-title">
            <h2>Get In Touch</h2>
            <p>READY TO START YOUR PROJECT? CONTACT US TODAY!</p>
          </div>

          <div className="briter-contact-grid">
            {/* Info Cards Column */}
            <div className="contact-cards-col">
              <div className="briter-contact-card">
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
              </div>

              <div className="briter-contact-card">
                <div className="card-icon-wrap">
                  <Phone size={22} />
                </div>
                <div className="card-details">
                  <h4>Phone</h4>
                  <p>
                    <a href={companyInfo.phoneLink}>{companyInfo.phone}</a>
                  </p>
                </div>
              </div>

              <div className="briter-contact-card">
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
              </div>

              <div className="briter-contact-card">
                <div className="card-icon-wrap">
                  <Mail size={22} />
                </div>
                <div className="card-details">
                  <h4>Email</h4>
                  <p>
                    <a href={companyInfo.emailLink}>{companyInfo.email}</a>
                  </p>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form-col">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          EXTRA FAQS / DRIVING DIRECTION CARDS COMMENTED OUT TO MATCH BRITERPLY
          =====================================================================
      <FaqAccordion />
      ===================================================================== */}
    </>
  );
}

