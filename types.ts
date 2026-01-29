export interface Shayari {
  id: string;
  content: string;
  category: string;
  author?: string;
  date: string;
  likes: number;
}

export interface Story {
  id: string;
  title: string;
  content: string;
  author: string;
  category: string;
  date: string;
  likes: number;
}

export interface Photo {
  id: string;
  url: string;
  caption: string;
  category: string;
  date: string;
}

export type ContentType = 'shayari' | 'story' | 'photo';

export interface UserPreferences {
  theme: 'light' | 'dark';
  likedItems: string[];
}
