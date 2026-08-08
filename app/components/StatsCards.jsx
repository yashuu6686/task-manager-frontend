'use client';

import { CheckCircle2, Clock, Flame, Layers, TrendingUp } from 'lucide-react';

export default function StatsCards({ stats }) {
  const { total = 0, todo = 0, inProgress = 0, completed = 0, urgent = 0, highPriority = 0, completionRate = 0 } = stats || {};

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.2rem', marginBottom: '2rem' }}>
      
      {/* Total Tasks Card */}
      <div className="glass-panel" style={{ padding: '1.25rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)' }}>Total Tasks</span>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Layers size={20} />
          </div>
        </div>
        <div style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-main)' }}>{total}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
          {todo} pending todo items
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'var(--accent-primary)' }} />
      </div>

      {/* In Progress Card */}
      <div className="glass-panel" style={{ padding: '1.25rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)' }}>In Progress</span>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.15)', color: '#67e8f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Clock size={20} />
          </div>
        </div>
        <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#67e8f9' }}>{inProgress}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
          Currently active work
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'var(--accent-cyan)' }} />
      </div>

      {/* Completed Card */}
      <div className="glass-panel" style={{ padding: '1.25rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)' }}>Completed</span>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: '#6ee7b7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CheckCircle2 size={20} />
          </div>
        </div>
        <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#6ee7b7' }}>{completed}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
          Finished successfully
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'var(--accent-emerald)' }} />
      </div>

      {/* Urgent & High Priority Card */}
      <div className="glass-panel" style={{ padding: '1.25rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.6rem' }}>
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-sub)' }}>High / Urgent</span>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(244, 63, 94, 0.15)', color: '#fda4af', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Flame size={20} />
          </div>
        </div>
        <div style={{ fontSize: '1.8rem', fontWeight: '800', color: '#fda4af' }}>
          {urgent + highPriority}
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.3rem' }}>
          {urgent} urgent &amp; {highPriority} high priority
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: 'var(--accent-rose)' }} />
      </div>

      {/* Completion Rate Banner Card (spans full or flexible) */}
      <div className="glass-panel" style={{ padding: '1.25rem', gridColumn: '1 / -1', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <TrendingUp size={22} color="var(--accent-primary)" />
          <div>
            <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>Overall Task Completion Rate</span>
            <p style={{ fontSize: '0.75rem', color: 'var(--text-sub)' }}>Calculated dynamically based on real-time task database records</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', minWidth: '280px', flex: '1', maxWidth: '500px' }}>
          <div style={{ flex: 1, background: 'rgba(255, 255, 255, 0.08)', borderRadius: '999px', height: '10px', overflow: 'hidden', border: '1px solid var(--border-color)' }}>
            <div 
              style={{ 
                width: `${completionRate}%`, 
                height: '100%', 
                background: 'linear-gradient(90deg, #6366f1 0%, #10b981 100%)', 
                borderRadius: '999px', 
                transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)' 
              }} 
            />
          </div>
          <span style={{ fontSize: '1.1rem', fontWeight: '800', color: '#6ee7b7', minWidth: '45px', textAlign: 'right' }}>
            {completionRate}%
          </span>
        </div>
      </div>

    </div>
  );
}
