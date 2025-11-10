import { Book } from '@/types';

export const books: Book[] = [
  {
    id: '1',
    title: 'Digital Governance in the 21st Century',
    subtitle: 'Technology, Democracy, and Public Administration Reform',
    description: 'An authoritative examination of how digital technologies are transforming governance structures and democratic processes. This comprehensive work explores the intersection of public administration, citizen engagement, and technological innovation, offering critical insights into the future of democratic governance. Through empirical research and theoretical analysis, this book provides a roadmap for understanding digital transformation in public sector organizations and its implications for democratic accountability.',
    coverImage: '/placeholder-book-1.jpg',
    publishDate: '2024',
    publisher: 'Cambridge University Press',
    isbn: '978-1-108-12345-6',
    buyLinks: {
      amazon: 'https://amazon.com/digital-governance-21st-century',
      bookshop: 'https://bookshop.org/digital-governance-21st-century',
      barnes: 'https://barnesandnoble.com/digital-governance-21st-century'
    },
    reviews: [
      {
        source: 'Public Administration Review',
        quote: 'A groundbreaking work that masterfully bridges the gap between technological innovation and democratic governance. Rumi presents a compelling analysis that will reshape how we understand digital transformation in public administration.',
        reviewer: 'Dr. Sarah Mitchell'
      },
      {
        source: 'Journal of Public Policy',
        quote: 'Essential reading for scholars, practitioners, and policymakers. This book offers profound insights into the challenges and opportunities of digital governance while maintaining rigorous academic standards.'
      },
      {
        source: 'Government Technology Magazine',
        quote: 'A tour de force that combines theoretical depth with practical relevance. Rumi has crafted an invaluable resource for anyone seeking to understand the digital future of public administration.',
        reviewer: 'Prof. Michael Chen'
      }
    ]
  },
  {
    id: '2',
    title: 'Social Policy Innovation',
    subtitle: 'Behavioral Science Approaches to Public Problem Solving',
    description: 'This pioneering work explores how insights from behavioral science can revolutionize social policy design and implementation. Drawing from extensive research in psychology, economics, and public administration, this book demonstrates how understanding human behavior can lead to more effective and efficient policy interventions. The text examines case studies from around the world, offering evidence-based strategies for policy innovation in areas such as health, education, and social welfare.',
    coverImage: '/placeholder-book-2.jpg',
    publishDate: '2023',
    publisher: 'Oxford University Press',
    isbn: '978-0-19-876543-2',
    buyLinks: {
      amazon: 'https://amazon.com/social-policy-innovation-behavioral',
      bookshop: 'https://bookshop.org/social-policy-innovation-behavioral',
      barnes: 'https://barnesandnoble.com/social-policy-innovation-behavioral'
    },
    reviews: [
      {
        source: 'Policy Studies Journal',
        quote: 'A brilliant synthesis of behavioral science and policy analysis. This book will undoubtedly become a cornerstone text for policy schools and public administration programs worldwide.',
        reviewer: 'Dr. Emily Rodriguez'
      },
      {
        source: 'International Review of Public Policy',
        quote: 'Rumi has achieved something remarkable: making complex behavioral science accessible to policy practitioners while maintaining scholarly rigor. A must-read for the next generation of policy leaders.'
      },
      {
        source: 'Behavioral Public Policy',
        quote: 'An outstanding contribution to the field that demonstrates the practical power of behavioral insights in addressing society\'s most pressing challenges.',
        reviewer: 'Prof. James Thompson'
      }
    ]
  },
  {
    id: '3',
    title: 'Technology and Democratic Institutions',
    subtitle: 'Challenges and Opportunities in the Digital Age',
    description: 'A comprehensive analysis of how technological advancement is reshaping democratic institutions and processes. This book examines the dual nature of technology as both an enabler and a disruptor of democratic governance. Through comparative case studies and empirical analysis, it explores topics including digital participation, algorithmic governance, cybersecurity in democratic systems, and the role of artificial intelligence in public decision-making. Essential reading for understanding democracy in the digital era.',
    coverImage: '/placeholder-book-3.jpg',
    publishDate: '2022',
    publisher: 'Harvard University Press',
    isbn: '978-0-674-24681-3',
    buyLinks: {
      amazon: 'https://amazon.com/technology-democratic-institutions',
      bookshop: 'https://bookshop.org/technology-democratic-institutions'
    },
    reviews: [
      {
        source: 'American Political Science Review',
        quote: 'A timely and important contribution to our understanding of democracy in the digital age. Rumi provides nuanced analysis that avoids both techno-optimism and pessimism.',
        reviewer: 'Dr. Robert Kumar'
      },
      {
        source: 'Governance',
        quote: 'This book successfully bridges political science, public administration, and technology studies. A sophisticated treatment of one of the most important issues of our time.',
        reviewer: 'Prof. Lisa Wang'
      },
      {
        source: 'Political Studies',
        quote: 'An impressive debut that establishes Rumi as a leading voice in the study of technology and governance. Thoughtful, rigorous, and remarkably prescient.'
      }
    ]
  }
];