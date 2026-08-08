const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

// Initial fallback mock data matching backend schema & seed.js
const initialFallbackData = {
  tasks: [
    {
      _id: 'task-1',
      title: 'Set up MongoDB database schemas',
      description: 'Define Mongoose schemas for Task, Category, and Project models with indexes.',
      status: 'completed',
      priority: 'urgent',
      category: 'Development',
      project: 'TaskMaster Platform V1',
      dueDate: new Date(Date.now() + 86400000 * 2).toISOString(),
      tags: ['Backend', 'MongoDB', 'Mongoose'],
      assignee: 'Yash',
      createdAt: new Date().toISOString()
    },
    {
      _id: 'task-2',
      title: 'Build Express REST API Endpoints',
      description: 'Implement CRUD controllers for tasks, search filters, and aggregate stats endpoint.',
      status: 'in_progress',
      priority: 'high',
      category: 'Development',
      project: 'TaskMaster Platform V1',
      dueDate: new Date(Date.now() + 86400000 * 3).toISOString(),
      tags: ['Node.js', 'Express', 'API'],
      assignee: 'Yash',
      createdAt: new Date().toISOString()
    },
    {
      _id: 'task-3',
      title: 'Design Glassmorphic Next.js UI',
      description: 'Create interactive Kanban board view, search filtering system, and responsive stat cards.',
      status: 'in_progress',
      priority: 'high',
      category: 'Design',
      project: 'TaskMaster Platform V1',
      dueDate: new Date(Date.now() + 86400000 * 4).toISOString(),
      tags: ['Next.js', 'React', 'CSS'],
      assignee: 'Yash',
      createdAt: new Date().toISOString()
    },
    {
      _id: 'task-4',
      title: 'Configure MongoCompass Connection Docs',
      description: 'Verify mongodb://localhost:27017 connection URI and inspect taskmaster_db collections.',
      status: 'completed',
      priority: 'medium',
      category: 'DevOps',
      project: 'Infrastructure & CI/CD',
      dueDate: new Date(Date.now() + 86400000 * 1).toISOString(),
      tags: ['Database', 'MongoCompass'],
      assignee: 'Yash',
      createdAt: new Date().toISOString()
    },
    {
      _id: 'task-5',
      title: 'Prepare Product Marketing Landing Assets',
      description: 'Draft feature graphics and user guide for launching the TaskMaster app.',
      status: 'todo',
      priority: 'low',
      category: 'Marketing',
      project: 'TaskMaster Platform V1',
      dueDate: new Date(Date.now() + 86400000 * 7).toISOString(),
      tags: ['Marketing', 'Design'],
      assignee: 'Yash',
      createdAt: new Date().toISOString()
    }
  ],
  categories: [
    { _id: 'cat-1', name: 'Development', color: '#6366f1', icon: 'code' },
    { _id: 'cat-2', name: 'Design', color: '#ec4899', icon: 'palette' },
    { _id: 'cat-3', name: 'Marketing', color: '#f59e0b', icon: 'trending-up' },
    { _id: 'cat-4', name: 'DevOps', color: '#10b981', icon: 'server' },
    { _id: 'cat-5', name: 'General', color: '#8b5cf6', icon: 'folder' }
  ],
  projects: [
    { _id: 'proj-1', name: 'TaskMaster Platform V1', description: 'Next.js & Node Express fullstack application', status: 'active', color: '#6366f1' },
    { _id: 'proj-2', name: 'Mobile App Redesign', description: 'React Native UI revamp and API integration', status: 'active', color: '#ec4899' },
    { _id: 'proj-3', name: 'Infrastructure & CI/CD', description: 'Dockerization and automated deployment setup', status: 'on_hold', color: '#10b981' }
  ]
};

// State for client fallback
let localStore = { ...initialFallbackData };

export async function checkBackendHealth() {
  try {
    const res = await fetch(`${API_BASE_URL}/health`, { cache: 'no-store' });
    if (!res.ok) throw new Error('Backend not healthy');
    const data = await res.json();
    return { online: true, ...data };
  } catch (err) {
    return {
      online: false,
      message: 'Node Express API Offline (Using Live Client Mock)',
      mongoCompassUri: 'mongodb://localhost:27017/taskmaster_db'
    };
  }
}

export async function fetchTasks(filters = {}) {
  try {
    const params = new URLSearchParams();
    if (filters.search) params.append('search', filters.search);
    if (filters.status && filters.status !== 'all') params.append('status', filters.status);
    if (filters.priority && filters.priority !== 'all') params.append('priority', filters.priority);
    if (filters.category && filters.category !== 'all') params.append('category', filters.category);
    if (filters.project && filters.project !== 'all') params.append('project', filters.project);
    if (filters.sort) params.append('sort', filters.sort);

    const res = await fetch(`${API_BASE_URL}/tasks?${params.toString()}`, { cache: 'no-store' });
    if (!res.ok) throw new Error('API request failed');
    const json = await res.json();
    return json.data;
  } catch (err) {
    // Client-side fallback filtering
    let filtered = [...localStore.tasks];
    if (filters.status && filters.status !== 'all') {
      filtered = filtered.filter(t => t.status === filters.status);
    }
    if (filters.priority && filters.priority !== 'all') {
      filtered = filtered.filter(t => t.priority === filters.priority);
    }
    if (filters.category && filters.category !== 'all') {
      filtered = filtered.filter(t => t.category === filters.category);
    }
    if (filters.project && filters.project !== 'all') {
      filtered = filtered.filter(t => t.project === filters.project);
    }
    if (filters.search) {
      const q = filters.search.toLowerCase();
      filtered = filtered.filter(t => 
        t.title.toLowerCase().includes(q) || 
        t.description.toLowerCase().includes(q) ||
        t.tags?.some(tag => tag.toLowerCase().includes(q))
      );
    }
    if (filters.sort === 'oldest') {
      filtered.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    } else if (filters.sort === 'dueDate') {
      filtered.sort((a, b) => new Date(a.dueDate || 0) - new Date(b.dueDate || 0));
    } else {
      filtered.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    return filtered;
  }
}

export async function fetchStats() {
  try {
    const res = await fetch(`${API_BASE_URL}/stats`, { cache: 'no-store' });
    if (!res.ok) throw new Error('API failed');
    const json = await res.json();
    return json.stats;
  } catch (err) {
    const total = localStore.tasks.length;
    const todo = localStore.tasks.filter(t => t.status === 'todo').length;
    const inProgress = localStore.tasks.filter(t => t.status === 'in_progress').length;
    const completed = localStore.tasks.filter(t => t.status === 'completed').length;
    const urgent = localStore.tasks.filter(t => t.priority === 'urgent').length;
    const highPriority = localStore.tasks.filter(t => t.priority === 'high').length;
    const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, todo, inProgress, completed, urgent, highPriority, completionRate };
  }
}

export async function fetchCategories() {
  try {
    const res = await fetch(`${API_BASE_URL}/categories`, { cache: 'no-store' });
    if (!res.ok) throw new Error('API failed');
    const json = await res.json();
    return json.data;
  } catch (err) {
    return localStore.categories;
  }
}

export async function fetchProjects() {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`, { cache: 'no-store' });
    if (!res.ok) throw new Error('API failed');
    const json = await res.json();
    return json.data;
  } catch (err) {
    return localStore.projects;
  }
}

export async function createTask(taskData) {
  try {
    const res = await fetch(`${API_BASE_URL}/tasks`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData)
    });
    if (!res.ok) throw new Error('Failed to create task');
    const json = await res.json();
    return json.data;
  } catch (err) {
    const newTask = {
      _id: 'task-' + Date.now(),
      ...taskData,
      createdAt: new Date().toISOString(),
      tags: typeof taskData.tags === 'string' ? taskData.tags.split(',').map(t => t.trim()).filter(Boolean) : (taskData.tags || [])
    };
    localStore.tasks.unshift(newTask);
    return newTask;
  }
}

export async function updateTask(id, taskData) {
  try {
    const res = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData)
    });
    if (!res.ok) throw new Error('Failed to update task');
    const json = await res.json();
    return json.data;
  } catch (err) {
    const idx = localStore.tasks.findIndex(t => t._id === id);
    if (idx !== -1) {
      localStore.tasks[idx] = { ...localStore.tasks[idx], ...taskData };
      return localStore.tasks[idx];
    }
    throw err;
  }
}

export async function updateTaskStatus(id, status) {
  try {
    const res = await fetch(`${API_BASE_URL}/tasks/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    });
    if (!res.ok) throw new Error('Failed to patch status');
    const json = await res.json();
    return json.data;
  } catch (err) {
    const idx = localStore.tasks.findIndex(t => t._id === id);
    if (idx !== -1) {
      localStore.tasks[idx].status = status;
      return localStore.tasks[idx];
    }
    throw err;
  }
}

export async function deleteTask(id) {
  try {
    const res = await fetch(`${API_BASE_URL}/tasks/${id}`, {
      method: 'DELETE'
    });
    if (!res.ok) throw new Error('Failed to delete task');
    return true;
  } catch (err) {
    localStore.tasks = localStore.tasks.filter(t => t._id !== id);
    return true;
  }
}

export async function createCategory(catData) {
  try {
    const res = await fetch(`${API_BASE_URL}/categories`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(catData)
    });
    if (!res.ok) throw new Error('Failed to create category');
    const json = await res.json();
    return json.data;
  } catch (err) {
    const newCat = { _id: 'cat-' + Date.now(), ...catData };
    localStore.categories.push(newCat);
    return newCat;
  }
}

export async function createProject(projData) {
  try {
    const res = await fetch(`${API_BASE_URL}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projData)
    });
    if (!res.ok) throw new Error('Failed to create project');
    const json = await res.json();
    return json.data;
  } catch (err) {
    const newProj = { _id: 'proj-' + Date.now(), ...projData };
    localStore.projects.push(newProj);
    return newProj;
  }
}
