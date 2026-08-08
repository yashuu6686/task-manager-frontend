'use client';

import { 
  CheckSquare, 
  Plus, 
  Search, 
  Kanban, 
  ListTodo, 
  FolderPlus, 
  Tag, 
  Database,
  RefreshCw,
  Sun,
  Moon
} from 'lucide-react';

export default function Header({
  searchQuery,
  setSearchQuery,
  viewMode,
  setViewMode,
  onOpenTaskModal,
  onOpenCategoryModal,
  onOpenProjectModal,
  health,
  onRefresh,
  theme,
  toggleTheme
}) {
  return (
    <header className="glass-panel" style={{ padding: '1.2rem 1.8rem', marginBottom: '2rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        
        {/* Logo & Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <div style={{ 
            width: '42px', 
            height: '42px', 
            borderRadius: '12px', 
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)'
          }}>
            <CheckSquare size={24} color="#ffffff" />
          </div>
          <div>
            <h1 style={{ fontSize: '1.4rem', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--text-main)' }}>
              TaskMaster <span style={{ fontSize: '0.75rem', fontWeight: '700', padding: '0.15rem 0.5rem', borderRadius: '6px', background: 'rgba(99, 102, 241, 0.2)', color: 'var(--accent-primary)', border: '1px solid rgba(99, 102, 241, 0.3)' }}>PRO</span>
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.2rem' }}>
              <span className="pulse-dot" style={{ background: health?.online ? '#10b981' : '#f59e0b' }} />
              <span style={{ fontSize: '0.75rem', color: 'var(--text-sub)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                <Database size={12} />
                {health?.online ? 'Connected: Express + MongoDB' : 'Client Mode (Offline Express API)'}
              </span>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div style={{ flex: '1', maxWidth: '380px', position: 'relative' }}>
          <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            type="text"
            className="glass-input"
            placeholder="Search tasks, tags, descriptions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ width: '100%', paddingLeft: '2.8rem' }}
          />
        </div>

        {/* Action Controls & Theme Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
          
          {/* Theme Toggle Button (Light/Dark) */}
          <button 
            className="btn-secondary"
            onClick={toggleTheme}
            title={theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
            style={{ padding: '0.65rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}
          >
            {theme === 'light' ? <Moon size={16} color="#4f46e5" /> : <Sun size={16} color="#f59e0b" />}
            <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>{theme === 'light' ? 'Dark' : 'Light'}</span>
          </button>

          {/* Refresh Button */}
          <button 
            className="btn-secondary" 
            onClick={onRefresh}
            title="Refresh Data from Server"
            style={{ padding: '0.65rem' }}
          >
            <RefreshCw size={16} />
          </button>

          {/* View Mode Toggle */}
          <div style={{ 
            display: 'flex', 
            background: 'var(--bg-input)', 
            padding: '0.25rem', 
            borderRadius: 'var(--radius-md)', 
            border: '1px solid var(--border-color)' 
          }}>
            <button
              onClick={() => setViewMode('kanban')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.8rem',
                borderRadius: '8px',
                border: 'none',
                background: viewMode === 'kanban' ? 'var(--accent-primary)' : 'transparent',
                color: viewMode === 'kanban' ? '#fff' : 'var(--text-sub)',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Kanban size={15} /> Board
            </button>
            <button
              onClick={() => setViewMode('list')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.45rem 0.8rem',
                borderRadius: '8px',
                border: 'none',
                background: viewMode === 'list' ? 'var(--accent-primary)' : 'transparent',
                color: viewMode === 'list' ? '#fff' : 'var(--text-sub)',
                fontSize: '0.85rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <ListTodo size={15} /> List
            </button>
          </div>

          {/* Create Category / Project Buttons */}
          <button className="btn-secondary" onClick={onOpenCategoryModal} title="Add New Category">
            <Tag size={16} /> + Category
          </button>
          
          <button className="btn-secondary" onClick={onOpenProjectModal} title="Add New Project">
            <FolderPlus size={16} /> + Project
          </button>

          {/* Create Task Button */}
          <button className="btn-primary" onClick={() => onOpenTaskModal()}>
            <Plus size={18} /> New Task
          </button>

        </div>
      </div>
    </header>
  );
}
