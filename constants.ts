import { Shayari, Story, Photo } from './types';

export const INITIAL_SHAYARI: Shayari[] = [
  {
    id: 's1',
    content: "Manzil unhi ko milti hai, jinke sapno mein jaan hoti hai,\nPankhon se kuch nahi hota, hauslon se udaan hoti hai.",
    category: 'Motivation',
    author: 'Unknown',
    date: new Date().toISOString(),
    likes: 124
  },
  {
    id: 's2',
    content: "Waqt ne sikhaya hai sambhalna humein,\nGir kar uthna aur chalna humein.",
    category: 'Life',
    author: 'Anonymous',
    date: new Date().toISOString(),
    likes: 89
  },
  {
    id: 's3',
    content: "Khudi ko kar buland itna ke har taqder se pehle,\nKhuda bande se khud pooche, bata teri raza kya hai.",
    category: 'Inspiration',
    author: 'Allama Iqbal',
    date: new Date().toISOString(),
    likes: 256
  }
];

export const INITIAL_STORIES: Story[] = [
  {
    id: 'st1',
    title: "The Elephant Rope",
    content: "As a man was passing the elephants, he suddenly stopped, confused by the fact that these huge creatures were being held by only a small rope tied to their front leg. No chains, no cages. It was obvious that the elephants could, at anytime, break away from their bonds but for some reason, they did not.\n\nHe saw a trainer nearby and asked why these animals just stood there and made no attempt to get away. 'Well,' trainer said, 'when they are very young and much smaller we use the same size rope to tie them and, at that age, it's enough to hold them. As they grow up, they are conditioned to believe they cannot break away. They believe the rope can still hold them, so they never try to break free.'\n\nThe man was amazed. These animals could at any time break free from their bonds but because they believed they couldn't, they were stuck right where they were.\n\nLike the elephants, how many of us go through life hanging onto a belief that we cannot do something, simply because we failed at it once before?",
    category: 'Motivation',
    author: 'Unknown',
    date: new Date().toISOString(),
    likes: 340
  },
  {
    id: 'st2',
    title: "The Starfish Story",
    content: "One day a man was walking along the beach when he noticed a boy picking something up and gently throwing it into the ocean. Approaching the boy, he asked, 'What are you doing?' The youth replied, 'Throwing starfish back into the ocean. The surf is up and the tide is going out. If I don't throw them back, they'll die.'\n\n'Son,' the man said, 'don't you realize there are miles and miles of beach and hundreds of starfish? You can't make a difference!'\n\nAfter listening politely, the boy bent down, picked up another starfish, and threw it back into the surf. Then, smiling at the man, he said, 'I made a difference for that one.'",
    category: 'Kindness',
    author: 'Loren Eiseley',
    date: new Date().toISOString(),
    likes: 412
  }
];

export const INITIAL_PHOTOS: Photo[] = [
  {
    id: 'p1',
    url: 'https://picsum.photos/800/600?random=1',
    caption: 'Sunrise of Hope',
    category: 'Nature',
    date: new Date().toISOString()
  },
  {
    id: 'p2',
    url: 'https://picsum.photos/800/800?random=2',
    caption: 'Mountain High',
    category: 'Travel',
    date: new Date().toISOString()
  },
  {
    id: 'p3',
    url: 'https://picsum.photos/600/800?random=3',
    caption: 'Urban Dreams',
    category: 'City',
    date: new Date().toISOString()
  },
   {
    id: 'p4',
    url: 'https://picsum.photos/800/500?random=4',
    caption: 'Calm Waters',
    category: 'Nature',
    date: new Date().toISOString()
  }
];
