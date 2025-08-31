import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, BookOpen, Globe2, Volume2 } from 'lucide-react';

// Simple animal data for testing
const animals = [
  {
    letter: 'A',
    animalName: { english: 'Alligator', spanish: 'Caimán' },
    motion: 'Snap arms like alligator jaws',
  },
  {
    letter: 'B', 
    animalName: { english: 'Bear', spanish: 'Oso' },
    motion: 'Hug yourself like a bear',
  },
  {
    letter: 'C',
    animalName: { english: 'Cat', spanish: 'Gato' },
    motion: 'Scratch with claws like a cat',
  },
  {
    letter: 'D',
    animalName: { english: 'Dog', spanish: 'Perro' },
    motion: 'Pant with tongue out like a dog',
  }
];

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
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-4">
          Zoo-phonics Learning
          <Sparkles className="inline-block ml-2 h-8 w-8 text-yellow-500" />
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          Learn letters with animal friends in English & Spanish!
        </p>
        
        {/* Language Toggle */}
        <div className="flex items-center justify-center space-x-2 bg-white rounded-full p-1 shadow-lg max-w-xs mx-auto">
          <Globe2 className="h-5 w-5 text-blue-600 ml-2" />
          <Button
            variant={currentLanguage === 'english' ? 'default' : 'ghost'}
            size="sm"
            className="rounded-full"
            onClick={() => setCurrentLanguage('english')}
          >
            English
          </Button>
          <Button
            variant={currentLanguage === 'spanish' ? 'default' : 'ghost'}
            size="sm"
            className="rounded-full"
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
            <BookOpen className="h-5 w-5 text-blue-600" />
            <span className="font-medium text-blue-600">
              {currentLanguage === 'english' 
                ? 'Click each animal to hear their sound!' 
                : '¡Haz clic en cada animal para escuchar su sonido!'
              }
            </span>
          </div>
        </div>

        {/* Animal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {animals.map((animal) => (
            <div 
              key={animal.letter} 
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => playSound(animal)}
            >
              {/* Letter */}
              <div className="text-6xl font-bold text-orange-500 text-center mb-4">
                {animal.letter}
              </div>
              
              {/* Animal Name */}
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
                {animal.animalName[currentLanguage]}
              </h3>
              
              {/* Motion */}
              <p className="text-sm text-gray-600 text-center bg-gray-100 rounded-lg p-2 mb-4">
                <strong>Motion:</strong> {animal.motion}
              </p>
              
              {/* Play Button */}
              <Button 
                onClick={(e) => {
                  e.stopPropagation();
                  playSound(animal);
                }}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white"
              >
                <Volume2 className="mr-2 h-4 w-4" />
                {currentLanguage === 'english' ? 'Play Sound' : 'Reproducir'}
              </Button>
            </div>
          ))}
        </div>

        {/* Learning Activities */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-blue-600 mb-6">
            {currentLanguage === 'english' ? 'Learning Activities' : 'Actividades de Aprendizaje'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {currentLanguage === 'english' ? 'Letter Recognition' : 'Reconocimiento de Letras'}
              </h3>
              <p className="text-gray-600">
                {currentLanguage === 'english' 
                  ? 'Learn letter shapes and sounds with animal friends' 
                  : 'Aprende las formas y sonidos de las letras'
                }
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {currentLanguage === 'english' ? 'Bilingual Learning' : 'Aprendizaje Bilingüe'}
              </h3>
              <p className="text-gray-600">
                {currentLanguage === 'english' 
                  ? 'Practice in both English and Spanish' 
                  : 'Practica en inglés y español'
                }
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {currentLanguage === 'english' ? 'Motion Memory' : 'Memoria de Movimientos'}
              </h3>
              <p className="text-gray-600">
                {currentLanguage === 'english' 
                  ? 'Remember letters through body movements' 
                  : 'Recuerda las letras con movimientos'
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
