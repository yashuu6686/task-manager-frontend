'use client';

import { 
  Calendar, 
  User, 
  Tag as TagIcon, 
  MoreVertical, 
  Edit3, 
  Trash2, 
  Plus, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Folder
} from 'lucide-react';

const COLUMNS = [
  { id: 'todo', title: 'To Do', color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.15)' },
  { id: 'in_progress', title: 'In Progress', color: '#06b6d4', bg: 'rgba(6, 182, 212, 0.15)' },
  { id: 'completed', title: 'Completed', color: '#10b981', bg: 'rgba(16, 185, 129, 0.15)' },
  { id: 'archived', title: 'Archived', color: '#64748b', bg: 'rgba(100, 116, 139, 0.15)' }
];

export default function KanbanBoard({
  tasks,
  onStatusChange,
  onEditTask,
  onDeleteTask,
  onOpenTaskModal,
  onSelectTask
}) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', alignItems: 'start' }}>
      {COLUMNS.map(col => {
        const colTasks = tasks.filter(t => t.status === col.id);

        return (
          <div 
            key={col.id} 
            className="glass-panel" 
            style={{ 
              padding: '1.2rem', 
              background: 'var(--bg-column)', 
              minHeight: '500px', 
              display: 'flex', 
              flexDirection: 'column' 
            }}
          >
            {/* Column Header */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-color)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: col.color, boxShadow: `0 0 10px ${col.color}` }} />
                <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)' }}>{col.title}</h3>
                <span style={{ 
                  fontSize: '0.75rem', 
                  fontWeight: '700', 
                  padding: '0.15rem 0.6rem', 
                  borderRadius: '12px', 
                  background: col.bg, 
                  color: col.color, 
                  border: `1px solid ${col.color}40` 
                }}>
                  {colTasks.length}
                </span>
              </div>

              <button
                onClick={() => onOpenTaskModal({ status: col.id })}
                style={{
                  background: 'var(--bg-input)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-sub)',
                  width: '28px',
                  height: '28px',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                title={`Add task to ${col.title}`}
              >
                <Plus size={16} />
              </button>
            </div>

            {/* Task Cards Column Body */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flex: 1 }}>
              {colTasks.length === 0 ? (
                <div style={{ 
                  textAlign: 'center', 
                  padding: '2.5rem 1rem', 
                  color: 'var(--text-muted)', 
                  border: '1px dashed var(--border-color)', 
                  borderRadius: 'var(--radius-md)', 
                  fontSize: '0.85rem' 
                }}>
                  No tasks in {col.title.toLowerCase()}
                </div>
              ) : (
                colTasks.map(task => (
                  <div
                    key={task._id}
                    className="animate-fade-in"
                    style={{
                      background: 'var(--bg-task-card)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.1rem',
                      boxShadow: 'var(--shadow-card)',
                      transition: 'all 0.2s ease',
                      cursor: 'pointer',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-primary)';
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--border-color)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    onClick={() => onSelectTask(task)}
                  >
                    {/* Header line with Category badge and Priority */}
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem', gap: '0.5rem' }}>
                      <span style={{ 
                        fontSize: '0.72rem', 
                        fontWeight: '700', 
                        padding: '0.15rem 0.55rem', 
                        borderRadius: '6px', 
                        background: 'rgba(99, 102, 241, 0.15)', 
                        color: 'var(--accent-primary-light)', 
                        border: '1px solid rgba(99, 102, 241, 0.25)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.3rem'
                      }}>
                        <Folder size={10} /> {task.category || 'General'}
                      </span>

                      <span className={`badge-priority ${task.priority || 'medium'}`}>
                        {task.priority === 'urgent' && '🔥'}
                        {task.priority === 'high' && '⚡'}
                        {task.priority === 'medium' && '🔹'}
                        {task.priority === 'low' && '🟢'}
                        {task.priority}
                      </span>
                    </div>

                    {/* Task Title */}
                    <h4 style={{ 
                      fontSize: '0.98rem', 
                      fontWeight: '700', 
                      color: 'var(--text-main)', 
                      marginBottom: '0.4rem',
                      lineHeight: '1.35',
                      textDecoration: task.status === 'completed' ? 'line-through' : 'none',
                      opacity: task.status === 'completed' ? 0.75 : 1
                    }}>
                      {task.title}
                    </h4>

                    {/* Task Description */}
                    {task.description && (
                      <p style={{ 
                        fontSize: '0.82rem', 
                        color: 'var(--text-sub)', 
                        marginBottom: '0.8rem',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        lineHeight: '1.4'
                      }}>
                        {task.description}
                      </p>
                    )}

                    {/* Tags */}
                    {task.tags && task.tags.length > 0 && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '0.8rem' }}>
                        {task.tags.map((tag, idx) => (
                          <span key={idx} style={{ 
                            fontSize: '0.7rem', 
                            padding: '0.15rem 0.45rem', 
                            borderRadius: '4px', 
                            background: 'var(--bg-input)', 
                            color: 'var(--text-sub)',
                            border: '1px solid var(--border-color)'
                          }}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Footer Info: Due date & Assignee */}
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justify: 'space-between', 
                      paddingTop: '0.6rem', 
                      borderTop: '1px solid var(--border-color)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Calendar size={13} color="var(--accent-primary-light)" />
                        <span>
                          {task.dueDate ? new Date(task.dueDate).toLocaleDateString(undefined, { month: 'short', day: 'numeric' }) : 'No date'}
                        </span>
                      </div>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <User size={13} color="var(--accent-secondary)" />
                        <span>{task.assignee || 'Unassigned'}</span>
                      </div>
                    </div>

                    {/* Card Actions bar */}
                    <div 
                      style={{ 
                        marginTop: '0.8rem', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justify: 'space-between', 
                        background: 'var(--bg-input)', 
                        padding: '0.4rem 0.6rem', 
                        borderRadius: '8px',
                        border: '1px solid var(--border-color)'
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Move Status Selector */}
                      <select
                        className="glass-input"
                        value={task.status}
                        onChange={(e) => onStatusChange(task._id, e.target.value)}
                        style={{ 
                          padding: '0.2rem 0.4rem', 
                          fontSize: '0.75rem', 
                          background: 'transparent', 
                          border: 'none', 
                          color: 'var(--text-sub)',
                          fontWeight: '600',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="todo" style={{ background: 'var(--bg-modal)', color: 'var(--text-main)' }}>To Do</option>
                        <option value="in_progress" style={{ background: 'var(--bg-modal)', color: 'var(--text-main)' }}>In Progress</option>
                        <option value="completed" style={{ background: 'var(--bg-modal)', color: 'var(--text-main)' }}>Completed</option>
                        <option value="archived" style={{ background: 'var(--bg-modal)', color: 'var(--text-main)' }}>Archived</option>
                      </select>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <button
                          onClick={() => onEditTask(task)}
                          style={{ background: 'none', border: 'none', color: 'var(--text-sub)', cursor: 'pointer', padding: '0.2rem' }}
                          title="Edit Task"
                        >
                          <Edit3 size={14} />
                        </button>
                        <button
                          onClick={() => onDeleteTask(task._id)}
                          style={{ background: 'none', border: 'none', color: 'var(--accent-rose)', cursor: 'pointer', padding: '0.2rem' }}
                          title="Delete Task"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>

                  </div>
                ))
              )}
            </div>

          </div>
        );
      })}
    </div>
  );
}
