import React, { useState } from 'react';
import { useHabits } from '../hooks/useHabits';
import HabitCard from '../components/HabitCard';
import { Habit } from '../types/habit';
import ProgressRing from '../components/ProgressRing';

const HABIT_SUGGESTIONS = [
  {
    name: "Morning Meditation",
    description: "Start your day with 10 minutes of mindfulness",
    frequency: "daily"
  },
  {
    name: "Daily Reading",
    description: "Read for 20 minutes to expand your knowledge",
    frequency: "daily"
  },
  {
    name: "Weekly Exercise",
    description: "3 sessions of 30-minute workouts",
    frequency: "weekly"
  }
];

const POPULAR_HABITS = [
  {
    name: "Drink Water",
    description: "8 glasses of water daily",
    frequency: "daily",
    users: 15234
  },
  {
    name: "Sleep Schedule",
    description: "Sleep and wake up at consistent times",
    frequency: "daily",
    users: 12456
  }
];

const habitCategories = [
  {
    id: 'exercise',
    name: 'Exercise & Fitness',
    icon: '🏃',
    color: '#FF6B6B',
    description: 'Improve physical strength, endurance, and overall fitness'
  },
  {
    id: 'wellness',
    name: 'Wellness & Self-Care',
    icon: '❤️',
    color: '#4ECDC4',
    description: 'Encourage relaxation, self-awareness, and personal well-being'
  },
  {
    id: 'hydration',
    name: 'Hydration & Nutrition',
    icon: '💧',
    color: '#6B5B95',
    description: 'Improve diet and hydration levels for better overall health'
  },
  {
    id: 'productivity',
    name: 'Productivity & Learning',
    icon: '📈',
    color: '#FFE66D',
    description: 'Enhance efficiency, organization, and knowledge'
  },
  {
    id: 'sleep',
    name: 'Sleep & Rest',
    icon: '🌙',
    color: '#4F46E5',
    description: 'Improve sleep quality and overall rest'
  }
];

const habitSuggestions = [
  {
    category: 'exercise',
    habits: [
      { name: 'Walk 10,000 steps', description: 'Boosts cardiovascular health and burns calories' },
      { name: 'Stretch for 10 minutes', description: 'Enhances flexibility and reduces injury risk' },
      { name: 'Do 30 minutes of yoga', description: 'Improves mobility, mental clarity, and relaxation' },
      { name: 'Run or jog for 20 minutes', description: 'Strengthens heart and endurance' },
      { name: 'Do strength training', description: 'Builds muscle, increases metabolism' }
    ]
  },
  {
    category: 'wellness',
    habits: [
      { name: 'Meditate for 10 minutes', description: 'Lowers stress and increases focus' },
      { name: 'Write in a gratitude journal', description: 'Improves happiness and reduces negativity' },
      { name: 'Practice deep breathing exercises', description: 'Helps manage anxiety and stress' },
      { name: 'Spend 30 minutes outdoors', description: 'Boosts vitamin D and mood' },
      { name: 'Limit social media use', description: 'Reduces mental fatigue and distraction' }
    ]
  },
  {
    category: 'hydration',
    habits: [
      { name: 'Drink 8 glasses of water', description: 'Maintains hydration and bodily functions' },
      { name: 'Eat a serving of vegetables', description: 'Provides essential vitamins and fiber' },
      { name: 'Avoid sugary drinks', description: 'Lowers risk of diabetes and weight gain' },
      { name: 'Take vitamins/supplements', description: 'Fills nutritional gaps' },
      { name: 'No junk food for the day', description: 'Encourages mindful eating' }
    ]
  }
];

const Dashboard: React.FC = () => {
  const { habits, addHabit, updateHabit } = useHabits();
  const [selectedView, setSelectedView] = useState<'my' | 'friends' | 'popular'>('my');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('exercise');

  const handleAddSuggestion = (suggestion: typeof HABIT_SUGGESTIONS[0]) => {
    addHabit({
      name: suggestion.name,
      description: suggestion.description,
      frequency: suggestion.frequency as 'daily' | 'weekly'
    });
    setShowSuggestions(false);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>Welcome Back!</h1>
          <p className="dashboard-subtitle">Here's your progress today</p>
          <div className="stats-grid">
            <div className="stat-card">
              <ProgressRing progress={75} />
              <div className="stat-content">
                <span className="stat-number">3/4</span>
                <span className="stat-label">Habits Completed</span>
              </div>
            </div>
            <div className="stat-card">
              <ProgressRing progress={90} />
              <div className="stat-content">
                <span className="stat-number">45</span>
                <span className="stat-label">Day Streak</span>
              </div>
            </div>
            <div className="stat-card">
              <ProgressRing progress={60} />
              <div className="stat-content">
                <span className="stat-number">1200</span>
                <span className="stat-label">Points Earned</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="view-toggle">
          <button 
            className={selectedView === 'my' ? 'active' : ''} 
            onClick={() => setSelectedView('my')}
          >
            My Habits
          </button>
          <button 
            className={selectedView === 'friends' ? 'active' : ''} 
            onClick={() => setSelectedView('friends')}
          >
            Friends' Habits
          </button>
          <button 
            className={selectedView === 'popular' ? 'active' : ''} 
            onClick={() => setSelectedView('popular')}
          >
            Popular
          </button>
        </div>
      </div>

      <div className="category-tabs">
        {habitCategories.map(category => (
          <button
            key={category.id}
            className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
            style={{ borderColor: category.color }}
            onClick={() => setSelectedCategory(category.id)}
          >
            <span className="category-icon">{category.icon}</span>
            <span className="category-name">{category.name}</span>
          </button>
        ))}
      </div>

      <div className="motivational-message">
        <h2>Keep it up!</h2>
        <p>You're on a 7-day streak with your exercise habits.</p>
      </div>

      <div className="progress-visualization">
        <div className="streak-tracker">
          <h3>Your Streak</h3>
          <div className="streak-days">
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className={`streak-day ${index < 5 ? 'completed' : ''}`} />
            ))}
          </div>
        </div>
        <div className="progress-bar">
          <h3>Daily Progress</h3>
          <div className="bar-container">
            <div className="bar" style={{ width: '75%' }} />
          </div>
          <span className="progress-percentage">75%</span>
        </div>
      </div>

      <div className="dashboard-content">
        {selectedView === 'my' && (
          <>
            <div className="habits-grid">
              {habits.length > 0 ? (
                habits.map((habit: Habit) => (
                  <HabitCard
                    key={habit.id}
                    habit={habit}
                    onEdit={updateHabit}
                    onCheckIn={(habit) => {
                      updateHabit({
                        ...habit,
                        lastCheckIn: new Date(),
                        currentStreak: habit.currentStreak + 1,
                        bestStreak: Math.max(habit.bestStreak, habit.currentStreak + 1),
                        points: habit.points + (100 * (1 + habit.currentStreak * 0.1))
                      });
                    }}
                  />
                ))
              ) : (
                <div className="empty-state">
                  <img src="/habit-buddy-logo.svg" alt="HabitBuddy" className="empty-logo" />
                  <h3>No habits yet!</h3>
                  <p>Start by adding a habit to track your progress</p>
                  <button 
                    className="btn-primary"
                    onClick={() => setShowSuggestions(true)}
                  >
                    Add Your First Habit
                  </button>
                </div>
              )}
            </div>

            <div className="quick-add">
              <button 
                className="add-habit-btn"
                onClick={() => setShowSuggestions(!showSuggestions)}
              >
                + Quick Add Habit
              </button>
              
              {showSuggestions && (
                <div className="suggestions-panel">
                  <h3>Popular Habit Templates</h3>
                  <div className="suggestions-list">
                    {habitSuggestions.map((category) => (
                      category.habits.map((suggestion, index) => (
                        <div key={index} className="suggestion-card" onClick={() => handleAddSuggestion(suggestion)}>
                          <h4>{suggestion.name}</h4>
                          <p>{suggestion.description}</p>
                          <span className="frequency-tag">{category.category}</span>
                        </div>
                      ))
                    ))}
                  </div>
                </div>
              )}
            </div>
          </>
        )}

        {selectedView === 'friends' && (
          <div className="friends-habits">
            <div className="friends-header">
              <h2>Friends' Habits</h2>
              <button className="btn-primary">Find Friends</button>
            </div>
            <div className="friends-list">
              <p className="placeholder-text">
                Connect with friends to see their habits and support each other! 
                Share streaks and motivate each other to stay consistent.
              </p>
            </div>
          </div>
        )}

        {selectedView === 'popular' && (
          <div className="popular-habits">
            <h2>Top Habits in the Community</h2>
            <div className="popular-habits-grid">
              {POPULAR_HABITS.map((habit, index) => (
                <div key={index} className="popular-habit-card">
                  <h3>{habit.name}</h3>
                  <p>{habit.description}</p>
                  <div className="habit-stats">
                    <span>{habit.users.toLocaleString()} users</span>
                    <button 
                      className="btn-secondary"
                      onClick={() => handleAddSuggestion(habit)}
                    >
                      Add to My Habits
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
