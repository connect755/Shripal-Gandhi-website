import { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: LucideIcon;
}

export interface StatItem {
  value: string;
  label: string;
  suffix?: string;
}

export interface TimelineItem {
  role: string;
  company: string;
  period: string;
  description: string;
  highlights?: string[];
  logo?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  image?: string;
}

export interface YouTubeVideo {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  link: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: string | number;
  comments: string | number;
  link: string;
  media_type?: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
}

export interface InstagramReel {
  id: string;
  thumbnail: string;
  caption: string;
  likes: string | number;
  comments: string | number;
  link: string;
  views?: string;
}

export interface ContentCardProps {
  title: string;
  category: string;
  date: string;
  image: string;
  link: string;
}

export interface Program {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}