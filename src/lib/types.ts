// Tipos do aplicativo de academia

export type Goal = 'lose_weight' | 'gain_muscle' | 'maintain' | 'improve_health';
export type FitnessLevel = 'beginner' | 'intermediate' | 'advanced';
export type WorkoutFrequency = '2-3' | '4-5' | '6-7';
export type DietPreference = 'balanced' | 'low_carb' | 'high_protein' | 'vegetarian' | 'vegan';

export interface UserProfile {
  id: string;
  name: string;
  age: number;
  weight: number;
  height: number;
  goal: Goal;
  fitnessLevel: FitnessLevel;
  workoutFrequency: WorkoutFrequency;
  dietPreference: DietPreference;
  createdAt: string;
  hasCompletedQuiz: boolean;
  subscriptionPlan?: 'free' | 'monthly' | 'quarterly' | 'annual';
  subscriptionExpiry?: string;
}

export interface Exercise {
  id: string;
  name: string;
  category: 'strength' | 'cardio' | 'flexibility' | 'functional';
  muscleGroup: string;
  difficulty: FitnessLevel;
  duration: number; // em minutos
  sets?: number;
  reps?: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  description: string;
  equipment: string[];
}

export interface Workout {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
  duration: number;
  difficulty: FitnessLevel;
  goal: Goal[];
  completed?: boolean;
  completedAt?: string;
}

export interface WorkoutLog {
  id: string;
  workoutId: string;
  workoutName: string;
  date: string;
  duration: number;
  exercises: {
    exerciseId: string;
    exerciseName: string;
    setsCompleted: number;
    notes?: string;
  }[];
  notes?: string;
}

export interface Meal {
  id: string;
  name: string;
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  ingredients: string[];
  instructions: string[];
  imageUrl?: string;
  goal: Goal[];
  dietPreference: DietPreference[];
}

export interface MealPlan {
  id: string;
  date: string;
  meals: {
    breakfast: Meal;
    lunch: Meal;
    dinner: Meal;
    snacks: Meal[];
  };
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFats: number;
}

export interface Challenge {
  id: string;
  title: string;
  description: string;
  type: 'daily' | 'monthly';
  goal: number;
  unit: string;
  progress: number;
  startDate: string;
  endDate: string;
  completed: boolean;
  reward?: string;
}

export interface AppState {
  currentView: 'quiz' | 'dashboard' | 'workouts' | 'meals' | 'progress' | 'challenges' | 'subscription';
  userProfile: UserProfile | null;
  workoutLogs: WorkoutLog[];
  challenges: Challenge[];
  currentMealPlan: MealPlan | null;
}
