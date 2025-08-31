import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageToggleProps {
  currentLanguage: 'english' | 'spanish';
  onLanguageChange: (language: 'english' | 'spanish') => void;
}

const LanguageToggle = ({ currentLanguage, onLanguageChange }: LanguageToggleProps) => {
  return (
    <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full p-1 shadow-playful">
      <Globe className="h-5 w-5 text-primary ml-2" />
      
      <Button
        variant={currentLanguage === 'english' ? 'default' : 'ghost'}
        size="sm"
        className={`rounded-full transition-all duration-300 ${
          currentLanguage === 'english' 
            ? 'bg-primary text-primary-foreground shadow-playful' 
            : 'hover:bg-primary/10 text-primary'
        }`}
        onClick={() => onLanguageChange('english')}
      >
        English
      </Button>
      
      <Button
        variant={currentLanguage === 'spanish' ? 'default' : 'ghost'}
        size="sm"
        className={`rounded-full transition-all duration-300 ${
          currentLanguage === 'spanish' 
            ? 'bg-secondary text-secondary-foreground shadow-playful' 
            : 'hover:bg-secondary/10 text-secondary'
        }`}
        onClick={() => onLanguageChange('spanish')}
      >
        Español
      </Button>
    </div>
  );
};

export default LanguageToggle;