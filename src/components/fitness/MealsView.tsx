'use client';

import { useState, useEffect } from 'react';
import { UserProfile } from '@/lib/types';
import { AppState, CustomMeal, CustomMealFood } from '@/lib/types';
import { weeklyMealPlan } from '@/lib/weeklyMealPlan';
import { saveMealCompletion, getMealCompletionStatus, saveCustomMeal, getCustomMeals, deleteCustomMeal } from '@/lib/storage';
import { foodDatabase, searchFoods, getFoodById, foodCategories, FoodItem } from '@/lib/foodDatabase';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Flame, Beef, Wheat, Droplet, Check, DollarSign, Calendar, Plus, Search, X, Trash2, ChefHat } from 'lucide-react';
import Image from 'next/image';

interface MealsViewProps {
  userProfile: UserProfile;
  onNavigate: (view: AppState['currentView']) => void;
}

export default function MealsView({ userProfile, onNavigate }: MealsViewProps) {
  const [selectedDay, setSelectedDay] = useState<string>('monday');
  const [completedMeals, setCompletedMeals] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<'weekly' | 'custom'>('weekly');
  
  // Custom meal states
  const [customMeals, setCustomMeals] = useState<CustomMeal[]>([]);
  const [isCreatingMeal, setIsCreatingMeal] = useState(false);
  const [mealName, setMealName] = useState('');
  const [selectedFoods, setSelectedFoods] = useState<CustomMealFood[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const daysOfWeek = [
    { key: 'monday', label: 'Segunda' },
    { key: 'tuesday', label: 'Terça' },
    { key: 'wednesday', label: 'Quarta' },
    { key: 'thursday', label: 'Quinta' },
    { key: 'friday', label: 'Sexta' },
    { key: 'saturday', label: 'Sábado' },
    { key: 'sunday', label: 'Domingo' }
  ];

  const mealTypes = [
    { key: 'breakfast', label: 'Café da Manhã', icon: '☕' },
    { key: 'preworkout', label: 'Pré-Treino', icon: '💪' },
    { key: 'lunch', label: 'Almoço', icon: '🍽️' },
    { key: 'afternoonSnack', label: 'Café da Tarde', icon: '🥤' },
    { key: 'dinner', label: 'Jantar', icon: '🌙' }
  ];

  // Carregar status de conclusão e refeições personalizadas ao montar
  useEffect(() => {
    loadCompletionStatus();
    loadCustomMeals();
  }, [selectedDay]);

  const loadCompletionStatus = () => {
    const today = new Date().toISOString().split('T')[0];
    const status: Record<string, boolean> = {};
    
    mealTypes.forEach(mealType => {
      const key = `${selectedDay}-${mealType.key}`;
      status[key] = getMealCompletionStatus(today, selectedDay, mealType.key);
    });
    
    setCompletedMeals(status);
  };

  const loadCustomMeals = () => {
    setCustomMeals(getCustomMeals());
  };

  const toggleMealCompletion = (mealType: string, mealId: string) => {
    const today = new Date().toISOString().split('T')[0];
    const key = `${selectedDay}-${mealType}`;
    const newStatus = !completedMeals[key];
    
    saveMealCompletion({
      date: today,
      day: selectedDay,
      mealType: mealType as any,
      mealId: mealId,
      completed: newStatus
    });
    
    setCompletedMeals(prev => ({
      ...prev,
      [key]: newStatus
    }));
  };

  // Funções para refeições personalizadas
  const calculateTotals = (foods: CustomMealFood[]) => {
    return foods.reduce((acc, food) => ({
      calories: acc.calories + food.calories,
      protein: acc.protein + food.protein,
      carbs: acc.carbs + food.carbs,
      fats: acc.fats + food.fats,
      price: acc.price + food.price
    }), { calories: 0, protein: 0, carbs: 0, fats: 0, price: 0 });
  };

  const addFoodToMeal = (food: FoodItem) => {
    const quantity = quantities[food.id] || 100;
    const multiplier = quantity / 100;

    const customFood: CustomMealFood = {
      foodId: food.id,
      foodName: food.name,
      quantity: quantity,
      calories: Math.round(food.calories * multiplier),
      protein: Math.round(food.protein * multiplier * 10) / 10,
      carbs: Math.round(food.carbs * multiplier * 10) / 10,
      fats: Math.round(food.fats * multiplier * 10) / 10,
      price: Math.round((food.pricePerKg / 1000) * quantity * 100) / 100
    };

    setSelectedFoods(prev => [...prev, customFood]);
    setQuantities(prev => ({ ...prev, [food.id]: 100 }));
  };

  const removeFoodFromMeal = (index: number) => {
    setSelectedFoods(prev => prev.filter((_, i) => i !== index));
  };

  const saveNewCustomMeal = () => {
    if (!mealName.trim() || selectedFoods.length === 0) {
      alert('Por favor, adicione um nome e pelo menos um alimento à refeição.');
      return;
    }

    const totals = calculateTotals(selectedFoods);
    const newMeal: CustomMeal = {
      id: `custom-${Date.now()}`,
      name: mealName,
      foods: selectedFoods,
      totalCalories: totals.calories,
      totalProtein: totals.protein,
      totalCarbs: totals.carbs,
      totalFats: totals.fats,
      totalPrice: totals.price,
      createdAt: new Date().toISOString()
    };

    saveCustomMeal(newMeal);
    loadCustomMeals();
    
    // Reset form
    setMealName('');
    setSelectedFoods([]);
    setQuantities({});
    setIsCreatingMeal(false);
  };

  const deleteCustomMealHandler = (mealId: string) => {
    if (confirm('Tem certeza que deseja excluir esta refeição?')) {
      deleteCustomMeal(mealId);
      loadCustomMeals();
    }
  };

  const filteredFoods = searchFoods(searchQuery, selectedCategory);
  const currentDayMeals = weeklyMealPlan[selectedDay];
  const totals = calculateTotals(selectedFoods);

  const renderMealOptions = (mealType: string, mealLabel: string, icon: string) => {
    const meals = currentDayMeals[mealType as keyof typeof currentDayMeals];
    const key = `${selectedDay}-${mealType}`;
    const isCompleted = completedMeals[key];

    return (
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <span className="text-2xl">{icon}</span>
            {mealLabel}
          </h3>
          {isCompleted && (
            <Badge className="bg-green-600 text-white">
              <Check className="w-4 h-4 mr-1" />
              Concluída
            </Badge>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {meals.map((meal) => (
            <Card 
              key={meal.id} 
              className={`overflow-hidden hover:shadow-lg transition-all ${
                isCompleted ? 'opacity-60' : ''
              }`}
            >
              {/* Imagem da refeição */}
              <div className="relative h-48 w-full">
                <Image
                  src={meal.image}
                  alt={meal.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-800 mb-1">{meal.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">{meal.description}</p>
                    <div className="flex items-center gap-2">
                      <Badge 
                        className={meal.budgetType === 'economica' 
                          ? 'bg-blue-100 text-blue-800' 
                          : 'bg-purple-100 text-purple-800'}
                      >
                        <DollarSign className="w-3 h-3 mr-1" />
                        {meal.budgetType === 'economica' ? 'Opção Econômica' : 'Opção Premium'}
                      </Badge>
                      <span className="text-sm font-semibold text-green-700">{meal.estimatedCost}</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <Flame className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                    <p className="text-sm font-bold text-gray-800">{meal.calories}</p>
                    <p className="text-xs text-gray-600">kcal</p>
                  </div>
                  <div className="text-center">
                    <Beef className="w-4 h-4 text-red-500 mx-auto mb-1" />
                    <p className="text-sm font-bold text-gray-800">{meal.protein}g</p>
                    <p className="text-xs text-gray-600">prot</p>
                  </div>
                  <div className="text-center">
                    <Wheat className="w-4 h-4 text-yellow-600 mx-auto mb-1" />
                    <p className="text-sm font-bold text-gray-800">{meal.carbs}g</p>
                    <p className="text-xs text-gray-600">carb</p>
                  </div>
                  <div className="text-center">
                    <Droplet className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                    <p className="text-sm font-bold text-gray-800">{meal.fats}g</p>
                    <p className="text-xs text-gray-600">gord</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-gray-700 mb-2">Ingredientes:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {meal.ingredients.map((ingredient, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">•</span>
                        <span>{ingredient}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  onClick={() => toggleMealCompletion(mealType, meal.id)}
                  className={`w-full ${
                    isCompleted 
                      ? 'bg-gray-400 hover:bg-gray-500' 
                      : 'bg-green-600 hover:bg-green-700'
                  }`}
                >
                  {isCompleted ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Marcar como Não Concluída
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Marcar como Concluída
                    </>
                  )}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  };

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
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Plano Alimentar</h1>
          </div>
          <p className="text-green-100">Refeições planejadas e personalizadas para seus objetivos</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'weekly' | 'custom')} className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="weekly">Plano Semanal</TabsTrigger>
            <TabsTrigger value="custom">Refeições Personalizadas</TabsTrigger>
          </TabsList>

          {/* Weekly Plan Tab */}
          <TabsContent value="weekly">
            {/* Day Selector */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">Selecione o dia da semana:</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
                {daysOfWeek.map((day) => (
                  <Button
                    key={day.key}
                    onClick={() => setSelectedDay(day.key)}
                    variant={selectedDay === day.key ? 'default' : 'outline'}
                    className={`${
                      selectedDay === day.key
                        ? 'bg-green-600 hover:bg-green-700 text-white'
                        : 'hover:bg-green-50'
                    }`}
                  >
                    {day.label}
                  </Button>
                ))}
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="p-6 bg-blue-50 border-blue-200">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Opção Econômica</h3>
                    <p className="text-sm text-gray-600">Refeições econômicas e nutritivas para quem tem orçamento limitado</p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-purple-50 border-purple-200">
                <div className="flex items-start gap-3">
                  <div className="p-3 bg-purple-600 rounded-lg">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Opção Premium</h3>
                    <p className="text-sm text-gray-600">Refeições premium com ingredientes de maior qualidade</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Meals */}
            <div className="space-y-8">
              {mealTypes.map((mealType) => (
                <div key={mealType.key}>
                  {renderMealOptions(mealType.key, mealType.label, mealType.icon)}
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Custom Meals Tab */}
          <TabsContent value="custom">
            <div className="space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <ChefHat className="w-7 h-7 text-green-600" />
                    Monte Sua Refeição
                  </h2>
                  <p className="text-gray-600 mt-1">Crie refeições personalizadas com contador automático de macros</p>
                </div>
                {!isCreatingMeal && (
                  <Button
                    onClick={() => setIsCreatingMeal(true)}
                    className="bg-green-600 hover:bg-green-700"
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Nova Refeição
                  </Button>
                )}
              </div>

              {/* Create Meal Form */}
              {isCreatingMeal && (
                <Card className="p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
                  <div className="space-y-6">
                    {/* Meal Name */}
                    <div>
                      <Label htmlFor="mealName" className="text-gray-700 font-semibold">Nome da Refeição</Label>
                      <Input
                        id="mealName"
                        value={mealName}
                        onChange={(e) => setMealName(e.target.value)}
                        placeholder="Ex: Almoço Pós-Treino"
                        className="mt-2"
                      />
                    </div>

                    {/* Search Foods */}
                    <div>
                      <Label className="text-gray-700 font-semibold mb-2 block">Buscar Alimentos</Label>
                      <div className="flex gap-2 mb-3">
                        <div className="relative flex-1">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Buscar alimento..."
                            className="pl-10"
                          />
                        </div>
                        <select
                          value={selectedCategory}
                          onChange={(e) => setSelectedCategory(e.target.value)}
                          className="px-4 py-2 border rounded-lg bg-white"
                        >
                          {foodCategories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                          ))}
                        </select>
                      </div>

                      {/* Food List */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-64 overflow-y-auto p-2 bg-white rounded-lg border">
                        {filteredFoods.map(food => (
                          <div key={food.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                            <div className="flex-1">
                              <p className="font-semibold text-gray-800 text-sm">{food.name}</p>
                              <p className="text-xs text-gray-600">{food.category}</p>
                              <p className="text-xs text-gray-500 mt-1">
                                {food.calories}kcal | {food.protein}g prot | R$ {(food.pricePerKg / 1000 * 100).toFixed(2)}/100g
                              </p>
                            </div>
                            <div className="flex items-center gap-2">
                              <Input
                                type="number"
                                value={quantities[food.id] || 100}
                                onChange={(e) => setQuantities(prev => ({ ...prev, [food.id]: Number(e.target.value) }))}
                                className="w-20 h-8 text-sm"
                                min="1"
                              />
                              <span className="text-xs text-gray-600">g</span>
                              <Button
                                size="sm"
                                onClick={() => addFoodToMeal(food)}
                                className="bg-green-600 hover:bg-green-700 h-8 px-3"
                              >
                                <Plus className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Selected Foods */}
                    {selectedFoods.length > 0 && (
                      <div>
                        <Label className="text-gray-700 font-semibold mb-2 block">Alimentos Adicionados</Label>
                        <div className="space-y-2 mb-4">
                          {selectedFoods.map((food, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                              <div className="flex-1">
                                <p className="font-semibold text-gray-800">{food.foodName}</p>
                                <p className="text-sm text-gray-600">
                                  {food.quantity}g | {food.calories}kcal | {food.protein}g prot | {food.carbs}g carb | {food.fats}g gord | R$ {food.price.toFixed(2)}
                                </p>
                              </div>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => removeFoodFromMeal(index)}
                                className="text-red-600 hover:text-red-700 hover:bg-red-50"
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          ))}
                        </div>

                        {/* Totals */}
                        <Card className="p-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                          <h4 className="font-bold mb-3 text-lg">Totais da Refeição</h4>
                          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                            <div className="text-center">
                              <Flame className="w-5 h-5 mx-auto mb-1" />
                              <p className="text-2xl font-bold">{totals.calories}</p>
                              <p className="text-xs text-green-100">kcal</p>
                            </div>
                            <div className="text-center">
                              <Beef className="w-5 h-5 mx-auto mb-1" />
                              <p className="text-2xl font-bold">{totals.protein.toFixed(1)}g</p>
                              <p className="text-xs text-green-100">proteína</p>
                            </div>
                            <div className="text-center">
                              <Wheat className="w-5 h-5 mx-auto mb-1" />
                              <p className="text-2xl font-bold">{totals.carbs.toFixed(1)}g</p>
                              <p className="text-xs text-green-100">carboidrato</p>
                            </div>
                            <div className="text-center">
                              <Droplet className="w-5 h-5 mx-auto mb-1" />
                              <p className="text-2xl font-bold">{totals.fats.toFixed(1)}g</p>
                              <p className="text-xs text-green-100">gordura</p>
                            </div>
                            <div className="text-center">
                              <DollarSign className="w-5 h-5 mx-auto mb-1" />
                              <p className="text-2xl font-bold">R$ {totals.price.toFixed(2)}</p>
                              <p className="text-xs text-green-100">custo</p>
                            </div>
                          </div>
                        </Card>
                      </div>
                    )}

                    {/* Actions */}
                    <div className="flex gap-3">
                      <Button
                        onClick={saveNewCustomMeal}
                        className="flex-1 bg-green-600 hover:bg-green-700"
                        disabled={!mealName.trim() || selectedFoods.length === 0}
                      >
                        <Check className="w-4 h-4 mr-2" />
                        Salvar Refeição
                      </Button>
                      <Button
                        onClick={() => {
                          setIsCreatingMeal(false);
                          setMealName('');
                          setSelectedFoods([]);
                          setQuantities({});
                        }}
                        variant="outline"
                      >
                        Cancelar
                      </Button>
                    </div>
                  </div>
                </Card>
              )}

              {/* Saved Custom Meals */}
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Suas Refeições Personalizadas</h3>
                {customMeals.length === 0 ? (
                  <Card className="p-8 text-center">
                    <ChefHat className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-600">Você ainda não criou nenhuma refeição personalizada.</p>
                    <p className="text-sm text-gray-500 mt-2">Clique em "Nova Refeição" para começar!</p>
                  </Card>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {customMeals.map(meal => (
                      <Card key={meal.id} className="overflow-hidden hover:shadow-lg transition-all">
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <h4 className="text-lg font-bold text-gray-800">{meal.name}</h4>
                            <Button
                              size="sm"
                              variant="ghost"
                              onClick={() => deleteCustomMealHandler(meal.id)}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50"
                            >
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>

                          <div className="grid grid-cols-4 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                            <div className="text-center">
                              <Flame className="w-4 h-4 text-orange-500 mx-auto mb-1" />
                              <p className="text-sm font-bold text-gray-800">{meal.totalCalories}</p>
                              <p className="text-xs text-gray-600">kcal</p>
                            </div>
                            <div className="text-center">
                              <Beef className="w-4 h-4 text-red-500 mx-auto mb-1" />
                              <p className="text-sm font-bold text-gray-800">{meal.totalProtein.toFixed(1)}g</p>
                              <p className="text-xs text-gray-600">prot</p>
                            </div>
                            <div className="text-center">
                              <Wheat className="w-4 h-4 text-yellow-600 mx-auto mb-1" />
                              <p className="text-sm font-bold text-gray-800">{meal.totalCarbs.toFixed(1)}g</p>
                              <p className="text-xs text-gray-600">carb</p>
                            </div>
                            <div className="text-center">
                              <Droplet className="w-4 h-4 text-blue-500 mx-auto mb-1" />
                              <p className="text-sm font-bold text-gray-800">{meal.totalFats.toFixed(1)}g</p>
                              <p className="text-xs text-gray-600">gord</p>
                            </div>
                          </div>

                          <div className="mb-4">
                            <p className="text-sm font-semibold text-gray-700 mb-2">Alimentos:</p>
                            <ul className="text-sm text-gray-600 space-y-1">
                              {meal.foods.map((food, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-green-600 mt-0.5">•</span>
                                  <span>{food.foodName} ({food.quantity}g)</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="pt-4 border-t">
                            <div className="flex items-center justify-between">
                              <span className="text-sm text-gray-600">Custo estimado:</span>
                              <span className="text-lg font-bold text-green-700">R$ {meal.totalPrice.toFixed(2)}</span>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
