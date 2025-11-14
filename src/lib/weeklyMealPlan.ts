import { WeeklyMealPlan, BudgetType } from './types';

export const weeklyMealPlan: WeeklyMealPlan = {
  monday: {
    breakfast: [
      {
        id: 'mon-breakfast-min',
        name: 'Pão com Ovo e Banana',
        description: 'Pão francês com ovo mexido e banana',
        budgetType: 'economica' as BudgetType,
        calories: 380,
        protein: 18,
        carbs: 52,
        fats: 10,
        ingredients: ['2 pães franceses', '2 ovos', '1 banana', 'Sal a gosto'],
        estimatedCost: 'R$ 3,50',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop'
      },
      {
        id: 'mon-breakfast-avg',
        name: 'Tapioca com Queijo e Frutas',
        description: 'Tapioca recheada com queijo branco e mix de frutas',
        budgetType: 'premium' as BudgetType,
        calories: 420,
        protein: 22,
        carbs: 58,
        fats: 12,
        ingredients: ['100g goma de tapioca', '50g queijo branco', 'Mix de frutas (morango, kiwi)', '1 colher mel'],
        estimatedCost: 'R$ 8,00',
        image: 'https://images.unsplash.com/photo-1604085792782-8d92ff5e4b8f?w=400&h=300&fit=crop'
      }
    ],
    preworkout: [
      {
        id: 'mon-preworkout-min',
        name: 'Café com Pão e Pasta de Amendoim',
        description: 'Café preto com pão integral e pasta de amendoim',
        budgetType: 'economica' as BudgetType,
        calories: 280,
        protein: 12,
        carbs: 38,
        fats: 8,
        ingredients: ['Café preto', '2 fatias pão integral', '1 colher pasta de amendoim'],
        estimatedCost: 'R$ 2,50',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop'
      },
      {
        id: 'mon-preworkout-avg',
        name: 'Smoothie Proteico',
        description: 'Smoothie com whey protein e aveia',
        budgetType: 'premium' as BudgetType,
        calories: 320,
        protein: 28,
        carbs: 42,
        fats: 6,
        ingredients: ['1 scoop whey protein', '1 banana', '3 colheres aveia', '200ml leite'],
        estimatedCost: 'R$ 6,50',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop'
      }
    ],
    lunch: [
      {
        id: 'mon-lunch-min',
        name: 'Arroz, Feijão e Frango Desfiado',
        description: 'Prato básico com arroz, feijão e frango desfiado',
        budgetType: 'economica' as BudgetType,
        calories: 580,
        protein: 42,
        carbs: 68,
        fats: 14,
        ingredients: ['150g arroz branco', '100g feijão', '150g peito de frango', 'Salada de alface e tomate'],
        estimatedCost: 'R$ 8,00',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
      },
      {
        id: 'mon-lunch-avg',
        name: 'Arroz Integral, Salmão e Legumes',
        description: 'Arroz integral com salmão grelhado e legumes no vapor',
        budgetType: 'premium' as BudgetType,
        calories: 620,
        protein: 48,
        carbs: 62,
        fats: 18,
        ingredients: ['150g arroz integral', '180g salmão', 'Brócolis e cenoura no vapor', 'Azeite extra virgem'],
        estimatedCost: 'R$ 18,00',
        image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop'
      }
    ],
    afternoonSnack: [
      {
        id: 'mon-afternoon-min',
        name: 'Iogurte Natural com Aveia',
        description: 'Iogurte natural com aveia e mel',
        budgetType: 'economica' as BudgetType,
        calories: 220,
        protein: 12,
        carbs: 32,
        fats: 5,
        ingredients: ['200ml iogurte natural', '3 colheres aveia', '1 colher mel'],
        estimatedCost: 'R$ 3,00',
        image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop'
      },
      {
        id: 'mon-afternoon-avg',
        name: 'Iogurte Grego com Granola e Frutas',
        description: 'Iogurte grego com granola artesanal e frutas vermelhas',
        budgetType: 'premium' as BudgetType,
        calories: 280,
        protein: 18,
        carbs: 38,
        fats: 8,
        ingredients: ['200g iogurte grego', '50g granola', 'Mix de frutas vermelhas', 'Mel'],
        estimatedCost: 'R$ 7,50',
        image: 'https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop'
      }
    ],
    dinner: [
      {
        id: 'mon-dinner-min',
        name: 'Omelete com Salada',
        description: 'Omelete de 3 ovos com salada verde',
        budgetType: 'economica' as BudgetType,
        calories: 380,
        protein: 28,
        carbs: 18,
        fats: 22,
        ingredients: ['3 ovos', 'Tomate picado', 'Cebola', 'Salada verde', 'Sal e temperos'],
        estimatedCost: 'R$ 4,50',
        image: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=400&h=300&fit=crop'
      },
      {
        id: 'mon-dinner-avg',
        name: 'Filé de Tilápia com Quinoa',
        description: 'Filé de tilápia grelhado com quinoa e aspargos',
        budgetType: 'premium' as BudgetType,
        calories: 450,
        protein: 42,
        carbs: 38,
        fats: 14,
        ingredients: ['200g filé de tilápia', '100g quinoa', 'Aspargos grelhados', 'Limão e ervas'],
        estimatedCost: 'R$ 15,00',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop'
      }
    ]
  },
  tuesday: {
    breakfast: [
      {
        id: 'tue-breakfast-min',
        name: 'Mingau de Aveia com Banana',
        description: 'Mingau de aveia com banana e canela',
        budgetType: 'economica' as BudgetType,
        calories: 350,
        protein: 14,
        carbs: 58,
        fats: 8,
        ingredients: ['5 colheres aveia', '250ml leite', '1 banana', 'Canela'],
        estimatedCost: 'R$ 3,00',
        image: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?w=400&h=300&fit=crop'
      },
      {
        id: 'tue-breakfast-avg',
        name: 'Panqueca de Aveia com Frutas',
        description: 'Panquecas de aveia com frutas frescas e mel',
        budgetType: 'premium' as BudgetType,
        calories: 420,
        protein: 24,
        carbs: 54,
        fats: 12,
        ingredients: ['100g aveia', '2 ovos', '1 banana', 'Frutas variadas', 'Mel'],
        estimatedCost: 'R$ 9,00',
        image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop'
      }
    ],
    preworkout: [
      {
        id: 'tue-preworkout-min',
        name: 'Banana com Aveia',
        description: 'Banana amassada com aveia',
        budgetType: 'economica' as BudgetType,
        calories: 240,
        protein: 8,
        carbs: 48,
        fats: 4,
        ingredients: ['2 bananas', '3 colheres aveia'],
        estimatedCost: 'R$ 2,00',
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop'
      },
      {
        id: 'tue-preworkout-avg',
        name: 'Wrap de Frango Light',
        description: 'Wrap integral com frango e vegetais',
        budgetType: 'premium' as BudgetType,
        calories: 340,
        protein: 28,
        carbs: 38,
        fats: 8,
        ingredients: ['1 tortilha integral', '100g peito de frango', 'Alface e tomate', 'Molho light'],
        estimatedCost: 'R$ 7,00',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop'
      }
    ],
    lunch: [
      {
        id: 'tue-lunch-min',
        name: 'Macarrão com Carne Moída',
        description: 'Macarrão integral com carne moída e molho de tomate',
        budgetType: 'economica' as BudgetType,
        calories: 620,
        protein: 38,
        carbs: 72,
        fats: 18,
        ingredients: ['150g macarrão integral', '120g carne moída', 'Molho de tomate', 'Salada'],
        estimatedCost: 'R$ 9,00',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop'
      },
      {
        id: 'tue-lunch-avg',
        name: 'Risoto de Frango com Cogumelos',
        description: 'Risoto cremoso com frango e cogumelos frescos',
        budgetType: 'premium' as BudgetType,
        calories: 580,
        protein: 42,
        carbs: 64,
        fats: 16,
        ingredients: ['150g arroz arbóreo', '150g peito de frango', '100g cogumelos', 'Parmesão', 'Vinho branco'],
        estimatedCost: 'R$ 16,00',
        image: 'https://images.unsplash.com/photo-1476124369491-c4ca3e7e3b3e?w=400&h=300&fit=crop'
      }
    ],
    afternoonSnack: [
      {
        id: 'tue-afternoon-min',
        name: 'Pão Integral com Queijo',
        description: 'Pão integral com queijo branco',
        budgetType: 'economica' as BudgetType,
        calories: 240,
        protein: 14,
        carbs: 32,
        fats: 6,
        ingredients: ['2 fatias pão integral', '2 fatias queijo branco'],
        estimatedCost: 'R$ 2,50',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop'
      },
      {
        id: 'tue-afternoon-avg',
        name: 'Mix de Castanhas e Frutas Secas',
        description: 'Mix premium de castanhas e frutas desidratadas',
        budgetType: 'premium' as BudgetType,
        calories: 320,
        protein: 12,
        carbs: 28,
        fats: 20,
        ingredients: ['30g castanhas variadas', '30g frutas secas', '10g chocolate 70%'],
        estimatedCost: 'R$ 8,00',
        image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?w=400&h=300&fit=crop'
      }
    ],
    dinner: [
      {
        id: 'tue-dinner-min',
        name: 'Sopa de Legumes com Frango',
        description: 'Sopa nutritiva de legumes com frango desfiado',
        budgetType: 'economica' as BudgetType,
        calories: 320,
        protein: 32,
        carbs: 28,
        fats: 8,
        ingredients: ['150g peito de frango', 'Cenoura, batata, chuchu', 'Temperos naturais'],
        estimatedCost: 'R$ 6,00',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop'
      },
      {
        id: 'tue-dinner-avg',
        name: 'Peito de Peru com Batata Doce',
        description: 'Peito de peru assado com batata doce e brócolis',
        budgetType: 'premium' as BudgetType,
        calories: 480,
        protein: 48,
        carbs: 42,
        fats: 12,
        ingredients: ['200g peito de peru', '200g batata doce', 'Brócolis', 'Ervas finas'],
        estimatedCost: 'R$ 14,00',
        image: 'https://images.unsplash.com/photo-1432139555190-58524dae6a55?w=400&h=300&fit=crop'
      }
    ]
  },
  wednesday: {
    breakfast: [
      {
        id: 'wed-breakfast-min',
        name: 'Cuscuz com Ovo',
        description: 'Cuscuz nordestino com ovo cozido',
        budgetType: 'economica' as BudgetType,
        calories: 360,
        protein: 18,
        carbs: 54,
        fats: 9,
        ingredients: ['100g flocos de milho', '2 ovos cozidos', 'Sal'],
        estimatedCost: 'R$ 3,20',
        image: 'https://images.unsplash.com/photo-1604085792782-8d92ff5e4b8f?w=400&h=300&fit=crop'
      },
      {
        id: 'wed-breakfast-avg',
        name: 'Bowl de Açaí Completo',
        description: 'Açaí com granola, frutas e pasta de amendoim',
        budgetType: 'premium' as BudgetType,
        calories: 480,
        protein: 18,
        carbs: 68,
        fats: 16,
        ingredients: ['200g açaí', '50g granola', 'Banana e morango', '1 colher pasta amendoim'],
        estimatedCost: 'R$ 12,00',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop'
      }
    ],
    preworkout: [
      {
        id: 'wed-preworkout-min',
        name: 'Batata Doce Cozida',
        description: 'Batata doce cozida simples',
        budgetType: 'economica' as BudgetType,
        calories: 220,
        protein: 4,
        carbs: 50,
        fats: 1,
        ingredients: ['200g batata doce'],
        estimatedCost: 'R$ 2,00',
        image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop'
      },
      {
        id: 'wed-preworkout-avg',
        name: 'Barra de Proteína Premium',
        description: 'Barra de proteína com café',
        budgetType: 'premium' as BudgetType,
        calories: 280,
        protein: 20,
        carbs: 32,
        fats: 8,
        ingredients: ['1 barra proteica premium', 'Café expresso'],
        estimatedCost: 'R$ 8,00',
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop'
      }
    ],
    lunch: [
      {
        id: 'wed-lunch-min',
        name: 'Arroz, Feijão e Ovo Frito',
        description: 'Prato tradicional com arroz, feijão e ovos fritos',
        budgetType: 'economica' as BudgetType,
        calories: 560,
        protein: 28,
        carbs: 72,
        fats: 18,
        ingredients: ['150g arroz', '100g feijão', '2 ovos', 'Salada simples'],
        estimatedCost: 'R$ 6,50',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
      },
      {
        id: 'wed-lunch-avg',
        name: 'Filé Mignon com Batata Rústica',
        description: 'Filé mignon grelhado com batatas rústicas e legumes',
        budgetType: 'premium' as BudgetType,
        calories: 680,
        protein: 52,
        carbs: 58,
        fats: 24,
        ingredients: ['200g filé mignon', '200g batata', 'Mix de legumes', 'Molho especial'],
        estimatedCost: 'R$ 22,00',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
      }
    ],
    afternoonSnack: [
      {
        id: 'wed-afternoon-min',
        name: 'Vitamina de Banana',
        description: 'Vitamina de banana com leite',
        budgetType: 'economica' as BudgetType,
        calories: 260,
        protein: 12,
        carbs: 42,
        fats: 6,
        ingredients: ['2 bananas', '250ml leite', '1 colher aveia'],
        estimatedCost: 'R$ 3,00',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop'
      },
      {
        id: 'wed-afternoon-avg',
        name: 'Sanduíche Natural Completo',
        description: 'Sanduíche natural com peito de peru e cream cheese',
        budgetType: 'premium' as BudgetType,
        calories: 380,
        protein: 24,
        carbs: 42,
        fats: 12,
        ingredients: ['Pão integral', '100g peito de peru', 'Cream cheese light', 'Vegetais frescos'],
        estimatedCost: 'R$ 9,00',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop'
      }
    ],
    dinner: [
      {
        id: 'wed-dinner-min',
        name: 'Frango Desfiado com Legumes',
        description: 'Frango desfiado refogado com legumes',
        budgetType: 'economica' as BudgetType,
        calories: 420,
        protein: 42,
        carbs: 32,
        fats: 12,
        ingredients: ['200g peito de frango', 'Cenoura, abobrinha', 'Temperos naturais'],
        estimatedCost: 'R$ 7,00',
        image: 'https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=400&h=300&fit=crop'
      },
      {
        id: 'wed-dinner-avg',
        name: 'Camarão Grelhado com Arroz de Couve-flor',
        description: 'Camarões grelhados com arroz de couve-flor',
        budgetType: 'premium' as BudgetType,
        calories: 380,
        protein: 38,
        carbs: 28,
        fats: 14,
        ingredients: ['250g camarão', 'Couve-flor processada', 'Alho e azeite', 'Limão'],
        estimatedCost: 'R$ 20,00',
        image: 'https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&h=300&fit=crop'
      }
    ]
  },
  thursday: {
    breakfast: [
      {
        id: 'thu-breakfast-min',
        name: 'Pão com Requeijão e Café',
        description: 'Pão francês com requeijão e café com leite',
        budgetType: 'economica' as BudgetType,
        calories: 340,
        protein: 14,
        carbs: 52,
        fats: 8,
        ingredients: ['2 pães franceses', '2 colheres requeijão', 'Café com leite'],
        estimatedCost: 'R$ 3,00',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop'
      },
      {
        id: 'thu-breakfast-avg',
        name: 'Omelete Recheada com Torradas',
        description: 'Omelete com queijo e presunto, torradas integrais',
        budgetType: 'premium' as BudgetType,
        calories: 460,
        protein: 32,
        carbs: 38,
        fats: 20,
        ingredients: ['3 ovos', 'Queijo e presunto', '2 fatias pão integral', 'Suco natural'],
        estimatedCost: 'R$ 10,00',
        image: 'https://images.unsplash.com/photo-1525351326368-efbb5cb6814d?w=400&h=300&fit=crop'
      }
    ],
    preworkout: [
      {
        id: 'thu-preworkout-min',
        name: 'Biscoito Integral com Café',
        description: 'Biscoitos integrais com café preto',
        budgetType: 'economica' as BudgetType,
        calories: 200,
        protein: 6,
        carbs: 36,
        fats: 4,
        ingredients: ['6 biscoitos integrais', 'Café preto'],
        estimatedCost: 'R$ 2,00',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop'
      },
      {
        id: 'thu-preworkout-avg',
        name: 'Shake Pré-Treino',
        description: 'Shake com carboidratos e proteína',
        budgetType: 'premium' as BudgetType,
        calories: 300,
        protein: 25,
        carbs: 40,
        fats: 5,
        ingredients: ['1 scoop whey', '1 banana', 'Maltodextrina', '200ml água'],
        estimatedCost: 'R$ 7,00',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop'
      }
    ],
    lunch: [
      {
        id: 'thu-lunch-min',
        name: 'Arroz com Carne de Panela',
        description: 'Arroz branco com carne de panela e salada',
        budgetType: 'economica' as BudgetType,
        calories: 600,
        protein: 40,
        carbs: 68,
        fats: 16,
        ingredients: ['150g arroz', '150g carne de panela', 'Salada verde', 'Molho'],
        estimatedCost: 'R$ 10,00',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
      },
      {
        id: 'thu-lunch-avg',
        name: 'Poke Bowl de Atum',
        description: 'Poke bowl com atum fresco, arroz e vegetais',
        budgetType: 'premium' as BudgetType,
        calories: 560,
        protein: 46,
        carbs: 62,
        fats: 14,
        ingredients: ['200g atum fresco', '150g arroz japonês', 'Edamame', 'Abacate', 'Molho shoyu'],
        estimatedCost: 'R$ 24,00',
        image: 'https://images.unsplash.com/photo-1546069901-eacef0df6022?w=400&h=300&fit=crop'
      }
    ],
    afternoonSnack: [
      {
        id: 'thu-afternoon-min',
        name: 'Bolacha com Queijo',
        description: 'Bolachas cream cracker com queijo',
        budgetType: 'economica' as BudgetType,
        calories: 220,
        protein: 10,
        carbs: 32,
        fats: 6,
        ingredients: ['8 bolachas cream cracker', '2 fatias queijo'],
        estimatedCost: 'R$ 2,50',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop'
      },
      {
        id: 'thu-afternoon-avg',
        name: 'Smoothie Bowl',
        description: 'Smoothie bowl com frutas e toppings',
        budgetType: 'premium' as BudgetType,
        calories: 340,
        protein: 16,
        carbs: 52,
        fats: 10,
        ingredients: ['Açaí ou pitaya', 'Banana congelada', 'Granola', 'Coco ralado', 'Mel'],
        estimatedCost: 'R$ 11,00',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop'
      }
    ],
    dinner: [
      {
        id: 'thu-dinner-min',
        name: 'Macarrão com Atum',
        description: 'Macarrão integral com atum em lata e molho',
        budgetType: 'economica' as BudgetType,
        calories: 480,
        protein: 32,
        carbs: 62,
        fats: 12,
        ingredients: ['150g macarrão', '1 lata atum', 'Molho de tomate', 'Temperos'],
        estimatedCost: 'R$ 7,00',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop'
      },
      {
        id: 'thu-dinner-avg',
        name: 'Frango Teriyaki com Legumes',
        description: 'Frango teriyaki com vegetais salteados',
        budgetType: 'premium' as BudgetType,
        calories: 520,
        protein: 48,
        carbs: 48,
        fats: 14,
        ingredients: ['200g peito de frango', 'Molho teriyaki', 'Mix de vegetais asiáticos', 'Gergelim'],
        estimatedCost: 'R$ 16,00',
        image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop'
      }
    ]
  },
  friday: {
    breakfast: [
      {
        id: 'fri-breakfast-min',
        name: 'Café com Leite e Bolacha',
        description: 'Café com leite e bolachas integrais',
        budgetType: 'economica' as BudgetType,
        calories: 320,
        protein: 12,
        carbs: 48,
        fats: 8,
        ingredients: ['Café com leite', '10 bolachas integrais', '1 banana'],
        estimatedCost: 'R$ 2,80',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop'
      },
      {
        id: 'fri-breakfast-avg',
        name: 'Crepioca Recheada',
        description: 'Crepioca com frango e queijo',
        budgetType: 'premium' as BudgetType,
        calories: 440,
        protein: 36,
        carbs: 42,
        fats: 14,
        ingredients: ['2 ovos', '4 colheres tapioca', '100g frango desfiado', 'Queijo', 'Tomate'],
        estimatedCost: 'R$ 9,50',
        image: 'https://images.unsplash.com/photo-1604085792782-8d92ff5e4b8f?w=400&h=300&fit=crop'
      }
    ],
    preworkout: [
      {
        id: 'fri-preworkout-min',
        name: 'Pão com Geleia',
        description: 'Pão integral com geleia e café',
        budgetType: 'economica' as BudgetType,
        calories: 240,
        protein: 8,
        carbs: 46,
        fats: 3,
        ingredients: ['2 fatias pão integral', '2 colheres geleia', 'Café'],
        estimatedCost: 'R$ 2,00',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop'
      },
      {
        id: 'fri-preworkout-avg',
        name: 'Energy Balls',
        description: 'Bolinhas energéticas de tâmaras e castanhas',
        budgetType: 'premium' as BudgetType,
        calories: 280,
        protein: 12,
        carbs: 38,
        fats: 12,
        ingredients: ['Tâmaras', 'Castanhas', 'Cacau', 'Coco', 'Café'],
        estimatedCost: 'R$ 6,00',
        image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop'
      }
    ],
    lunch: [
      {
        id: 'fri-lunch-min',
        name: 'Arroz, Feijão e Salsicha',
        description: 'Arroz, feijão com salsicha e salada',
        budgetType: 'economica' as BudgetType,
        calories: 580,
        protein: 28,
        carbs: 74,
        fats: 18,
        ingredients: ['150g arroz', '100g feijão', '3 salsichas', 'Salada'],
        estimatedCost: 'R$ 7,00',
        image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&h=300&fit=crop'
      },
      {
        id: 'fri-lunch-avg',
        name: 'Picanha com Purê de Batata Doce',
        description: 'Picanha grelhada com purê de batata doce',
        budgetType: 'premium' as BudgetType,
        calories: 720,
        protein: 54,
        carbs: 52,
        fats: 32,
        ingredients: ['200g picanha', '250g batata doce', 'Manteiga', 'Rúcula', 'Tomate cereja'],
        estimatedCost: 'R$ 26,00',
        image: 'https://images.unsplash.com/photo-1558030006-450675393462?w=400&h=300&fit=crop'
      }
    ],
    afternoonSnack: [
      {
        id: 'fri-afternoon-min',
        name: 'Fruta com Amendoim',
        description: 'Maçã com pasta de amendoim',
        budgetType: 'economica' as BudgetType,
        calories: 240,
        protein: 8,
        carbs: 32,
        fats: 10,
        ingredients: ['1 maçã', '2 colheres pasta de amendoim'],
        estimatedCost: 'R$ 2,50',
        image: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400&h=300&fit=crop'
      },
      {
        id: 'fri-afternoon-avg',
        name: 'Wrap de Atum',
        description: 'Wrap integral com atum e vegetais',
        budgetType: 'premium' as BudgetType,
        calories: 360,
        protein: 28,
        carbs: 38,
        fats: 10,
        ingredients: ['1 tortilha integral', '1 lata atum', 'Alface, tomate', 'Molho light'],
        estimatedCost: 'R$ 8,00',
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&h=300&fit=crop'
      }
    ],
    dinner: [
      {
        id: 'fri-dinner-min',
        name: 'Sopa de Feijão com Legumes',
        description: 'Sopa cremosa de feijão com legumes',
        budgetType: 'economica' as BudgetType,
        calories: 380,
        protein: 22,
        carbs: 58,
        fats: 8,
        ingredients: ['200g feijão', 'Cenoura, batata', 'Temperos', '1 fatia pão'],
        estimatedCost: 'R$ 5,00',
        image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop'
      },
      {
        id: 'fri-dinner-avg',
        name: 'Bacalhau com Grão de Bico',
        description: 'Bacalhau desfiado com grão de bico e vegetais',
        budgetType: 'premium' as BudgetType,
        calories: 480,
        protein: 42,
        carbs: 44,
        fats: 14,
        ingredients: ['200g bacalhau', '150g grão de bico', 'Pimentão', 'Azeite', 'Azeitonas'],
        estimatedCost: 'R$ 22,00',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop'
      }
    ]
  },
  saturday: {
    breakfast: [
      {
        id: 'sat-breakfast-min',
        name: 'Pão com Manteiga e Café',
        description: 'Pão francês com manteiga e café com leite',
        budgetType: 'economica' as BudgetType,
        calories: 360,
        protein: 12,
        carbs: 54,
        fats: 10,
        ingredients: ['2 pães franceses', 'Manteiga', 'Café com leite'],
        estimatedCost: 'R$ 3,00',
        image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop'
      },
      {
        id: 'sat-breakfast-avg',
        name: 'Brunch Completo',
        description: 'Ovos mexidos, bacon, torradas e frutas',
        budgetType: 'premium' as BudgetType,
        calories: 580,
        protein: 32,
        carbs: 52,
        fats: 26,
        ingredients: ['3 ovos', '3 fatias bacon', 'Torradas', 'Frutas variadas', 'Suco natural'],
        estimatedCost: 'R$ 14,00',
        image: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop'
      }
    ],
    preworkout: [
      {
        id: 'sat-preworkout-min',
        name: 'Banana com Mel',
        description: 'Banana com mel e canela',
        budgetType: 'economica' as BudgetType,
        calories: 180,
        protein: 2,
        carbs: 44,
        fats: 1,
        ingredients: ['2 bananas', '1 colher mel', 'Canela'],
        estimatedCost: 'R$ 1,80',
        image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=300&fit=crop'
      },
      {
        id: 'sat-preworkout-avg',
        name: 'Pré-Treino Completo',
        description: 'Suplemento pré-treino com carboidratos',
        budgetType: 'premium' as BudgetType,
        calories: 260,
        protein: 18,
        carbs: 42,
        fats: 3,
        ingredients: ['1 dose pré-treino', 'Dextrose', 'BCAA', 'Água'],
        estimatedCost: 'R$ 9,00',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop'
      }
    ],
    lunch: [
      {
        id: 'sat-lunch-min',
        name: 'Feijoada Simples',
        description: 'Feijoada caseira com arroz e couve',
        budgetType: 'economica' as BudgetType,
        calories: 680,
        protein: 38,
        carbs: 78,
        fats: 22,
        ingredients: ['150g arroz', '200g feijoada', 'Couve refogada', 'Laranja'],
        estimatedCost: 'R$ 9,00',
        image: 'https://images.unsplash.com/photo-1628191081676-8f40d4ce6c44?w=400&h=300&fit=crop'
      },
      {
        id: 'sat-lunch-avg',
        name: 'Costela BBQ com Salada Caesar',
        description: 'Costela ao molho barbecue com salada caesar',
        budgetType: 'premium' as BudgetType,
        calories: 780,
        protein: 56,
        carbs: 48,
        fats: 38,
        ingredients: ['300g costela', 'Molho BBQ', 'Salada caesar', 'Pão de alho'],
        estimatedCost: 'R$ 28,00',
        image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop'
      }
    ],
    afternoonSnack: [
      {
        id: 'sat-afternoon-min',
        name: 'Pipoca Caseira',
        description: 'Pipoca feita em casa com pouco óleo',
        budgetType: 'economica' as BudgetType,
        calories: 180,
        protein: 6,
        carbs: 32,
        fats: 4,
        ingredients: ['50g milho de pipoca', 'Óleo', 'Sal'],
        estimatedCost: 'R$ 1,50',
        image: 'https://images.unsplash.com/photo-1578849278619-e73505e9610f?w=400&h=300&fit=crop'
      },
      {
        id: 'sat-afternoon-avg',
        name: 'Açaí na Tigela',
        description: 'Açaí com granola e frutas',
        budgetType: 'premium' as BudgetType,
        calories: 420,
        protein: 14,
        carbs: 62,
        fats: 14,
        ingredients: ['200g açaí', 'Granola', 'Banana', 'Morango', 'Mel'],
        estimatedCost: 'R$ 12,00',
        image: 'https://images.unsplash.com/photo-1590301157890-4810ed352733?w=400&h=300&fit=crop'
      }
    ],
    dinner: [
      {
        id: 'sat-dinner-min',
        name: 'Pizza Caseira Light',
        description: 'Pizza caseira com massa integral',
        budgetType: 'economica' as BudgetType,
        calories: 520,
        protein: 28,
        carbs: 68,
        fats: 16,
        ingredients: ['Massa integral', 'Molho de tomate', 'Queijo', 'Frango desfiado'],
        estimatedCost: 'R$ 8,00',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop'
      },
      {
        id: 'sat-dinner-avg',
        name: 'Hambúrguer Gourmet',
        description: 'Hambúrguer artesanal com batata rústica',
        budgetType: 'premium' as BudgetType,
        calories: 680,
        protein: 42,
        carbs: 58,
        fats: 28,
        ingredients: ['200g carne artesanal', 'Pão brioche', 'Queijo', 'Bacon', 'Batata rústica'],
        estimatedCost: 'R$ 22,00',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop'
      }
    ]
  },
  sunday: {
    breakfast: [
      {
        id: 'sun-breakfast-min',
        name: 'Tapioca Simples',
        description: 'Tapioca com queijo coalho',
        budgetType: 'economica' as BudgetType,
        calories: 340,
        protein: 16,
        carbs: 52,
        fats: 8,
        ingredients: ['100g goma de tapioca', '50g queijo coalho'],
        estimatedCost: 'R$ 3,50',
        image: 'https://images.unsplash.com/photo-1604085792782-8d92ff5e4b8f?w=400&h=300&fit=crop'
      },
      {
        id: 'sun-breakfast-avg',
        name: 'Café da Manhã Americano',
        description: 'Panquecas com xarope, ovos e bacon',
        budgetType: 'premium' as BudgetType,
        calories: 620,
        protein: 28,
        carbs: 72,
        fats: 24,
        ingredients: ['Panquecas', 'Xarope maple', '2 ovos', '3 fatias bacon', 'Frutas'],
        estimatedCost: 'R$ 16,00',
        image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=300&fit=crop'
      }
    ],
    preworkout: [
      {
        id: 'sun-preworkout-min',
        name: 'Café com Biscoito',
        description: 'Café preto com biscoitos integrais',
        budgetType: 'economica' as BudgetType,
        calories: 200,
        protein: 6,
        carbs: 36,
        fats: 4,
        ingredients: ['Café preto', '6 biscoitos integrais'],
        estimatedCost: 'R$ 1,80',
        image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=400&h=300&fit=crop'
      },
      {
        id: 'sun-preworkout-avg',
        name: 'Vitamina Proteica',
        description: 'Vitamina com whey e frutas',
        budgetType: 'premium' as BudgetType,
        calories: 340,
        protein: 30,
        carbs: 42,
        fats: 6,
        ingredients: ['1 scoop whey', 'Banana', 'Morango', 'Aveia', 'Leite'],
        estimatedCost: 'R$ 7,50',
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&h=300&fit=crop'
      }
    ],
    lunch: [
      {
        id: 'sun-lunch-min',
        name: 'Macarronada com Frango',
        description: 'Macarrão ao molho com frango desfiado',
        budgetType: 'economica' as BudgetType,
        calories: 620,
        protein: 42,
        carbs: 76,
        fats: 14,
        ingredients: ['200g macarrão', '150g frango', 'Molho de tomate', 'Queijo ralado'],
        estimatedCost: 'R$ 9,00',
        image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop'
      },
      {
        id: 'sun-lunch-avg',
        name: 'Churrasco Completo',
        description: 'Mix de carnes com acompanhamentos',
        budgetType: 'premium' as BudgetType,
        calories: 820,
        protein: 62,
        carbs: 54,
        fats: 38,
        ingredients: ['Picanha, frango, linguiça', 'Farofa', 'Vinagrete', 'Pão de alho'],
        estimatedCost: 'R$ 32,00',
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=300&fit=crop'
      }
    ],
    afternoonSnack: [
      {
        id: 'sun-afternoon-min',
        name: 'Bolo Caseiro Simples',
        description: 'Fatia de bolo caseiro com café',
        budgetType: 'economica' as BudgetType,
        calories: 280,
        protein: 8,
        carbs: 48,
        fats: 8,
        ingredients: ['1 fatia bolo caseiro', 'Café com leite'],
        estimatedCost: 'R$ 2,50',
        image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&h=300&fit=crop'
      },
      {
        id: 'sun-afternoon-avg',
        name: 'Brownie Proteico',
        description: 'Brownie proteico com sorvete',
        budgetType: 'premium' as BudgetType,
        calories: 420,
        protein: 24,
        carbs: 48,
        fats: 16,
        ingredients: ['Brownie proteico', '1 bola sorvete proteico', 'Calda chocolate'],
        estimatedCost: 'R$ 12,00',
        image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=400&h=300&fit=crop'
      }
    ],
    dinner: [
      {
        id: 'sun-dinner-min',
        name: 'Sanduíche Natural',
        description: 'Sanduíche natural com frango',
        budgetType: 'economica' as BudgetType,
        calories: 420,
        protein: 32,
        carbs: 48,
        fats: 12,
        ingredients: ['Pão integral', 'Frango desfiado', 'Alface, tomate', 'Cenoura ralada'],
        estimatedCost: 'R$ 6,00',
        image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=300&fit=crop'
      },
      {
        id: 'sun-dinner-avg',
        name: 'Sushi e Sashimi',
        description: 'Combinado de sushi e sashimi',
        budgetType: 'premium' as BudgetType,
        calories: 520,
        protein: 42,
        carbs: 62,
        fats: 12,
        ingredients: ['20 peças sushi/sashimi', 'Shoyu', 'Wasabi', 'Gengibre'],
        estimatedCost: 'R$ 35,00',
        image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=400&h=300&fit=crop'
      }
    ]
  }
};
