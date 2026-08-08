'use client';

import { Calendar, User, Tag, Edit3, Trash2, CheckCircle2, Clock, Eye, AlertCircle } from 'lucide-react';

export default function TaskListView({
  tasks,
  onStatusChange,
  onEditTask,
  onDeleteTask,
  onSelectTask
}) {
  if (tasks.length === 0) {
    return (
      <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-muted)' }}>
        <AlertCircle size={40} color="var(--text-muted)" style={{ marginBottom: '0.8rem' }} />
        <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-sub)' }}>No Tasks Found</h3>
        <p style={{ fontSize: '0.85rem', marginTop: '0.3rem' }}>Try clearing filters or search terms, or create a new task.</p>
      </div>
    );
  }

  return (
    <div className="glass-panel" style={{ overflowX: 'auto' }}>
      <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.88rem' }}>
        <thead>
          <tr style={{ borderBottom: '1px solid var(--border-color)', background: 'rgba(15, 23, 42, 0.8)', color: 'var(--text-sub)', fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            <th style={{ padding: '1rem 1.2rem' }}>Status</th>
            <th style={{ padding: '1rem 1.2rem' }}>Task Title</th>
            <th style={{ padding: '1rem 1.2rem' }}>Category</th>
            <th style={{ padding: '1rem 1.2rem' }}>Project</th>
            <th style={{ padding: '1rem 1.2rem' }}>Priority</th>
            <th style={{ padding: '1rem 1.2rem' }}>Due Date</th>
            <th style={{ padding: '1rem 1.2rem' }}>Assignee</th>
            <th style={{ padding: '1rem 1.2rem', textAlign: 'right' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr 
              key={task._id}
              style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.05)', transition: 'background 0.2s ease' }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              {/* Status Selector */}
              <td style={{ padding: '1rem 1.2rem' }}>
                <select
                  className={`badge-status ${task.status || 'todo'}`}
                  value={task.status}
                  onChange={(e) => onStatusChange(task._id, e.target.value)}
                  style={{ border: 'none', cursor: 'pointer', outline: 'none' }}
                >
                  <option value="todo" style={{ background: '#0f172a', color: '#fff' }}>To Do</option>
                  <option value="in_progress" style={{ background: '#0f172a', color: '#fff' }}>In Progress</option>
                  <option value="completed" style={{ background: '#0f172a', color: '#fff' }}>Completed</option>
                  <option value="archived" style={{ background: '#0f172a', color: '#fff' }}>Archived</option>
                </select>
              </td>

              {/* Title & Description */}
              <td style={{ padding: '1rem 1.2rem', maxWidth: '300px' }}>
                <div 
                  style={{ fontWeight: '700', color: 'var(--text-main)', cursor: 'pointer' }}
                  onClick={() => onSelectTask(task)}
                >
                  {task.title}
                </div>
                {task.description && (
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {task.description}
                  </div>
                )}
              </td>

              {/* Category */}
              <td style={{ padding: '1rem 1.2rem' }}>
                <span style={{ fontSize: '0.8rem', color: '#a5b4fc', background: 'rgba(99, 102, 241, 0.15)', padding: '0.2rem 0.5rem', borderRadius: '6px' }}>
                  {task.category || 'General'}
                </span>
              </td>

              {/* Project */}
              <td style={{ padding: '1rem 1.2rem', color: 'var(--text-sub)', fontSize: '0.82rem' }}>
                {task.project || 'Default'}
              </td>

              {/* Priority */}
              <td style={{ padding: '1rem 1.2rem' }}>
                <span className={`badge-priority ${task.priority || 'medium'}`}>
                  {task.priority}
                </span>
              </td>

              {/* Due Date */}
              <td style={{ padding: '1rem 1.2rem', color: 'var(--text-sub)', fontSize: '0.82rem' }}>
                {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : '-'}
              </td>

              {/* Assignee */}
              <td style={{ padding: '1rem 1.2rem', color: 'var(--text-sub)', fontSize: '0.82rem' }}>
                {task.assignee || 'Unassigned'}
              </td>

              {/* Action buttons */}
              <td style={{ padding: '1rem 1.2rem', textAlign: 'right' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.5rem' }}>
                  <button
                    onClick={() => onSelectTask(task)}
                    className="btn-secondary"
                    style={{ padding: '0.35rem 0.6rem', fontSize: '0.75rem' }}
                    title="View Details"
                  >
                    <Eye size={13} />
                  </button>
                  <button
                    onClick={() => onEditTask(task)}
                    className="btn-secondary"
                    style={{ padding: '0.35rem 0.6rem', fontSize: '0.75rem' }}
                    title="Edit Task"
                  >
                    <Edit3 size={13} />
                  </button>
                  <button
                    onClick={() => onDeleteTask(task._id)}
                    className="btn-danger"
                    style={{ padding: '0.35rem 0.6rem', fontSize: '0.75rem' }}
                    title="Delete Task"
                  >
                    <Trash2 size={13} />
                  </button>
                </div>
              </td>

            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
