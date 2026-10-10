// All site content lives here — edit this file to update the site.

export const profile = {
  name: 'Nicolas Chaves',
  role: 'GTM Engineer',
  company: 'Wellhub',
  location: 'Miami',
  email: 'nicolas7chaves@gmail.com',
  linkedin: 'https://www.linkedin.com/in/nicolas7chaves/',
  github: 'https://github.com/Nicolas7Chaves',
  // Set to a path in /public (e.g. '/NicolasChavesResume.pdf') to show a download link.
  resume: null as string | null,
}

// "In this issue" table of contents on the cover page.
export const contents = [
  { page: '04', title: 'Back issues', note: 'Six careers, one story', href: '#issues' },
  { page: '12', title: 'Things I shipped', note: 'Apps, hacks and a hackathon win', href: '#shipped' },
  { page: '20', title: 'Classifieds', note: 'Skills for hire', href: '#classifieds' },
  { page: '26', title: 'Snapshots', note: 'Field notes and photos', href: '#snapshots' },
]

export type Role = {
  title: string
  company: string
  dates: string
  details?: string
}

export type Issue = {
  number: string
  year: string
  title: string
  years: string
  tagline: string
  color: string
  ink: string
  image?: string
  current?: boolean
  roles: Role[]
}

// Career chapters, oldest first, shown as magazine issues on a shelf.
export const issues: Issue[] = [
  {
    number: '01',
    year: '2016',
    title: 'Founder Mode',
    years: '2016 – 2018',
    tagline: 'Started a company before finishing school.',
    color: '#c2410c',
    ink: '#fff7ed',
    roles: [
      { title: 'Co-Founder', company: 'Carapeace (clothing e-commerce)', dates: 'Oct 2016 – Jan 2018' },
      { title: 'Summer Intern', company: 'Mariva Capital Markets', dates: 'Jun 2017' },
    ],
  },
  {
    number: '02',
    year: '2018',
    title: 'Real Estate',
    years: '2018 – 2023',
    tagline: 'Financial models, investment memos, and a building from the ground up.',
    color: '#3f6b4f',
    ink: '#f0fdf4',
    roles: [
      {
        title: 'Project Manager',
        company: 'Eastern Atlantic Development',
        dates: 'Apr 2022 – Mar 2023',
        details:
          'Directed development of a multifamily building, coordinating 20+ people and 5+ subcontractor teams, securing 10–15% cost savings through bid negotiations.',
      },
      {
        title: 'Real Estate Development Analyst',
        company: 'Eastern Atlantic Development',
        dates: 'Feb 2022 – May 2022',
        details:
          'Built financial models and investment memos that shaped funding decisions, plus valuation for the sale of two multifamily properties.',
      },
      { title: 'Intern', company: 'Maynada Capital Advisors', dates: 'Jun 2021 – Aug 2021' },
      { title: 'Real Estate Sales Associate', company: 'BARNES', dates: 'May 2018 – Jun 2018' },
    ],
  },
  {
    number: '03',
    year: '2023',
    title: 'Learned to Code',
    years: '2023',
    tagline: 'Traded spreadsheets for React.',
    color: '#2f5bd3',
    ink: '#eff6ff',
    image: '/images/demo.jpg',
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
    number: '04',
    year: '2024',
    title: 'Product',
    years: '2024 – 2025',
    tagline: 'Translating business goals into shipped software.',
    color: '#7a4fb5',
    ink: '#faf5ff',
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
        details: 'Led a cross-functional team of 8 designers and developers shipping weekly features with zero missed deadlines.',
      },
      { title: 'Product Management Certificate', company: 'BrainStation', dates: 'May 2024 – Jul 2024' },
    ],
  },
  {
    number: '05',
    year: '2025',
    title: 'Sales',
    years: '2025 – 2026',
    tagline: 'Learned the pipeline from the front line.',
    color: '#1b1a17',
    ink: '#efe9dd',
    roles: [
      {
        title: 'Business Development Representative',
        company: 'Wellhub',
        dates: 'Aug 2025 – Jul 2026',
        details: 'Prospected into enterprise accounts and opened conversations for the sales team.',
      },
    ],
  },
  {
    number: '06',
    year: 'Now',
    title: 'GTM Engineer',
    years: '2026 → now',
    tagline: 'Where sales, data and code meet. The current issue.',
    color: '#ffd84d',
    ink: '#1b1a17',
    image: '/images/demoday.jpg',
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
]

export type Project = {
  name: string
  kicker: string
  blurb: string
  stack: string[]
  image?: string
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    name: 'PayPatrol',
    kicker: 'Capstone',
    blurb:
      'Time tracking and attendance for small teams. Employees clock in and out with a QR code, and weekly hours and wages calculate themselves.',
    stack: ['React', 'Node.js', 'Express', 'Knex', 'SQL'],
    image: '/images/paypatrol.png',
    links: [{ label: 'GitHub', href: 'https://github.com/Nicolas7Chaves/nicolas-chaves-capstone' }],
  },
  {
    name: 'Commit Quality Dashboard',
    kicker: 'Hackathon winner',
    blurb:
      'Built in 24 hours for Kaseya: an OpenAI-powered dashboard that monitors developer activity and grades commit comment quality across repos.',
    stack: ['React', 'GitHub API', 'OpenAI API', 'SCSS'],
    links: [],
  },
  {
    name: 'Postr',
    kicker: 'Social',
    blurb: 'A social platform for sharing thoughts with friends and family: accounts, posts and interactions.',
    stack: ['React', 'Firebase'],
    image: '/images/postr.png',
    links: [{ label: 'Live site', href: 'https://nicolaschaves-postr.netlify.app/' }],
  },
  {
    name: 'AITranslate',
    kicker: 'AI',
    blurb: 'Instant translation between English, Spanish, French and German, powered by the OpenAI API.',
    stack: ['JavaScript', 'OpenAI API'],
    image: '/images/aiTranslate.png',
    links: [{ label: 'GitHub', href: 'https://github.com/Nicolas7Chaves/AiTranslate' }],
  },
]

// Skills, written as newspaper classified ads.
export const classifieds = [
  {
    heading: 'Go-to-market',
    ad: 'Operator seeks messy CRM. Will enrich, route and automate until pipeline flows.',
    items: ['Clay', 'HubSpot Sales Hub', 'LinkedIn Sales Navigator', 'Enrichment', 'Outbound automation', 'Lead routing'],
  },
  {
    heading: 'Builder',
    ad: 'Bootcamp-trained engineer, still writes code daily. APIs a specialty.',
    items: ['JavaScript', 'React', 'Node.js', 'Express', 'Python', 'SQL', 'Firebase', 'OpenAI API', 'Git'],
  },
  {
    heading: 'Product',
    ad: 'Former PM. Turns vague asks into PRDs, sprints and shipped features.',
    items: ['PRDs and wireframes', 'Jira', 'Agile', 'Cross-functional leadership'],
  },
  {
    heading: 'Finance',
    ad: 'Ex-real estate analyst. Models anything. Reads a pro forma for fun.',
    items: ['Financial modeling', 'Valuation', 'Argus Enterprise', 'REFM Levels 1–3'],
  },
]

// Scrapbook photos in /public/images. Entries without `src` show as empty slots.
export type Photo = { src?: string; caption: string }

export const photos: Photo[] = [
  { src: '/images/demoday.jpg', caption: 'demo day!' },
  { src: '/images/demo.jpg', caption: 'the PayPatrol booth' },
  { caption: "Sculpt '26" },
  { caption: 'on the golf course' },
]
