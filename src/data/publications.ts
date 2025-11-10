import { Publication } from '@/types';

export const publications: Publication[] = [
  // Recent Journal Articles - 2025
  {
    id: 'pub-001',
    title: 'If Not Now Then When? The Reality of Women\'s Representation in Politics and Administration in Bangladesh',
    authors: ['Maruf Hasan Rumi'],
    year: '2025',
    type: 'journal',
    category: 'Gender and Governance',
    abstract: 'This study examines the current state of women\'s representation in political and administrative institutions in Bangladesh, analyzing barriers and opportunities for gender equity in governance.',
    keywords: ['Women\'s representation', 'Politics', 'Public administration', 'Bangladesh', 'Gender equity']
  },
  {
    id: 'pub-002',
    title: 'Factors affecting trust in Bangladesh police among urban male residents',
    authors: ['Maruf Hasan Rumi'],
    journal: 'Frontiers in Sociology',
    year: '2025',
    type: 'journal',
    category: 'Criminal Justice and Policing',
    abstract: 'An empirical analysis of the determinants of police trust among urban male residents in Bangladesh, exploring socio-economic, demographic, and institutional factors.',
    keywords: ['Police trust', 'Urban governance', 'Bangladesh', 'Law enforcement', 'Social trust']
  },

  // 2024 Publications
  {
    id: 'pub-003',
    title: 'Towards women\'s digital health equity',
    authors: ['Maruf Hasan Rumi'],
    journal: 'PLOS Digital Health',
    year: '2024',
    type: 'journal',
    category: 'Digital Health and Equity',
    abstract: 'Examining digital health disparities affecting women and proposing policy interventions to promote equitable access to digital health technologies.',
    keywords: ['Digital health', 'Health equity', 'Women\'s health', 'Technology access', 'Health policy']
  },
  {
    id: 'pub-004',
    title: 'Citizens\' trust in Bangladesh Police',
    authors: ['Maruf Hasan Rumi'],
    journal: 'Policing: A Journal of Policy and Practice',
    year: '2024',
    type: 'journal',
    category: 'Criminal Justice and Policing',
    abstract: 'A comprehensive study of citizen trust in law enforcement institutions in Bangladesh, examining factors that influence public confidence in police services.',
    keywords: ['Police trust', 'Citizen satisfaction', 'Law enforcement', 'Bangladesh', 'Public safety']
  },
  {
    id: 'pub-005',
    title: 'Forced Migration and Transnational Crime in Southeast Asia',
    authors: ['Maruf Hasan Rumi'],
    year: '2024',
    type: 'book-chapter',
    category: 'Migration and Security',
    abstract: 'An analysis of the complex relationship between forced migration patterns and transnational criminal activities in the Southeast Asian region.',
    keywords: ['Forced migration', 'Transnational crime', 'Southeast Asia', 'Security', 'Migration policy']
  },

  // 2023 Publications
  {
    id: 'pub-006',
    title: 'Examining the Role of Civil Society Organizations in Promoting Participatory Local Governance',
    authors: ['Maruf Hasan Rumi'],
    journal: 'Journal of Governance and Social Policy',
    year: '2023',
    type: 'journal',
    category: 'Governance and Civil Society',
    abstract: 'This research explores how civil society organizations contribute to participatory governance mechanisms at the local level.',
    keywords: ['Civil society', 'Participatory governance', 'Local government', 'Democratic participation', 'NGOs']
  },
  {
    id: 'pub-007',
    title: 'Impacts of Covid 19 on Textile Industry Workers in Bangladesh',
    authors: ['Maruf Hasan Rumi'],
    year: '2023',
    type: 'book-chapter',
    category: 'Labor and Social Policy',
    abstract: 'An assessment of how the COVID-19 pandemic affected textile industry workers in Bangladesh, examining health, economic, and social implications.',
    keywords: ['COVID-19', 'Textile industry', 'Labor rights', 'Bangladesh', 'Social impact']
  },
  {
    id: 'pub-008',
    title: 'Cash-Aid Support of Bangladesh Government During Covid 19 Pandemic',
    authors: ['Maruf Hasan Rumi'],
    year: '2023',
    type: 'book-chapter',
    category: 'Social Policy and Welfare',
    abstract: 'Evaluation of the Bangladesh government\'s cash-aid programs implemented during the COVID-19 pandemic and their effectiveness in supporting vulnerable populations.',
    keywords: ['Cash transfer', 'Social protection', 'COVID-19', 'Bangladesh', 'Welfare policy']
  },

  // 2022 Publications
  {
    id: 'pub-009',
    title: 'NGO intervention in empowerment of rural women in Bangladesh',
    authors: ['Maruf Hasan Rumi'],
    journal: 'Bangladesh Rural Development Studies',
    year: '2022',
    type: 'journal',
    category: 'Rural Development and Gender',
    abstract: 'Analysis of NGO programs aimed at empowering rural women in Bangladesh and their impact on women\'s socio-economic status.',
    keywords: ['Rural women', 'Empowerment', 'NGO intervention', 'Bangladesh', 'Rural development']
  },

  // 2025 Book Chapters
  {
    id: 'pub-010',
    title: 'Public policy in Bangladesh: confronting top-down, incremental, and political interference',
    authors: ['Maruf Hasan Rumi'],
    year: '2025',
    type: 'book-chapter',
    category: 'Public Policy Analysis',
    abstract: 'A critical examination of public policy processes in Bangladesh, analyzing the challenges of top-down approaches and political interference in policy implementation.',
    keywords: ['Public policy', 'Policy implementation', 'Bangladesh', 'Political interference', 'Governance']
  },
  {
    id: 'pub-011',
    title: 'The Role of the Village Court as an Alternative Dispute Resolution Tool in Rural Bangladesh',
    authors: ['Maruf Hasan Rumi'],
    year: '2025',
    type: 'book-chapter',
    category: 'Justice and Governance',
    abstract: 'Exploring the effectiveness of village courts as alternative dispute resolution mechanisms in rural Bangladesh and their contribution to local justice delivery.',
    keywords: ['Village courts', 'Alternative dispute resolution', 'Rural justice', 'Bangladesh', 'Local governance']
  },

  // 2020 Publications
  {
    id: 'pub-012',
    title: 'Fourth industrial revolution in Bangladesh: prospects and challenges',
    authors: ['Maruf Hasan Rumi'],
    journal: 'Asian Journal of Social Sciences and Legal Studies',
    year: '2020',
    type: 'journal',
    category: 'Technology and Society',
    abstract: 'An analysis of Bangladesh\'s readiness for the fourth industrial revolution, examining opportunities and challenges in technology adoption and digital transformation.',
    keywords: ['Fourth industrial revolution', 'Digital transformation', 'Bangladesh', 'Technology policy', 'Economic development']
  }
];

// Group publications by type for easier display
export const publicationsByType = {
  journal: publications.filter(pub => pub.type === 'journal'),
  'book-chapter': publications.filter(pub => pub.type === 'book-chapter'),
  conference: publications.filter(pub => pub.type === 'conference'),
  'working-paper': publications.filter(pub => pub.type === 'working-paper')
};

// Group publications by year (most recent first)
export const publicationsByYear = publications
  .sort((a, b) => parseInt(b.year) - parseInt(a.year))
  .reduce((acc, pub) => {
    const year = pub.year;
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(pub);
    return acc;
  }, {} as Record<string, Publication[]>);

// Publication categories for filtering
export const publicationCategories = [
  'All Categories',
  'Gender and Governance',
  'Criminal Justice and Policing',
  'Digital Health and Equity',
  'Migration and Security',
  'Governance and Civil Society',
  'Labor and Social Policy',
  'Social Policy and Welfare',
  'Rural Development and Gender',
  'Public Policy Analysis',
  'Justice and Governance',
  'Technology and Society'
];