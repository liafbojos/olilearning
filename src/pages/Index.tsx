import { Sparkles, BookOpen } from 'lucide-react';
import WordDoodleActivity from '@/components/WordDoodleActivity';

const Index = () => {

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 font-shooting-star">
          Olivia Lee
          <Sparkles 
            className="inline-block ml-2 h-8 w-8" 
            style={{ color: '#FBBD4C' }}
          />
        </h1>
        <p className="text-xl text-foreground mb-6 font-poppins">
          ¡Actividades de aprendizaje divertidas para niños!
        </p>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl">
        {/* Word-Doodle Matching Activity */}
        <section className="mb-12">
          <WordDoodleActivity />
        </section>


        {/* About Learning Activities */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-6 font-shooting-star">
            ¿Por qué Olivia Lee?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-shooting-star">
                Aprendizaje Interactivo
              </h3>
              <p className="text-muted-foreground font-poppins">
                Actividades prácticas que hacen el aprendizaje divertido y atractivo
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-shooting-star">
                Desarrollo Cognitivo
              </h3>
              <p className="text-muted-foreground font-poppins">
                Fortalece la memoria, concentración y habilidades de asociación
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div 
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: '#97c0c0' }}
              >
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-shooting-star">
                Múltiples Actividades
              </h3>
              <p className="text-muted-foreground font-poppins">
                Varios juegos educativos para mantener a los niños comprometidos
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
