import { MediaAppearance } from '@/types';

export const mediaAppearances: MediaAppearance[] = [
  {
    id: '1',
    title: 'Discussing [Your Research Topic] on NPR Morning Edition',
    type: 'radio',
    outlet: 'NPR Morning Edition',
    date: '2024-02-14',
    url: 'https://npr.org/your-interview-1',
    description: 'An in-depth conversation about my latest research findings and their implications for policy and society.',
    thumbnail: '/media-npr.jpg'
  },
  {
    id: '2',
    title: 'The Future of [Your Field] - Podcast Interview',
    type: 'podcast',
    outlet: 'Academic Conversations',
    date: '2024-01-28',
    url: 'https://podcast.example.com/your-episode',
    description: 'A deep dive into current trends in [your field] and predictions for future developments.',
    thumbnail: '/media-podcast.jpg'
  },
  {
    id: '3',
    title: 'Expert Commentary on [Current Event]',
    type: 'tv',
    outlet: 'CNN NewsNight',
    date: '2023-12-05',
    url: 'https://cnn.com/your-appearance',
    description: 'Providing expert analysis on breaking news related to my area of expertise.',
    thumbnail: '/media-cnn.jpg'
  },
  {
    id: '4',
    title: 'Understanding [Complex Topic] for General Audiences',
    type: 'podcast',
    outlet: 'Knowledge Matters',
    date: '2023-11-15',
    url: 'https://knowledgematters.com/your-episode',
    description: 'Making academic research accessible by explaining complex concepts in everyday terms.',
    thumbnail: '/media-knowledge.jpg'
  },
  {
    id: '5',
    title: 'Book Discussion: [Your Book Title]',
    type: 'interview',
    outlet: 'Book Review Show',
    date: '2023-10-22',
    description: 'An extensive discussion about my latest book, its research process, and key findings.'
  },
  {
    id: '6',
    title: 'Panel Discussion on [Relevant Topic]',
    type: 'tv',
    outlet: 'PBS NewsHour',
    date: '2023-09-18',
    url: 'https://pbs.org/your-panel',
    description: 'Participating in a panel of experts discussing current issues in [your field].',
    thumbnail: '/media-pbs.jpg'
  },
  {
    id: '7',
    title: 'Research Spotlight Interview',
    type: 'radio',
    outlet: 'Science Friday',
    date: '2023-08-11',
    url: 'https://sciencefriday.com/your-segment',
    description: 'Highlighting recent research breakthroughs and their potential impact on the field.',
    thumbnail: '/media-scifri.jpg'
  },
  {
    id: '8',
    title: 'Academic Life and Career Advice',
    type: 'podcast',
    outlet: 'The Academic Experience',
    date: '2023-07-03',
    url: 'https://academicexp.com/your-episode',
    description: 'Sharing insights about academic career development and the research process.'
  }
];