'use client';

import { UserProfile, WorkoutLog } from '@/lib/types';
import { AppState } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, TrendingUp, Calendar, Dumbbell, Flame } from 'lucide-react';

interface ProgressViewProps {
  userProfile: UserProfile;
  workoutLogs: WorkoutLog[];
  onNavigate: (view: AppState['currentView']) => void;
}

export default function ProgressView({ userProfile, workoutLogs, onNavigate }: ProgressViewProps) {
  const totalWorkouts = workoutLogs.length;
  const totalMinutes = workoutLogs.reduce((sum, log) => sum + log.duration, 0);
  const totalHours = Math.floor(totalMinutes / 60);

  // Workouts por semana
  const last7Days = new Date();
  last7Days.setDate(last7Days.getDate() - 7);
  const weekWorkouts = workoutLogs.filter(log => new Date(log.date) >= last7Days).length;

  // Workouts por mês
  const last30Days = new Date();
  last30Days.setDate(last30Days.getDate() - 30);
  const monthWorkouts = workoutLogs.filter(log => new Date(log.date) >= last30Days).length;

  // Últimos treinos
  const recentWorkouts = [...workoutLogs]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 10);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
            onClick={() => onNavigate('dashboard')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold mb-2">Seu Progresso</h1>
          <p className="text-purple-100">Acompanhe sua evolução</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white">
            <div className="flex items-center justify-between mb-2">
              <Dumbbell className="w-8 h-8" />
              <span className="text-3xl font-bold">{totalWorkouts}</span>
            </div>
            <p className="text-orange-100">Total de Treinos</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
            <div className="flex items-center justify-between mb-2">
              <Flame className="w-8 h-8" />
              <span className="text-3xl font-bold">{totalHours}h</span>
            </div>
            <p className="text-blue-100">Horas Treinadas</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="w-8 h-8" />
              <span className="text-3xl font-bold">{weekWorkouts}</span>
            </div>
            <p className="text-green-100">Treinos esta Semana</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8" />
              <span className="text-3xl font-bold">{monthWorkouts}</span>
            </div>
            <p className="text-purple-100">Treinos este Mês</p>
          </Card>
        </div>

        {/* Profile Info */}
        <Card className="p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Informações do Perfil</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-600 mb-1">Peso Atual</p>
              <p className="text-2xl font-bold text-gray-800">{userProfile.weight} kg</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Altura</p>
              <p className="text-2xl font-bold text-gray-800">{userProfile.height} cm</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">IMC</p>
              <p className="text-2xl font-bold text-gray-800">
                {(userProfile.weight / Math.pow(userProfile.height / 100, 2)).toFixed(1)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Idade</p>
              <p className="text-2xl font-bold text-gray-800">{userProfile.age} anos</p>
            </div>
          </div>
        </Card>

        {/* Recent Workouts */}
        <Card className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Histórico de Treinos</h2>
          
          {recentWorkouts.length > 0 ? (
            <div className="space-y-4">
              {recentWorkouts.map((log) => (
                <div key={log.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                      <Dumbbell className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{log.workoutName}</h3>
                      <p className="text-sm text-gray-600">{formatDate(log.date)}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-800">{log.duration} min</p>
                    <p className="text-sm text-gray-600">{log.exercises.length} exercícios</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Dumbbell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 mb-4">Nenhum treino registrado ainda</p>
              <Button
                className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                onClick={() => onNavigate('workouts')}
              >
                Começar Primeiro Treino
              </Button>
            </div>
          )}
        </Card>
      </main>
    </div>
  );
}
