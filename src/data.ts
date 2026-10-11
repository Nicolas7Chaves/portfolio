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

// "Inside" table of contents on the cover page.
export const contents = [
  { page: '01', title: 'The volumes', note: 'Six careers, one story', href: '#volumes' },
  { page: '02', title: 'Things I shipped', note: 'AI workflows, apps and a hackathon win', href: '#shipped' },
  { page: '03', title: 'Toolkit', note: 'The tools behind the work', href: '#toolkit' },
]

export type Role = {
  title: string
  company: string
  dates: string
  details?: string
  highlights?: string[]
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
  // Show the photo as-is instead of blending it into the cover color (needed on dark covers).
  plainImage?: boolean
  // Polaroids shown beside the chapter when this issue is picked.
  photos?: Photo[]
  current?: boolean
  roles: Role[]
}

// Career chapters, oldest first, shown as magazine volumes on a shelf.
export const issues: Issue[] = [
  {
    number: '01',
    year: '2016',
    title: 'Founder Mode',
    years: '2016 – 2018',
    tagline: 'Started a company before finishing school.',
    color: '#c2410c',
    ink: '#fff7ed',
    image: '/images/carapeace-beach.jpg',
    photos: [
      { src: '/images/carapeace-beach.jpg', caption: 'shell yeah' },
      { src: '/images/carapeace.jpg', caption: 'the Carapeace tees' },
      { src: '/images/carapeace-lifeguard.jpg', caption: 'Miami Beach photo shoot', wide: true },
    ],
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
    photos: [
      { src: '/images/demoday.jpg', caption: 'demo day!' },
      { src: '/images/demo.jpg', caption: 'the PayPatrol booth' },
      { src: '/images/hackathon.jpg', caption: 'Kaseya × BrainStation hackathon', wide: true },
    ],
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
        highlights: [
          'Coordinated platform, data science, QA and data annotation teams to hit critical deadlines, and launched daily stand-ups that kept everyone aligned.',
          'Boosted data pipeline efficiency by 50% by refining data acquisition and standardizing input quality with the annotation team.',
          'Wrote PRDs and visual mockups that turned user needs into clear specs and cut scope misalignment within the first month.',
          'Revamped Jira workflows, cutting sprint planning time by 15% and speeding up team velocity.',
        ],
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
    tagline: 'Learned the pipeline from the front line, then automated it.',
    color: '#1b1a17',
    ink: '#efe9dd',
    image: '/images/wellhub-headshot.jpg',
    plainImage: true,
    photos: [{ src: '/images/wellhub-headshot.jpg', caption: 'Wellhub era' }],
    roles: [
      {
        title: 'Enterprise Business Development Representative',
        company: 'Wellhub',
        dates: 'Aug 2025 – Jul 2026',
        highlights: [
          'Managed a book of 600+ enterprise accounts across the US and Canada, hitting 116% of pipeline quota in Q2 2026 and ranking above the team average.',
          'Built an AI-powered prospecting workflow with Claude Code and the ZoomInfo MCP that pulls intent signals and news triggers to prioritize accounts, with no manual research.',
          'Engineered the messaging layer behind it: prompt frameworks and research templates that produce personalized, ready-to-send emails at scale, reaching ~51% opens and ~4% replies, the best cadence on the team.',
          'Delivered ranked account intelligence reports to each AE, scoring high-intent accounts so they could act on buying signals immediately.',
        ],
      },
    ],
  },
  {
    number: '06',
    year: 'Now',
    title: 'GTM Engineer',
    years: '2026 → now',
    tagline: 'Where sales, data and code meet. The current volume.',
    color: '#ffd84d',
    ink: '#1b1a17',
    image: '/images/sculpt.jpg',
    photos: [{ src: '/images/sculpt.jpg', caption: "Sculpt, Clay's GTM conference", wide: true }],
    current: true,
    roles: [
      {
        title: 'GTM Engineer (Enterprise)',
        company: 'Wellhub',
        dates: 'Jul 2026 – Present',
        details:
          "Enterprise outbound engineer for Wellhub's US Enterprise team. I combine Clay, HubSpot, Salesforce and buying signals to raise both the quality and the volume of outbound.",
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
  // Shown instead of an image: a big typographic "poster".
  poster?: { big: string; small: string; color: string }
  links: { label: string; href: string }[]
}

export const projects: Project[] = [
  {
    name: 'AI Prospecting Engine',
    kicker: 'Built at Wellhub',
    blurb:
      'As a BDR, I created a Claude Code program wired into the ZoomInfo MCP. It reads intent signals and news triggers across 600+ enterprise accounts, ranks who to call, and drafts personalized emails that are ready to send. It became the best-performing cadence on the team.',
    stack: ['Claude Code', 'ZoomInfo MCP', 'Prompt frameworks', 'Account scoring'],
    poster: { big: '51%', small: 'open rate · ~4% reply rate', color: '#2f5bd3' },
    links: [],
  },
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
    poster: { big: '1st', small: 'BrainStation × Kaseya · 24h hackathon', color: '#ffd84d' },
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

// Skills, grouped by the hat I'm wearing.
export const toolkit = [
  {
    heading: 'Go-to-market',
    ad: 'Turns buying signals into pipeline: scoring, prioritizing and personalizing outbound at scale.',
    items: ['Clay', 'Salesforce', 'HubSpot', 'ZoomInfo', 'Gong', 'LinkedIn Sales Navigator', 'Intent signals', 'Account scoring', 'Outbound automation'],
  },
  {
    heading: 'Builder',
    ad: 'Bootcamp-trained engineer who now builds with AI agents. APIs and prompts a specialty.',
    items: ['Claude Code', 'MCP', 'Prompt engineering', 'JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'OpenAI API', 'Git'],
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

// A photo in /public/images. `wide` gets a landscape frame instead of portrait.
export type Photo = { src: string; caption: string; wide?: boolean }
