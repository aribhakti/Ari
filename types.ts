export interface Experience {
  id: string;
  role: string;
  company: string;
  logo: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  color: string;
}

export interface Skill {
  name: string;
  category: 'Product' | 'Tech' | 'Leadership';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  relation: string;
  content: string;
  image: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  logo: string;
}