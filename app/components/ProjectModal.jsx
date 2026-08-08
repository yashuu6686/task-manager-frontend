'use client';

import { useState } from 'react';
import { X, FolderPlus } from 'lucide-react';

export default function ProjectModal({ isOpen, onClose, onSubmit }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [color, setColor] = useState('#3b82f6');
  const [status, setStatus] = useState('active');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit({ name: name.trim(), description: description.trim(), color, status });
    setName('');
    setDescription('');
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem'
    }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '460px', padding: '1.8rem', background: 'var(--bg-modal)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem', paddingBottom: '0.6rem', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <FolderPlus size={18} color="var(--accent-primary)" />
            <h3 style={{ fontSize: '1.1rem', fontWeight: '800' }}>Add Project</h3>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
            <X size={18} />
          </button>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '0.4rem' }}>Project Name *</label>
            <input
              type="text" className="glass-input" style={{ width: '100%' }}
              placeholder="e.g. E-Commerce Redesign"
              value={name} onChange={(e) => setName(e.target.value)} required
            />
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '0.4rem' }}>Description</label>
            <textarea
              className="glass-input" rows={2} style={{ width: '100%', resize: 'vertical' }}
              placeholder="Project goals, scope or summary..."
              value={description} onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '0.4rem' }}>Status</label>
              <select className="glass-input" style={{ width: '100%' }} value={status} onChange={(e) => setStatus(e.target.value)}>
                <option value="active" style={{ background: '#0f172a' }}>Active</option>
                <option value="on_hold" style={{ background: '#0f172a' }}>On Hold</option>
                <option value="completed" style={{ background: '#0f172a' }}>Completed</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '0.4rem' }}>Project Color</label>
              <input
                type="color" value={color} onChange={(e) => setColor(e.target.value)}
                style={{ width: '100%', height: '38px', borderRadius: '8px', border: 'none', cursor: 'pointer', background: 'none' }}
              />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.8rem', marginTop: '1rem' }}>
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-primary">Add Project</button>
          </div>
        </form>
      </div>
    </div>
  );
}
