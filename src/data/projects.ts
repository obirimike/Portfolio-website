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
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&auto=format',
    color: '#dce4f0',
  },

  {
    id: 2,
    title:
      'Website Development for a Ghanaian Education institution with integrated payment processing',
    category: 'Full Stack Web Development',
    year: '2025',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Stripe API'],
    outcome:
      'Successfully launched the website with integrated payment processing, resulting in a 30% increase in online enrollment',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=900&h=600&fit=crop&auto=format',
    color: '#dceae0',
  },

  {
    id: 3,
    title:
      'Built an expert system for Cafeteria Menu Planning using AI and Machine Learning',
    category: 'Expert Systems Development',
    year: '2023',
    tags: ['React', 'Node.js', 'Tailwind CSS', 'Python', 'Machine Learning'],
    outcome:
      'Successfully developed an expert system that recommends optimal cafeteria menus based on dietary restrictions, nutritional requirements, and user preferences, resulting in a 25% increase in customer satisfaction',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&auto=format',
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
      'Successfully launched the chat application, resulting in a 40% increase in volunteer engagement and improved communication with beneficiaries',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=900&h=600&fit=crop&auto=format',
    color: '#e4e8dc',
  },
]