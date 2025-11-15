
export interface Project {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  sourceUrl?: string;
}

export interface Skill {
  name: string;
  category: 'Programming' | 'Full-Stack' | 'Cloud & DevOps' | 'Practices & Design';
  icon?: string;
}