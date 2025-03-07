import { Habit } from '../types/habit';

const HABITS_STORAGE_KEY = 'streaksavior_habits';

export const habitStorage = {
  getHabits: (): Habit[] => {
    try {
      const habits = localStorage.getItem(HABITS_STORAGE_KEY);
      if (!habits) return [];
      
      const parsedHabits = JSON.parse(habits);
      
      // Convert ISO date strings back to Date objects
      return parsedHabits.map((habit: any) => ({
        ...habit,
        lastCheckin: habit.lastCheckin ? new Date(habit.lastCheckin) : undefined,
        createdAt: new Date(habit.createdAt)
      }));
    } catch (error) {
      console.error('Error loading habits:', error);
      return [];
    }
  },

  saveHabits: (habits: Habit[]): void => {
    try {
      localStorage.setItem(HABITS_STORAGE_KEY, JSON.stringify(habits));
    } catch (error) {
      console.error('Error saving habits:', error);
    }
  },

  addHabit: (habit: Habit): void => {
    const habits = habitStorage.getHabits();
    habits.push(habit);
    habitStorage.saveHabits(habits);
  },

  updateHabit: (updatedHabit: Habit): void => {
    const habits = habitStorage.getHabits();
    const index = habits.findIndex(h => h.id === updatedHabit.id);
    if (index !== -1) {
      habits[index] = updatedHabit;
      habitStorage.saveHabits(habits);
    }
  },

  deleteHabit: (habitId: string): void => {
    const habits = habitStorage.getHabits();
    const filteredHabits = habits.filter(h => h.id !== habitId);
    habitStorage.saveHabits(filteredHabits);
  }
};
