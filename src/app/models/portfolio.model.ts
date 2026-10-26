export interface Project {
  number: string;
  title: string;
  description: string;
  impact: string;
  tags: string[];
  tone: 'blue' | 'lime' | 'orange' | 'violet';
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface TimelineEntry {
  period: string;
  role: string;
  institution: string;
  description: string;
}
