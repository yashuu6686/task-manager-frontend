'use client';

import { useState } from 'react';
import { X, Tag } from 'lucide-react';

export default function CategoryModal({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [color, setColor] = useState('#6366f1');
  const [icon, setIcon] = useState('tag');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit({ name: name.trim(), color, icon });
    setName('');
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem'
    }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '420px', padding: '1.8rem', background: 'var(--bg-modal)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem', paddingBottom: '0.6rem', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Tag size={18} color="var(--accent-primary)" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800' }}>Add Category</h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '0.4rem' }}>Category Name *</label>
            <input
              type="text" className="glass-input" style={{ width: '100%' }}
              placeholder="e.g. Analytics, Quality Assurance"
              value={name} onChange={(e) => setName(e.target.value)} required
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '0.4rem' }}>Theme Color</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <input
                type="color" value={color} onChange={(e) => setColor(e.target.value)}
                style={{ width: '40px', height: '40px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: 'none' }}
              />
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontFamily: 'var(--font-mono)' }}>{color}</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.8rem', marginTop: '1rem' }}>
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary">Add Category</button>
          </div>
        </form>
      </div>
    </div>
  );
}
