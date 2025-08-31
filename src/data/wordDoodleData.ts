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

import sunImg from '@/assets/doodles/sun.jpg';
import houseImg from '@/assets/doodles/house.jpg';
import carImg from '@/assets/doodles/car.jpg';
import ballImg from '@/assets/doodles/ball.jpg';
import flowerImg from '@/assets/doodles/flower.jpg';
import treeImg from '@/assets/doodles/tree.jpg';

export const doodleImages = {
  sun: sunImg,
  house: houseImg,
  car: carImg,
  ball: ballImg,
  flower: flowerImg,
  tree: treeImg,
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