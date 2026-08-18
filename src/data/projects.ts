import StPauls from '../assets/images/ProjectsImages/StPauls.png';
import UGMart from '../assets/images/ProjectsImages/UGMart.png';
import CMA from '../assets/images/ProjectsImages/CMA.jpeg';

export interface CaseStudy {
  id: number
  title: string
  category: string
  year: string
  tags: string[]
  outcome: string
  image: string
  color: string
}

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title:
      'Building a scalable mobile app for an eCommerce startup in Ghana',
    category: 'Mobile App Development',
    year: '2026',
    tags: ['React Native', 'Expo', 'Express.js', 'MongoDB', 'AWS'],
    outcome:
      'Still in Production, but early user feedback is positive',
    image:
      UGMart,
    color: '#dce4f0',
  },

  {
    id: 2,
    title:
      'Website Development for a Ghanaian Education institution with integrated payment processing',
    category: 'Full Stack Web Development',
    year: '2025',
    tags: ['HTML', 'CSS', 'JavaScript', 'Stripe API'],
    outcome:
      'Successfully launched the website with integrated payment processing.',
    image: StPauls,
    color: '#dceae0'
  },

  {
    id: 3,
    title:
      'Built an expert system together with my team for Cafeteria Menu Planning using AI and Machine Learning',
    category: 'Expert Systems Development',
    year: '2023',
    tags: ['React', 'Flask', 'Tailwind CSS', 'Python', 'Prolog'],
    outcome:
      'Successfully developed an expert system that recommends optimal cafeteria menus based on dietary restrictions, nutritional requirements, and user preferences.', 
    image:
      CMA,
    color: '#e8e4dc',
  },

  {
    id: 4,
    title:
      'Open-source component library adopted across 3 local startups',
    category: 'Open Source',
    year: '2022',
    tags: ['React', 'Storybook', 'npm'],
    outcome:
      '800+ GitHub stars, 12k weekly downloads',
    image:
      'https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=900&h=600&fit=crop&auto=format',
    color: '#e4dcea',
  },

  {
    id: 5,
    title:
      'Real-time chat application for a local NGO to facilitate communication between volunteers and beneficiaries',
    category: 'Real-time Communication',
    year: '2021',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    outcome:
      'Successfully launched the chat application.', 
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&auto=format',
    color: '#e4e8dc',
  },
]