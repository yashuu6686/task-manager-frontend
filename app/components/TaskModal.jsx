'use client';

import { useState, useEffect } from 'react';
import { X, Calendar, User, Tag, Folder, Sparkles } from 'lucide-react';

export default function TaskModal({
  isOpen,
  onClose,
  onSubmit,
  initialTask = null,
  categories = [],
  projects = [],
  defaultStatus = 'todo'
}) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: 'todo',
    priority: 'medium',
    category: 'Development',
    project: 'TaskMaster Platform V1',
    dueDate: '',
    tags: '',
    assignee: 'Yash'
  });

  useEffect(() => {
    if (initialTask) {
      setFormData({
        title: initialTask.title || '',
        description: initialTask.description || '',
        status: initialTask.status || 'todo',
        priority: initialTask.priority || 'medium',
        category: initialTask.category || (categories[0]?.name || 'General'),
        project: initialTask.project || (projects[0]?.name || 'Default Project'),
        dueDate: initialTask.dueDate ? new Date(initialTask.dueDate).toISOString().split('T')[0] : '',
        tags: Array.isArray(initialTask.tags) ? initialTask.tags.join(', ') : (initialTask.tags || ''),
        assignee: initialTask.assignee || 'Yash'
      });
    } else {
      setFormData({
        title: '',
        description: '',
        status: defaultStatus || 'todo',
        priority: 'medium',
        category: categories[0]?.name || 'Development',
        project: projects[0]?.name || 'TaskMaster Platform V1',
        dueDate: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
        tags: 'Frontend, UI',
        assignee: 'Yash'
      });
    }
  }, [initialTask, isOpen, defaultStatus]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;

    const payload = {
      ...formData,
      tags: typeof formData.tags === 'string' 
        ? formData.tags.split(',').map(t => t.trim()).filter(Boolean)
        : formData.tags
    };

    onSubmit(payload);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0, 0, 0, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: '1rem'
    }}>
      <div 
        className="glass-panel animate-fade-in" 
        style={{
          width: '100%',
          maxWidth: '560px',
          padding: '1.8rem',
          background: 'var(--bg-modal)',
          border: '1px solid var(--border-glow)',
          boxShadow: 'var(--shadow-card)',
          maxHeight: '90vh',
          overflowY: 'auto'
        }}
      >
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '0.8rem', borderBottom: '1px solid var(--border-color)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <Sparkles size={20} color="var(--accent-primary)" />
            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)' }}>
              {initialTask ? 'Edit Task' : 'Create New Task'}
            </h3>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          
          {/* Title */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '0.4rem' }}>
              Task Title <span style={{ color: 'var(--accent-rose)' }}>*</span>
            </label>
            <input
              type="text"
              className="glass-input"
              style={{ width: '100%' }}
              placeholder="e.g. Implement Responsive Navbar"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
          </div>

          {/* Description */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '0.4rem' }}>
              Description
            </label>
            <textarea
              className="glass-input"
              rows={3}
              style={{ width: '100%', resize: 'vertical' }}
              placeholder="Add key objectives, criteria, or notes..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            />
          </div>

          {/* Grid row: Status & Priority */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '0.4rem' }}>
                Status
              </label>
              <select
                className="glass-input"
                style={{ width: '100%' }}
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              >
                <option value="todo" style={{ background: '#0f172a' }}>To Do</option>
                <option value="in_progress" style={{ background: '#0f172a' }}>In Progress</option>
                <option value="completed" style={{ background: '#0f172a' }}>Completed</option>
                <option value="archived" style={{ background: '#0f172a' }}>Archived</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '0.4rem' }}>
                Priority Level
              </label>
              <select
                className="glass-input"
                style={{ width: '100%' }}
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
              >
                <option value="urgent" style={{ background: '#0f172a' }}>🔥 Urgent</option>
                <option value="high" style={{ background: '#0f172a' }}>⚡ High</option>
                <option value="medium" style={{ background: '#0f172a' }}>🔹 Medium</option>
                <option value="low" style={{ background: '#0f172a' }}>🟢 Low</option>
              </select>
            </div>
          </div>

          {/* Grid row: Category & Project */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '0.4rem' }}>
                Category
              </label>
              <select
                className="glass-input"
                style={{ width: '100%' }}
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              >
                {categories.map(c => (
                  <option key={c._id || c.name} value={c.name} style={{ background: '#0f172a' }}>
                    {c.name}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '0.4rem' }}>
                Project
              </label>
              <select
                className="glass-input"
                style={{ width: '100%' }}
                value={formData.project}
                onChange={(e) => setFormData({ ...formData, project: e.target.value })}
              >
                {projects.map(p => (
                  <option key={p._id || p.name} value={p.name} style={{ background: '#0f172a' }}>
                    {p.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Grid row: Due Date & Assignee */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '0.4rem' }}>
                Due Date
              </label>
              <input
                type="date"
                className="glass-input"
                style={{ width: '100%' }}
                value={formData.dueDate}
                onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '0.4rem' }}>
                Assignee Name
              </label>
              <input
                type="text"
                className="glass-input"
                style={{ width: '100%' }}
                placeholder="e.g. Yash"
                value={formData.assignee}
                onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
              />
            </div>
          </div>

          {/* Tags */}
          <div>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)', marginBottom: '0.4rem' }}>
              Tags (Comma Separated)
            </label>
            <input
              type="text"
              className="glass-input"
              style={{ width: '100%' }}
              placeholder="e.g. Backend, API, Sprint-1"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            />
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.8rem', marginTop: '1rem' }}>
            <button type="button" className="btn-secondary" onClick={onClose}>
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              {initialTask ? 'Save Changes' : 'Create Task'}
            </button>
          </div>

        </form>

      </div>
    </div>
  );
}
