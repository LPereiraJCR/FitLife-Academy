// Gerenciamento de Local Storage

import { UserProfile, WorkoutLog, Challenge, MealPlan, MealCompletion, CustomMeal } from './types';

const STORAGE_KEYS = {
  USER_PROFILE: 'fitapp_user_profile',
  WORKOUT_LOGS: 'fitapp_workout_logs',
  CHALLENGES: 'fitapp_challenges',
  MEAL_PLAN: 'fitapp_meal_plan',
  MEAL_COMPLETIONS: 'fitapp_meal_completions',
  CUSTOM_MEALS: 'fitapp_custom_meals',
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

// Meal Completions
export const saveMealCompletion = (completion: MealCompletion): void => {
  if (typeof window !== 'undefined') {
    const completions = getMealCompletions();
    const existingIndex = completions.findIndex(
      c => c.date === completion.date && 
           c.day === completion.day && 
           c.mealType === completion.mealType
    );
    
    if (existingIndex >= 0) {
      completions[existingIndex] = completion;
    } else {
      completions.push(completion);
    }
    
    localStorage.setItem(STORAGE_KEYS.MEAL_COMPLETIONS, JSON.stringify(completions));
  }
};

export const getMealCompletions = (): MealCompletion[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.MEAL_COMPLETIONS);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const getMealCompletionStatus = (date: string, day: string, mealType: string): boolean => {
  const completions = getMealCompletions();
  const completion = completions.find(
    c => c.date === date && c.day === day && c.mealType === mealType
  );
  return completion?.completed || false;
};

// Custom Meals
export const saveCustomMeal = (meal: CustomMeal): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    meals.push(meal);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(meals));
  }
};

export const getCustomMeals = (): CustomMeal[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_MEALS);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const deleteCustomMeal = (mealId: string): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    const filtered = meals.filter(m => m.id !== mealId);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(filtered));
  }
};

export const updateCustomMeal = (meal: CustomMeal): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    const index = meals.findIndex(m => m.id === meal.id);
    if (index >= 0) {
      meals[index] = meal;
      localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(meals));
    }
  }
};

// Custom Meals
export const saveCustomMeal = (meal: CustomMeal): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    meals.push(meal);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(meals));
  }
};

export const getCustomMeals = (): CustomMeal[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_MEALS);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const deleteCustomMeal = (mealId: string): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    const filtered = meals.filter(m => m.id !== mealId);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(filtered));
  }
};

export const updateCustomMeal = (meal: CustomMeal): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    const index = meals.findIndex(m => m.id === meal.id);
    if (index >= 0) {
      meals[index] = meal;
      localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(meals));
    }
  }
};

// Custom Meals
export const saveCustomMeal = (meal: CustomMeal): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    meals.push(meal);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(meals));
  }
};

export const getCustomMeals = (): CustomMeal[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_MEALS);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const deleteCustomMeal = (mealId: string): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    const filtered = meals.filter(m => m.id !== mealId);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(filtered));
  }
};

export const updateCustomMeal = (meal: CustomMeal): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    const index = meals.findIndex(m => m.id === meal.id);
    if (index >= 0) {
      meals[index] = meal;
      localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(meals));
    }
  }
};

// Custom Meals
export const saveCustomMeal = (meal: CustomMeal): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    meals.push(meal);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(meals));
  }
};

export const getCustomMeals = (): CustomMeal[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_MEALS);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const deleteCustomMeal = (mealId: string): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    const filtered = meals.filter(m => m.id !== mealId);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(filtered));
  }
};

export const updateCustomMeal = (meal: CustomMeal): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    const index = meals.findIndex(m => m.id === meal.id);
    if (index >= 0) {
      meals[index] = meal;
      localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(meals));
    }
  }
};

// Custom Meals
export const saveCustomMeal = (meal: CustomMeal): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    meals.push(meal);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(meals));
  }
};

export const getCustomMeals = (): CustomMeal[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_MEALS);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const deleteCustomMeal = (mealId: string): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    const filtered = meals.filter(m => m.id !== mealId);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(filtered));
  }
};

export const updateCustomMeal = (meal: CustomMeal): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    const index = meals.findIndex(m => m.id === meal.id);
    if (index >= 0) {
      meals[index] = meal;
      localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(meals));
    }
  }
};

// Custom Meals
export const saveCustomMeal = (meal: CustomMeal): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    meals.push(meal);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(meals));
  }
};

export const getCustomMeals = (): CustomMeal[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_MEALS);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const deleteCustomMeal = (mealId: string): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    const filtered = meals.filter(m => m.id !== mealId);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(filtered));
  }
};

export const updateCustomMeal = (meal: CustomMeal): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    const index = meals.findIndex(m => m.id === meal.id);
    if (index >= 0) {
      meals[index] = meal;
      localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(meals));
    }
  }
};

// Custom Meals
export const saveCustomMeal = (meal: CustomMeal): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    meals.push(meal);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(meals));
  }
};

export const getCustomMeals = (): CustomMeal[] => {
  if (typeof window !== 'undefined') {
    const data = localStorage.getItem(STORAGE_KEYS.CUSTOM_MEALS);
    return data ? JSON.parse(data) : [];
  }
  return [];
};

export const deleteCustomMeal = (mealId: string): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    const filtered = meals.filter(m => m.id !== mealId);
    localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(filtered));
  }
};

export const updateCustomMeal = (meal: CustomMeal): void => {
  if (typeof window !== 'undefined') {
    const meals = getCustomMeals();
    const index = meals.findIndex(m => m.id === meal.id);
    if (index >= 0) {
      meals[index] = meal;
      localStorage.setItem(STORAGE_KEYS.CUSTOM_MEALS, JSON.stringify(meals));
    }
  }
};

// Clear all data
export const clearAllData = (): void => {
  if (typeof window !== 'undefined') {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
  }
};
