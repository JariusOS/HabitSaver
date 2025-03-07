import React, { useState } from 'react';
import HabitCard from '../components/HabitCard';
import HabitForm from '../components/HabitForm';
import { Habit, HabitFormData } from '../types/habit';
import { useHabits } from '../hooks/useHabits';

const Habits: React.FC = () => {
  const { habits, addHabit, updateHabit, checkInHabit, deleteHabit } = useHabits();
  const [showForm, setShowForm] = useState(false);
  const [editingHabit, setEditingHabit] = useState<Habit | null>(null);

  const handleAddHabit = (formData: HabitFormData) => {
    addHabit(formData);
    setShowForm(false);
  };

  const handleEditHabit = (formData: HabitFormData) => {
    if (!editingHabit) return;
    updateHabit(editingHabit.id, formData);
    setEditingHabit(null);
    setShowForm(false);
  };

  return (
    <div className="habits-page">
      <div className="habits-header">
        <h2>My Habits</h2>
        <button 
          className="btn-primary"
          onClick={() => {
            setEditingHabit(null);
            setShowForm(true);
          }}
        >
          Add New Habit
        </button>
      </div>

      {showForm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>{editingHabit ? 'Edit Habit' : 'Create New Habit'}</h3>
            <HabitForm
              onSubmit={editingHabit ? handleEditHabit : handleAddHabit}
              onCancel={() => {
                setShowForm(false);
                setEditingHabit(null);
              }}
            />
          </div>
        </div>
      )}

      <div className="habits-grid">
        {habits.length === 0 ? (
          <div className="empty-state">
            <p>You haven't created any habits yet.</p>
            <button 
              className="btn-primary"
              onClick={() => setShowForm(true)}
            >
              Create Your First Habit
            </button>
          </div>
        ) : (
          habits.map(habit => (
            <HabitCard
              key={habit.id}
              habit={habit}
              onCheckIn={() => checkInHabit(habit.id)}
              onEdit={(habit) => {
                setEditingHabit(habit);
                setShowForm(true);
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Habits;
