import { useState, useEffect } from 'react';
import { Habit, HabitFormData } from '../types/habit';
import { habitStorage } from '../services/habitStorage';

export const useHabits = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  // Load habits from storage on initial mount
  useEffect(() => {
    const storedHabits = habitStorage.getHabits();
    setHabits(storedHabits);
  }, []);

  const addHabit = (formData: HabitFormData) => {
    const newHabit: Habit = {
      id: Date.now().toString(),
      ...formData,
      currentStreak: 0,
      bestStreak: 0,
      createdAt: new Date(),
    };

    const updatedHabits = [...habits, newHabit];
    setHabits(updatedHabits);
    habitStorage.saveHabits(updatedHabits);
  };

  const updateHabit = (habitId: string, formData: HabitFormData) => {
    const updatedHabits = habits.map(habit =>
      habit.id === habitId
        ? { ...habit, ...formData }
        : habit
    );

    setHabits(updatedHabits);
    habitStorage.saveHabits(updatedHabits);
  };

  const checkInHabit = (habitId: string) => {
    const updatedHabits = habits.map(habit => {
      if (habit.id !== habitId) return habit;

      const newStreak = habit.currentStreak + 1;
      const updatedHabit = {
        ...habit,
        currentStreak: newStreak,
        bestStreak: Math.max(newStreak, habit.bestStreak),
        lastCheckin: new Date(),
      };

      return updatedHabit;
    });

    setHabits(updatedHabits);
    habitStorage.saveHabits(updatedHabits);
  };

  const deleteHabit = (habitId: string) => {
    const updatedHabits = habits.filter(habit => habit.id !== habitId);
    setHabits(updatedHabits);
    habitStorage.saveHabits(updatedHabits);
  };

  return {
    habits,
    addHabit,
    updateHabit,
    checkInHabit,
    deleteHabit,
  };
};
