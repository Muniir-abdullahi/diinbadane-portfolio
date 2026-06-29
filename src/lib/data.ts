export interface Skill {
  category: string;
  items: string[];
}

export interface OwnProject {
  id: string;
  name: string;
  description: string;
  stack: string[];
  link: string;
}

export interface ClientProject {
  id: string;
  name: string;
  description: string;
  stack: string[];
  role: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconName: string;
}

export const skills: Skill[] = [
  {
    category: "Languages",
    items: ["JavaScript", "PHP", "Dart"]
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Laravel", "Node.js", "Express"]
  },
  {
    category: "Mobile",
    items: ["Flutter"]
  },
  {
    category: "Databases",
    items: ["MySQL", "PostgreSQL", "MongoDB"]
  },
  {
    category: "BaaS",
    items: ["Firebase", "Supabase"]
  },
  {
    category: "Tools",
    items: ["Git", "WordPress", "Elementor", "WHMCS"]
  },
  {
    category: "DevOps",
    items: ["Deployment", "Server Management", "Hosting Configuration"]
  }
];

export const ownProjects: OwnProject[] = [
  {
    id: "rukunpos",
    name: "RukunPOS",
    description: "A fast, real-time POS platform optimized specifically for Somalia's fast-moving retail stores and restaurants, offering precise live stock ledgers, digital receipts, custom invoices, and deep business performance analysis.",
    stack: ["Laravel", "React", "Inertia.js", "PostgreSQL", "Tailwind CSS"],
    link: "https://pos.rukun.com.so/"
  },
  {
    id: "diiwaan",
    name: "Diiwan",
    description: "An integrated business management platform consolidating customer relationships, active sales pipelines, project boards, ledger finance, ticking support desks, and programmatic WhatsApp bulk notifications into a unified dashboard.",
    stack: ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind CSS"],
    link: "https://diiwaan.rukun.com.so/"
  },
  {
    id: "maamule",
    name: "Maamule",
    description: "The Complete School Management Platform designed to streamline education operations with smart financial engines, academic tracking, and advanced student portal features.",
    stack: ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind CSS"],
    link: "https://maamule.rukun.com.so/"
  }
];

export const clientProjects: ClientProject[] = [
  {
    id: "kulan",
    name: "Event Management Platform",
    description: "A high-performance billing and ticketing ecosystem handling attendee registration, sponsor portals, scheduled meeting planners, and automated badges.",
    stack: ["Laravel", "React", "Inertia.js", "PostgreSQL", "Tailwind CSS"],
    role: "Lead Developer"
  },

  {
    id: "raafort",
    name: "Real Estate Management & Booking Platform",
    description: "Property and room portfolio management with direct real-time calendar availability queries, guest check-in calendars, and dynamic invoicing.",
    stack: ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind CSS"],
    role: "Lead Developer"
  },
  {
    id: "knowledge-hub",
    name: "Content Management & Publishing Platform",
    description: "Centralized article indexing and visual dashboard portal governing custom workflows, author submissions, and detailed permission rings.",
    stack: ["Laravel", "React", "Inertia.js", "PostgreSQL", "Tailwind CSS"],
    role: "Lead Developer"
  },
  {
    id: "kyc-compliance",
    name: "Client Onboarding & KYC/AML Compliance Platform",
    description: "A financial compliance portal built with drag-and-drop workflow visualizers, document upload vaults, and automated verification scoring.",
    stack: ["Laravel", "React", "Inertia.js", "Tailwind CSS", "MySQL"],
    role: "Lead Developer"
  },
  {
    id: "southpay",
    name: "Digital Wallet & Payout Infrastructure",
    description: "Core payout API infrastructure and client dashboard allowing merchant platforms to execute high-volume wallet ledger disbursals instantly.",
    stack: ["Laravel (API)", "Next.js", "Tailwind CSS", "External payout protocol gateways"],
    role: "Team Member"
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description: "Understanding the problem, the users, and what success looks like before writing any code.",
    iconName: "Compass"
  },
  {
    step: "02",
    title: "Planning",
    description: "Mapping out architecture, data models, and the right tech choices for the problem at hand.",
    iconName: "Figma"
  },
  {
    step: "03",
    title: "Build",
    description: "Clean, maintainable code with regular check-ins — no black-box development.",
    iconName: "Code"
  },
  {
    step: "04",
    title: "Deploy & Support",
    description: "Shipping to production and staying available for fixes, improvements, and scaling needs.",
    iconName: "Server"
  }
];
