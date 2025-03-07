import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const AppLayout: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname.includes(path);
  };

  return (
    <div className="app-container">
      <aside className="sidebar">
        <div className="sidebar-header">
          <img src="/habit-buddy-logo.svg" alt="HabitBuddy" className="sidebar-logo" />
          <h1 className="sidebar-title">HabitBuddy</h1>
        </div>
        <nav className="sidebar-nav">
          <Link to="/app/dashboard" className={`nav-item ${isActive('/dashboard') ? 'active' : ''}`}>
            <span className="nav-icon">📊</span>
            <span className="nav-text">Dashboard</span>
          </Link>
          <Link to="/app/habits" className={`nav-item ${isActive('/habits') ? 'active' : ''}`}>
            <span className="nav-icon">✅</span>
            <span className="nav-text">Habits</span>
          </Link>
          <Link to="/app/friends" className={`nav-item ${isActive('/friends') ? 'active' : ''}`}>
            <span className="nav-icon">👥</span>
            <span className="nav-text">Friends</span>
          </Link>
          <Link to="/app/leaderboard" className={`nav-item ${isActive('/leaderboard') ? 'active' : ''}`}>
            <span className="nav-icon">🏆</span>
            <span className="nav-text">Leaderboard</span>
          </Link>
        </nav>
        <div className="sidebar-footer">
          <Link to="/app/settings" className="nav-item">
            <span className="nav-icon">⚙️</span>
            <span className="nav-text">Settings</span>
          </Link>
          <Link to="/" className="nav-item">
            <span className="nav-icon">🚪</span>
            <span className="nav-text">Logout</span>
          </Link>
        </div>
      </aside>
      <main className="main-content">
        <header className="app-header">
          <div className="header-content">
            <h2 className="page-title">
              {location.pathname.includes('/dashboard') && 'Dashboard'}
              {location.pathname.includes('/habits') && 'Habits'}
              {location.pathname.includes('/friends') && 'Friends'}
              {location.pathname.includes('/leaderboard') && 'Leaderboard'}
              {location.pathname.includes('/settings') && 'Settings'}
            </h2>
            <div className="header-actions">
              <ThemeToggle />
              <div className="user-profile">
                <img src="https://i.pravatar.cc/150?img=68" alt="User" className="avatar" />
                <span className="username">John Doe</span>
              </div>
            </div>
          </div>
        </header>
        <div className="content-container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AppLayout;
