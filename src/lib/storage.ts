// Gerenciamento de Local Storage

import { UserProfile, WorkoutLog, Challenge, MealPlan } from './types';

const STORAGE_KEYS = {
  USER_PROFILE: 'fitapp_user_profile',
  WORKOUT_LOGS: 'fitapp_workout_logs',
  CHALLENGES: 'fitapp_challenges',
  MEAL_PLAN: 'fitapp_meal_plan',
} as const;

// User Profile
export const saveUserProfile = (profile: UserProfile): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(profile));
  }
};

export const getUserProfile = (): UserProfile | null => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    return data ? JSON.parse(data) : null;
  }
  return null;
};

export const clearUserProfile = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEYS.USER_PROFILE);
  }
};

// Workout Logs
export const saveWorkoutLog = (log: WorkoutLog): void => {
  if (typeof window !== 'undefined') {
    const logs = getWorkoutLogs();
    logs.push(log);
    localStorage.setItem(STORAGE_KEYS.WORKOUT_LOGS, JSON.stringify(logs));
  }
};

export const getWorkoutLogs = (): WorkoutLog[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.WORKOUT_LOGS);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const clearWorkoutLogs = (): void => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEYS.WORKOUT_LOGS);
  }
};

// Challenges
export const saveChallenges = (challenges: Challenge[]): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.CHALLENGES, JSON.stringify(challenges));
  }
};

export const getChallenges = (): Challenge[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.CHALLENGES);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const updateChallenge = (challengeId: string, progress: number): void => {
  if (typeof window !== 'undefined') {
    const challenges = getChallenges();
    const updatedChallenges = challenges.map(challenge => {
      if (challenge.id === challengeId) {
        const completed = progress >= challenge.goal;
        return { ...challenge, progress, completed };
      }
      return challenge;
    });
    saveChallenges(updatedChallenges);
  }
};

// Meal Plan
export const saveMealPlan = (mealPlan: MealPlan): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEYS.MEAL_PLAN, JSON.stringify(mealPlan));
  }
};

export const getMealPlan = (): MealPlan | null => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.MEAL_PLAN);
    return data ? JSON.parse(data) : null;
  }
  return null;
};

// Clear all data
export const clearAllData = (): void => {
  if (typeof window !== 'undefined') {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }
};
