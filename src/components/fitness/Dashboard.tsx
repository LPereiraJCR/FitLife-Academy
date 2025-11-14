'use client';

import { UserProfile, WorkoutLog, Challenge } from '@/lib/types';
import { AppState } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { 
  Dumbbell, 
  Utensils, 
  TrendingUp, 
  Trophy, 
  CreditCard,
  User,
  Menu,
  X,
  Target,
  Activity,
  Calendar,
  Flame
} from 'lucide-react';
import { useState } from 'react';

interface DashboardProps {
  userProfile: UserProfile;
  workoutLogs: WorkoutLog[];
  challenges: Challenge[];
  onNavigate: (view: AppState['currentView']) => void;
}

export default function Dashboard({ userProfile, workoutLogs, challenges, onNavigate }: DashboardProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const getGoalText = (goal: string) => {
    const goals = {
      lose_weight: 'Perder Peso',
      gain_muscle: 'Ganhar Massa',
      maintain: 'Manter Forma',
      improve_health: 'Melhorar Saúde'
    };
    return goals[goal as keyof typeof goals] || goal;
  };

  const todayWorkouts = workoutLogs.filter(log => {
    const logDate = new Date(log.date).toDateString();
    const today = new Date().toDateString();
    return logDate === today;
  }).length;

  const weekWorkouts = workoutLogs.filter(log => {
    const logDate = new Date(log.date);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return logDate >= weekAgo;
  }).length;

  const activeChallenges = challenges.filter(c => !c.completed);
  const completedChallenges = challenges.filter(c => c.completed).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Dumbbell className="w-8 h-8" />
              <h1 className="text-xl sm:text-2xl font-bold">FitLife Academy</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-4">
              <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => onNavigate('workouts')}>
                <Dumbbell className="w-4 h-4 mr-2" />
                Treinos
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => onNavigate('meals')}>
                <Utensils className="w-4 h-4 mr-2" />
                Refeições
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => onNavigate('progress')}>
                <TrendingUp className="w-4 h-4 mr-2" />
                Progresso
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => onNavigate('challenges')}>
                <Trophy className="w-4 h-4 mr-2" />
                Desafios
              </Button>
              <Button variant="ghost" className="text-white hover:bg-white/20" onClick={() => onNavigate('subscription')}>
                <CreditCard className="w-4 h-4 mr-2" />
                Planos
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/20"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {menuOpen && (
            <nav className="md:hidden py-4 space-y-2 border-t border-white/20">
              <Button 
                variant="ghost" 
                className="w-full justify-start text-white hover:bg-white/20" 
                onClick={() => { onNavigate('workouts'); setMenuOpen(false); }}
              >
                <Dumbbell className="w-4 h-4 mr-2" />
                Treinos
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-white hover:bg-white/20" 
                onClick={() => { onNavigate('meals'); setMenuOpen(false); }}
              >
                <Utensils className="w-4 h-4 mr-2" />
                Refeições
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-white hover:bg-white/20" 
                onClick={() => { onNavigate('progress'); setMenuOpen(false); }}
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                Progresso
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-white hover:bg-white/20" 
                onClick={() => { onNavigate('challenges'); setMenuOpen(false); }}
              >
                <Trophy className="w-4 h-4 mr-2" />
                Desafios
              </Button>
              <Button 
                variant="ghost" 
                className="w-full justify-start text-white hover:bg-white/20" 
                onClick={() => { onNavigate('subscription'); setMenuOpen(false); }}
              >
                <CreditCard className="w-4 h-4 mr-2" />
                Planos
              </Button>
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Olá, {userProfile.name.split(' ')[0]}! 👋
          </h2>
          <p className="text-gray-600">Pronto para conquistar seus objetivos hoje?</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white">
            <div className="flex items-center justify-between mb-2">
              <Flame className="w-8 h-8" />
              <span className="text-3xl font-bold">{todayWorkouts}</span>
            </div>
            <p className="text-orange-100">Treinos Hoje</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="w-8 h-8" />
              <span className="text-3xl font-bold">{weekWorkouts}</span>
            </div>
            <p className="text-blue-100">Treinos na Semana</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <div className="flex items-center justify-between mb-2">
              <Trophy className="w-8 h-8" />
              <span className="text-3xl font-bold">{completedChallenges}</span>
            </div>
            <p className="text-purple-100">Desafios Completos</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8" />
              <span className="text-lg font-bold">{getGoalText(userProfile.goal)}</span>
            </div>
            <p className="text-green-100">Seu Objetivo</p>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('workouts')}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-orange-100 rounded-xl">
                <Dumbbell className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Iniciar Treino</h3>
                <p className="text-gray-600 mb-4">
                  Acesse treinos personalizados com vídeo aulas
                </p>
                <Button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700">
                  Ver Treinos
                </Button>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => onNavigate('meals')}>
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-xl">
                <Utensils className="w-6 h-6 text-green-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-2">Plano Alimentar</h3>
                <p className="text-gray-600 mb-4">
                  Refeições personalizadas para seu objetivo
                </p>
                <Button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700">
                  Ver Refeições
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Active Challenges */}
        <Card className="p-6 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-800">Desafios Ativos</h3>
            <Button variant="outline" onClick={() => onNavigate('challenges')}>
              Ver Todos
            </Button>
          </div>

          <div className="space-y-4">
            {activeChallenges.slice(0, 3).map((challenge) => (
              <div key={challenge.id} className="p-4 bg-gray-50 rounded-xl">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-800">{challenge.title}</h4>
                    <p className="text-sm text-gray-600">{challenge.description}</p>
                  </div>
                  <span className="text-sm font-medium text-orange-600">
                    {challenge.progress}/{challenge.goal} {challenge.unit}
                  </span>
                </div>
                <Progress 
                  value={(challenge.progress / challenge.goal) * 100} 
                  className="h-2"
                />
              </div>
            ))}

            {activeChallenges.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <Trophy className="w-12 h-12 mx-auto mb-2 opacity-50" />
                <p>Nenhum desafio ativo no momento</p>
              </div>
            )}
          </div>
        </Card>

        {/* Subscription CTA */}
        {userProfile.subscriptionPlan === 'free' && (
          <Card className="p-6 bg-gradient-to-r from-orange-600 to-red-600 text-white">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="text-2xl font-bold mb-2">Desbloqueie Todo o Potencial</h3>
                <p className="text-orange-100">
                  Acesse treinos premium, planos alimentares exclusivos e muito mais!
                </p>
              </div>
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50"
                onClick={() => onNavigate('subscription')}
              >
                Ver Planos
              </Button>
            </div>
          </Card>
        )}
      </main>
    </div>
  );
}
