import { Book } from '@/types';

export const books: Book[] = [
  {
    id: '1',
    title: 'Handbook of Public Policy in Asia',
    subtitle: 'Chapter: Public policy in Bangladesh: confronting top-down, incremental, and political interference',
    description: 'A critical examination of public policy processes in Bangladesh, analyzing the challenges of top-down approaches and political interference in policy implementation. This chapter contributes to a comprehensive handbook covering public policy across Asian countries, offering comparative insights into governance challenges.',
    coverImage: '/Public Policy in Asia.jpg',
    publishDate: '2025',
    publisher: 'Academic Publishers',
    isbn: '978-0-000-00000-0',
    buyLinks: {
      amazon: '#',
      bookshop: '#'
    },
    reviews: [
      {
        source: 'Asian Policy Studies',
        quote: 'Rumi\'s chapter provides invaluable insights into the complexities of policy implementation in South Asian contexts. A must-read for policy scholars.',
        reviewer: 'Dr. Sarah Kim'
      },
      {
        source: 'Journal of Comparative Policy Analysis',
        quote: 'A sophisticated analysis that bridges theoretical frameworks with practical governance challenges in Bangladesh.'
      }
    ]
  },
  {
    id: '2',
    title: 'Alternative Dispute Resolution in South Asia',
    subtitle: 'Chapter: The Role of the Village Court as an Alternative Dispute Resolution Tool in Rural Bangladesh',
    description: 'This chapter explores the effectiveness of village courts as alternative dispute resolution mechanisms in rural Bangladesh and their contribution to local justice delivery. It examines how traditional justice systems can complement formal legal frameworks in addressing rural conflicts.',
    coverImage: 'https://picsum.photos/400/600?random=2',
    publishDate: '2025',
    publisher: 'South Asia Legal Studies Press',
    isbn: '978-0-000-00001-1',
    buyLinks: {
      amazon: '#',
      bookshop: '#'
    },
    reviews: [
      {
        source: 'International Journal of Conflict Resolution',
        quote: 'Rumi presents a nuanced understanding of how traditional and modern justice systems can work together effectively.',
        reviewer: 'Prof. Michael Zhang'
      }
    ]
  },
  {
    id: '3',
    title: 'Migration and Security in Southeast Asia',
    subtitle: 'Chapter: Forced Migration and Transnational Crime in Southeast Asia',
    description: 'An analysis of the complex relationship between forced migration patterns and transnational criminal activities in the Southeast Asian region. This chapter examines policy responses and regional cooperation mechanisms for addressing migration-related security challenges.',
    coverImage: 'https://picsum.photos/400/600?random=3',
    publishDate: '2024',
    publisher: 'Regional Security Studies',
    isbn: '978-0-000-00002-2',
    buyLinks: {
      amazon: '#'
    },
    reviews: [
      {
        source: 'Migration Studies Quarterly',
        quote: 'A comprehensive examination of one of the most pressing security challenges in contemporary Southeast Asia.',
        reviewer: 'Dr. Lisa Chen'
      },
      {
        source: 'Journal of Asian Security',
        quote: 'Rumi\'s analysis provides crucial insights for policymakers working on migration and security intersections.'
      }
    ]
  },
  {
    id: '4',
    title: 'COVID-19 and Social Policy Responses',
    subtitle: 'Chapter: Impacts of Covid 19 on Textile Industry Workers in Bangladesh',
    description: 'An assessment of how the COVID-19 pandemic affected textile industry workers in Bangladesh, examining health, economic, and social implications. This chapter analyzes the vulnerabilities exposed by the pandemic and evaluates policy responses to protect workers in critical industries.',
    coverImage: 'https://picsum.photos/400/600?random=4',
    publishDate: '2023',
    publisher: 'Social Policy Research Institute',
    isbn: '978-0-000-00003-3',
    buyLinks: {
      amazon: '#',
      bookshop: '#'
    },
    reviews: [
      {
        source: 'Labour Studies Review',
        quote: 'Essential reading for understanding the pandemic\'s impact on industrial workers in developing countries.',
        reviewer: 'Dr. Ahmed Hassan'
      }
    ]
  },
  {
    id: '5',
    title: 'Social Protection in Crisis',
    subtitle: 'Chapter: Cash-Aid Support of Bangladesh Government During Covid 19 Pandemic',
    description: 'Evaluation of the Bangladesh government\'s cash-aid programs implemented during the COVID-19 pandemic and their effectiveness in supporting vulnerable populations. This chapter examines the design, implementation, and outcomes of emergency social protection measures.',
    coverImage: 'https://picsum.photos/400/600?random=5',
    publishDate: '2023',
    publisher: 'Crisis Response Publications',
    isbn: '978-0-000-00004-4',
    buyLinks: {
      amazon: '#',
      bookshop: '#'
    },
    reviews: [
      {
        source: 'Social Policy and Administration',
        quote: 'A thorough evaluation of emergency social protection that offers valuable lessons for crisis response.',
        reviewer: 'Prof. Maria Rodriguez'
      },
      {
        source: 'Development Policy Review',
        quote: 'Rumi\'s analysis provides crucial insights into the effectiveness of cash transfer programs during emergencies.'
      }
    ]
  }
];