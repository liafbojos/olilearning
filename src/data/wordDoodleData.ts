// Word-doodle matching game data
export interface WordDoodle {
  id: string;
  word: {
    english: string;
    spanish: string;
  };
  correctDoodle: string;
  description: {
    english: string;
    spanish: string;
  };
}

import solImg from '@/assets/doodles/sun-generated.png';
import gatoImg from '@/assets/doodles/cat.png';
import florImg from '@/assets/doodles/flower.jpg';
import carroImg from '@/assets/doodles/car.jpg';
import pezImg from '@/assets/doodles/fish.png';
import camaImg from '@/assets/doodles/cama.png';
import casaImg from '@/assets/doodles/house.jpg';
import perroImg from '@/assets/doodles/dog.png';
import arbolImg from '@/assets/doodles/tree.jpg';
import patoImg from '@/assets/doodles/pato.png';

export const doodleImages = {
  sol: solImg,
  gato: gatoImg,
  flor: florImg,
  carro: carroImg,
  pez: pezImg,
  cama: camaImg,
  casa: casaImg,
  perro: perroImg,
  arbol: arbolImg,
  pato: patoImg,
};

export const wordDoodles: WordDoodle[] = [
  {
    id: 'sol',
    word: {
      english: 'SUN',
      spanish: 'SOL'
    },
    correctDoodle: 'sol',
    description: {
      english: 'The bright yellow star in our sky',
      spanish: 'La estrella amarilla brillante en nuestro cielo'
    }
  },
  {
    id: 'gato',
    word: {
      english: 'CAT',
      spanish: 'GATO'
    },
    correctDoodle: 'gato',
    description: {
      english: 'A furry pet that meows',
      spanish: 'Una mascota peluda que maúlla'
    }
  },
  {
    id: 'flor',
    word: {
      english: 'FLOWER',
      spanish: 'FLOR'
    },
    correctDoodle: 'flor',
    description: {
      english: 'A beautiful colorful plant',
      spanish: 'Una hermosa planta colorida'
    }
  },
  {
    id: 'carro',
    word: {
      english: 'CAR',
      spanish: 'CARRO'
    },
    correctDoodle: 'carro',
    description: {
      english: 'A vehicle with four wheels',
      spanish: 'Un vehículo con cuatro ruedas'
    }
  },
  {
    id: 'pez',
    word: {
      english: 'FISH',
      spanish: 'PEZ'
    },
    correctDoodle: 'pez',
    description: {
      english: 'An animal that swims in water',
      spanish: 'Un animal que nada en el agua'
    }
  },
  {
    id: 'cama',
    word: {
      english: 'BED',
      spanish: 'CAMA'
    },
    correctDoodle: 'cama',
    description: {
      english: 'A place where we sleep',
      spanish: 'Un lugar donde dormimos'
    }
  },
  {
    id: 'casa',
    word: {
      english: 'HOUSE',
      spanish: 'CASA'
    },
    correctDoodle: 'casa',
    description: {
      english: 'A place where people live',
      spanish: 'Un lugar donde vive la gente'
    }
  },
  {
    id: 'perro',
    word: {
      english: 'DOG',
      spanish: 'PERRO'
    },
    correctDoodle: 'perro',
    description: {
      english: 'A loyal pet that barks',
      spanish: 'Una mascota leal que ladra'
    }
  },
  {
    id: 'arbol',
    word: {
      english: 'TREE',
      spanish: 'ÁRBOL'
    },
    correctDoodle: 'arbol',
    description: {
      english: 'A tall plant with branches and leaves',
      spanish: 'Una planta alta con ramas y hojas'
    }
  },
  {
    id: 'pato',
    word: {
      english: 'DUCK',
      spanish: 'PATO'
    },
    correctDoodle: 'pato',
    description: {
      english: 'A bird that swims and quacks',
      spanish: 'Un ave que nada y hace cuac'
    }
  }
];

// Function to get random incorrect options
export const getRandomIncorrectDoodles = (correctDoodle: string, count: number = 2): string[] => {
  const allDoodles = Object.keys(doodleImages);
  const incorrectOptions = allDoodles.filter(doodle => doodle !== correctDoodle);
  
  // Shuffle and take the requested count
  const shuffled = incorrectOptions.sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

// Function to shuffle array
export const shuffleArray = <T>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};