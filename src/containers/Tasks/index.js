import React, { useState } from 'react';
import './Tasks.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Submit project report', description: 'Submit the final project report to the manager.', status: 'Pending' },
    { id: 2, title: 'Client Meeting', description: 'Attend the meeting with ABC Corp at 2 PM.', status: 'Completed' },
    { id: 3, title: 'Code Review', description: 'Review the codebase for the upcoming release.', status: 'Pending' },
  ]);

  const [filter, setFilter] = useState('All');

  const toggleTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task
      )
    );
  };

  const filteredTasks =
    filter === 'All' ? tasks : tasks.filter((task) => task.status === filter);

  return (
    <div className="tasks-container">
      <h2 className="tasks-header">Tasks</h2>

      {/* Filter */}
      <div className="tasks-filter">
        <label>Filter by Status: </label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      {/* Task List */}
      <ul className="tasks-list">
        {filteredTasks.map((task) => (
          <li key={task.id} className={`task-item ${task.status.toLowerCase()}`}>
            <h3 className="task-title">{task.title}</h3>
            <p className="task-desc">{task.description}</p>
            <button
              className={`task-status-btn ${task.status.toLowerCase()}`}
              onClick={() => toggleTaskStatus(task.id)}
            >
              {task.status === 'Pending' ? 'Mark as Completed' : 'Mark as Pending'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;