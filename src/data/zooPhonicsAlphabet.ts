// Complete Zoo-phonics alphabet with bilingual support
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

// Import animal images
import alligatorImg from '@/assets/alligator.jpg';
import bearImg from '@/assets/bear.jpg';
import catImg from '@/assets/cat.jpg';
import dogImg from '@/assets/dog.jpg';
import elephantImg from '@/assets/elephant.jpg';
import frogImg from '@/assets/frog.jpg';
import giraffeImg from '@/assets/giraffe.jpg';
import hippoImg from '@/assets/hippo.jpg';
import iguanaImg from '@/assets/iguana.jpg';
import jaguarImg from '@/assets/jaguar.jpg';
import kangarooImg from '@/assets/kangaroo.jpg';
import lionImg from '@/assets/lion.jpg';
import monkeyImg from '@/assets/monkey.jpg';
import newtImg from '@/assets/newt.jpg';
import octopusImg from '@/assets/octopus.jpg';
import pigImg from '@/assets/pig.jpg';
import quailImg from '@/assets/quail.jpg';
import rabbitImg from '@/assets/rabbit.jpg';
import snakeImg from '@/assets/snake.jpg';
import turtleImg from '@/assets/turtle.jpg';
import unicornImg from '@/assets/unicorn.jpg';
import vultureImg from '@/assets/vulture.jpg';
import walrusImg from '@/assets/walrus.jpg';
import foxImg from '@/assets/fox.jpg';
import yakImg from '@/assets/yak.jpg';
import zebraImg from '@/assets/zebra.jpg';

export const zooPhonicsAlphabet: ZooPhonicsAnimal[] = [
  {
    letter: 'A',
    animalName: {
      english: 'Allie Alligator',
      spanish: 'Ana Abeja' // Bee
    },
    imageSrc: alligatorImg,
    motion: 'Snap arms like alligator jaws',
    sound: '/a/ as in apple'
  },
  {
    letter: 'B',
    animalName: {
      english: 'Bubba Bear',
      spanish: 'Bruno Ballena' // Whale
    },
    imageSrc: bearImg,
    motion: 'Hug yourself like a bear',
    sound: '/b/ as in bear'
  },
  {
    letter: 'C',
    animalName: {
      english: 'Catina Cat',
      spanish: 'Carmen Conejo' // Rabbit
    },
    imageSrc: catImg,
    motion: 'Scratch with claws like a cat',
    sound: '/c/ as in cat'
  },
  {
    letter: 'D',
    animalName: {
      english: 'Dottie Dog',
      spanish: 'Diego Delfín' // Dolphin
    },
    imageSrc: dogImg,
    motion: 'Pant with tongue out like a dog',
    sound: '/d/ as in dog'
  },
  {
    letter: 'E',
    animalName: {
      english: 'Eddie Elephant',
      spanish: 'Elena Elefante' // Elephant
    },
    imageSrc: elephantImg,
    motion: 'Swing arm like elephant trunk',
    sound: '/e/ as in elephant'
  },
  {
    letter: 'F',
    animalName: {
      english: 'Fiona Frog',
      spanish: 'Franco Flamenco' // Flamingo
    },
    imageSrc: frogImg,
    motion: 'Hop like a frog',
    sound: '/f/ as in frog'
  },
  {
    letter: 'G',
    animalName: {
      english: 'Gigi Giraffe',
      spanish: 'Gina Gato' // Cat
    },
    imageSrc: giraffeImg,
    motion: 'Stretch neck up tall like giraffe',
    sound: '/g/ as in giraffe'
  },
  {
    letter: 'H',
    animalName: {
      english: 'Henny Hippo',
      spanish: 'Hugo Hipopótamo' // Hippo
    },
    imageSrc: hippoImg,
    motion: 'Open mouth wide like hippo',
    sound: '/h/ as in hippo'
  },
  {
    letter: 'I',
    animalName: {
      english: 'Icky Iguana',
      spanish: 'Inés Iguana' // Iguana
    },
    imageSrc: iguanaImg,
    motion: 'Sit still and blink like iguana',
    sound: '/i/ as in iguana'
  },
  {
    letter: 'J',
    animalName: {
      english: 'Jelly Jaguar',
      spanish: 'José Jaguar' // Jaguar
    },
    imageSrc: jaguarImg,
    motion: 'Prowl and pounce like jaguar',
    sound: '/j/ as in jaguar'
  },
  {
    letter: 'K',
    animalName: {
      english: 'Katy Kangaroo',
      spanish: 'Karla Koala' // Koala
    },
    imageSrc: kangarooImg,
    motion: 'Hop with hands in front like kangaroo',
    sound: '/k/ as in kangaroo'
  },
  {
    letter: 'L',
    animalName: {
      english: 'Larry Lion',
      spanish: 'Luna León' // Lion
    },
    imageSrc: lionImg,
    motion: 'Roar like a lion',
    sound: '/l/ as in lion'
  },
  {
    letter: 'M',
    animalName: {
      english: 'Manny Monkey',
      spanish: 'Marco Mono' // Monkey
    },
    imageSrc: monkeyImg,
    motion: 'Scratch under arms like monkey',
    sound: '/m/ as in monkey'
  },
  {
    letter: 'N',
    animalName: {
      english: 'Nelly Newt',
      spanish: 'Nina Nutria' // Otter
    },
    imageSrc: newtImg,
    motion: 'Crawl slowly like newt',
    sound: '/n/ as in newt'
  },
  {
    letter: 'O',
    animalName: {
      english: 'Ollie Octopus',
      spanish: 'Omar Oso' // Bear
    },
    imageSrc: octopusImg,
    motion: 'Wave arms like octopus tentacles',
    sound: '/o/ as in octopus'
  },
  {
    letter: 'P',
    animalName: {
      english: 'Penny Pig',
      spanish: 'Pablo Pato' // Duck
    },
    imageSrc: pigImg,
    motion: 'Snort like a pig',
    sound: '/p/ as in pig'
  },
  {
    letter: 'Q',
    animalName: {
      english: 'Quincy Quail',
      spanish: 'Quito Quetzal' // Quetzal bird
    },
    imageSrc: quailImg,
    motion: 'Bob head like quail',
    sound: '/qu/ as in quail'
  },
  {
    letter: 'R',
    animalName: {
      english: 'Ruby Rabbit',
      spanish: 'Rosa Ratón' // Mouse
    },
    imageSrc: rabbitImg,
    motion: 'Hop like a rabbit',
    sound: '/r/ as in rabbit'
  },
  {
    letter: 'S',
    animalName: {
      english: 'Sammy Snake',
      spanish: 'Sofia Sapo' // Toad
    },
    imageSrc: snakeImg,
    motion: 'Slither like a snake',
    sound: '/s/ as in snake'
  },
  {
    letter: 'T',
    animalName: {
      english: 'Tiny Turtle',
      spanish: 'Tomás Tigre' // Tiger
    },
    imageSrc: turtleImg,
    motion: 'Move slowly like turtle',
    sound: '/t/ as in turtle'
  },
  {
    letter: 'U',
    animalName: {
      english: 'Uma Unicorn',
      spanish: 'Úrsula Urraca' // Magpie
    },
    imageSrc: unicornImg,
    motion: 'Gallop like unicorn',
    sound: '/u/ as in unicorn'
  },
  {
    letter: 'V',
    animalName: {
      english: 'Vinny Vulture',
      spanish: 'Victoria Víbora' // Viper
    },
    imageSrc: vultureImg,
    motion: 'Spread wings like vulture',
    sound: '/v/ as in vulture'
  },
  {
    letter: 'W',
    animalName: {
      english: 'Wally Walrus',
      spanish: 'Walter Wombat' // Using English W sound
    },
    imageSrc: walrusImg,
    motion: 'Clap flippers like walrus',
    sound: '/w/ as in walrus'
  },
  {
    letter: 'X',
    animalName: {
      english: 'Xena Fox', // X sound in fox
      spanish: 'Ximena Pez' // Fish (X sound)
    },
    imageSrc: foxImg,
    motion: 'Be sly like a fox',
    sound: '/ks/ as in fox'
  },
  {
    letter: 'Y',
    animalName: {
      english: 'Yogi Yak',
      spanish: 'Yara Yak' // Yak
    },
    imageSrc: yakImg,
    motion: 'Stomp like a yak',
    sound: '/y/ as in yak'
  },
  {
    letter: 'Z',
    animalName: {
      english: 'Zoe Zebra',
      spanish: 'Zara Zorro' // Fox
    },
    imageSrc: zebraImg,
    motion: 'Gallop like zebra',
    sound: '/z/ as in zebra'
  }
];

// Audio pronunciation function with enhanced Spanish accent
export const playAnimalSound = (animal: ZooPhonicsAnimal, language: 'english' | 'spanish') => {
  console.log(`Playing sound for ${animal.animalName[language]} in ${language}`);
  
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(
      language === 'english' 
        ? `${animal.letter}. ${animal.animalName.english}. ${animal.sound}` 
        : `${animal.letter}. ${animal.animalName.spanish}. Letra ${animal.letter}`
    );
    
    if (language === 'spanish') {
      // Enhanced Spanish voice settings
      utterance.lang = 'es-ES'; // European Spanish
      utterance.rate = 0.7; // Slower for clearer pronunciation
      utterance.pitch = 1.3; // Higher pitch for kids
      
      // Try to find a Spanish voice specifically
      const voices = speechSynthesis.getVoices();
      const spanishVoices = voices.filter(voice => 
        voice.lang.includes('es') || 
        voice.name.toLowerCase().includes('spanish') ||
        voice.name.toLowerCase().includes('español')
      );
      
      if (spanishVoices.length > 0) {
        // Prefer Mexican Spanish, then European Spanish, then any Spanish
        const mexicanVoice = spanishVoices.find(voice => voice.lang.includes('es-MX'));
        const europeanVoice = spanishVoices.find(voice => voice.lang.includes('es-ES'));
        const anySpanishVoice = spanishVoices[0];
        
        utterance.voice = mexicanVoice || europeanVoice || anySpanishVoice;
      }
      
      // Add pauses for better pronunciation
      utterance.text = `${animal.letter}... ${animal.animalName.spanish}... Letra ${animal.letter}`;
      
    } else {
      // English settings
      utterance.lang = 'en-US';
      utterance.rate = 0.8;
      utterance.pitch = 1.2;
      
      // Try to find an English voice
      const voices = speechSynthesis.getVoices();
      const englishVoices = voices.filter(voice => 
        voice.lang.includes('en') || 
        voice.name.toLowerCase().includes('english')
      );
      
      if (englishVoices.length > 0) {
        const usVoice = englishVoices.find(voice => voice.lang.includes('en-US'));
        utterance.voice = usVoice || englishVoices[0];
      }
    }
    
    // Ensure voices are loaded before speaking
    if (speechSynthesis.getVoices().length === 0) {
      speechSynthesis.addEventListener('voiceschanged', () => {
        speechSynthesis.speak(utterance);
      }, { once: true });
    } else {
      speechSynthesis.speak(utterance);
    }
  }
};