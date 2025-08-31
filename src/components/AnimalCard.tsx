import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Volume2, Play } from 'lucide-react';

interface AnimalCardProps {
  letter: string;
  animalName: {
    english: string;
    spanish: string;
  };
  imageSrc: string;
  motion: string;
  currentLanguage: 'english' | 'spanish';
  onPlay: () => void;
}

const AnimalCard = ({ 
  letter, 
  animalName, 
  imageSrc, 
  motion, 
  currentLanguage,
  onPlay 
}: AnimalCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
    onPlay();
    setTimeout(() => setIsPlaying(false), 1000);
  };

  const displayName = animalName[currentLanguage];

  return (
    <div className="animal-card group cursor-pointer" onClick={handlePlay}>
      <div className="p-6">
        {/* Letter Display */}
        <div className="flex justify-between items-start mb-4">
          <div className="letter-display text-primary group-hover:text-secondary transition-colors">
            {letter}
          </div>
          <Button
            variant="ghost"
            size="sm"
            className={`transition-all duration-300 ${
              isPlaying ? 'animate-pulse bg-primary text-primary-foreground' : 'hover:bg-primary/10'
            }`}
            onClick={(e) => {
              e.stopPropagation();
              handlePlay();
            }}
          >
            {isPlaying ? (
              <Play className="h-5 w-5 fill-current" />
            ) : (
              <Volume2 className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Animal Image */}
        <div className="relative mb-4 overflow-hidden rounded-xl">
          <img
            src={imageSrc}
            alt={displayName}
            className={`w-full h-48 object-cover transition-transform duration-500 ${
              isPlaying ? 'scale-110 wiggle' : 'group-hover:scale-105'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Animal Name */}
        <div className="animal-name text-card-foreground text-center mb-3">
          {displayName}
        </div>

        {/* Motion Description */}
        <div className="text-sm text-muted-foreground text-center bg-muted/30 rounded-lg p-2">
          <span className="font-medium">Motion:</span> {motion}
        </div>

        {/* Interactive Elements */}
        <div className="mt-4 flex justify-center">
          <div className={`transition-all duration-300 ${
            isPlaying ? 'animate-bounce' : ''
          }`}>
            <Button
              variant="outline"
              size="sm"
              className="fun-button bg-gradient-rainbow text-white border-0 hover:shadow-fun"
              onClick={(e) => {
                e.stopPropagation();
                handlePlay();
              }}
            >
              Practice Motion
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnimalCard;