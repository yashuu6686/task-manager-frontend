'use client';

import { Star, Quote, Building2, MapPin } from 'lucide-react';
import { testimonials } from '@/data/siteData';

export default function TestimonialSlider() {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-heading centered">
          <span className="eyebrow">Architect & Builder Trust</span>
          <h2>Specified by India&apos;s Top Design Studios</h2>
          <p>
            From sea-facing penthouses in Mumbai to high-volume modular kitchen factories in Punjab,
            hear what industry professionals say about Briterply.
          </p>
        </div>

        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <div key={item.name} className="testimonial-card">
              <div>
                <div className="testimonial-stars">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                  ))}
                </div>
                <p className="testimonial-text">&ldquo;{item.text}&rdquo;</p>
              </div>

              <div className="testimonial-author">
                <div className="author-avatar">{item.name.charAt(3) || 'A'}</div>
                <div className="author-info">
                  <h4>{item.name}</h4>
                  <p>{item.role}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.78rem', color: '#d97706', marginTop: '0.2rem' }}>
                    <Building2 size={13} />
                    <span>{item.project} ({item.location})</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
