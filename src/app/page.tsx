'use client';

import { useState, useEffect } from 'react';
import { UserProfile, AppState, Goal, FitnessLevel, WorkoutFrequency, DietPreference } from '@/lib/types';
import { getUserProfile, saveUserProfile, getWorkoutLogs, getChallenges, saveChallenges } from '@/lib/storage';
import { generateChallenges } from '@/lib/data';
import Quiz from '@/components/fitness/Quiz';
import Dashboard from '@/components/fitness/Dashboard';
import WorkoutsView from '@/components/fitness/WorkoutsView';
import MealsView from '@/components/fitness/MealsView';
import ProgressView from '@/components/fitness/ProgressView';
import ChallengesView from '@/components/fitness/ChallengesView';
import SubscriptionView from '@/components/fitness/SubscriptionView';

export default function FitnessApp() {
  const [appState, setAppState] = useState<AppState>({
    currentView: 'quiz',
    userProfile: null,
    workoutLogs: [],
    challenges: [],
    currentMealPlan: null,
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Carregar dados do localStorage
    const profile = getUserProfile();
    const logs = getWorkoutLogs();
    let challenges = getChallenges();

    // Se não houver desafios, gerar novos
    if (challenges.length === 0) {
      challenges = generateChallenges();
      saveChallenges(challenges);
    }

    setAppState(prev => ({
      ...prev,
      userProfile: profile,
      workoutLogs: logs,
      challenges: challenges,
      currentView: profile?.hasCompletedQuiz ? 'dashboard' : 'quiz',
    }));

    setIsLoading(false);
  }, []);

  const handleQuizComplete = (profile: UserProfile) => {
    saveUserProfile(profile);
    setAppState(prev => ({
      ...prev,
      userProfile: profile,
      currentView: 'dashboard',
    }));
  };

  const handleNavigate = (view: AppState['currentView']) => {
    setAppState(prev => ({ ...prev, currentView: view }));
  };

  const handleUpdateProfile = (updates: Partial<UserProfile>) => {
    if (appState.userProfile) {
      const updatedProfile = { ...appState.userProfile, ...updates };
      saveUserProfile(updatedProfile);
      setAppState(prev => ({ ...prev, userProfile: updatedProfile }));
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-xl font-semibold">Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {appState.currentView === 'quiz' && (
        <Quiz onComplete={handleQuizComplete} />
      )}

      {appState.currentView === 'dashboard' && appState.userProfile && (
        <Dashboard
          userProfile={appState.userProfile}
          workoutLogs={appState.workoutLogs}
          challenges={appState.challenges}
          onNavigate={handleNavigate}
        />
      )}

      {appState.currentView === 'workouts' && appState.userProfile && (
        <WorkoutsView
          userProfile={appState.userProfile}
          onNavigate={handleNavigate}
        />
      )}

      {appState.currentView === 'meals' && appState.userProfile && (
        <MealsView
          userProfile={appState.userProfile}
          onNavigate={handleNavigate}
        />
      )}

      {appState.currentView === 'progress' && appState.userProfile && (
        <ProgressView
          userProfile={appState.userProfile}
          workoutLogs={appState.workoutLogs}
          onNavigate={handleNavigate}
        />
      )}

      {appState.currentView === 'challenges' && appState.userProfile && (
        <ChallengesView
          challenges={appState.challenges}
          onNavigate={handleNavigate}
        />
      )}

      {appState.currentView === 'subscription' && appState.userProfile && (
        <SubscriptionView
          userProfile={appState.userProfile}
          onUpdateProfile={handleUpdateProfile}
          onNavigate={handleNavigate}
        />
      )}
    </div>
  );
}
