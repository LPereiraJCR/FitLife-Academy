'use client';

import { Challenge } from '@/lib/types';
import { AppState } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Trophy, Calendar, Target, CheckCircle2 } from 'lucide-react';

interface ChallengesViewProps {
  challenges: Challenge[];
  onNavigate: (view: AppState['currentView']) => void;
}

export default function ChallengesView({ challenges, onNavigate }: ChallengesViewProps) {
  const activeChallenges = challenges.filter(c => !c.completed);
  const completedChallenges = challenges.filter(c => c.completed);
  const dailyChallenges = activeChallenges.filter(c => c.type === 'daily');
  const monthlyChallenges = activeChallenges.filter(c => c.type === 'monthly');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });
  };

  const getDaysRemaining = (endDate: string) => {
    const end = new Date(endDate);
    const now = new Date();
    const diff = end.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
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
          <h1 className="text-3xl font-bold mb-2">Desafios</h1>
          <p className="text-purple-100">Complete desafios e ganhe recompensas!</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-gradient-to-br from-orange-500 to-red-500 text-white">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8" />
              <span className="text-3xl font-bold">{activeChallenges.length}</span>
            </div>
            <p className="text-orange-100">Desafios Ativos</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-green-500 to-emerald-500 text-white">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle2 className="w-8 h-8" />
              <span className="text-3xl font-bold">{completedChallenges.length}</span>
            </div>
            <p className="text-green-100">Completados</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
            <div className="flex items-center justify-between mb-2">
              <Trophy className="w-8 h-8" />
              <span className="text-3xl font-bold">{completedChallenges.length * 50}</span>
            </div>
            <p className="text-purple-100">Pontos Ganhos</p>
          </Card>
        </div>

        {/* Daily Challenges */}
        {dailyChallenges.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Calendar className="w-6 h-6 text-orange-600" />
              Desafios Diários
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {dailyChallenges.map((challenge) => (
                <Card key={challenge.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{challenge.title}</h3>
                      <p className="text-gray-600">{challenge.description}</p>
                    </div>
                    <Badge className="bg-orange-100 text-orange-800">
                      {getDaysRemaining(challenge.endDate)}h restantes
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Progresso</span>
                      <span className="font-semibold text-gray-800">
                        {challenge.progress}/{challenge.goal} {challenge.unit}
                      </span>
                    </div>
                    <Progress 
                      value={(challenge.progress / challenge.goal) * 100} 
                      className="h-3"
                    />
                  </div>

                  {challenge.reward && (
                    <div className="flex items-center gap-2 text-sm">
                      <Trophy className="w-4 h-4 text-yellow-600" />
                      <span className="text-gray-600">Recompensa: <span className="font-semibold text-yellow-600">{challenge.reward}</span></span>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Monthly Challenges */}
        {monthlyChallenges.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <Trophy className="w-6 h-6 text-purple-600" />
              Desafios Mensais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {monthlyChallenges.map((challenge) => (
                <Card key={challenge.id} className="p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{challenge.title}</h3>
                      <p className="text-gray-600">{challenge.description}</p>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">
                      {getDaysRemaining(challenge.endDate)} dias
                    </Badge>
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span className="text-gray-600">Progresso</span>
                      <span className="font-semibold text-gray-800">
                        {challenge.progress}/{challenge.goal} {challenge.unit}
                      </span>
                    </div>
                    <Progress 
                      value={(challenge.progress / challenge.goal) * 100} 
                      className="h-3"
                    />
                  </div>

                  {challenge.reward && (
                    <div className="flex items-center gap-2 text-sm">
                      <Trophy className="w-4 h-4 text-yellow-600" />
                      <span className="text-gray-600">Recompensa: <span className="font-semibold text-yellow-600">{challenge.reward}</span></span>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Completed Challenges */}
        {completedChallenges.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-green-600" />
              Desafios Completados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {completedChallenges.map((challenge) => (
                <Card key={challenge.id} className="p-6 bg-green-50 border-green-200">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-gray-800">{challenge.title}</h3>
                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{challenge.description}</p>
                  <div className="flex items-center gap-2 text-sm">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                    <span className="font-semibold text-yellow-600">{challenge.reward}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {activeChallenges.length === 0 && completedChallenges.length === 0 && (
          <Card className="p-12 text-center">
            <Trophy className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">Nenhum desafio disponível</h3>
            <p className="text-gray-600">Novos desafios serão adicionados em breve!</p>
          </Card>
        )}
      </main>
    </div>
  );
}
