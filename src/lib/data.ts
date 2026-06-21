export interface Skill {
  category: string;
  items: string[];
}

export interface OwnProject {
  id: string;
  name: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  results: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  stack: string[];
  link: string;
}

export interface ClientProject {
  id: string;
  name: string;
  description: string;
  problem?: string;
  solution?: string;
  results?: string[];
  metrics?: { label: string; value: string }[];
  stack: string[];
  role: string;
}

export interface Service {
  title: string;
  description: string;
  deliverables: string[];
  metric: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string; // fallback initials or system avatar index
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  highlights: string[];
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
    items: ["TypeScript", "JavaScript", "PHP", "Dart", "HTML5", "CSS3"]
  },
  {
    category: "Frontend Hub",
    items: ["React", "Next.js", "Tailwind CSS", "Inertia.js", "Framer Motion"]
  },
  {
    category: "Backend Services",
    items: ["Laravel", "Node.js", "Express", "RESTful APIs", "WebSocket"]
  },
  {
    category: "Mobile",
    items: ["Flutter", "Cross-Platform Apps"]
  },
  {
    category: "Database Hub",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  },
  {
    category: "BaaS & Cloud",
    items: ["Supabase", "Firebase", "Auth0"]
  },
  {
    category: "DevOps & Infrastructure",
    items: ["VPS Hosting", "Nginx", "Docker", "CI/CD Pipelines", "SSL/TLS Setup", "Server Security"]
  },
  {
    category: "Enterprise Tools",
    items: ["Git", "WordPress", "Elementor", "WHMCS Integration"]
  }
];

export const ownProjects: OwnProject[] = [
  {
    id: "nidaamflow",
    name: "NidaamFlow",
    tagline: "All-in-One Enterprise Core",
    description: "An integrated business management platform consolidating customer relationships, active sales pipelines, project boards, ledger finance, ticking support desks, and programmatic WhatsApp bulk notifications into a unified dashboard.",
    problem: "Somali businesses typically run fragmented software suites, managing ticketing, finances, customer profiles, and communication in isolated channels, causing severe data loss, operational silos, and duplicate licensing costs.",
    solution: "Designed a centralized tenant architecture utilizing Laravel, React, and Tailwind, powering an integrated workflow that bridges support tickets directly to sales pipelines, calculates accounting ledger adjustments in real time, and triggers automated WhatsApp client updates.",
    results: [
      "Reduced invoice recovery times by 35% through automated financial alerts.",
      "Eliminated structural data separation, saving companies thousands in subscriptions.",
      "Accelerated customer support desk resolutions by 40% using centralized dashboards."
    ],
    metrics: [
      { label: "Platform Uptime", value: "99.98%" },
      { label: "Notification Delay", value: "<150ms" },
      { label: "Active Corporates", value: "30+" }
    ],
    features: [
      "Dynamic Sales Pipelines & CRM Card Boards",
      "Unified Customer Profiles with Historical Event Logs",
      "Real-Time Chat Operations & Support Tickets",
      "Bulk WhatsApp Scheduling & API Broadcasting Engines"
    ],
    stack: ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind CSS"],
    link: "https://nidaamflow.rukun.app"
  },
  {
    id: "rukunpos",
    name: "RukunPOS",
    tagline: "High-Performance Cloud Point-of-Sale",
    description: "A fast, real-time POS platform optimized specifically for Somalia's fast-moving retail stores and restaurants, offering precise live stock ledgers, digital receipts, custom invoices, and deep business performance analysis.",
    problem: "Existing local retail software works offline only, loses data during hardware failure, has high configuration overhead, and lacks integration with local digital payout networks.",
    solution: "Engineered a responsive single-page web POS powered by a lightweight, state-synchronized state engine that queues transactions locally during network drops and syncs immediately. Built-in payment gateway integrations handle popular local micro-fintech checkouts.",
    results: [
      "Over 10,000 live retail transactions processed monthly without single-node failures.",
      "Average checkout counter processing time dropped from 12s to less than 3.5s.",
      "Real-time remote stock monitoring eliminated internal inventory shrinkage by 95%."
    ],
    metrics: [
      { label: "Avg Transaction Time", value: "3.2s" },
      { label: "Stock Ledger Sync", value: "Real-time" },
      { label: "Local Businesses", value: "50+" }
    ],
    features: [
      "Instant Register Checkout with Barcode Scanners",
      "Live Stock Ledger and Re-order Warning Triggers",
      "Digital Receipts and Dynamic Thermal Printing Configurations",
      "Comprehensive End-of-Day Register Reconciliation"
    ],
    stack: ["Laravel", "React", "Inertia.js", "PostgreSQL", "Tailwind CSS"],
    link: "https://pos.rukun.app"
  }
];

export const clientProjects: ClientProject[] = [
  {
    id: "kulan",
    name: "Kulan.io — Event Management Platform",
    description: "A high-performance billing and ticketing ecosystem handling attendee registration, sponsor portals, scheduled meeting planners, and automated badges.",
    problem: "Event organizers lacked a unified digital channel, relying on manual spreadsheets for badges, ticketing, and room reservations, leading to massive entry congestion.",
    solution: "Built a multi-tenant portal with reactive scheduling, automated attendee QR badges, real-time credit checkouts, and custom exhibitor workspaces.",
    results: [
      "Successfully scaled to support 5,000+ simultaneous registrations during national events.",
      "Reduced check-in delays by 85% via reactive barcode scanning apps.",
      "Integrated secure financial payouts for vendors directly into local accounts."
    ],
    metrics: [
      { label: "Check-in Velocity", value: "1.2s / Attendee" },
      { label: "Payments Handled", value: "100% automated" }
    ],
    stack: ["Laravel", "React", "Inertia.js", "PostgreSQL", "Tailwind CSS"],
    role: "Lead Developer"
  },
  {
    id: "somemb",
    name: "SOMEMB — Embassy Consular Digital Platform",
    description: "Consular workflow system bridging public passport registrations, visual appointment booking slots, state document repositories, and audit logs.",
    problem: "Consular visa and passport submissions were handled physically, leading to high administrative friction and lack of traceability for sensitive documents.",
    solution: "Architected a dual-interface fortress platform: a citizen self-service visa portal paired with a secure role-based administrative dispatch board with permanent crypt-safeguarded document indexing.",
    results: [
      "Lowered document processing queue delays from 14 days down to 48 hours.",
      "Automated appointment booking, eliminating manual administrative coordination.",
      "Established 100% traceable document audit trails with encrypted file backups."
    ],
    metrics: [
      { label: "Dispatch Latency", value: "<100ms" },
      { label: "Security Backups", value: "Hourly Encrypted" }
    ],
    stack: ["Laravel", "React", "Inertia.js", "Tailwind CSS", "PostgreSQL"],
    role: "Lead Developer"
  },
  {
    id: "raafort",
    name: "Raafort Homes — Hospitality Booking Platform",
    description: "Property and room portfolio management with direct real-time calendar availability queries, guest check-in calendars, and dynamic invoicing.",
    problem: "Real-time room availability was difficult to manage across platforms, causing frequent over-bookings, manual invoice generation errors, and missed reservation inquiries.",
    solution: "Formulated a customized transactional lock availability calendar engine that locks selected units instantly upon booking, paired with automated bill dispatching.",
    results: [
      "Zero room over-booking conflicts recorded across 18+ months of operation.",
      "Saved administrative teams over 20+ hours weekly in manual invoice reconciliation.",
      "Client reservation completion rate grew by 24% through unified visual layouts."
    ],
    metrics: [
      { label: "Booking Accuracy", value: "100.00%" },
      { label: "Invoice Generation", value: "Instant Automated" }
    ],
    stack: ["Laravel", "React", "Inertia.js", "MySQL", "Tailwind CSS"],
    role: "Lead Developer"
  },
  {
    id: "knowledge-hub",
    name: "Knowledge Hub — Centralized Publishing & CMS",
    description: "Centralized article indexing and visual dashboard portal governing custom workflows, author submissions, and detailed permission rings.",
    stack: ["Laravel", "React", "Inertia.js", "PostgreSQL", "Tailwind CSS"],
    role: "Lead Developer"
  },
  {
    id: "kyc-compliance",
    name: "Client Onboarding & KYC/AML Platform",
    description: "A financial compliance portal built with drag-and-drop workflow visualizers, document upload vaults, and automated verification scoring.",
    stack: ["Laravel", "React", "Inertia.js", "Tailwind CSS", "MySQL"],
    role: "Lead Developer"
  },
  {
    id: "southpay",
    name: "SouthPay — Digital Wallet & Payout API",
    description: "Core payout API infrastructure and client dashboard allowing merchant platforms to execute high-volume wallet ledger disbursals instantly.",
    stack: ["Laravel (API)", "Next.js", "Tailwind CSS", "External payout protocol gateways"],
    role: "Team Member"
  }
];

export const services: Service[] = [
  {
    title: "SaaS Product Engineering",
    description: "End-to-end multi-tenant platforms. Engineered with secure database multi-tenancy, custom subscription flows, and fast, modern client dashboards built for high-performance SaaS delivery.",
    deliverables: ["Multi-tenant Databases", "Unified REST APIs", "Digital Wallet Integrations", "Team Workspaces"],
    metric: "Fast GTM Delivery"
  },
  {
    title: "Enterprise ERP & CRM Core Systems",
    description: "Consolidating workflows, sales funnels, financial ledgers, and team queues into one performant, centralized corporate platform to eliminate disjointed operational channels.",
    deliverables: ["Custom Kanban Boards", "Double-Entry Ledgers", "Automated Notifications", "HRMIS Integrations"],
    metric: "100% Business Consolidation"
  },
  {
    title: "Diplomatic & Government Portals",
    description: "Highly secure administrative platforms featuring robust role-based access control, detailed system audit trails, citizen booking slots, and digital document distribution.",
    deliverables: ["Self-Service Client Portals", "Document Classifications", "Traceable System Audit Logs", "Consular Slot Scheduling"],
    metric: "Sovereign-Grade Security"
  },
  {
    title: "Cloud Infrastructure & DevOps",
    description: "Deploying high-performance architecture on VPS and modern cloud nodes, with optimized reverse proxies, secure isolated Docker wrappers, and automated regular backup routines.",
    deliverables: ["Nginx Reverse Proxy", "Docker Container Deployments", "Zero-Downtime Deployments", "Automated Offsite Backups"],
    metric: "Sub-250ms Server Latency"
  }
];

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Omar",
    role: "Managing Director",
    company: "Somali Retail Association",
    quote: "Muniir did not just build what we wrote on paper; he analyzed our daily visual checkouts and redesigned RukunPOS to handle immediate peak sales. Our cash register operations are faster and completely bulletproof under high visitor congestion.",
    avatar: "AO"
  },
  {
    name: "Dr. Marian Warsame",
    role: "Program Coordinator",
    company: "Embassy Consular Advisory",
    quote: "Moving citizen passport book slots from physical registers to the custom SOMEMB consular platform has reduced our wait times from weeks to 48 hours. Muniir's focus on secure, auditable document routing has transformed how we protect core diplomat logistics.",
    avatar: "MW"
  },
  {
    name: "Abdiwahab Farah",
    role: "Founder & Chief Architect",
    company: "Horizons Media Group",
    quote: "As a SaaS company, we require senior consultation that understands the financial pipelines and security demands of Somalia's enterprise market. NidaamFlow has completely consolidated our business sales pipelines, chat support, and staff invoicing.",
    avatar: "AF"
  }
];

export const experienceTimeline: ExperienceItem[] = [
  {
    period: "2023 — Present",
    role: "Founder & Chief Systems Architect",
    company: "Rukun Software Studio",
    highlights: [
      "Engineered and launched NidaamFlow, an all-in-one corporate business management platform supporting active CRM, helpdesks, and accounting, and RukunPOS, a fast retail checking system.",
      "Delivered real-world client platforms processing tens of thousands of secure transactions across Mogadishu.",
      "Consulted local startups and established companies on migrating workloads to fully hardened cloud servers with high availability."
    ]
  },
  {
    period: "2021 — 2023",
    role: "Lead Full-Stack Systems Engineer",
    company: "Multiple NDA Client Contracts",
    highlights: [
      "Spearheaded structural architecture for the Kulan.io Multi-Tenant Event Management platform, SOMEMB Consular portal, and Raafort Homes reservation suite.",
      "Maintained 100% system delivery deadlines utilizing Laravel, React, and modular Inertia.js pipeline stacks.",
      "Introduced continuous integration (CI/CD) and custom Nginx reverse proxy layouts that reduced web endpoint network speeds globally."
    ]
  },
  {
    period: "2020 — 2021",
    role: "Lead Software Consultant",
    company: "Financial and Content Portals",
    highlights: [
      "Architected secure, cross-platform Flutter applications coupled to centralized backend APIs.",
      "Coordinated with legal compliance departments to integrate robust KYC identity visual builders into local financial service panels.",
      "Optimized query runtimes for massive relational reporting matrices (PostgreSQL/MySQL), dropping server CPU usage by over 50% under load."
    ]
  }
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Architecture",
    description: "Deep consultation to map operational gaps, business flows, and regulatory compliance. We architect state-flowcharts and technical specifications before writing code.",
    iconName: "Compass"
  },
  {
    step: "02",
    title: "Aesthetic Prototypes",
    description: "Designing modern, uncluttered interactive prototypes displaying clear visual layout grids, balanced typography weights, and custom, responsive navigation controls.",
    iconName: "Figma"
  },
  {
    step: "03",
    title: "Systems Construction",
    description: "Coding your custom systems utilizing Laravel core, Next.js or React UI components, type-strict TypeScript definitions, and robust database models.",
    iconName: "Code"
  },
  {
    step: "04",
    title: "Hardened Deployment",
    description: "Orchestrating VPS deployment, container virtualization via Docker, performance caching layers with Redis, and custom Nginx proxies with SSL armor.",
    iconName: "Server"
  },
  {
    step: "05",
    title: "Continuous Maintenance",
    description: "Sustaining ongoing performance audits, critical security patches, offsite system snapshot schedule backups, and direct, round-the-clock advisory.",
    iconName: "HeartHandshake"
  }
];
