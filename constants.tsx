import { Linkedin, Youtube, Instagram, Star, Award, TrendingUp, Users, Globe, Smartphone, HeartPulse } from 'lucide-react';
import { NavItem, SocialLink, StatItem, TimelineItem, Testimonial, YouTubeVideo, Program, FAQItem, InstagramPost, InstagramReel } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Vision', href: '#vision' },
  { label: 'Programs', href: '#programs' },
  { label: 'Journey', href: '#journey' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Videos', href: '#videos' },
  { label: 'Reels', href: '#reels' },
  { label: 'Contact', href: '#contact' },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { platform: 'LinkedIn', url: 'https://www.linkedin.com/in/shripal-gandhi/', icon: Linkedin },
  { platform: 'YouTube', url: 'https://www.youtube.com/@ShripalGandhicoach', icon: Youtube },
  { platform: 'Instagram', url: 'https://www.instagram.com/shripal_gandhi/', icon: Instagram },
  { platform: 'Trustpilot', url: 'https://www.trustpilot.com/review/hyperscaleleaderstribe.com', icon: Star },
];

export const STATS: StatItem[] = [
  { value: '6200', label: 'Business Owners Coached', suffix: '+' },
  { value: '1200', label: 'Crore Revenue Scaled', suffix: ' Cr' },
  { value: '14', label: 'Years Experience', suffix: '+' },
];

export const JOURNEY: TimelineItem[] = [
  {
    role: "Founder & HyperScale Business Coach",
    company: "HyperScale Leaders Tribe",
    period: "Jan 2012 - Present",
    description: "Helping MSME business owners and founders scale their businesses exponentially.",
    highlights: [
      "Coached over 6200 business owners globally",
      "Developed frameworks to 2X profits & 10X valuations",
      "Building scalable systems that free founders from daily operations"
    ],
    logo: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    role: "Founder and CEO",
    company: "Sensing Self Pte Ltd",
    period: "Jan 2017 - Present",
    description: "Empowering individuals to detect and learn about their well-being through bioscience.",
    highlights: [
      "World’s First Non-Invasive Diabetes Screening Test",
      "At-home diagnostic solutions derived from integrative research",
      "Focus on intervention, prevention, and reversal of health epidemics"
    ],
    logo: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    role: "Founder and CEO",
    company: "Swipe Telecom",
    period: "Jul 2012 - Dec 2018",
    description: "Innovative pacesetter empowering India with connected smart devices.",
    highlights: [
      "Achieved ~9.7% market share in tablets, ~10 million devices sold",
      "Revenue CAGR of ~100%, scaling to ₹1000+ Cr",
      "Partnerships with MTV, Flipkart, Uber & Brand Ambassador Priyanka Chopra"
    ],
    logo: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&q=80&w=100&h=100"
  },
  {
    role: "Co-Founder",
    company: "Gooseberry",
    period: "Feb 2015 - Mar 2018",
    description: "Sustainable technology solutions to rejuvenate possessions.",
    highlights: [
      "Created Smart Buckle converting any watch into a fitness tracker",
      "Focus on mindful trade and extending product lifecycles",
      "Featured in Forbes and aBlogtoWatch"
    ],
    logo: "https://images.unsplash.com/photo-1510017803434-a899398421b3?auto=format&fit=crop&q=80&w=100&h=100"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rajiv Kumar",
    role: "Manufacturing Director",
    content: "Shripal's HyperScale framework completely transformed how we operate. We moved from firefighting daily to strategic growth, doubling our profits in 12 months.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=1"
  },
  {
    name: "Anita Desai",
    role: "Tech Founder",
    content: "The clarity and systems Shripal brings are unmatched. He doesn't just give advice; he gives you a roadmap to execute. Truly a game changer for our startup.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=2"
  },
  {
    name: "Vikram Singh",
    role: "Retail Chain Owner",
    content: "I was stuck at a revenue plateau for 3 years. After joining the Tribe, we broke that ceiling in 4 months. Highly recommended for any serious business owner.",
    rating: 5,
    image: "https://picsum.photos/100/100?random=3"
  }
];

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: '1',
    title: "How to Scale From 10Cr to 100Cr",
    description: "The exact blueprint I used to scale multiple businesses to 9 figures.",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=600&h=338",
    link: "https://www.youtube.com/@ShripalGandhicoach"
  },
  {
    id: '2',
    title: "Are You the Bottleneck in Your Business?",
    description: "Learn how to delegate effectively and build systems that run without you.",
    thumbnail: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600&h=338",
    link: "https://www.youtube.com/@ShripalGandhicoach"
  },
  {
    id: '3',
    title: "The Mindset of a HyperScale Leader",
    description: "Why psychology matters more than strategy when scaling exponential growth.",
    thumbnail: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80&w=600&h=338",
    link: "https://www.youtube.com/@ShripalGandhicoach"
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600&h=600',
    caption: "Strategy session with the top 1% founders. The energy in this room is unmatched! 🚀 #HyperScale #BusinessGrowth",
    likes: "1.2k",
    comments: "45",
    link: "https://www.instagram.com/shripal_gandhi/"
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1475721027767-4d529714c920?auto=format&fit=crop&q=80&w=600&h=600',
    caption: "Stop trading time for money. Build systems that work while you sleep. 💡 #EntrepreneurLife #Systems",
    likes: "892",
    comments: "32",
    link: "https://www.instagram.com/shripal_gandhi/"
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=600&h=600',
    caption: "Speaking at the Global Leadership Summit. Grateful for the opportunity to impact 5000+ lives today.",
    likes: "2.5k",
    comments: "120",
    link: "https://www.instagram.com/shripal_gandhi/"
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600&h=600',
    caption: "Your network is your net worth. Surround yourself with people who challenge you to level up.",
    likes: "1.5k",
    comments: "88",
    link: "https://www.instagram.com/shripal_gandhi/"
  }
];

export const INSTAGRAM_REELS: InstagramReel[] = [
  {
    id: '1',
    thumbnail: 'https://images.unsplash.com/photo-1528698794859-f01d79851dad?auto=format&fit=crop&q=80&w=400&h=711',
    caption: "3 Signs You're Scaling Too Fast 🛑 #BusinessTips #ScaleUp",
    likes: "4.5k",
    comments: "156",
    link: "https://www.instagram.com/shripal_gandhi/",
    views: "52k"
  },
  {
    id: '2',
    thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=400&h=711',
    caption: "The Day I Rejected a $10M Offer 💰 #Storytime #Entrepreneur",
    likes: "8.2k",
    comments: "342",
    link: "https://www.instagram.com/shripal_gandhi/",
    views: "120k"
  },
  {
    id: '3',
    thumbnail: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&q=80&w=400&h=711',
    caption: "Team Culture > Strategy. Here's Why. 🤝 #Leadership",
    likes: "3.1k",
    comments: "98",
    link: "https://www.instagram.com/shripal_gandhi/",
    views: "35k"
  },
  {
    id: '4',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=400&h=711',
    caption: "Monday Motivation for Founders 🔥 #Hustle #GrowthMindset",
    likes: "5.6k",
    comments: "210",
    link: "https://www.instagram.com/shripal_gandhi/",
    views: "68k"
  }
];

export const VISION_CARDS = [
  {
    title: "Exponential Growth",
    description: "Breaking linear boundaries to achieve 10X results through systematic scaling.",
    icon: TrendingUp,
    color: "text-primary"
  },
  {
    title: "Human-Centric Innovation",
    description: "Leveraging technology not just for profit, but for the betterment of human well-being.",
    icon: HeartPulse,
    color: "text-secondary"
  },
  {
    title: "Ecosystem Building",
    description: "Creating self-sustaining teams and operations that thrive without constant dependency.",
    icon: Users,
    color: "text-accent"
  },
  {
    title: "Global Connectivity",
    description: "Bridging markets and minds to create a truly connected global business landscape.",
    icon: Globe,
    color: "text-primary"
  }
];

export const MEDIA_LOGOS = [
  "Forbes", "The Economic Times", "Times of India", "MTV", "YourStory"
];

export const PROGRAMS: Program[] = [
  {
    title: "HyperScale Leaders Tribe",
    subtitle: "Community & Mentorship",
    description: "A vetted community of high-growth founders. Get access to my core curriculum, weekly coaching calls, and peer networking.",
    features: ["Bi-weekly Group Coaching", "Access to 50+ SOPs & Frameworks", "Private Founder Network", "Annual Retreat Access"],
    cta: "Join The Waitlist",
    popular: true
  },
  {
    title: "Elite 1-on-1 Mentorship",
    subtitle: "Direct Strategic Partnership",
    description: "Personalized intervention for your business. We dissect your P&L, operations, and team structure to unlock 10X growth.",
    features: ["Direct Access to Shripal", "Customized 12-Month Roadmap", "Executive Team Hiring Support", "On-site Strategy Days"],
    cta: "Apply for Access"
  },
  {
    title: "Corporate Consulting",
    subtitle: "Organizational Transformation",
    description: "For established enterprises looking to foster intrapreneurship and break through revenue plateaus using startup agility.",
    features: ["Leadership Training Workshops", "Innovation Pipeline Setup", "Digital Transformation Strategy", "Board Advisory"],
    cta: "Contact My Team"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Who is the HyperScale Tribe designed for?",
    answer: "The Tribe is specifically designed for MSME founders and business owners who have achieved product-market fit (typically ₹5Cr+ revenue) and are struggling to scale beyond their current plateau due to operational bottlenecks."
  },
  {
    question: "How is this different from other business coaching?",
    answer: "Most coaching is theoretical. My framework is built on actual experience building and exiting multiple 8 and 9-figure companies. We focus on implementation and systems, not just motivation."
  },
  {
    question: "What is the time commitment required?",
    answer: "The program is designed for busy founders. You need to invest about 3-4 hours per week for strategic learning and implementation. The goal is to save you time in the long run by removing you from daily operations."
  },
  {
    question: "Do you work with startups or traditional businesses?",
    answer: "I work with both. The principles of HyperScaling—People, Strategy, Execution, and Cash—apply whether you are a tech startup or a traditional manufacturing unit."
  }
];