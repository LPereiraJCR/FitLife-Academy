'use client';

import { useState } from 'react';
import { UserProfile, Goal, FitnessLevel, WorkoutFrequency, DietPreference } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Dumbbell, Target, Activity, Utensils, ArrowRight, ArrowLeft } from 'lucide-react';

interface QuizProps {
  onComplete: (profile: UserProfile) => void;
}

export default function Quiz({ onComplete }: QuizProps) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    weight: '',
    height: '',
    goal: '' as Goal,
    fitnessLevel: '' as FitnessLevel,
    workoutFrequency: '' as WorkoutFrequency,
    dietPreference: '' as DietPreference,
  });

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleComplete = () => {
    const profile: UserProfile = {
      id: Date.now().toString(),
      name: formData.name,
      age: parseInt(formData.age),
      weight: parseFloat(formData.weight),
      height: parseFloat(formData.height),
      goal: formData.goal,
      fitnessLevel: formData.fitnessLevel,
      workoutFrequency: formData.workoutFrequency,
      dietPreference: formData.dietPreference,
      createdAt: new Date().toISOString(),
      hasCompletedQuiz: true,
      subscriptionPlan: 'free',
    };
    onComplete(profile);
  };

  const isStepValid = () => {
    switch (step) {
      case 0:
        return formData.name && formData.age && formData.weight && formData.height;
      case 1:
        return formData.goal;
      case 2:
        return formData.fitnessLevel;
      case 3:
        return formData.workoutFrequency;
      case 4:
        return formData.dietPreference;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 p-8 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Dumbbell className="w-10 h-10" />
            <h1 className="text-3xl font-bold">FitLife Academy</h1>
          </div>
          <p className="text-orange-100">Vamos personalizar sua jornada fitness!</p>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-sm mb-2">
              <span>Progresso</span>
              <span>{Math.round(((step + 1) / 5) * 100)}%</span>
            </div>
            <div className="h-2 bg-orange-300 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-300"
                style={{ width: `${((step + 1) / 5) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Step 0: Informações Básicas */}
          {step === 0 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Informações Básicas</h2>
                <p className="text-gray-600">Conte-nos um pouco sobre você</p>
              </div>

              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Nome Completo</Label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="age">Idade</Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="25"
                      value={formData.age}
                      onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="weight">Peso (kg)</Label>
                    <Input
                      id="weight"
                      type="number"
                      step="0.1"
                      placeholder="70"
                      value={formData.weight}
                      onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="height">Altura (cm)</Label>
                    <Input
                      id="height"
                      type="number"
                      placeholder="170"
                      value={formData.height}
                      onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                      className="mt-1"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Objetivo */}
          {step === 1 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center mb-8">
                <Target className="w-16 h-16 mx-auto text-orange-600 mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Qual é seu objetivo?</h2>
                <p className="text-gray-600">Escolha o que melhor descreve sua meta</p>
              </div>

              <RadioGroup value={formData.goal} onValueChange={(value) => setFormData({ ...formData, goal: value as Goal })}>
                <div className="space-y-3">
                  {[
                    { value: 'lose_weight', label: 'Perder Peso', desc: 'Queimar gordura e definir' },
                    { value: 'gain_muscle', label: 'Ganhar Massa Muscular', desc: 'Hipertrofia e força' },
                    { value: 'maintain', label: 'Manter Forma', desc: 'Manutenção e equilíbrio' },
                    { value: 'improve_health', label: 'Melhorar Saúde', desc: 'Bem-estar geral' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.goal === option.value
                          ? 'border-orange-600 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <RadioGroupItem value={option.value} id={option.value} className="mr-4" />
                      <div>
                        <div className="font-semibold text-gray-800">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 2: Nível de Condicionamento */}
          {step === 2 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center mb-8">
                <Activity className="w-16 h-16 mx-auto text-orange-600 mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Nível de Condicionamento</h2>
                <p className="text-gray-600">Como você avalia sua experiência?</p>
              </div>

              <RadioGroup value={formData.fitnessLevel} onValueChange={(value) => setFormData({ ...formData, fitnessLevel: value as FitnessLevel })}>
                <div className="space-y-3">
                  {[
                    { value: 'beginner', label: 'Iniciante', desc: 'Pouca ou nenhuma experiência' },
                    { value: 'intermediate', label: 'Intermediário', desc: 'Treino regular há alguns meses' },
                    { value: 'advanced', label: 'Avançado', desc: 'Treino consistente há anos' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.fitnessLevel === option.value
                          ? 'border-orange-600 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <RadioGroupItem value={option.value} id={option.value} className="mr-4" />
                      <div>
                        <div className="font-semibold text-gray-800">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 3: Frequência de Treino */}
          {step === 3 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center mb-8">
                <Dumbbell className="w-16 h-16 mx-auto text-orange-600 mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Frequência de Treino</h2>
                <p className="text-gray-600">Quantos dias por semana você pode treinar?</p>
              </div>

              <RadioGroup value={formData.workoutFrequency} onValueChange={(value) => setFormData({ ...formData, workoutFrequency: value as WorkoutFrequency })}>
                <div className="space-y-3">
                  {[
                    { value: '2-3', label: '2-3 dias por semana', desc: 'Ideal para iniciantes' },
                    { value: '4-5', label: '4-5 dias por semana', desc: 'Rotina equilibrada' },
                    { value: '6-7', label: '6-7 dias por semana', desc: 'Dedicação máxima' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.workoutFrequency === option.value
                          ? 'border-orange-600 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <RadioGroupItem value={option.value} id={option.value} className="mr-4" />
                      <div>
                        <div className="font-semibold text-gray-800">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Step 4: Preferência Alimentar */}
          {step === 4 && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="text-center mb-8">
                <Utensils className="w-16 h-16 mx-auto text-orange-600 mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Preferência Alimentar</h2>
                <p className="text-gray-600">Qual tipo de dieta você prefere?</p>
              </div>

              <RadioGroup value={formData.dietPreference} onValueChange={(value) => setFormData({ ...formData, dietPreference: value as DietPreference })}>
                <div className="space-y-3">
                  {[
                    { value: 'balanced', label: 'Balanceada', desc: 'Variedade de todos os grupos' },
                    { value: 'low_carb', label: 'Low Carb', desc: 'Redução de carboidratos' },
                    { value: 'high_protein', label: 'Alta Proteína', desc: 'Foco em proteínas' },
                    { value: 'vegetarian', label: 'Vegetariana', desc: 'Sem carnes' },
                    { value: 'vegan', label: 'Vegana', desc: 'Sem produtos animais' },
                  ].map((option) => (
                    <label
                      key={option.value}
                      className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all ${
                        formData.dietPreference === option.value
                          ? 'border-orange-600 bg-orange-50'
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      <RadioGroupItem value={option.value} id={option.value} className="mr-4" />
                      <div>
                        <div className="font-semibold text-gray-800">{option.label}</div>
                        <div className="text-sm text-gray-600">{option.desc}</div>
                      </div>
                    </label>
                  ))}
                </div>
              </RadioGroup>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-4 mt-8">
            {step > 0 && (
              <Button
                onClick={handleBack}
                variant="outline"
                className="flex-1"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Voltar
              </Button>
            )}
            
            {step < 4 ? (
              <Button
                onClick={handleNext}
                disabled={!isStepValid()}
                className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                Próximo
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleComplete}
                disabled={!isStepValid()}
                className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
              >
                Começar Jornada
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
