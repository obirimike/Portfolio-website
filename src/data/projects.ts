import StPauls from '../assets/images/ProjectsImages/StPauls.png';
import UGMart from '../assets/images/ProjectsImages/UGMart.png';
import CMA from '../assets/images/ProjectsImages/CMA.jpeg';
import ONPT from '../assets/images/ProjectsImages/ONPT.jpeg';
import CHAT from '../assets/images/ProjectsImages/CHAT.jpeg';
import PRO from '../assets/images/ProjectsImages/PRO.jpeg';


export interface CaseStudy {
  id: number
  title: string
  category: string
  year: string
  tags: string[]
  outcome: string
  image: string
  color: string
  liveUrl?: string
  githubUrl?: string
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
    // liveUrl: 'https://ugmart.com',
    githubUrl: 'https://github.com/obirimike/UGMart-CampusMarket-SPA.git',
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
    color: '#dceae0',
    // liveUrl: 'https://ugmart.com',
    githubUrl: 'https://github.com/obirimike/School-Website.git',
  },

  {
    id: 3,
    title:
      'Built an expert system together with my team for Cafeteria Menu Planning using AI and Machine Learning',
    category: 'Expert Systems Development',
    year: '2026',
    tags: ['React', 'Flask', 'Tailwind CSS', 'Python', 'Prolog'],
    outcome:
      'Successfully developed an expert system that recommends optimal cafeteria menus based on dietary restrictions, nutritional requirements, and user preferences.', 
    image:
      CMA,
    color: '#e8e4dc',
    liveUrl: 'https://expertsys.netlify.app',
    githubUrl: 'https://github.com/obirimike/your-repository',
  },

  {
    id: 4,
    title:
      ' A modern company website I designed for a technology solutions company.',
    category: 'Web Development',
    year: '2025',
    tags: ['HTML', 'CSS', 'Javascript', 'Vite'],
    outcome:
      'Still in the production phase-launching soon!🚀.',
    image:
      ONPT,
    color: '#e4dcea',
    // liveUrl: 'https://ugmart.com',
    githubUrl: 'https://github.com/obirimike/OnPoint-Website.git',
  },

  {
    id: 5,
    title:
      'Real-time chat application for a local NGO to facilitate communication between volunteers and beneficiaries',
    category: 'Real-time Communication',
    year: '2026',
    tags: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    outcome:
      'Still in the production phase-launching soon!🚀', 
    image:
      CHAT,
    color: '#e4e8dc',
    // liveUrl: 'https://ugmart.com',
    githubUrl: 'https://github.com/obirimike/your-repository',
  },

  {
    id :6,
    title: 'A simple and elegant profile card designed to display basic user information in a visually appealing format',
    category: 'Web Development',
    year: '2024',
    tags: ['HTML', 'Tailwind CSS', 'Javascript'],
    outcome:
    'Successfully finished and deployed it',
    image:
     PRO,
    color:'#e8e4dc',
    liveUrl: 'https://profilecard.netlify.app',
    githubUrl: 'https://github.com/obirimike/Profile-Card.git',
  }
]