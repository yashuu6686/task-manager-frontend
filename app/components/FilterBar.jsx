'use client';

import { Filter, SlidersHorizontal, RotateCcw } from 'lucide-react';

export default function FilterBar({
  categories,
  projects,
  selectedCategory,
  setSelectedCategory,
  selectedProject,
  setSelectedProject,
  selectedPriority,
  setSelectedPriority,
  selectedStatus,
  setSelectedStatus,
  sortOption,
  setSortOption,
  onResetFilters
}) {
  const isFiltered = selectedCategory !== 'all' || selectedProject !== 'all' || selectedPriority !== 'all' || selectedStatus !== 'all' || sortOption !== 'newest';

  const optionStyle = { background: 'var(--bg-modal)', color: 'var(--text-main)' };

  return (
    <div className="glass-panel" style={{ padding: '1rem 1.4rem', marginBottom: '1.8rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', flexWrap: 'wrap', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-sub)' }}>
          <SlidersHorizontal size={16} color="var(--accent-primary)" />
          Filters:
        </div>

        {/* Category Filter */}
        <select
          className="glass-input"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{ padding: '0.45rem 0.8rem', fontSize: '0.85rem', cursor: 'pointer' }}
        >
          <option value="all" style={optionStyle}>All Categories</option>
          {categories.map(cat => (
            <option key={cat._id || cat.name} value={cat.name} style={optionStyle}>
              📁 {cat.name}
            </option>
          ))}
        </select>

        {/* Project Filter */}
        <select
          className="glass-input"
          value={selectedProject}
          onChange={(e) => setSelectedProject(e.target.value)}
          style={{ padding: '0.45rem 0.8rem', fontSize: '0.85rem', cursor: 'pointer' }}
        >
          <option value="all" style={optionStyle}>All Projects</option>
          {projects.map(p => (
            <option key={p._id || p.name} value={p.name} style={optionStyle}>
              🎯 {p.name}
            </option>
          ))}
        </select>

        {/* Priority Filter */}
        <select
          className="glass-input"
          value={selectedPriority}
          onChange={(e) => setSelectedPriority(e.target.value)}
          style={{ padding: '0.45rem 0.8rem', fontSize: '0.85rem', cursor: 'pointer' }}
        >
          <option value="all" style={optionStyle}>All Priorities</option>
          <option value="urgent" style={optionStyle}>🔥 Urgent</option>
          <option value="high" style={optionStyle}>⚡ High</option>
          <option value="medium" style={optionStyle}>🔹 Medium</option>
          <option value="low" style={optionStyle}>🟢 Low</option>
        </select>

        {/* Status Filter */}
        <select
          className="glass-input"
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
          style={{ padding: '0.45rem 0.8rem', fontSize: '0.85rem', cursor: 'pointer' }}
        >
          <option value="all" style={optionStyle}>All Statuses</option>
          <option value="todo" style={optionStyle}>📝 To Do</option>
          <option value="in_progress" style={optionStyle}>⚡ In Progress</option>
          <option value="completed" style={optionStyle}>✅ Completed</option>
          <option value="archived" style={optionStyle}>📦 Archived</option>
        </select>
      </div>

      {/* Sort Option & Reset */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Sort by:</span>
        <select
          className="glass-input"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          style={{ padding: '0.45rem 0.8rem', fontSize: '0.85rem', cursor: 'pointer' }}
        >
          <option value="newest" style={optionStyle}>Newest First</option>
          <option value="oldest" style={optionStyle}>Oldest First</option>
          <option value="dueDate" style={optionStyle}>Due Date</option>
          <option value="priority" style={optionStyle}>Priority High-Low</option>
        </select>

        {isFiltered && (
          <button
            onClick={onResetFilters}
            className="btn-secondary"
            style={{ padding: '0.45rem 0.75rem', fontSize: '0.8rem', color: 'var(--accent-rose)' }}
            title="Reset Filters"
          >
            <RotateCcw size={14} /> Reset
          </button>
        )}
      </div>

    </div>
  );
}
