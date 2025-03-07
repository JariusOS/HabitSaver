import React from 'react';
import { Habit } from '../types/habit';

interface HabitCardProps {
  habit: Habit;
  onEdit: (habit: Habit) => void;
  onCheckIn: (habit: Habit) => void;
}

const HabitCard: React.FC<HabitCardProps> = ({ habit, onEdit, onCheckIn }) => {
  // Calculate streak health (0-100)
  const streakHealth = Math.min(habit.currentStreak * 10, 100);
  
  // Calculate points based on streak
  const points = habit.currentStreak * 100;
  
  // Format last check-in date
  const lastCheckIn = new Date(habit.lastCheckIn).toLocaleDateString();
  
  // Check if can check in today
  const canCheckInToday = () => {
    const today = new Date();
    const lastCheck = new Date(habit.lastCheckIn);
    return today.toDateString() !== lastCheck.toDateString();
  };

  return (
    <div className="habit-card">
      <div className="habit-card-header">
        <h3>{habit.name}</h3>
        <button 
          className="btn-secondary" 
          onClick={() => onEdit(habit)}
          aria-label="Edit habit"
        >
          ✏️
        </button>
      </div>
      
      <p className="habit-description">{habit.description}</p>
      
      <div className="streak-info">
        <div className="streak-meter" style={{ '--health': `${streakHealth}%` } as React.CSSProperties}>
          <div className="streak-bar"></div>
        </div>
        <div className="streak-stats">
          <div className="stat">
            <span className="stat-value">🔥 {habit.currentStreak}</span>
            <span className="stat-label">Current Streak</span>
          </div>
          <div className="stat">
            <span className="stat-value">⭐ {habit.bestStreak}</span>
            <span className="stat-label">Best Streak</span>
          </div>
          <div className="stat">
            <span className="stat-value">🎯 {points}</span>
            <span className="stat-label">Points</span>
          </div>
        </div>
      </div>

      <div className="habit-footer">
        <span className="habit-frequency">{habit.frequency}</span>
        <span className="last-checkin">Last check-in: {lastCheckIn}</span>
        <button
          className="btn-checkin"
          onClick={() => onCheckIn(habit)}
          disabled={!canCheckInToday()}
        >
          {canCheckInToday() ? '✅ Check In' : '✔️ Done for Today'}
        </button>
      </div>

      {!canCheckInToday() && habit.currentStreak > 0 && (
        <div className="streak-save">
          <p>Need help maintaining your streak?</p>
          <button className="btn-secondary">
            Ask a Friend to Save Your Streak (1/month)
          </button>
        </div>
      )}
    </div>
  );
};

export default HabitCard;
