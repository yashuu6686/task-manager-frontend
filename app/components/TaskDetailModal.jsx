'use client';

import { X, Calendar, User, Tag, Folder, Clock, CheckCircle2, AlertTriangle, Edit3, Trash2 } from 'lucide-react';

export default function TaskDetailModal({
  task,
  onClose,
  onEdit,
  onDelete,
  onStatusChange
}) {
  if (!task) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0, 0, 0, 0.75)', backdropFilter: 'blur(8px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem'
    }}>
      <div className="glass-panel animate-fade-in" style={{ width: '100%', maxWidth: '580px', padding: '2rem', background: 'var(--bg-modal)', border: '1px solid var(--border-glow)' }}>
        
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.2rem', gap: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.4rem' }}>
              <span className={`badge-priority ${task.priority || 'medium'}`}>
                {task.priority}
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                ID: {task._id}
              </span>
            </div>
            <h2 style={{ fontSize: '1.3rem', fontWeight: '800', color: 'var(--text-main)' }}>{task.title}</h2>
          </div>

          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '0.3rem' }}>
            <X size={20} />
          </button>
        </div>

        {/* Status bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 1rem', background: 'rgba(255, 255, 255, 0.04)', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--border-color)' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)' }}>Change Status:</span>
          <select
            className={`badge-status ${task.status || 'todo'}`}
            value={task.status}
            onChange={(e) => onStatusChange(task._id, e.target.value)}
            style={{ border: 'none', cursor: 'pointer', outline: 'none' }}
          >
            <option value="todo" style={{ background: '#0f172a' }}>To Do</option>
            <option value="in_progress" style={{ background: '#0f172a' }}>In Progress</option>
            <option value="completed" style={{ background: '#0f172a' }}>Completed</option>
            <option value="archived" style={{ background: '#0f172a' }}>Archived</option>
          </select>
        </div>

        {/* Description */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-sub)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
            Description
          </h4>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.6', whiteSpace: 'pre-wrap', background: 'rgba(0, 0, 0, 0.2)', padding: '1rem', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
            {task.description || 'No detailed description provided.'}
          </p>
        </div>

        {/* Details Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem' }}>
            <Folder size={16} color="var(--accent-primary-light)" />
            <span style={{ color: 'var(--text-sub)' }}>Category:</span>
            <strong style={{ color: 'var(--text-main)' }}>{task.category || 'General'}</strong>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem' }}>
            <Folder size={16} color="var(--accent-cyan)" />
            <span style={{ color: 'var(--text-sub)' }}>Project:</span>
            <strong style={{ color: 'var(--text-main)' }}>{task.project || 'Default'}</strong>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem' }}>
            <Calendar size={16} color="var(--accent-amber)" />
            <span style={{ color: 'var(--text-sub)' }}>Due Date:</span>
            <strong style={{ color: 'var(--text-main)' }}>
              {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'None'}
            </strong>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.88rem' }}>
            <User size={16} color="var(--accent-secondary)" />
            <span style={{ color: 'var(--text-sub)' }}>Assignee:</span>
            <strong style={{ color: 'var(--text-main)' }}>{task.assignee || 'Unassigned'}</strong>
          </div>
        </div>

        {/* Tags */}
        {task.tags && task.tags.length > 0 && (
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-sub)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              Tags
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {task.tags.map((tag, idx) => (
                <span key={idx} style={{ fontSize: '0.78rem', padding: '0.2rem 0.6rem', borderRadius: '6px', background: 'rgba(99, 102, 241, 0.15)', color: '#a5b4fc', border: '1px solid rgba(99, 102, 241, 0.3)' }}>
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Footer Actions */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1rem', borderTop: '1px solid var(--border-color)' }}>
          <button
            className="btn-danger"
            onClick={() => { onDelete(task._id); onClose(); }}
          >
            <Trash2 size={15} /> Delete Task
          </button>

          <div style={{ display: 'flex', gap: '0.8rem' }}>
            <button className="btn-secondary" onClick={onClose}>
              Close
            </button>
            <button
              className="btn-primary"
              onClick={() => { onEdit(task); onClose(); }}
            >
              <Edit3 size={15} /> Edit Task
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
