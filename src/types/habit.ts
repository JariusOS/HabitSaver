export type HabitFrequency = 'daily' | 'weekly';

export interface Habit {
  id: string;
  name: string;
  description: string;
  frequency: HabitFrequency;
  currentStreak: number;
  bestStreak: number;
  lastCheckIn: Date;
  createdAt: Date;
  points: number;
  streakSaves: {
    count: number;
    lastSaved?: Date;
    savedBy?: string;
  };
  socialStats: {
    supporters: number;
    globalRank?: number;
    achievements: string[];
  };
}

export interface HabitFormData {
  name: string;
  description: string;
  frequency: HabitFrequency;
}

export interface StreakSaveRequest {
  habitId: string;
  saviorId: string;
  saveDate: Date;
}

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlockedAt?: Date;
}

// Constants for gamification
export const POINTS_PER_CHECKIN = 100;
export const STREAK_MULTIPLIER = 0.1; // 10% bonus per streak day
export const MAX_STREAK_SAVES = 1; // Number of streak saves allowed per month
export const STREAK_SAVE_COOLDOWN_DAYS = 30; // Days between streak saves
