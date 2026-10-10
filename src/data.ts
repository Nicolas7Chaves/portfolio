// All site content lives here — edit this file to update the site.

export const profile = {
  name: 'Nicolas Chaves',
  role: 'GTM Engineer',
  company: 'Wellhub',
  location: 'Miami, FL',
  email: 'nicolas7chaves@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nicolas7chaves/',
  github: 'https://github.com/Nicolas7Chaves',
  // Set to a path in /public (e.g. '/NicolasChavesResume.pdf') to show a download button.
  resume: null as string | null,
}

// Cycled in the hero: "Career speedrun: <role>"
export const pastLives = [
  'founder',
  'real estate developer',
  'software engineer',
  'product manager',
  'BDR',
  'GTM engineer',
]

export const stats = [
  { value: '6', label: 'career levels cleared' },
  { value: '96', label: 'unit building delivered' },
  { value: '1', label: 'hackathon won' },
  { value: '0', label: 'missed deadlines (team of 8)' },
]

export type Role = {
  title: string
  company: string
  dates: string
  details?: string
}

export type Level = {
  level: number
  name: string
  years: string
  tagline: string
  roles: Role[]
  current?: boolean
}

export const levels: Level[] = [
  {
    level: 6,
    name: 'GTM Engineer',
    years: '2026 → now',
    tagline: 'Where sales, data and code meet.',
    current: true,
    roles: [
      {
        title: 'GTM Engineer (Enterprise)',
        company: 'Wellhub',
        dates: 'Jul 2026 – Present',
        details:
          'Building the data and automation layer behind enterprise go-to-market: enrichment, routing and outbound workflows in Clay and HubSpot.',
      },
    ],
  },
  {
    level: 5,
    name: 'Sales',
    years: '2025 – 2026',
    tagline: 'Learned the pipeline from the front line.',
    roles: [
      {
        title: 'Business Development Representative',
        company: 'Wellhub',
        dates: 'Aug 2025 – Jul 2026',
        details:
          'Prospected and opened enterprise conversations, then started automating the parts of the job that should never be manual.',
      },
    ],
  },
  {
    level: 4,
    name: 'Product',
    years: '2024 – 2025',
    tagline: 'Translating business goals into shipped software.',
    roles: [
      {
        title: 'Technical Product Manager',
        company: 'Stealth FinTech Startup',
        dates: 'Jul 2024 – Jan 2025',
        details:
          'Aligned four teams on product goals, standardized datasets for ML model accuracy, wrote PRDs and wireframes, and built a bug-tracking system that shortened resolution cycles.',
      },
      {
        title: 'Product Manager',
        company: 'makeitMVP',
        dates: 'Jun 2024 – Jul 2024',
        details:
          'Led a cross-functional team of 8 designers and developers shipping weekly features with zero missed deadlines.',
      },
      {
        title: 'Product Management Certificate',
        company: 'BrainStation',
        dates: 'May 2024 – Jul 2024',
      },
    ],
  },
  {
    level: 3,
    name: 'Learned to Code',
    years: '2023',
    tagline: 'Traded spreadsheets for React.',
    roles: [
      {
        title: 'Software Engineering Diploma',
        company: 'BrainStation',
        dates: 'Sep 2023 – Dec 2023',
        details:
          'Full-stack JavaScript: React, Node.js, Express, SQL, Git and Agile. Shipped PayPatrol as a capstone and won the BrainStation × Kaseya hackathon.',
      },
    ],
  },
  {
    level: 2,
    name: 'Real Estate',
    years: '2018 – 2023',
    tagline: 'Built an actual building. 96 units of it.',
    roles: [
      {
        title: 'Project Manager',
        company: 'Eastern Atlantic Development',
        dates: 'Apr 2022 – Mar 2023',
        details:
          'Directed development of a 96-unit multifamily building, coordinating 20+ people and 5+ subcontractor teams, securing 10–15% cost savings through bid negotiations.',
      },
      {
        title: 'Real Estate Development Analyst',
        company: 'Eastern Atlantic Development',
        dates: 'Feb 2022 – May 2022',
        details:
          'Built financial models and investment memos that shaped funding decisions, plus valuation for the sale of two multifamily properties.',
      },
      {
        title: 'Intern',
        company: 'Maynada Capital Advisors',
        dates: 'Jun 2021 – Aug 2021',
      },
      {
        title: 'Real Estate Sales Associate',
        company: 'BARNES',
        dates: 'May 2018 – Jun 2018',
      },
    ],
  },
  {
    level: 1,
    name: 'Founder Mode',
    years: '2016 – 2018',
    tagline: 'Started a company before finishing school.',
    roles: [
      {
        title: 'Co-Founder',
        company: 'Carapeace (clothing e-commerce)',
        dates: 'Oct 2016 – Jan 2018',
      },
      {
        title: 'Summer Intern',
        company: 'Mariva Capital Markets',
        dates: 'Jun 2017',
      },
    ],
  },
]

export const toolkit = [
  {
    group: 'Go-to-market',
    color: 'clay',
    items: ['Clay', 'HubSpot Sales Hub', 'LinkedIn Sales Navigator', 'Enrichment', 'Outbound automation', 'Lead routing'],
  },
  {
    group: 'Build',
    color: 'lilac',
    items: ['JavaScript', 'React', 'Node.js', 'Express', 'Python', 'SQL', 'Firebase', 'OpenAI API', 'Git'],
  },
  {
    group: 'Product',
    color: 'moss',
    items: ['PRDs & wireframes', 'Jira', 'Agile', 'Cross-functional leadership'],
  },
  {
    group: 'Finance',
    color: 'sun',
    items: ['Financial modeling', 'Valuation', 'Argus Enterprise', 'REFM Levels 1–3'],
  },
] as const

export type Project = {
  name: string
  blurb: string
  stack: string[]
  image?: string
  badge?: string
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    name: 'PayPatrol',
    blurb:
      'Time tracking and attendance app: employees clock in and out with a QR code, and weekly hours and wages calculate themselves.',
    stack: ['React', 'Node.js', 'Express', 'Knex', 'SQL'],
    image: '/images/paypatrol.png',
    links: [{ label: 'GitHub', href: 'https://github.com/Nicolas7Chaves/nicolas-chaves-capstone' }],
  },
  {
    name: 'Commit Quality Dashboard',
    blurb:
      'Built in 24 hours for Kaseya: an OpenAI-powered dashboard that monitors developer activity and grades commit comment quality across repos.',
    stack: ['React', 'GitHub API', 'OpenAI API', 'SCSS'],
    badge: 'Hackathon winner',
    links: [],
  },
  {
    name: 'Postr',
    blurb: 'A social platform for sharing thoughts with friends and family: accounts, posts and interactions.',
    stack: ['React', 'Firebase'],
    image: '/images/postr.png',
    links: [{ label: 'Live site', href: 'https://nicolaschaves-postr.netlify.app/' }],
  },
  {
    name: 'AITranslate',
    blurb: 'Instant translation between English, Spanish, French and German, powered by the OpenAI API.',
    stack: ['JavaScript', 'OpenAI API'],
    image: '/images/aiTranslate.png',
    links: [{ label: 'GitHub', href: 'https://github.com/Nicolas7Chaves/AiTranslate' }],
  },
]

// Photos live in /public/images. Entries without `src` show as "coming soon" slots.
export type Photo = { src?: string; caption: string; tall?: boolean }

export const photos: Photo[] = [
  { src: '/images/demoday.jpg', caption: 'Demo Day at BrainStation, showing off PayPatrol', tall: true },
  { caption: 'Sculpt, the Clay conference' },
  { src: '/images/demo.jpg', caption: 'The PayPatrol booth: clock in, clock out, live', tall: true },
  { caption: 'On the golf course' },
]
