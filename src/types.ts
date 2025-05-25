export interface TimelineEntry {
  date: string;
  title: string;
}

export interface Project {
  title: string;
  description: string;
  link?: string;
}

export interface Publication {
  title: string;
  date: string;
  link: string;
}

export interface BlogPost {
  title: string;
  link: string;
}

export interface Certificate {
  title: string;
  imageUrl: string;
}