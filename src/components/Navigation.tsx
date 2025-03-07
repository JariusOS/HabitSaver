import React from 'react';
import { NavLink } from 'react-router-dom';
import { useHabits } from '../hooks/useHabits';

const Navigation: React.FC = () => {
  const { habits } = useHabits();
  const activeStreaks = habits.filter(h => h.currentStreak > 0).length;

  return (
    <nav className="side-nav">
      <div className="nav-stats">
        <div className="stat">
          <span className="stat-value">{activeStreaks}</span>
          <span className="stat-label">Active Streaks</span>
        </div>
        <div className="stat">
          <span className="stat-value">{habits.length}</span>
          <span className="stat-label">Total Habits</span>
        </div>
      </div>

      <div className="nav-links">
        <NavLink 
          to="/app/dashboard" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          <span className="nav-icon">📊</span>
          Dashboard
        </NavLink>

        <NavLink 
          to="/app/habits" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          <span className="nav-icon">✨</span>
          My Habits
          {habits.length > 0 && (
            <span className="nav-badge">{habits.length}</span>
          )}
        </NavLink>

        <NavLink 
          to="/app/friends" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          <span className="nav-icon">👥</span>
          Friends
        </NavLink>

        <NavLink 
          to="/app/leaderboard" 
          className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
        >
          <span className="nav-icon">🏆</span>
          Leaderboard
        </NavLink>
      </div>

      <div className="nav-footer">
        <div className="points-display">
          <span className="points-icon">🎯</span>
          <div className="points-info">
            <span className="points-value">
              {habits.reduce((sum, h) => sum + h.points, 0).toLocaleString()}
            </span>
            <span className="points-label">Total Points</span>
          </div>
        </div>

        <button className="share-button">
          <span>📢</span>
          Share Progress
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
