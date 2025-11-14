// Dados mockados para o aplicativo

import { Exercise, Workout, Meal, Challenge, Goal, FitnessLevel, DietPreference } from './types';

// Exercícios por categoria
export const exercises: Exercise[] = [
  // Força - Peito
  {
    id: 'ex1',
    name: 'Supino Reto',
    category: 'strength',
    muscleGroup: 'Peito',
    difficulty: 'intermediate',
    duration: 15,
    sets: 4,
    reps: '8-12',
    videoUrl: 'https://www.youtube.com/embed/rT7DgCr-3pg',
    thumbnailUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop',
    description: 'Exercício fundamental para desenvolvimento do peitoral',
    equipment: ['Barra', 'Banco']
  },
  {
    id: 'ex2',
    name: 'Flexão de Braço',
    category: 'strength',
    muscleGroup: 'Peito',
    difficulty: 'beginner',
    duration: 10,
    sets: 3,
    reps: '10-15',
    videoUrl: 'https://www.youtube.com/embed/IODxDxX7oi4',
    thumbnailUrl: 'https://images.unsplash.com/photo-1598971639058-fab3c3109a00?w=400&h=300&fit=crop',
    description: 'Exercício clássico usando peso corporal',
    equipment: ['Peso Corporal']
  },
  // Força - Costas
  {
    id: 'ex3',
    name: 'Barra Fixa',
    category: 'strength',
    muscleGroup: 'Costas',
    difficulty: 'intermediate',
    duration: 12,
    sets: 4,
    reps: '6-10',
    videoUrl: 'https://www.youtube.com/embed/eGo4IYlbE5g',
    thumbnailUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop',
    description: 'Excelente para desenvolvimento das costas',
    equipment: ['Barra Fixa']
  },
  {
    id: 'ex4',
    name: 'Remada Curvada',
    category: 'strength',
    muscleGroup: 'Costas',
    difficulty: 'intermediate',
    duration: 15,
    sets: 4,
    reps: '8-12',
    videoUrl: 'https://www.youtube.com/embed/FWJR5Ve8bnQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop',
    description: 'Fortalece toda a região dorsal',
    equipment: ['Barra', 'Anilhas']
  },
  // Força - Pernas
  {
    id: 'ex5',
    name: 'Agachamento Livre',
    category: 'strength',
    muscleGroup: 'Pernas',
    difficulty: 'intermediate',
    duration: 20,
    sets: 4,
    reps: '8-12',
    videoUrl: 'https://www.youtube.com/embed/ultWZbUMPL8',
    thumbnailUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=400&h=300&fit=crop',
    description: 'Rei dos exercícios para pernas',
    equipment: ['Barra', 'Anilhas']
  },
  {
    id: 'ex6',
    name: 'Leg Press',
    category: 'strength',
    muscleGroup: 'Pernas',
    difficulty: 'beginner',
    duration: 15,
    sets: 4,
    reps: '10-15',
    videoUrl: 'https://www.youtube.com/embed/IZxyjW7MPJQ',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop',
    description: 'Exercício seguro para iniciantes',
    equipment: ['Leg Press']
  },
  // Cardio
  {
    id: 'ex7',
    name: 'Corrida na Esteira',
    category: 'cardio',
    muscleGroup: 'Cardio',
    difficulty: 'beginner',
    duration: 30,
    videoUrl: 'https://www.youtube.com/embed/8do0yg8TXdg',
    thumbnailUrl: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&h=300&fit=crop',
    description: 'Cardio clássico para queima de calorias',
    equipment: ['Esteira']
  },
  {
    id: 'ex8',
    name: 'HIIT - Burpees',
    category: 'cardio',
    muscleGroup: 'Corpo Todo',
    difficulty: 'advanced',
    duration: 20,
    sets: 5,
    reps: '10-15',
    videoUrl: 'https://www.youtube.com/embed/JZQA08SlJnM',
    thumbnailUrl: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=400&h=300&fit=crop',
    description: 'Exercício intenso de corpo inteiro',
    equipment: ['Peso Corporal']
  },
  // Flexibilidade
  {
    id: 'ex9',
    name: 'Alongamento Completo',
    category: 'flexibility',
    muscleGroup: 'Corpo Todo',
    difficulty: 'beginner',
    duration: 15,
    videoUrl: 'https://www.youtube.com/embed/g_tea8ZNk5A',
    thumbnailUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=300&fit=crop',
    description: 'Rotina de alongamento para todo o corpo',
    equipment: ['Tapete']
  },
  {
    id: 'ex10',
    name: 'Yoga para Iniciantes',
    category: 'flexibility',
    muscleGroup: 'Corpo Todo',
    difficulty: 'beginner',
    duration: 25,
    videoUrl: 'https://www.youtube.com/embed/v7AYKMP6rOE',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=400&h=300&fit=crop',
    description: 'Sequência básica de yoga',
    equipment: ['Tapete']
  }
];

// Treinos pré-montados
export const workouts: Workout[] = [
  {
    id: 'w1',
    name: 'Treino de Peito e Tríceps',
    description: 'Treino focado em peito e tríceps para ganho de massa',
    exercises: [exercises[0], exercises[1]],
    duration: 45,
    difficulty: 'intermediate',
    goal: ['gain_muscle']
  },
  {
    id: 'w2',
    name: 'Treino de Costas',
    description: 'Desenvolvimento completo das costas',
    exercises: [exercises[2], exercises[3]],
    duration: 50,
    difficulty: 'intermediate',
    goal: ['gain_muscle']
  },
  {
    id: 'w3',
    name: 'Treino de Pernas',
    description: 'Treino intenso para membros inferiores',
    exercises: [exercises[4], exercises[5]],
    duration: 60,
    difficulty: 'intermediate',
    goal: ['gain_muscle', 'improve_health']
  },
  {
    id: 'w4',
    name: 'Cardio Intenso',
    description: 'Treino cardiovascular para queima de gordura',
    exercises: [exercises[6], exercises[7]],
    duration: 40,
    difficulty: 'advanced',
    goal: ['lose_weight']
  },
  {
    id: 'w5',
    name: 'Flexibilidade e Mobilidade',
    description: 'Melhore sua flexibilidade e mobilidade',
    exercises: [exercises[8], exercises[9]],
    duration: 40,
    difficulty: 'beginner',
    goal: ['improve_health', 'maintain']
  }
];

// Refeições
export const meals: Meal[] = [
  // Café da manhã
  {
    id: 'm1',
    name: 'Omelete Proteica',
    type: 'breakfast',
    calories: 350,
    protein: 28,
    carbs: 12,
    fats: 22,
    ingredients: ['3 ovos', '50g queijo cottage', 'Espinafre', 'Tomate', 'Azeite'],
    instructions: [
      'Bata os ovos em uma tigela',
      'Adicione o queijo cottage',
      'Aqueça a frigideira com azeite',
      'Despeje a mistura e adicione espinafre e tomate',
      'Cozinhe por 3-4 minutos'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop',
    goal: ['gain_muscle', 'lose_weight'],
    dietPreference: ['balanced', 'high_protein', 'low_carb']
  },
  {
    id: 'm2',
    name: 'Aveia com Frutas',
    type: 'breakfast',
    calories: 320,
    protein: 12,
    carbs: 52,
    fats: 8,
    ingredients: ['60g aveia', 'Banana', 'Morangos', 'Mel', 'Canela'],
    instructions: [
      'Cozinhe a aveia com água ou leite',
      'Adicione frutas picadas',
      'Finalize com mel e canela'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400&h=300&fit=crop',
    goal: ['maintain', 'improve_health'],
    dietPreference: ['balanced', 'vegetarian', 'vegan']
  },
  // Almoço
  {
    id: 'm3',
    name: 'Frango Grelhado com Batata Doce',
    type: 'lunch',
    calories: 520,
    protein: 45,
    carbs: 55,
    fats: 12,
    ingredients: ['200g peito de frango', '200g batata doce', 'Brócolis', 'Azeite', 'Temperos'],
    instructions: [
      'Tempere o frango e grelhe',
      'Asse a batata doce',
      'Cozinhe o brócolis no vapor',
      'Monte o prato e regue com azeite'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=400&h=300&fit=crop',
    goal: ['gain_muscle', 'maintain'],
    dietPreference: ['balanced', 'high_protein']
  },
  {
    id: 'm4',
    name: 'Salada Completa com Atum',
    type: 'lunch',
    calories: 380,
    protein: 32,
    carbs: 28,
    fats: 16,
    ingredients: ['Alface', 'Tomate', '150g atum', 'Grão de bico', 'Azeite', 'Limão'],
    instructions: [
      'Lave e corte as folhas',
      'Adicione tomate e grão de bico',
      'Coloque o atum',
      'Tempere com azeite e limão'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop',
    goal: ['lose_weight', 'maintain'],
    dietPreference: ['balanced', 'high_protein', 'low_carb']
  },
  // Jantar
  {
    id: 'm5',
    name: 'Salmão com Legumes',
    type: 'dinner',
    calories: 480,
    protein: 38,
    carbs: 22,
    fats: 28,
    ingredients: ['180g salmão', 'Aspargos', 'Cenoura', 'Abobrinha', 'Limão'],
    instructions: [
      'Tempere o salmão com limão',
      'Asse no forno por 15 minutos',
      'Grelhe os legumes',
      'Sirva junto'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop',
    goal: ['gain_muscle', 'lose_weight', 'improve_health'],
    dietPreference: ['balanced', 'high_protein', 'low_carb']
  },
  {
    id: 'm6',
    name: 'Tofu com Quinoa',
    type: 'dinner',
    calories: 420,
    protein: 22,
    carbs: 48,
    fats: 16,
    ingredients: ['150g tofu', '100g quinoa', 'Vegetais variados', 'Shoyu', 'Gergelim'],
    instructions: [
      'Cozinhe a quinoa',
      'Grelhe o tofu em cubos',
      'Refogue os vegetais',
      'Misture tudo e tempere com shoyu'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    goal: ['maintain', 'improve_health'],
    dietPreference: ['vegetarian', 'vegan', 'balanced']
  },
  // Lanches
  {
    id: 'm7',
    name: 'Shake Proteico',
    type: 'snack',
    calories: 280,
    protein: 30,
    carbs: 25,
    fats: 8,
    ingredients: ['1 scoop whey protein', 'Banana', 'Leite', 'Pasta de amendoim'],
    instructions: [
      'Adicione todos os ingredientes no liquidificador',
      'Bata até ficar homogêneo',
      'Sirva gelado'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1622597467836-f3285f2131b8?w=400&h=300&fit=crop',
    goal: ['gain_muscle'],
    dietPreference: ['balanced', 'high_protein']
  },
  {
    id: 'm8',
    name: 'Mix de Castanhas',
    type: 'snack',
    calories: 180,
    protein: 6,
    carbs: 8,
    fats: 15,
    ingredients: ['Amêndoas', 'Castanha de caju', 'Nozes', 'Damasco seco'],
    instructions: [
      'Misture as castanhas',
      'Porcione em pequenas quantidades'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop',
    goal: ['maintain', 'improve_health'],
    dietPreference: ['balanced', 'vegetarian', 'vegan', 'low_carb']
  }
];

// Função para gerar desafios
export const generateChallenges = (): Challenge[] => {
  const today = new Date();
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  
  return [
    {
      id: 'c1',
      title: 'Treino Diário',
      description: 'Complete pelo menos 1 treino hoje',
      type: 'daily',
      goal: 1,
      unit: 'treino',
      progress: 0,
      startDate: today.toISOString(),
      endDate: new Date(today.setHours(23, 59, 59)).toISOString(),
      completed: false,
      reward: '50 pontos'
    },
    {
      id: 'c2',
      title: 'Guerreiro do Mês',
      description: 'Complete 20 treinos este mês',
      type: 'monthly',
      goal: 20,
      unit: 'treinos',
      progress: 0,
      startDate: new Date(today.getFullYear(), today.getMonth(), 1).toISOString(),
      endDate: endOfMonth.toISOString(),
      completed: false,
      reward: 'Badge Especial'
    },
    {
      id: 'c3',
      title: 'Hidratação',
      description: 'Beba 2 litros de água hoje',
      type: 'daily',
      goal: 2000,
      unit: 'ml',
      progress: 0,
      startDate: today.toISOString(),
      endDate: new Date(today.setHours(23, 59, 59)).toISOString(),
      completed: false,
      reward: '25 pontos'
    },
    {
      id: 'c4',
      title: 'Consistência',
      description: 'Treine 5 dias seguidos',
      type: 'monthly',
      goal: 5,
      unit: 'dias',
      progress: 0,
      startDate: today.toISOString(),
      endDate: endOfMonth.toISOString(),
      completed: false,
      reward: '200 pontos'
    }
  ];
};

// Função para filtrar treinos por objetivo
export const getWorkoutsByGoal = (goal: Goal): Workout[] => {
  return workouts.filter(workout => workout.goal.includes(goal));
};

// Função para filtrar refeições por objetivo e preferência
export const getMealsByPreferences = (goal: Goal, dietPreference: DietPreference): Meal[] => {
  return meals.filter(meal => 
    meal.goal.includes(goal) && meal.dietPreference.includes(dietPreference)
  );
};
