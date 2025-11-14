// Base de dados de alimentos com valores nutricionais por 100g
export interface FoodItem {
  id: string;
  name: string;
  category: string;
  // Valores por 100g
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  pricePerKg: number; // Preço médio por kg em R$
}

export const foodDatabase: FoodItem[] = [
  // Proteínas
  {
    id: 'frango-peito',
    name: 'Peito de Frango',
    category: 'Proteínas',
    calories: 165,
    protein: 31,
    carbs: 0,
    fats: 3.6,
    pricePerKg: 18.90
  },
  {
    id: 'carne-patinho',
    name: 'Carne Bovina (Patinho)',
    category: 'Proteínas',
    calories: 143,
    protein: 26,
    carbs: 0,
    fats: 4,
    pricePerKg: 35.00
  },
  {
    id: 'tilapia',
    name: 'Tilápia',
    category: 'Proteínas',
    calories: 96,
    protein: 20,
    carbs: 0,
    fats: 1.7,
    pricePerKg: 22.00
  },
  {
    id: 'ovo',
    name: 'Ovo (unidade 50g)',
    category: 'Proteínas',
    calories: 155,
    protein: 13,
    carbs: 1.1,
    fats: 11,
    pricePerKg: 12.00
  },
  {
    id: 'atum-lata',
    name: 'Atum em Lata',
    category: 'Proteínas',
    calories: 116,
    protein: 26,
    carbs: 0,
    fats: 0.8,
    pricePerKg: 45.00
  },
  {
    id: 'queijo-cottage',
    name: 'Queijo Cottage',
    category: 'Proteínas',
    calories: 98,
    protein: 11,
    carbs: 3.4,
    fats: 4.3,
    pricePerKg: 28.00
  },
  {
    id: 'peito-peru',
    name: 'Peito de Peru',
    category: 'Proteínas',
    calories: 104,
    protein: 24,
    carbs: 0.6,
    fats: 0.7,
    pricePerKg: 42.00
  },

  // Carboidratos
  {
    id: 'arroz-branco',
    name: 'Arroz Branco Cozido',
    category: 'Carboidratos',
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fats: 0.3,
    pricePerKg: 6.50
  },
  {
    id: 'arroz-integral',
    name: 'Arroz Integral Cozido',
    category: 'Carboidratos',
    calories: 111,
    protein: 2.6,
    carbs: 23,
    fats: 0.9,
    pricePerKg: 8.00
  },
  {
    id: 'batata-doce',
    name: 'Batata Doce Cozida',
    category: 'Carboidratos',
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fats: 0.1,
    pricePerKg: 5.50
  },
  {
    id: 'batata-inglesa',
    name: 'Batata Inglesa Cozida',
    category: 'Carboidratos',
    calories: 77,
    protein: 2,
    carbs: 17,
    fats: 0.1,
    pricePerKg: 4.00
  },
  {
    id: 'macarrao-integral',
    name: 'Macarrão Integral Cozido',
    category: 'Carboidratos',
    calories: 124,
    protein: 5,
    carbs: 26,
    fats: 0.5,
    pricePerKg: 9.00
  },
  {
    id: 'aveia',
    name: 'Aveia em Flocos',
    category: 'Carboidratos',
    calories: 389,
    protein: 17,
    carbs: 66,
    fats: 7,
    pricePerKg: 12.00
  },
  {
    id: 'pao-integral',
    name: 'Pão Integral (fatia)',
    category: 'Carboidratos',
    calories: 247,
    protein: 13,
    carbs: 41,
    fats: 3.4,
    pricePerKg: 15.00
  },
  {
    id: 'tapioca',
    name: 'Tapioca (goma)',
    category: 'Carboidratos',
    calories: 358,
    protein: 0.2,
    carbs: 88,
    fats: 0.02,
    pricePerKg: 18.00
  },

  // Vegetais
  {
    id: 'brocolis',
    name: 'Brócolis Cozido',
    category: 'Vegetais',
    calories: 35,
    protein: 2.4,
    carbs: 7,
    fats: 0.4,
    pricePerKg: 8.00
  },
  {
    id: 'couve',
    name: 'Couve Refogada',
    category: 'Vegetais',
    calories: 49,
    protein: 3.3,
    carbs: 10,
    fats: 0.7,
    pricePerKg: 5.00
  },
  {
    id: 'alface',
    name: 'Alface',
    category: 'Vegetais',
    calories: 15,
    protein: 1.4,
    carbs: 2.9,
    fats: 0.2,
    pricePerKg: 6.00
  },
  {
    id: 'tomate',
    name: 'Tomate',
    category: 'Vegetais',
    calories: 18,
    protein: 0.9,
    carbs: 3.9,
    fats: 0.2,
    pricePerKg: 7.00
  },
  {
    id: 'cenoura',
    name: 'Cenoura Cozida',
    category: 'Vegetais',
    calories: 35,
    protein: 0.8,
    carbs: 8,
    fats: 0.2,
    pricePerKg: 4.50
  },
  {
    id: 'abobrinha',
    name: 'Abobrinha Refogada',
    category: 'Vegetais',
    calories: 17,
    protein: 1.2,
    carbs: 3.1,
    fats: 0.3,
    pricePerKg: 5.50
  },

  // Frutas
  {
    id: 'banana',
    name: 'Banana',
    category: 'Frutas',
    calories: 89,
    protein: 1.1,
    carbs: 23,
    fats: 0.3,
    pricePerKg: 6.00
  },
  {
    id: 'maca',
    name: 'Maçã',
    category: 'Frutas',
    calories: 52,
    protein: 0.3,
    carbs: 14,
    fats: 0.2,
    pricePerKg: 8.00
  },
  {
    id: 'mamao',
    name: 'Mamão',
    category: 'Frutas',
    calories: 43,
    protein: 0.5,
    carbs: 11,
    fats: 0.3,
    pricePerKg: 5.00
  },
  {
    id: 'morango',
    name: 'Morango',
    category: 'Frutas',
    calories: 32,
    protein: 0.7,
    carbs: 7.7,
    fats: 0.3,
    pricePerKg: 12.00
  },
  {
    id: 'abacate',
    name: 'Abacate',
    category: 'Frutas',
    calories: 160,
    protein: 2,
    carbs: 8.5,
    fats: 15,
    pricePerKg: 10.00
  },

  // Gorduras Saudáveis
  {
    id: 'azeite',
    name: 'Azeite de Oliva',
    category: 'Gorduras',
    calories: 884,
    protein: 0,
    carbs: 0,
    fats: 100,
    pricePerKg: 45.00
  },
  {
    id: 'amendoim',
    name: 'Amendoim',
    category: 'Gorduras',
    calories: 567,
    protein: 26,
    carbs: 16,
    fats: 49,
    pricePerKg: 18.00
  },
  {
    id: 'castanha-caju',
    name: 'Castanha de Caju',
    category: 'Gorduras',
    calories: 553,
    protein: 18,
    carbs: 30,
    fats: 44,
    pricePerKg: 55.00
  },
  {
    id: 'pasta-amendoim',
    name: 'Pasta de Amendoim',
    category: 'Gorduras',
    calories: 588,
    protein: 25,
    carbs: 20,
    fats: 50,
    pricePerKg: 32.00
  },

  // Laticínios
  {
    id: 'leite-desnatado',
    name: 'Leite Desnatado',
    category: 'Laticínios',
    calories: 34,
    protein: 3.4,
    carbs: 5,
    fats: 0.1,
    pricePerKg: 4.50
  },
  {
    id: 'iogurte-natural',
    name: 'Iogurte Natural',
    category: 'Laticínios',
    calories: 61,
    protein: 3.5,
    carbs: 4.7,
    fats: 3.3,
    pricePerKg: 8.00
  },
  {
    id: 'iogurte-grego',
    name: 'Iogurte Grego',
    category: 'Laticínios',
    calories: 97,
    protein: 9,
    carbs: 3.6,
    fats: 5,
    pricePerKg: 18.00
  },
  {
    id: 'queijo-minas',
    name: 'Queijo Minas',
    category: 'Laticínios',
    calories: 264,
    protein: 17.4,
    carbs: 3,
    fats: 21,
    pricePerKg: 35.00
  },

  // Leguminosas
  {
    id: 'feijao-preto',
    name: 'Feijão Preto Cozido',
    category: 'Leguminosas',
    calories: 77,
    protein: 4.5,
    carbs: 14,
    fats: 0.5,
    pricePerKg: 8.00
  },
  {
    id: 'lentilha',
    name: 'Lentilha Cozida',
    category: 'Leguminosas',
    calories: 116,
    protein: 9,
    carbs: 20,
    fats: 0.4,
    pricePerKg: 12.00
  },
  {
    id: 'grao-bico',
    name: 'Grão de Bico Cozido',
    category: 'Leguminosas',
    calories: 164,
    protein: 8.9,
    carbs: 27,
    fats: 2.6,
    pricePerKg: 15.00
  }
];

export const foodCategories = [
  'Todos',
  'Proteínas',
  'Carboidratos',
  'Vegetais',
  'Frutas',
  'Gorduras',
  'Laticínios',
  'Leguminosas'
];

export function searchFoods(query: string, category: string = 'Todos'): FoodItem[] {
  let filtered = foodDatabase;
  
  if (category !== 'Todos') {
    filtered = filtered.filter(food => food.category === category);
  }
  
  if (query.trim()) {
    const lowerQuery = query.toLowerCase();
    filtered = filtered.filter(food => 
      food.name.toLowerCase().includes(lowerQuery)
    );
  }
  
  return filtered;
}

export function getFoodById(id: string): FoodItem | undefined {
  return foodDatabase.find(food => food.id === id);
}
