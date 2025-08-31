// Zoo-phonics alphabet data with bilingual support
export interface ZooPhonicsAnimal {
  letter: string;
  animalName: {
    english: string;
    spanish: string;
  };
  imageSrc: string;
  motion: string;
  sound: string;
}

import alligatorImg from '@/assets/alligator.jpg';
import bearImg from '@/assets/bear.jpg';
import catImg from '@/assets/cat.jpg';
import dogImg from '@/assets/dog.jpg';

export const zooPhonicsAnimals: ZooPhonicsAnimal[] = [
  {
    letter: 'A',
    animalName: {
      english: 'Allie Alligator',
      spanish: 'Ana Caimán'
    },
    imageSrc: alligatorImg,
    motion: 'Snap arms like alligator jaws',
    sound: '/a/ as in apple'
  },
  {
    letter: 'B',
    animalName: {
      english: 'Bubba Bear',
      spanish: 'Bruno Oso'
    },
    imageSrc: bearImg,
    motion: 'Hug yourself like a bear',
    sound: '/b/ as in bear'
  },
  {
    letter: 'C',
    animalName: {
      english: 'Catina Cat',
      spanish: 'Carmen Gato'
    },
    imageSrc: catImg,
    motion: 'Scratch with claws like a cat',
    sound: '/c/ as in cat'
  },
  {
    letter: 'D',
    animalName: {
      english: 'Dottie Dog',
      spanish: 'Diego Perro'
    },
    imageSrc: dogImg,
    motion: 'Pant with tongue out like a dog',
    sound: '/d/ as in dog'
  }
];

// Audio pronunciation function (placeholder for future implementation)
export const playAnimalSound = (animal: ZooPhonicsAnimal, language: 'english' | 'spanish') => {
  // This would integrate with text-to-speech or audio files
  console.log(`Playing sound for ${animal.animalName[language]} in ${language}`);
  
  // For now, we'll use the Web Speech API if available
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(
      language === 'english' 
        ? `${animal.letter}. ${animal.animalName.english}. ${animal.sound}` 
        : `${animal.letter}. ${animal.animalName.spanish}`
    );
    
    utterance.lang = language === 'english' ? 'en-US' : 'es-ES';
    utterance.rate = 0.8;
    utterance.pitch = 1.2; // Higher pitch for kids
    
    speechSynthesis.speak(utterance);
  }
};