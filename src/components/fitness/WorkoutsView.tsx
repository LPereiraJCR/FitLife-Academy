'use client';

import { useState } from 'react';
import { UserProfile, Workout, Exercise, WorkoutLog } from '@/lib/types';
import { AppState } from '@/lib/types';
import { workouts, exercises, getWorkoutsByGoal } from '@/lib/data';
import { saveWorkoutLog } from '@/lib/storage';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowLeft, Play, Clock, Dumbbell, CheckCircle2, X } from 'lucide-react';

interface WorkoutsViewProps {
  userProfile: UserProfile;
  onNavigate: (view: AppState['currentView']) => void;
}

export default function WorkoutsView({ userProfile, onNavigate }: WorkoutsViewProps) {
  const [selectedWorkout, setSelectedWorkout] = useState<Workout | null>(null);
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);
  const [activeTab, setActiveTab] = useState('recommended');

  const recommendedWorkouts = getWorkoutsByGoal(userProfile.goal);
  const allWorkouts = workouts;

  const handleCompleteWorkout = (workout: Workout) => {
    const log: WorkoutLog = {
      id: Date.now().toString(),
      workoutId: workout.id,
      workoutName: workout.name,
      date: new Date().toISOString(),
      duration: workout.duration,
      exercises: workout.exercises.map(ex => ({
        exerciseId: ex.id,
        exerciseName: ex.name,
        setsCompleted: ex.sets || 0,
      })),
    };
    saveWorkoutLog(log);
    setSelectedWorkout(null);
    alert('Treino registrado com sucesso! 🎉');
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      beginner: 'bg-green-100 text-green-800',
      intermediate: 'bg-orange-100 text-orange-800',
      advanced: 'bg-red-100 text-red-800',
    };
    return colors[difficulty as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

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
          <h1 className="text-3xl font-bold mb-2">Treinos</h1>
          <p className="text-orange-100">Escolha seu treino e comece agora!</p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-6">
            <TabsTrigger value="recommended">Recomendados</TabsTrigger>
            <TabsTrigger value="all">Todos os Treinos</TabsTrigger>
            <TabsTrigger value="exercises">Exercícios</TabsTrigger>
          </TabsList>

          {/* Recommended Workouts */}
          <TabsContent value="recommended">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedWorkouts.map((workout) => (
                <Card key={workout.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{workout.name}</h3>
                      <Badge className={getDifficultyColor(workout.difficulty)}>
                        {workout.difficulty}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{workout.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{workout.duration} min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Dumbbell className="w-4 h-4" />
                        <span>{workout.exercises.length} exercícios</span>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                      onClick={() => setSelectedWorkout(workout)}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Iniciar Treino
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* All Workouts */}
          <TabsContent value="all">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allWorkouts.map((workout) => (
                <Card key={workout.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-800">{workout.name}</h3>
                      <Badge className={getDifficultyColor(workout.difficulty)}>
                        {workout.difficulty}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{workout.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{workout.duration} min</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Dumbbell className="w-4 h-4" />
                        <span>{workout.exercises.length} exercícios</span>
                      </div>
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                      onClick={() => setSelectedWorkout(workout)}
                    >
                      <Play className="w-4 h-4 mr-2" />
                      Iniciar Treino
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Exercises Library */}
          <TabsContent value="exercises">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {exercises.map((exercise) => (
                <Card key={exercise.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedExercise(exercise)}>
                  {exercise.thumbnailUrl && (
                    <img src={exercise.thumbnailUrl} alt={exercise.name} className="w-full h-48 object-cover" />
                  )}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-gray-800">{exercise.name}</h3>
                      <Badge className={getDifficultyColor(exercise.difficulty)}>
                        {exercise.difficulty}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{exercise.muscleGroup}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Clock className="w-4 h-4" />
                      <span>{exercise.duration} min</span>
                      {exercise.sets && <span>• {exercise.sets}x{exercise.reps}</span>}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Workout Detail Dialog */}
      <Dialog open={!!selectedWorkout} onOpenChange={() => setSelectedWorkout(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedWorkout && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedWorkout.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <p className="text-gray-600">{selectedWorkout.description}</p>
                
                <div className="flex items-center gap-6">
                  <Badge className={getDifficultyColor(selectedWorkout.difficulty)}>
                    {selectedWorkout.difficulty}
                  </Badge>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{selectedWorkout.duration} minutos</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Exercícios</h3>
                  <div className="space-y-4">
                    {selectedWorkout.exercises.map((exercise, index) => (
                      <Card key={exercise.id} className="p-4">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-800 mb-1">{exercise.name}</h4>
                            <p className="text-sm text-gray-600 mb-2">{exercise.description}</p>
                            {exercise.sets && (
                              <p className="text-sm text-orange-600 font-medium">
                                {exercise.sets} séries x {exercise.reps} repetições
                              </p>
                            )}
                          </div>
                          {exercise.videoUrl && (
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => setSelectedExercise(exercise)}
                            >
                              <Play className="w-4 h-4 mr-1" />
                              Vídeo
                            </Button>
                          )}
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setSelectedWorkout(null)}
                  >
                    Cancelar
                  </Button>
                  <Button
                    className="flex-1 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700"
                    onClick={() => handleCompleteWorkout(selectedWorkout)}
                  >
                    <CheckCircle2 className="w-4 h-4 mr-2" />
                    Marcar como Concluído
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Exercise Video Dialog */}
      <Dialog open={!!selectedExercise} onOpenChange={() => setSelectedExercise(null)}>
        <DialogContent className="max-w-4xl">
          {selectedExercise && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedExercise.name}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                {selectedExercise.videoUrl && (
                  <div className="aspect-video">
                    <iframe
                      src={selectedExercise.videoUrl}
                      className="w-full h-full rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Descrição</h3>
                  <p className="text-gray-600">{selectedExercise.description}</p>
                </div>
                {selectedExercise.sets && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Séries e Repetições</h3>
                    <p className="text-orange-600 font-medium">
                      {selectedExercise.sets} séries x {selectedExercise.reps} repetições
                    </p>
                  </div>
                )}
                {selectedExercise.equipment.length > 0 && (
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Equipamentos</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedExercise.equipment.map((eq, i) => (
                        <Badge key={i} variant="secondary">{eq}</Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
