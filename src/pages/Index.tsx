import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, BookOpen, Globe2 } from 'lucide-react';
import WordDoodleActivity from '@/components/WordDoodleActivity';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'english' | 'spanish'>('english');

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 font-shooting-star">
          Oli Learning
          <Sparkles 
            className="inline-block ml-2 h-8 w-8" 
            style={{ color: '#FBBD4C' }}
          />
        </h1>
        <p className="text-xl text-foreground mb-6 font-poppins">
          Fun learning activities for kids in English & Spanish!
        </p>
        
        {/* Language Toggle */}
        <div className="flex items-center justify-center space-x-2 bg-white rounded-full p-1 shadow-lg max-w-xs mx-auto">
          <Globe2 className="h-5 w-5 text-primary ml-2" />
          <Button
            variant={currentLanguage === 'english' ? 'default' : 'ghost'}
            size="sm"
            className={`rounded-full ${
              currentLanguage === 'english' 
                ? 'bg-primary text-primary-foreground' 
                : 'hover:bg-primary/10 text-primary'
            }`}
            onClick={() => setCurrentLanguage('english')}
          >
            English
          </Button>
          <Button
            variant={currentLanguage === 'spanish' ? 'default' : 'ghost'}
            size="sm"
            className={`rounded-full ${
              currentLanguage === 'spanish' 
                ? 'bg-secondary text-secondary-foreground' 
                : 'hover:bg-secondary/10 text-secondary'
            }`}
            onClick={() => setCurrentLanguage('spanish')}
          >
            Español
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-6xl">
        {/* Word-Doodle Matching Activity */}
        <section className="mb-12">
          <WordDoodleActivity currentLanguage={currentLanguage} />
        </section>


        {/* About Learning Activities */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-6 font-shooting-star">
            {currentLanguage === 'english' ? 'Why Oli Learning?' : '¿Por qué Oli Learning?'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-shooting-star">
                {currentLanguage === 'english' ? 'Interactive Learning' : 'Aprendizaje Interactivo'}
              </h3>
              <p className="text-muted-foreground font-poppins">
                {currentLanguage === 'english' 
                  ? 'Hands-on activities that make learning fun and engaging' 
                  : 'Actividades prácticas que hacen el aprendizaje divertido'
                }
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-shooting-star">
                {currentLanguage === 'english' ? 'Bilingual Learning' : 'Aprendizaje Bilingüe'}
              </h3>
              <p className="text-muted-foreground font-poppins">
                {currentLanguage === 'english' 
                  ? 'Learn in both English and Spanish with seamless switching' 
                  : 'Aprende en inglés y español con cambio fluido'
                }
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
                {currentLanguage === 'english' ? 'Multiple Activities' : 'Múltiples Actividades'}
              </h3>
              <p className="text-muted-foreground font-poppins">
                {currentLanguage === 'english' 
                  ? 'Various learning games to keep children engaged' 
                  : 'Varios juegos educativos para mantener a los niños comprometidos'
                }
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
