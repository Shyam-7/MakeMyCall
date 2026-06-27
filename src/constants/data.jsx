import {
  PhoneOutlined,
  ToolOutlined,
  FolderOutlined,
  RiseOutlined,
  SafetyCertificateOutlined,
  SearchOutlined,
  BarChartOutlined,
  ThunderboltOutlined,
  TeamOutlined,
  FileTextOutlined,
  TrophyOutlined,
  MessageOutlined,
  MailOutlined,
} from '@ant-design/icons'

export const NAV_LINKS = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

export const HERO_CARDS = [
  {
    icon: <PhoneOutlined />,
    bgClass: 'bg-blue-light',
    title: 'Inbound & Outbound Support',
    description: 'Voice, email, and chat — handled by real, trained agents.',
  },
  {
    icon: <MessageOutlined />,
    bgClass: 'bg-emerald-50',
    title: 'Customer Success',
    description: 'Retention-focused support that builds long-term loyalty.',
  },
  {
    icon: <FolderOutlined />,
    bgClass: 'bg-violet-50',
    title: 'Back Office & Admin',
    description: 'Data entry, order processing, and operational tasks done right.',
  },
  {
    icon: <BarChartOutlined />,
    bgClass: 'bg-amber-50',
    title: 'Reporting & QA',
    description: 'Weekly reports and quality audits to keep standards high.',
  },
  {
    icon: <MailOutlined />,
    bgClass: 'bg-rose-50',
    title: 'Chat & Email Services',
    description: 'Email, live chat, and social media support — quick, professional responses that keep customers engaged.',
  }
]

export const INDUSTRIES = [
  'E-commerce',
  'Healthcare',
  'Fintech',
  'EdTech',
  'Real Estate',
  'SaaS Startups',
]

export const SERVICES = [
  {
    icon: <PhoneOutlined />,
    bgClass: 'bg-blue-light',
    title: 'Customer Support',
    description: 'Multi-channel support across phone, email, and chat — keeping your customers satisfied and heard.',
  },
  {
    icon: <ToolOutlined />,
    bgClass: 'bg-emerald-50',
    title: 'Technical Support',
    description: 'Tier-1 and Tier-2 assistance for your products and software — troubleshoot, guide, and escalate.',
  },
  {
    icon: <FolderOutlined />,
    bgClass: 'bg-violet-50',
    title: 'Back Office Support',
    description: 'Reliable data entry, document processing, and admin tasks with structured workflows.',
  },
  {
    icon: <RiseOutlined />,
    bgClass: 'bg-amber-50',
    title: 'Outbound Calling',
    description: 'Lead follow-up, appointment setting, surveys, and retention calls by professional agents.',
  },
]

export const STEPS = [
  {
    number: '01',
    title: 'Discovery Call',
    description: 'We understand your business and identify where we can help most.',
  },
  {
    number: '02',
    title: 'Custom Proposal',
    description: 'A tailored plan — team size, coverage hours, channels, and pricing specific to you.',
  },
  {
    number: '03',
    title: 'Onboarding & Training',
    description: 'Agents learn your product, tone, and processes before handling a single interaction.',
  },
  {
    number: '04',
    title: 'Go Live & Improve',
    description: 'We launch, monitor closely, and refine based on real feedback and performance data.',
  },
]

export const OPERATING_MODEL = [
  { label: 'Team', value: 'Dedicated', unit: 'agents', note: 'Trained on your brand' },
  { label: 'Coverage', value: '24/7', unit: 'optional', note: 'Flexible to your demand' },
  { label: 'Reporting', value: 'Weekly', unit: 'reviews', note: 'Full transparency always' },
  { label: 'Commitment', value: 'Pilot', unit: 'friendly', note: 'Start small, scale up' },
]

export const WHY_US_ITEMS = [
  {
    icon: <SafetyCertificateOutlined />,
    title: 'Trained Agents',
    description: 'Every agent is onboarded to your brand before your first customer interaction.',
  },
  {
    icon: <SearchOutlined />,
    title: 'Quality First',
    description: 'Regular call reviews and QA audits keep standards consistent from day one.',
  },
  {
    icon: <BarChartOutlined />,
    title: 'Full Transparency',
    description: 'Real performance data in regular reports — no vanity metrics.',
  },
  {
    icon: <ThunderboltOutlined />,
    title: 'Flexible Scaling',
    description: 'Start with what you need and grow your team as volume increases.',
  },
  {
    icon: <TeamOutlined />,
    title: 'Founder Attention',
    description: 'As an early client, you work with our leadership directly — not a support ticket.',
  },
  {
    icon: <FileTextOutlined />,
    title: 'Process-Driven',
    description: 'Every workflow and escalation path is documented — nothing runs on guesswork.',
  },
]

export const FOOTER_LINKS = {
  services: [
    { label: 'Customer Support', href: '#services' },
    { label: 'Technical Support', href: '#services' },
    { label: 'Back Office', href: '#services' },
    { label: 'Outbound Calling', href: '#services' },
  ],
  company: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Contact', href: '#contact' },
  ],
  contact: [
    { label: 'makemycalloffical@gmail.com', href: 'mailto:makemycalloffical@gmail.com' },
    { label: 'LinkedIn', href: '#' },
    { label: 'WhatsApp', href: 'https://wa.me/7395940250' },
  ],
}
