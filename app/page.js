'use client';

import { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import FilterBar from './components/FilterBar';
import KanbanBoard from './components/KanbanBoard';
import TaskListView from './components/TaskListView';
import TaskModal from './components/TaskModal';
import CategoryModal from './components/CategoryModal';
import ProjectModal from './components/ProjectModal';
import TaskDetailModal from './components/TaskDetailModal';

import {
  checkBackendHealth,
  fetchTasks,
  fetchStats,
  fetchCategories,
  fetchProjects,
  createTask,
  updateTask,
  updateTaskStatus,
  deleteTask,
  createCategory,
  createProject
} from './apiClient';

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
  const [stats, setStats] = useState({});
  const [health, setHealth] = useState(null);
  const [loading, setLoading] = useState(true);

  // Theme Management (Light / Dark)
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('taskmaster_theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('taskmaster_theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  // Filters & Views
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('kanban'); // 'kanban' | 'list'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState('all');
  const [selectedPriority, setSelectedPriority] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [sortOption, setSortOption] = useState('newest');

  // Modals
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [defaultTaskStatus, setDefaultTaskStatus] = useState('todo');

  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  const [selectedDetailTask, setSelectedDetailTask] = useState(null);

  // Load backend data
  const loadData = useCallback(async () => {
    setLoading(true);
    const healthRes = await checkBackendHealth();
    setHealth(healthRes);

    const [tasksData, statsData, catData, projData] = await Promise.all([
      fetchTasks({
        search: searchQuery,
        category: selectedCategory,
        project: selectedProject,
        priority: selectedPriority,
        status: selectedStatus,
        sort: sortOption
      }),
      fetchStats(),
      fetchCategories(),
      fetchProjects()
    ]);

    setTasks(tasksData);
    setStats(statsData);
    setCategories(catData);
    setProjects(projData);
    setLoading(false);
  }, [searchQuery, selectedCategory, selectedProject, selectedPriority, selectedStatus, sortOption]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  // Handlers
  const handleCreateOrUpdateTask = async (taskPayload) => {
    if (editingTask) {
      await updateTask(editingTask._id, taskPayload);
    } else {
      await createTask(taskPayload);
    }
    setIsTaskModalOpen(false);
    setEditingTask(null);
    loadData();
  };

  const handleStatusChange = async (taskId, newStatus) => {
    await updateTaskStatus(taskId, newStatus);
    loadData();
  };

  const handleDeleteTask = async (taskId) => {
    if (confirm('Are you sure you want to delete this task?')) {
      await deleteTask(taskId);
      loadData();
    }
  };

  const handleCreateCategory = async (catPayload) => {
    await createCategory(catPayload);
    setIsCategoryModalOpen(false);
    loadData();
  };

  const handleCreateProject = async (projPayload) => {
    await createProject(projPayload);
    setIsProjectModalOpen(false);
    loadData();
  };

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedProject('all');
    setSelectedPriority('all');
    setSelectedStatus('all');
    setSortOption('newest');
    setSearchQuery('');
  };

  return (
    <main style={{ maxWidth: '1400px', margin: '0 auto', padding: '1.5rem 1.5rem 4rem' }}>
      
      {/* Header component with Theme Switcher */}
      <Header
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        viewMode={viewMode}
        setViewMode={setViewMode}
        onOpenTaskModal={(opts = {}) => {
          setEditingTask(null);
          setDefaultTaskStatus(opts.status || 'todo');
          setIsTaskModalOpen(true);
        }}
        onOpenCategoryModal={() => setIsCategoryModalOpen(true)}
        onOpenProjectModal={() => setIsProjectModalOpen(true)}
        health={health}
        onRefresh={loadData}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* Summary Stats Overview */}
      <StatsCards stats={stats} />

      {/* Filter and Sort bar */}
      <FilterBar
        categories={categories}
        projects={projects}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        selectedProject={selectedProject}
        setSelectedProject={setSelectedProject}
        selectedPriority={selectedPriority}
        setSelectedPriority={setSelectedPriority}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        sortOption={sortOption}
        setSortOption={setSortOption}
        onResetFilters={handleResetFilters}
      />

      {/* Main Views (Kanban or List) */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '4rem 1rem', color: 'var(--text-sub)' }}>
          <div className="pulse-dot" style={{ margin: '0 auto 1rem', width: '16px', height: '16px' }} />
          Loading Tasks from API...
        </div>
      ) : viewMode === 'kanban' ? (
        <KanbanBoard
          tasks={tasks}
          onStatusChange={handleStatusChange}
          onEditTask={(task) => {
            setEditingTask(task);
            setIsTaskModalOpen(true);
          }}
          onDeleteTask={handleDeleteTask}
          onOpenTaskModal={(opts) => {
            setEditingTask(null);
            setDefaultTaskStatus(opts.status || 'todo');
            setIsTaskModalOpen(true);
          }}
          onSelectTask={(task) => setSelectedDetailTask(task)}
        />
      ) : (
        <TaskListView
          tasks={tasks}
          onStatusChange={handleStatusChange}
          onEditTask={(task) => {
            setEditingTask(task);
            setIsTaskModalOpen(true);
          }}
          onDeleteTask={handleDeleteTask}
          onSelectTask={(task) => setSelectedDetailTask(task)}
        />
      )}

      {/* Modals */}
      <TaskModal
        isOpen={isTaskModalOpen}
        onClose={() => {
          setIsTaskModalOpen(false);
          setEditingTask(null);
        }}
        onSubmit={handleCreateOrUpdateTask}
        initialTask={editingTask}
        categories={categories}
        projects={projects}
        defaultStatus={defaultTaskStatus}
      />

      <CategoryModal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        onSubmit={handleCreateCategory}
      />

      <ProjectModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
        onSubmit={handleCreateProject}
      />

      <TaskDetailModal
        task={selectedDetailTask}
        onClose={() => setSelectedDetailTask(null)}
        onEdit={(task) => {
          setEditingTask(task);
          setIsTaskModalOpen(true);
        }}
        onDelete={handleDeleteTask}
        onStatusChange={handleStatusChange}
      />

    </main>
  );
}
