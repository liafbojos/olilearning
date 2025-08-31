import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, BookOpen, Globe2, Volume2 } from 'lucide-react';
import AnimalCard from '@/components/AnimalCard';
import LanguageToggle from '@/components/LanguageToggle';
import { zooPhonicsAnimals, playAnimalSound } from '@/data/zooPhonicsData';

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<'english' | 'spanish'>('english');
  const [selectedAnimal, setSelectedAnimal] = useState(0);

  const handleAnimalPlay = (index: number) => {
    setSelectedAnimal(index);
    playAnimalSound(zooPhonicsAnimals[index], currentLanguage);
  };

  return (
    <div className="min-h-screen bg-gradient-sky">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-rainbow opacity-10"></div>
        <div className="relative z-10 container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-primary mb-2 font-comic">
                Zoo-phonics Learning
                <Sparkles className="inline-block ml-2 h-8 w-8 text-fun-yellow animate-pulse" />
              </h1>
              <p className="text-xl text-muted-foreground font-fredoka">
                Learn letters with animal friends in English & Spanish!
              </p>
            </div>
            <LanguageToggle 
              currentLanguage={currentLanguage}
              onLanguageChange={setCurrentLanguage}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Introduction Section */}
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-playful mb-6">
            <BookOpen className="h-5 w-5 text-primary" />
            <span className="font-fredoka font-medium text-primary">
              {currentLanguage === 'english' 
                ? 'Touch each animal to hear their sound and learn their motion!' 
                : '¡Toca cada animal para escuchar su sonido y aprender su movimiento!'
              }
            </span>
          </div>
        </section>

        {/* Animal Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {zooPhonicsAnimals.map((animal, index) => (
            <div key={animal.letter} className="bounce-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <AnimalCard
                letter={animal.letter}
                animalName={animal.animalName}
                imageSrc={animal.imageSrc}
                motion={animal.motion}
                currentLanguage={currentLanguage}
                onPlay={() => handleAnimalPlay(index)}
              />
            </div>
          ))}
        </section>

        {/* Featured Animal Section */}
        <section className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-fun mb-12">
          <h2 className="text-3xl font-bold text-primary text-center mb-6 font-comic">
            {currentLanguage === 'english' ? 'Featured Animal' : 'Animal Destacado'}
          </h2>
          
          <div className="max-w-2xl mx-auto">
            <div className="bg-gradient-card rounded-2xl p-6 text-center">
              <div className="text-8xl font-bold text-secondary mb-4 font-comic">
                {zooPhonicsAnimals[selectedAnimal].letter}
              </div>
              
              <img
                src={zooPhonicsAnimals[selectedAnimal].imageSrc}
                alt={zooPhonicsAnimals[selectedAnimal].animalName[currentLanguage]}
                className="w-32 h-32 mx-auto rounded-full object-cover shadow-playful mb-4 float"
              />
              
              <h3 className="text-2xl font-bold text-card-foreground mb-2 font-fredoka">
                {zooPhonicsAnimals[selectedAnimal].animalName[currentLanguage]}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                <strong>Motion:</strong> {zooPhonicsAnimals[selectedAnimal].motion}
              </p>
              
              <Button
                onClick={() => handleAnimalPlay(selectedAnimal)}
                className="fun-button bg-primary hover:bg-primary-hover text-primary-foreground"
              >
                <Volume2 className="mr-2 h-4 w-4" />
                {currentLanguage === 'english' ? 'Play Sound' : 'Reproducir Sonido'}
              </Button>
            </div>
          </div>
        </section>

        {/* Learning Activities Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-6 font-comic">
            {currentLanguage === 'english' ? 'Learning Activities' : 'Actividades de Aprendizaje'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-card hover:shadow-playful transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-rainbow rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2 font-fredoka">
                {currentLanguage === 'english' ? 'Letter Recognition' : 'Reconocimiento de Letras'}
              </h3>
              <p className="text-muted-foreground">
                {currentLanguage === 'english' 
                  ? 'Learn letter shapes and sounds with animal friends' 
                  : 'Aprende las formas y sonidos de las letras con amigos animales'
                }
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-card hover:shadow-playful transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-rainbow rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2 font-fredoka">
                {currentLanguage === 'english' ? 'Bilingual Learning' : 'Aprendizaje Bilingüe'}
              </h3>
              <p className="text-muted-foreground">
                {currentLanguage === 'english' 
                  ? 'Practice in both English and Spanish languages' 
                  : 'Practica en inglés y español'
                }
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-card hover:shadow-playful transition-all duration-300 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-rainbow rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2 font-fredoka">
                {currentLanguage === 'english' ? 'Motion Memory' : 'Memoria de Movimientos'}
              </h3>
              <p className="text-muted-foreground">
                {currentLanguage === 'english' 
                  ? 'Remember letters through fun body movements' 
                  : 'Recuerda las letras a través de movimientos corporales divertidos'
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
