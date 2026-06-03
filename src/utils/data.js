export const navLinks = [
  { label: 'Home',        href: 'hero' },
  { label: 'About',       href: 'about' },
  { label: 'Skills',      href: 'skills' },
  { label: 'Services',    href: 'services' },
  { label: 'Projects',    href: 'projects' },
  { label: 'Experience',  href: 'experience' },
  { label: 'Contact',     href: 'contact' },
]

export const skills = {
  Backend: [
    { name: 'Python',  level: 92 },
    { name: 'Django',  level: 88 },
    { name: 'Flask',   level: 78 },
    { name: 'Golang',  level: 72 },
  ],
  Frontend: [
    { name: 'React',        level: 85 },
    { name: 'JavaScript',   level: 82 },
    { name: 'Tailwind CSS', level: 88 },
    { name: 'HTML/CSS',     level: 90 },
  ],
  'Cloud & DevOps': [
    { name: 'AWS',        level: 80 },
    { name: 'Azure',      level: 75 },
    { name: 'Kubernetes', level: 70 },
    { name: 'Docker',     level: 82 },
  ],
  Database: [
    { name: 'PostgreSQL', level: 85 },
    { name: 'MySQL',      level: 82 },
    { name: 'SQL',        level: 88 },
  ],
  'Data Engineering': [
    { name: 'Spark',       level: 75 },
    { name: 'PySpark',     level: 72 },
    { name: 'Databricks',  level: 70 },
  ],
}

export const services = [
  {
    icon: '🌐',
    title: 'Business Website Development',
    description: 'Converting, high-performance business websites that establish credibility and drive leads. SEO-optimised from day one.',
    highlights: ['React / Next.js', 'SEO Optimised', 'CMS Integration'],
  },
  {
    icon: '🎨',
    title: 'Portfolio Website',
    description: 'Stunning personal portfolios that showcase your work beautifully and help you stand out from the crowd.',
    highlights: ['Custom Design', 'Animations', 'Mobile-First'],
  },
  {
    icon: '⚡',
    title: 'Full Stack Web Apps',
    description: 'End-to-end application development with scalable architecture, clean APIs, and polished interfaces.',
    highlights: ['Django + React', 'REST / GraphQL', 'Cloud Deployed'],
  },
  {
    icon: '🐍',
    title: 'Django Backend Development',
    description: 'Robust, secure Django backends with clean ORM models, DRF APIs, and production-ready deployments.',
    highlights: ['Django REST Framework', 'PostgreSQL', 'Authentication'],
  },
  {
    icon: '⚛️',
    title: 'React Frontend Development',
    description: 'Pixel-perfect React UIs with smooth animations, responsive layouts, and optimised performance.',
    highlights: ['React 18', 'Framer Motion', 'Tailwind CSS'],
  },
  {
    icon: '🔄',
    title: 'Website Redesign',
    description: 'Transforming outdated websites into modern, fast, conversion-focused digital experiences.',
    highlights: ['UX Audit', 'Performance Boost', 'Modern Design'],
  },
  {
    icon: '🔌',
    title: 'API Development',
    description: 'Clean, documented REST APIs with proper authentication, rate limiting, and versioning strategies.',
    highlights: ['REST / GraphQL', 'Swagger Docs', 'Auth & Security'],
  },
  {
    icon: '🤖',
    title: 'AI-Powered Web Solutions',
    description: 'Integrate cutting-edge AI capabilities — chatbots, image recognition, and smart automation — into your web product.',
    highlights: ['OpenAI / Gemini', 'Custom ML Models', 'LangChain'],
  },
]

export const projects = [
  {
    title: 'Interior Design Website',
    description: 'A full-stack interior design platform featuring dynamic portfolios, client inquiry management, and a stunning gallery with real-time filtering. Built with Django REST Framework and a React frontend.',
    tech: ['Django', 'React', 'PostgreSQL', 'REST API', 'Tailwind CSS'],
    category: 'Full Stack',
    color: 'from-blue-500/20 to-purple-500/20',
    accent: '#3b82f6',
  },
  {
    title: 'AI Image Caption Generator',
    description: 'Deep learning model combining CNN feature extraction (VGG16) with LSTM sequence generation to automatically produce human-quality captions for any image — achieving BLEU-4 score of 0.62.',
    tech: ['Python', 'CNN', 'LSTM', 'TensorFlow', 'Keras', 'NLTK'],
    category: 'AI / ML',
    color: 'from-purple-500/20 to-cyan-500/20',
    accent: '#8b5cf6',
  },
  {
    title: 'Web-Based Python Code Editor',
    description: 'Browser-based Python IDE with real-time code execution, syntax highlighting, autocomplete, and sandboxed environment. Supports multi-file projects and shareable code snippets.',
    tech: ['Python', 'JavaScript', 'Docker', 'WebSockets', 'CodeMirror'],
    category: 'Developer Tool',
    color: 'from-cyan-500/20 to-green-500/20',
    accent: '#06b6d4',
  },
  {
    title: 'Automation Testing Framework',
    description: 'Enterprise-grade automation framework with keyword-driven and data-driven testing strategies, CI/CD integration, parallel execution, and comprehensive HTML reporting dashboard.',
    tech: ['Python', 'Selenium', 'Pytest', 'Allure Reports', 'Jenkins'],
    category: 'QA / DevOps',
    color: 'from-green-500/20 to-yellow-500/20',
    accent: '#10b981',
  },
]

export const testimonials = [
  {
    name: 'David Müller',
    role: 'CTO, FinTech Startup — Germany',
    avatar: 'DM',
    rating: 5,
    text: 'Kunwar delivered our Django + React platform 2 weeks ahead of schedule. The code quality was exceptional — clean, well-documented, and easy to maintain. He understood our business requirements immediately and translated them into elegant technical solutions. Highly recommended for any serious project.',
  },
  {
    name: 'Sarah Mitchell',
    role: 'Founder, E-Commerce Brand — UK',
    avatar: 'SM',
    rating: 5,
    text: 'We needed a complete website overhaul and Kunwar exceeded every expectation. The site performance went from 45 to 97 on PageSpeed Insights. His expertise in both frontend polish and backend architecture is rare to find. Will absolutely hire again for future projects.',
  },
  {
    name: 'Rajan Nair',
    role: 'Product Manager, SaaS Company — USA',
    avatar: 'RN',
    rating: 5,
    text: 'Outstanding developer who thinks like a product person. Kunwar integrated our AI features seamlessly and built an automation suite that saved us 30+ hours per week in manual testing. His background at Mercedes-Benz speaks for itself — enterprise-level quality in every line of code.',
  },
  {
    name: 'Lena Kowalski',
    role: 'Entrepreneur — Netherlands',
    avatar: 'LK',
    rating: 5,
    text: 'Kunwar built my portfolio and business site from scratch. The design is absolutely stunning — I have received so many compliments. More importantly, my leads have increased 3x since launch. His attention to detail and responsive communication made the whole process effortless.',
  },
]

export const process = [
  {
    step: '01',
    title: 'Requirement Discussion',
    description: 'Deep-dive call to understand your goals, audience, and technical needs. I ask the right questions so nothing gets missed.',
    icon: '💬',
  },
  {
    step: '02',
    title: 'Design & Planning',
    description: 'Wireframes, system architecture, and a detailed project roadmap with milestones. You approve before a single line of code is written.',
    icon: '🎯',
  },
  {
    step: '03',
    title: 'Development',
    description: 'Clean, documented code with weekly demos. You have visibility into progress throughout — no surprises.',
    icon: '⚡',
  },
  {
    step: '04',
    title: 'Testing & QA',
    description: 'Automated + manual testing across all devices and browsers. Performance, security, and accessibility checks included.',
    icon: '🧪',
  },
  {
    step: '05',
    title: 'Delivery & Support',
    description: '30 days of post-launch support, deployment to your preferred cloud, full documentation, and knowledge transfer.',
    icon: '🚀',
  },
]
