'use client';

import { useState } from 'react';
import { UserProfile, Meal } from '@/lib/types';
import { AppState } from '@/lib/types';
import { meals, getMealsByPreferences } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Utensils, Flame, Beef, Wheat, Droplet } from 'lucide-react';

interface MealsViewProps {
  userProfile: UserProfile;
  onNavigate: (view: AppState['currentView']) => void;
}

export default function MealsView({ userProfile, onNavigate }: MealsViewProps) {
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [activeTab, setActiveTab] = useState('recommended');

  const recommendedMeals = getMealsByPreferences(userProfile.goal, userProfile.dietPreference);
  const allMeals = meals;

  const getMealTypeColor = (type: string) => {
    const colors = {
      breakfast: 'bg-yellow-100 text-yellow-800',
      lunch: 'bg-orange-100 text-orange-800',
      dinner: 'bg-purple-100 text-purple-800',
      snack: 'bg-green-100 text-green-800',
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getMealTypeLabel = (type: string) => {
    const labels = {
      breakfast: 'Café da Manhã',
      lunch: 'Almoço',
      dinner: 'Jantar',
      snack: 'Lanche',
    };
    return labels[type as keyof typeof labels] || type;
  };

  const breakfasts = recommendedMeals.filter(m => m.type === 'breakfast');
  const lunches = recommendedMeals.filter(m => m.type === 'lunch');
  const dinners = recommendedMeals.filter(m => m.type === 'dinner');
  const snacks = recommendedMeals.filter(m => m.type === 'snack');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/20 mb-4"
            onClick={() => onNavigate('dashboard')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-3xl font-bold mb-2">Plano Alimentar</h1>
          <p className="text-green-100">Refeições personalizadas para seu objetivo</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="recommended">Recomendadas</TabsTrigger>
            <TabsTrigger value="all">Todas as Refeições</TabsTrigger>
          </TabsList>

          {/* Recommended Meals */}
          <TabsContent value="recommended">
            <div className="space-y-8">
              {/* Breakfast */}
              {breakfasts.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Café da Manhã</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {breakfasts.map((meal) => (
                      <Card key={meal.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedMeal(meal)}>
                        {meal.imageUrl && (
                          <img src={meal.imageUrl} alt={meal.name} className="w-full h-48 object-cover" />
                        )}
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-800">{meal.name}</h3>
                            <Badge className={getMealTypeColor(meal.type)}>
                              {getMealTypeLabel(meal.type)}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-1">
                              <Flame className="w-4 h-4 text-orange-500" />
                              <span>{meal.calories} kcal</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Beef className="w-4 h-4 text-red-500" />
                              <span>{meal.protein}g prot</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Wheat className="w-4 h-4 text-yellow-600" />
                              <span>{meal.carbs}g carb</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Droplet className="w-4 h-4 text-blue-500" />
                              <span>{meal.fats}g gord</span>
                            </div>
                          </div>
                          <Button variant="outline" className="w-full">
                            Ver Receita
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Lunch */}
              {lunches.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Almoço</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {lunches.map((meal) => (
                      <Card key={meal.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedMeal(meal)}>
                        {meal.imageUrl && (
                          <img src={meal.imageUrl} alt={meal.name} className="w-full h-48 object-cover" />
                        )}
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-800">{meal.name}</h3>
                            <Badge className={getMealTypeColor(meal.type)}>
                              {getMealTypeLabel(meal.type)}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-1">
                              <Flame className="w-4 h-4 text-orange-500" />
                              <span>{meal.calories} kcal</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Beef className="w-4 h-4 text-red-500" />
                              <span>{meal.protein}g prot</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Wheat className="w-4 h-4 text-yellow-600" />
                              <span>{meal.carbs}g carb</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Droplet className="w-4 h-4 text-blue-500" />
                              <span>{meal.fats}g gord</span>
                            </div>
                          </div>
                          <Button variant="outline" className="w-full">
                            Ver Receita
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Dinner */}
              {dinners.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Jantar</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {dinners.map((meal) => (
                      <Card key={meal.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedMeal(meal)}>
                        {meal.imageUrl && (
                          <img src={meal.imageUrl} alt={meal.name} className="w-full h-48 object-cover" />
                        )}
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-800">{meal.name}</h3>
                            <Badge className={getMealTypeColor(meal.type)}>
                              {getMealTypeLabel(meal.type)}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-1">
                              <Flame className="w-4 h-4 text-orange-500" />
                              <span>{meal.calories} kcal</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Beef className="w-4 h-4 text-red-500" />
                              <span>{meal.protein}g prot</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Wheat className="w-4 h-4 text-yellow-600" />
                              <span>{meal.carbs}g carb</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Droplet className="w-4 h-4 text-blue-500" />
                              <span>{meal.fats}g gord</span>
                            </div>
                          </div>
                          <Button variant="outline" className="w-full">
                            Ver Receita
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Snacks */}
              {snacks.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Lanches</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {snacks.map((meal) => (
                      <Card key={meal.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedMeal(meal)}>
                        {meal.imageUrl && (
                          <img src={meal.imageUrl} alt={meal.name} className="w-full h-48 object-cover" />
                        )}
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="text-lg font-bold text-gray-800">{meal.name}</h3>
                            <Badge className={getMealTypeColor(meal.type)}>
                              {getMealTypeLabel(meal.type)}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                            <div className="flex items-center gap-1">
                              <Flame className="w-4 h-4 text-orange-500" />
                              <span>{meal.calories} kcal</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Beef className="w-4 h-4 text-red-500" />
                              <span>{meal.protein}g prot</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Wheat className="w-4 h-4 text-yellow-600" />
                              <span>{meal.carbs}g carb</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Droplet className="w-4 h-4 text-blue-500" />
                              <span>{meal.fats}g gord</span>
                            </div>
                          </div>
                          <Button variant="outline" className="w-full">
                            Ver Receita
                          </Button>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          {/* All Meals */}
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allMeals.map((meal) => (
                <Card key={meal.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedMeal(meal)}>
                  {meal.imageUrl && (
                    <img src={meal.imageUrl} alt={meal.name} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-800">{meal.name}</h3>
                      <Badge className={getMealTypeColor(meal.type)}>
                        {getMealTypeLabel(meal.type)}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                      <div className="flex items-center gap-1">
                        <Flame className="w-4 h-4 text-orange-500" />
                        <span>{meal.calories} kcal</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Beef className="w-4 h-4 text-red-500" />
                        <span>{meal.protein}g prot</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Wheat className="w-4 h-4 text-yellow-600" />
                        <span>{meal.carbs}g carb</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Droplet className="w-4 h-4 text-blue-500" />
                        <span>{meal.fats}g gord</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full">
                      Ver Receita
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Meal Detail Dialog */}
      <Dialog open={!!selectedMeal} onOpenChange={() => setSelectedMeal(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedMeal && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedMeal.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                {selectedMeal.imageUrl && (
                  <img src={selectedMeal.imageUrl} alt={selectedMeal.name} className="w-full h-64 object-cover rounded-lg" />
                )}

                <div className="grid grid-cols-4 gap-4">
                  <Card className="p-4 text-center">
                    <Flame className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-800">{selectedMeal.calories}</p>
                    <p className="text-sm text-gray-600">Calorias</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <Beef className="w-6 h-6 text-red-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-800">{selectedMeal.protein}g</p>
                    <p className="text-sm text-gray-600">Proteína</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <Wheat className="w-6 h-6 text-yellow-600 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-800">{selectedMeal.carbs}g</p>
                    <p className="text-sm text-gray-600">Carboidratos</p>
                  </Card>
                  <Card className="p-4 text-center">
                    <Droplet className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <p className="text-2xl font-bold text-gray-800">{selectedMeal.fats}g</p>
                    <p className="text-sm text-gray-600">Gorduras</p>
                  </Card>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Ingredientes</h3>
                  <ul className="space-y-2">
                    {selectedMeal.ingredients.map((ingredient, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        <span className="text-gray-700">{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Modo de Preparo</h3>
                  <ol className="space-y-3">
                    {selectedMeal.instructions.map((instruction, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <span className="text-gray-700 pt-0.5">{instruction}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
