import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, BookOpen, Globe2, Volume2 } from 'lucide-react';
import WordDoodleActivity from '@/components/WordDoodleActivity';

// Simple animal data for testing
const animals = [
  {
    letter: 'A',
    animalName: { 
      english: 'Alligator', 
      spanish: 'Abeja' // Bee - starts with A
    },
    motion: 'Snap arms like alligator jaws',
  },
  {
    letter: 'B', 
    animalName: { 
      english: 'Bear', 
      spanish: 'Ballena' // Whale - starts with B
    },
    motion: 'Hug yourself like a bear',
  },
  {
    letter: 'C',
    animalName: { 
      english: 'Cat', 
      spanish: 'Conejo' // Rabbit - starts with C
    },
    motion: 'Scratch with claws like a cat',
  },
  {
    letter: 'D',
    animalName: { 
      english: 'Dog', 
      spanish: 'Delfín' // Dolphin - starts with D
    },
    motion: 'Pant with tongue out like a dog',
  }
];

// Color constants based on specified palette
const colorPalette = ['#ED6956', '#FBBD4C', '#f3a9b0', '#91adc6'];

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'english' | 'spanish'>('english');

  const playSound = (animal: typeof animals[0]) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(
        `${animal.letter}. ${animal.animalName[currentLanguage]}`
      );
      utterance.lang = currentLanguage === 'english' ? 'en-US' : 'es-ES';
      speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="min-h-screen bg-background p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4 font-shooting-star">
          Zoo-phonics Learning
          <Sparkles 
            className="inline-block ml-2 h-8 w-8" 
            style={{ color: '#FBBD4C' }}
          />
        </h1>
        <p className="text-xl text-foreground mb-6 font-poppins">
          Learn letters with animal friends in English & Spanish!
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
        {/* Instructions */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary font-poppins">
              {currentLanguage === 'english' 
                ? 'Click each animal to hear their sound!' 
                : '¡Haz clic en cada animal para escuchar su sonido!'
              }
            </span>
          </div>
        </div>

        {/* Animal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {animals.map((animal, index) => (
            <div 
              key={animal.letter} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-2 border-transparent hover:border-accent"
              onClick={() => playSound(animal)}
            >
              {/* Letter */}
              <div 
                className="text-6xl font-bold text-center mb-4"
                style={{ color: colorPalette[index % 4] }}
              >
                {animal.letter}
              </div>
              
              {/* Animal Name */}
              <h3 className="text-2xl font-bold text-foreground text-center mb-2 font-shooting-star">
                {animal.animalName[currentLanguage]}
              </h3>
              
              {/* Motion */}
              <p className="text-sm text-muted-foreground text-center bg-muted rounded-lg p-2 mb-4">
                <strong>Motion:</strong> {animal.motion}
              </p>
              
              {/* Play Button */}
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  playSound(animal);
                }}
                className="w-full text-white"
                style={{ 
                  backgroundColor: colorPalette[index % 4],
                  border: 'none'
                }}
              >
                <Volume2 className="mr-2 h-4 w-4" />
                {currentLanguage === 'english' ? 'Play Sound' : 'Reproducir'}
              </Button>
            </div>
          ))}
        </div>

        {/* Learning Activities */}
        <section className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary mb-6 font-shooting-star">
            {currentLanguage === 'english' ? 'Learning Activities' : 'Actividades de Aprendizaje'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2 font-shooting-star">
                {currentLanguage === 'english' ? 'Letter Recognition' : 'Reconocimiento de Letras'}
              </h3>
              <p className="text-muted-foreground font-poppins">
                {currentLanguage === 'english' 
                  ? 'Learn letter shapes and sounds with animal friends' 
                  : 'Aprende las formas y sonidos de las letras'
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
                  ? 'Practice in both English and Spanish' 
                  : 'Practica en inglés y español'
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
                {currentLanguage === 'english' ? 'Motion Memory' : 'Memoria de Movimientos'}
              </h3>
              <p className="text-muted-foreground font-poppins">
                {currentLanguage === 'english' 
                  ? 'Remember letters through body movements' 
                  : 'Recuerda las letras con movimientos'
                }
              </p>
            </div>
          </div>
        </section>

        {/* Word-Doodle Matching Activity */}
        <section className="mb-12">
          <WordDoodleActivity currentLanguage={currentLanguage} />
        </section>
      </main>
    </div>
  );
};

export default Index;
