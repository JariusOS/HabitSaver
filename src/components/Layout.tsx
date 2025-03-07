import React from 'react';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <header className="app-header">
        <h1>StreakSavior</h1>
        <p>Build habits, one streak at a time</p>
      </header>
      <Navigation />
      <main className="main-content">
        {children}
      </main>
    </div>
  );
};

export default Layout;
