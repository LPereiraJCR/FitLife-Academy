'use client';

import { UserProfile } from '@/lib/types';
import { AppState } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Check, Crown, Zap, Star } from 'lucide-react';

interface SubscriptionViewProps {
  userProfile: UserProfile;
  onUpdateProfile: (updates: Partial<UserProfile>) => void;
  onNavigate: (view: AppState['currentView']) => void;
}

export default function SubscriptionView({ userProfile, onUpdateProfile, onNavigate }: SubscriptionViewProps) {
  const handleSelectPlan = (plan: 'free' | 'monthly' | 'quarterly' | 'annual') => {
    const expiryDate = new Date();
    
    switch (plan) {
      case 'monthly':
        expiryDate.setMonth(expiryDate.getMonth() + 1);
        break;
      case 'quarterly':
        expiryDate.setMonth(expiryDate.getMonth() + 3);
        break;
      case 'annual':
        expiryDate.setFullYear(expiryDate.getFullYear() + 1);
        break;
    }

    onUpdateProfile({
      subscriptionPlan: plan,
      subscriptionExpiry: plan !== 'free' ? expiryDate.toISOString() : undefined,
    });

    if (plan !== 'free') {
      alert(`Plano ${plan === 'monthly' ? 'Mensal' : plan === 'quarterly' ? 'Trimestral' : 'Anual'} ativado com sucesso! 🎉`);
    }
  };

  const plans = [
    {
      id: 'free',
      name: 'Gratuito',
      price: 'R$ 0',
      period: '/mês',
      icon: Star,
      color: 'from-gray-500 to-gray-600',
      features: [
        'Acesso a treinos básicos',
        'Plano alimentar básico',
        'Registro de progresso',
        'Desafios diários',
      ],
      limitations: [
        'Sem vídeo aulas premium',
        'Sem planos personalizados',
        'Anúncios',
      ],
    },
    {
      id: 'monthly',
      name: 'Mensal',
      price: 'R$ 49,90',
      period: '/mês',
      icon: Zap,
      color: 'from-orange-500 to-red-500',
      popular: false,
      features: [
        'Todos os treinos com vídeo aulas',
        'Planos alimentares personalizados',
        'Acompanhamento detalhado',
        'Desafios exclusivos',
        'Sem anúncios',
        'Suporte prioritário',
      ],
    },
    {
      id: 'quarterly',
      name: 'Trimestral',
      price: 'R$ 129,90',
      period: '/3 meses',
      icon: Crown,
      color: 'from-purple-500 to-pink-500',
      popular: true,
      savings: 'Economize 13%',
      features: [
        'Todos os benefícios do plano mensal',
        'Consulta nutricional online',
        'Planos de treino avançados',
        'Receitas exclusivas',
        'Comunidade VIP',
        'E-books fitness',
      ],
    },
    {
      id: 'annual',
      name: 'Anual',
      price: 'R$ 449,90',
      period: '/ano',
      icon: Crown,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      savings: 'Economize 25%',
      features: [
        'Todos os benefícios do plano trimestral',
        '3 consultas nutricionais',
        'Avaliação física completa',
        'Programa de treino personalizado',
        'Acesso vitalício a conteúdos',
        'Certificado de conclusão',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
            onClick={() => onNavigate('dashboard')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold mb-2">Escolha seu Plano</h1>
          <p className="text-orange-100">Desbloqueie todo o potencial do FitLife Academy</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Current Plan */}
        {userProfile.subscriptionPlan && (
          <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">Plano Atual</h3>
                <p className="text-gray-600">
                  {userProfile.subscriptionPlan === 'free' && 'Gratuito'}
                  {userProfile.subscriptionPlan === 'monthly' && 'Mensal'}
                  {userProfile.subscriptionPlan === 'quarterly' && 'Trimestral'}
                  {userProfile.subscriptionPlan === 'annual' && 'Anual'}
                </p>
              </div>
              {userProfile.subscriptionExpiry && (
                <Badge className="bg-blue-600 text-white">
                  Válido até {new Date(userProfile.subscriptionExpiry).toLocaleDateString('pt-BR')}
                </Badge>
              )}
            </div>
          </Card>
        )}

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const isCurrentPlan = userProfile.subscriptionPlan === plan.id;

            return (
              <Card
                key={plan.id}
                className={`relative overflow-hidden hover:shadow-2xl transition-all ${
                  plan.popular ? 'ring-2 ring-purple-600 scale-105' : ''
                } ${isCurrentPlan ? 'border-green-500 border-2' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 text-sm font-bold rounded-bl-lg">
                    POPULAR
                  </div>
                )}

                {isCurrentPlan && (
                  <div className="absolute top-0 left-0 bg-green-600 text-white px-4 py-1 text-sm font-bold rounded-br-lg">
                    PLANO ATUAL
                  </div>
                )}

                <div className={`bg-gradient-to-r ${plan.color} p-6 text-white`}>
                  <Icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold">{plan.price.split(' ')[1]}</span>
                    <span className="text-lg opacity-90">{plan.period}</span>
                  </div>
                  {plan.savings && (
                    <Badge className="mt-2 bg-white/20 text-white border-white/30">
                      {plan.savings}
                    </Badge>
                  )}
                </div>

                <div className="p-6">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.limitations && (
                    <ul className="space-y-2 mb-6 pb-6 border-b">
                      {plan.limitations.map((limitation, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-gray-400 text-sm">✗ {limitation}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <Button
                    className={`w-full ${
                      isCurrentPlan
                        ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                        : `bg-gradient-to-r ${plan.color} hover:opacity-90`
                    }`}
                    disabled={isCurrentPlan}
                    onClick={() => handleSelectPlan(plan.id as any)}
                  >
                    {isCurrentPlan ? 'Plano Ativo' : 'Escolher Plano'}
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Por que escolher o FitLife Academy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Treinos Eficientes</h3>
              <p className="text-gray-600">
                Programas desenvolvidos por profissionais certificados para resultados reais
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Nutrição Personalizada</h3>
              <p className="text-gray-600">
                Planos alimentares adaptados aos seus objetivos e preferências
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Suporte Completo</h3>
              <p className="text-gray-600">
                Acompanhamento e suporte para você alcançar suas metas
              </p>
            </Card>
          </div>
        </div>

        {/* FAQ */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Perguntas Frequentes
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="p-6">
              <h3 className="font-bold text-gray-800 mb-2">Posso cancelar a qualquer momento?</h3>
              <p className="text-gray-600">
                Sim! Você pode cancelar sua assinatura a qualquer momento sem taxas adicionais.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-gray-800 mb-2">Os treinos são adequados para iniciantes?</h3>
              <p className="text-gray-600">
                Absolutamente! Temos treinos para todos os níveis, desde iniciantes até avançados.
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="font-bold text-gray-800 mb-2">Preciso de equipamentos?</h3>
              <p className="text-gray-600">
                Oferecemos treinos com e sem equipamentos. Você pode treinar em casa ou na academia.
              </p>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
