import React, { useState, useEffect } from 'react';
import { Habit } from '../types/habit';

interface HabitFormProps {
  onSubmit: (habitData: Omit<Habit, 'id' | 'currentStreak' | 'bestStreak' | 'lastCheckIn'>) => void;
  onCancel: () => void;
  initialData?: Habit;
}

const HabitForm: React.FC<HabitFormProps> = ({ onSubmit, onCancel, initialData }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    frequency: 'daily'
  });

  useEffect(() => {
    if (initialData) {
      setFormData({
        name: initialData.name,
        description: initialData.description,
        frequency: initialData.frequency
      });
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <form className="habit-form" onSubmit={handleSubmit}>
      <div className="form-header">
        <h2>{initialData ? 'Edit Habit' : 'Create New Habit'}</h2>
        <p className="form-subtitle">
          Focus on one habit at a time for better success. Make it specific and achievable.
        </p>
      </div>

      <div className="form-group">
        <label htmlFor="name">What habit do you want to build?</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="e.g., 'Read for 20 minutes' or 'Morning meditation'"
          required
          maxLength={50}
        />
        <span className="input-tip">Keep it simple and specific</span>
      </div>

      <div className="form-group">
        <label htmlFor="description">Why is this habit important to you?</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Your motivation for building this habit..."
          required
          maxLength={200}
        />
        <span className="input-tip">This will help you stay motivated during tough days</span>
      </div>

      <div className="form-group">
        <label htmlFor="frequency">How often?</label>
        <select
          id="frequency"
          name="frequency"
          value={formData.frequency}
          onChange={handleChange}
          required
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
        </select>
        <span className="input-tip">Start with daily habits for best results</span>
      </div>

      <div className="form-footer">
        <button type="button" className="btn-secondary" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="btn-primary">
          {initialData ? 'Save Changes' : 'Start Building Habit'}
        </button>
      </div>

      {!initialData && (
        <div className="form-info">
          <h3>Tips for Success</h3>
          <ul>
            <li>Start small - focus on consistency over intensity</li>
            <li>Connect with friends who can help save your streak</li>
            <li>Track your progress and celebrate milestones</li>
          </ul>
        </div>
      )}
    </form>
  );
};

export default HabitForm;
