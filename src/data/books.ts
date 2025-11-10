import { Book } from '@/types';

export const books: Book[] = [
  {
    id: '1',
    title: 'Your First Book Title',
    subtitle: 'A Compelling Subtitle About Your Research',
    description: 'A comprehensive exploration of [your topic]. This book examines [key themes] and provides new insights into [important aspects of your field]. Drawing on extensive research and analysis, it offers a fresh perspective on [relevant issues].',
    coverImage: '/book-1.jpg',
    publishDate: '2024',
    publisher: 'Academic Press',
    isbn: '978-0000000000',
    buyLinks: {
      amazon: 'https://amazon.com/your-book',
      bookshop: 'https://bookshop.org/your-book',
      barnes: 'https://barnesandnoble.com/your-book'
    },
    reviews: [
      {
        source: 'Academic Journal',
        quote: 'A groundbreaking work that reshapes our understanding of [topic]. Essential reading for scholars and students alike.',
        reviewer: 'Dr. Reviewer Name'
      },
      {
        source: 'Major Publication',
        quote: 'Brilliantly researched and compellingly written. [Your Name] has produced a masterpiece of scholarship.'
      }
    ]
  },
  {
    id: '2',
    title: 'Your Second Book Title',
    subtitle: 'Another Important Academic Work',
    description: 'Building on the themes of the first book, this work delves deeper into [related topics]. It presents new evidence and arguments about [specific aspects] while maintaining scholarly rigor and accessibility.',
    coverImage: '/book-2.jpg',
    publishDate: '2022',
    publisher: 'University Press',
    isbn: '978-1111111111',
    buyLinks: {
      amazon: 'https://amazon.com/your-second-book',
      bookshop: 'https://bookshop.org/your-second-book'
    },
    reviews: [
      {
        source: 'Review Publication',
        quote: 'An important contribution to the field. [Your Name] continues to push boundaries and challenge conventional thinking.',
        reviewer: 'Prof. Another Reviewer'
      }
    ]
  },
  {
    id: '3',
    title: 'Your Third Book Title',
    description: 'Your earliest published work that established your reputation in the field. This book laid the groundwork for your subsequent research and remains highly cited.',
    coverImage: '/book-3.jpg',
    publishDate: '2020',
    publisher: 'Scholarly Publications',
    isbn: '978-2222222222',
    buyLinks: {
      amazon: 'https://amazon.com/your-third-book'
    },
    reviews: [
      {
        source: 'Academic Review',
        quote: 'A promising debut that signals the arrival of an important new voice in [your field].',
        reviewer: 'Dr. Early Supporter'
      }
    ]
  }
];