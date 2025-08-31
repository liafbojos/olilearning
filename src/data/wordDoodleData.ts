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

import sunImg from '@/assets/doodles/sun-generated.png';
import houseImg from '@/assets/doodles/house.jpg';
import carImg from '@/assets/doodles/car.jpg';
import ballImg from '@/assets/doodles/ball.jpg';
import flowerImg from '@/assets/doodles/flower.jpg';
import treeImg from '@/assets/doodles/tree.jpg';
import catImg from '@/assets/doodles/cat.png';
import dogImg from '@/assets/doodles/dog.png';
import fishImg from '@/assets/doodles/fish.png';
import birdImg from '@/assets/doodles/bird.png';
import heartImg from '@/assets/doodles/heart.png';
import starImg from '@/assets/doodles/star.png';

export const doodleImages = {
  sun: sunImg,
  house: houseImg,
  car: carImg,
  ball: ballImg,
  flower: flowerImg,
  tree: treeImg,
  cat: catImg,
  dog: dogImg,
  fish: fishImg,
  bird: birdImg,
  heart: heartImg,
  star: starImg,
};

export const wordDoodles: WordDoodle[] = [
  {
    id: 'sun',
    word: {
      english: 'SUN',
      spanish: 'SOL'
    },
    correctDoodle: 'sun',
    description: {
      english: 'The bright yellow star in our sky',
      spanish: 'La estrella amarilla brillante en nuestro cielo'
    }
  },
  {
    id: 'house',
    word: {
      english: 'HOUSE',
      spanish: 'CASA'
    },
    correctDoodle: 'house',
    description: {
      english: 'A place where people live',
      spanish: 'Un lugar donde vive la gente'
    }
  },
  {
    id: 'car',
    word: {
      english: 'CAR',
      spanish: 'CARRO'
    },
    correctDoodle: 'car',
    description: {
      english: 'A vehicle with four wheels',
      spanish: 'Un vehículo con cuatro ruedas'
    }
  },
  {
    id: 'ball',
    word: {
      english: 'BALL',
      spanish: 'PELOTA'
    },
    correctDoodle: 'ball',
    description: {
      english: 'A round toy you can throw and catch',
      spanish: 'Un juguete redondo que puedes lanzar y atrapar'
    }
  },
  {
    id: 'flower',
    word: {
      english: 'FLOWER',
      spanish: 'FLOR'
    },
    correctDoodle: 'flower',
    description: {
      english: 'A beautiful colorful plant',
      spanish: 'Una hermosa planta colorida'
    }
  },
  {
    id: 'tree',
    word: {
      english: 'TREE',
      spanish: 'ÁRBOL'
    },
    correctDoodle: 'tree',
    description: {
      english: 'A tall plant with branches and leaves',
      spanish: 'Una planta alta con ramas y hojas'
    }
  },
  {
    id: 'cat',
    word: {
      english: 'CAT',
      spanish: 'GATO'
    },
    correctDoodle: 'cat',
    description: {
      english: 'A furry pet that meows',
      spanish: 'Una mascota peluda que maúlla'
    }
  },
  {
    id: 'dog',
    word: {
      english: 'DOG',
      spanish: 'PERRO'
    },
    correctDoodle: 'dog',
    description: {
      english: 'A loyal pet that barks',
      spanish: 'Una mascota leal que ladra'
    }
  },
  {
    id: 'fish',
    word: {
      english: 'FISH',
      spanish: 'PEZ'
    },
    correctDoodle: 'fish',
    description: {
      english: 'An animal that swims in water',
      spanish: 'Un animal que nada en el agua'
    }
  },
  {
    id: 'bird',
    word: {
      english: 'BIRD',
      spanish: 'PÁJARO'
    },
    correctDoodle: 'bird',
    description: {
      english: 'An animal that flies in the sky',
      spanish: 'Un animal que vuela en el cielo'
    }
  },
  {
    id: 'heart',
    word: {
      english: 'HEART',
      spanish: 'CORAZÓN'
    },
    correctDoodle: 'heart',
    description: {
      english: 'A symbol of love',
      spanish: 'Un símbolo de amor'
    }
  },
  {
    id: 'star',
    word: {
      english: 'STAR',
      spanish: 'ESTRELLA'
    },
    correctDoodle: 'star',
    description: {
      english: 'A twinkling light in the night sky',
      spanish: 'Una luz brillante en el cielo nocturno'
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