import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Check, X, RotateCcw, Trophy } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { wordDoodles, doodleImages, getRandomIncorrectDoodles, shuffleArray } from '@/data/wordDoodleData';

interface WordDoodleActivityProps {
  currentLanguage: 'english' | 'spanish';
}

interface DoodleOption {
  id: string;
  image: string;
  isCorrect: boolean;
}

const WordDoodleActivity = ({ currentLanguage }: WordDoodleActivityProps) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [doodleOptions, setDoodleOptions] = useState<DoodleOption[]>([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const { toast } = useToast();

  const currentWord = wordDoodles[currentWordIndex];

  // Generate doodle options when word changes
  useEffect(() => {
    if (!currentWord) return;
    
    const incorrectDoodles = getRandomIncorrectDoodles(currentWord.correctDoodle, 2);
    
    const options: DoodleOption[] = [
      {
        id: currentWord.correctDoodle,
        image: doodleImages[currentWord.correctDoodle as keyof typeof doodleImages],
        isCorrect: true
      },
      ...incorrectDoodles.map(doodle => ({
        id: doodle,
        image: doodleImages[doodle as keyof typeof doodleImages],
        isCorrect: false
      }))
    ];
    
    setDoodleOptions(shuffleArray(options));
    setSelectedOption(null);
    setShowResult(false);
    setIsAnswered(false);
  }, [currentWordIndex, currentWord]);

  const handleDoodleClick = (optionId: string, isCorrect: boolean) => {
    if (isAnswered) return;
    
    setSelectedOption(optionId);
    setShowResult(true);
    setIsAnswered(true);
    setTotalQuestions(prev => prev + 1);
    
    if (isCorrect) {
      setScore(prev => prev + 1);
      toast({
        title: currentLanguage === 'english' ? "Correct! 🎉" : "¡Correcto! 🎉",
        description: currentWord.description[currentLanguage],
        duration: 2000,
      });
    } else {
      toast({
        title: currentLanguage === 'english' ? "Try again! 💪" : "¡Inténtalo de nuevo! 💪",
        description: currentLanguage === 'english' 
          ? "Look at the word and think about what it means!" 
          : "¡Mira la palabra y piensa en lo que significa!",
        duration: 2000,
        variant: "destructive",
      });
    }
  };

  const handleNextWord = () => {
    if (currentWordIndex < wordDoodles.length - 1) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      // Game completed
      toast({
        title: currentLanguage === 'english' ? "Great job! 🏆" : "¡Excelente trabajo! 🏆",
        description: currentLanguage === 'english' 
          ? `You got ${score + (showResult && selectedOption === currentWord.correctDoodle ? 1 : 0)} out of ${totalQuestions + 1} correct!`
          : `¡Obtuviste ${score + (showResult && selectedOption === currentWord.correctDoodle ? 1 : 0)} de ${totalQuestions + 1} correctas!`,
        duration: 4000,
      });
      handleRestart();
    }
  };

  const handleRestart = () => {
    setCurrentWordIndex(0);
    setScore(0);
    setTotalQuestions(0);
    setSelectedOption(null);
    setShowResult(false);
    setIsAnswered(false);
  };

  if (!currentWord) return null;

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg">
      <div className="text-center mb-8">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-poppins">
            <Trophy className="h-4 w-4" />
            <span>{score}/{totalQuestions}</span>
          </div>
          <Button
            onClick={handleRestart}
            variant="outline"
            size="sm"
            className="text-primary hover:bg-primary/10"
          >
            <RotateCcw className="h-4 w-4 mr-1" />
            {currentLanguage === 'english' ? 'Restart' : 'Reiniciar'}
          </Button>
        </div>
        
        <h3 className="text-2xl font-bold text-primary mb-2 font-shooting-star">
          {currentLanguage === 'english' ? 'Word & Doodle Match' : 'Palabras y Dibujos'}
        </h3>
        
        <p className="text-muted-foreground mb-6 font-poppins">
          {currentLanguage === 'english' 
            ? 'Read the word and click on the matching doodle!'
            : '¡Lee la palabra y haz clic en el dibujo que corresponde!'
          }
        </p>

        {/* Word Display */}
        <div className="mb-8">
          <div 
            className="text-6xl font-bold mb-2 font-shooting-star"
            style={{ color: '#ED6956' }} // coral color
          >
            {currentWord.word[currentLanguage]}
          </div>
          <div className="text-lg text-muted-foreground font-poppins">
            ({currentLanguage === 'english' ? currentWord.word.spanish : currentWord.word.english})
          </div>
        </div>
      </div>

      {/* Doodle Options */}
      <div className="grid grid-cols-3 gap-6 mb-8">
        {doodleOptions.map((option, index) => (
          <div
            key={`${option.id}-${index}`}
            className={`relative cursor-pointer transition-all duration-300 ${
              isAnswered ? 'cursor-not-allowed' : 'hover:scale-105'
            }`}
            onClick={() => handleDoodleClick(option.id, option.isCorrect)}
          >
            <div
              className={`rounded-2xl p-4 border-4 transition-all duration-300 ${
                selectedOption === option.id
                  ? option.isCorrect
                    ? 'border-success bg-success/10'
                    : 'border-destructive bg-destructive/10'
                  : 'border-border hover:border-primary bg-white'
              }`}
            >
              <img
                src={option.image}
                alt={`Doodle option ${index + 1}`}
                className="w-full h-32 object-contain rounded-lg"
              />
              
              {/* Result indicator */}
              {showResult && selectedOption === option.id && (
                <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center">
                  {option.isCorrect ? (
                    <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                  ) : (
                    <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
                      <X className="h-5 w-5 text-white" />
                    </div>
                  )}
                </div>
              )}
              
              {/* Show correct answer for other options */}
              {showResult && selectedOption !== option.id && option.isCorrect && !isAnswered && (
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-success rounded-full flex items-center justify-center">
                  <Check className="h-5 w-5 text-white" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Next Button */}
      {showResult && (
        <div className="text-center">
          <Button
            onClick={handleNextWord}
            className="bg-primary hover:bg-primary-hover text-primary-foreground font-poppins"
            size="lg"
          >
            {currentWordIndex < wordDoodles.length - 1 
              ? (currentLanguage === 'english' ? 'Next Word' : 'Siguiente Palabra')
              : (currentLanguage === 'english' ? 'Finish Game' : 'Terminar Juego')
            }
          </Button>
        </div>
      )}

      {/* Progress indicator */}
      <div className="mt-6 text-center">
        <div className="flex justify-center space-x-2">
          {wordDoodles.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentWordIndex
                  ? 'bg-primary scale-125'
                  : index < currentWordIndex
                  ? 'bg-success'
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground mt-2 font-poppins">
          {currentWordIndex + 1} / {wordDoodles.length}
        </p>
      </div>
    </div>
  );
};

export default WordDoodleActivity;