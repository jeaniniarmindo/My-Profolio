// =====================================================================
//  ALL PORTFOLIO CONTENT LIVES HERE.
//  Edit text in this file, then run `npm run build` (or just push to
//  GitHub) and the whole site — including the chat assistant — updates.
// =====================================================================

export const profile = {
  name: 'Jeanini Soares',
  fullName: 'Jeanini Armindo Manemuna Ribeiro Soares',
  role: 'ICT Professional & Machine Learning Practitioner',
  location: 'Dili, Timor-Leste',
  email: 'jeanini.soares123@gmail.com',
  phone: '+670 7634 6078',
  whatsapp: 'https://wa.me/67076346078',
  linkedin: 'https://www.linkedin.com/in/jeanini-armindo-manemuna-ribeiro-soares-3b4890191',
  github: 'https://github.com/jeaniniarmindo',
  // Direct-download link (Google Drive "uc?export=download" format)
  cv: 'https://drive.google.com/uc?export=download&id=1pNhUQyl-gdwaFf3pjzJZfjK27wRfq0hn',
  availability: 'Open to opportunities · Willing to travel to the field',

  headline:
    'I lead and deliver IT services for Timor-Leste government ministries, and build machine learning solutions that turn data into decisions.',

  about: [
    'I am an ICT professional with nearly five years of experience leading and delivering IT services across Timor-Leste government ministries and the private sector, including a UNDP-supported municipal initiative.',
    'As Head of Department of the Data Management System Unit, I led a team of three, managed core systems and databases, rolled out an API-integrated digital attendance system across headquarters and municipal offices, and trained Ministry and municipal staff to use digital tools with confidence.',
    'I hold a Master of Information Technology from Universiti Teknologi Brunei (2026), specialising in machine learning and AI. I am committed to the secure, responsible adoption of AI in organisations, especially in the Timor-Leste context.',
  ],

  stats: [
    { prefix: '~', value: '5', suffix: ' yrs', label: 'Leading & delivering ICT' },
    { prefix: '', value: '3', suffix: '', label: 'Municipalities served by Data Rural Gateway' },
    { prefix: '~', value: '50', suffix: '', label: 'Staff supported day to day' },
    { prefix: '', value: '87.8', suffix: '%', label: 'mAP@0.5 on the SeaSight AI model' },
  ],
};

export type Job = {
  title: string;
  org: string;
  place: string;
  period: string;
  note?: string;
  current?: boolean;
  points: string[];
};

export const experience: Job[] = [
  {
    title: 'Head of Department, Data Management System Unit (Database Administrator)',
    org: 'Ministério do Desenvolvimento Rural e Habitação Comunitária',
    place: 'Dili',
    period: 'Feb 2024 – Present',
    note: 'Study leave Aug 2025 – Jul 2026',
    current: true,
    points: [
      'Led and supervised a team of three staff, planning and assigning work, and reporting to the Director of the Gabinete de Transformação Digital.',
      'Led the Data Rural Gateway from design through deployment and ongoing management — a system supporting government workers in Bobonaro, Ainaro and Aileu — including server and database configuration and administration.',
      'Implemented a digital attendance system integrated via API with the central Ministry server, digitising staff attendance across headquarters and municipal offices.',
      'Coordinated with municipal IT focal points and staff in Maliana (Bobonaro) and Liquiçá to roll out systems and resolve issues on site.',
      'Protected Ministry data through access control, validation, auditing and regular backups, maintaining data integrity and accuracy.',
      'Designed and delivered training programmes to build staff confidence with digital systems and end-user applications.',
      'Oversaw periodic data collection and database updates, and produced progress reports for Ministry management.',
    ],
  },
  {
    title: 'IT Technician',
    org: 'Ministério do Planeamento e Investimento Estratégico',
    place: 'Dili',
    period: 'Jul 2022 – Jan 2024',
    points: [
      'First port of call for around 50 staff — desktops, laptops, printers, mobile devices and network connectivity.',
      'Kept servers and network infrastructure running smoothly, focusing on performance and minimising downtime.',
      'Wrote technical specifications for IT tenders and checked vendor deliverables against them before sign-off.',
      'Helped roll out and configure enterprise applications across the Ministry.',
      'Worked directly with users to understand their needs and built custom web-based solutions to match.',
    ],
  },
  {
    title: 'IT Support Engineer',
    org: 'Gabinete do Primeiro Ministro',
    place: 'Dili',
    period: 'Apr 2022 – Jun 2022',
    points: [
      'Designed, set up and maintained internal computer networks and end-user environments.',
      'Managed network hardware and software configurations.',
      'Monitored network performance and rolled in improvements to keep the service reliable.',
    ],
  },
  {
    title: 'IT Infrastructure',
    org: 'R2M IT Solutions',
    place: 'Dili',
    period: 'Jan 2021 – Feb 2022',
    points: [
      'Supported internal users and external clients — including the Embassy of the Republic of Korea in Timor-Leste and FDCH Timor-Leste — on network and end-user device issues across multiple sites.',
      'Member of the R2M implementation team for the UNDP-supported Municipal Portal with the Ministry of State Administration, configuring servers and installing municipal computer labs.',
      'Installed and configured computer labs in Manatuto: workstation setup, network cabling, switches, access points and connectivity testing for 20 computers.',
      'Worked with vendors and service providers on procurement and equipment surveys.',
      'Led upgrades to network systems and improvements to overall service reliability.',
    ],
  },
  {
    title: 'IT Consultant / Helpdesk',
    org: 'Sinmor',
    place: 'Dili',
    period: 'Jan 2020 – Feb 2020',
    points: [
      'Handled helpdesk support for computer systems, hardware and software issues, resolving user complaints quickly and properly.',
    ],
  },
];

export const skills = [
  {
    title: 'AI & Machine Learning',
    icon: 'brain',
    text: 'Predictive and classification models with Python and scikit-learn — Random Forest, SVM, Decision Tree, XGBoost, regression — plus computer vision with YOLO.',
    tags: ['Python', 'scikit-learn', 'YOLO', 'XGBoost'],
  },
  {
    title: 'Data Analysis & NLP',
    icon: 'chart',
    text: 'Cleaning, exploring and visualising data; text preprocessing, TF-IDF, sentiment analysis and multilingual, code-mixed text classification.',
    tags: ['pandas', 'matplotlib', 'TF-IDF', 'NLP'],
  },
  {
    title: 'IT Leadership & Management',
    icon: 'team',
    text: 'Team supervision, IT service planning and delivery, ICT procurement and technical specifications, vendor verification, training and reporting to management.',
    tags: ['Team lead', 'Procurement', 'Training'],
  },
  {
    title: 'Networks & Infrastructure',
    icon: 'network',
    text: 'LAN design, configuration and troubleshooting; cabling, switches and access points; multi-site network support; Apache server maintenance and monitoring.',
    tags: ['LAN', 'Switching', 'Apache'],
  },
  {
    title: 'Systems & Databases',
    icon: 'database',
    text: 'Windows and Linux; working knowledge of Windows Server, Active Directory and VMware; MySQL/MariaDB administration; PHP/Laravel apps; REST API integration.',
    tags: ['MySQL', 'MariaDB', 'Laravel', 'REST API'],
  },
  {
    title: 'Cybersecurity & Data Protection',
    icon: 'shield',
    text: 'Network security (FCNS certified), role-based access control, data integrity, validation, auditing and backup.',
    tags: ['FCNS', 'RBAC', 'Backup'],
  },
  {
    title: 'Microsoft 365 & Collaboration',
    icon: 'cloud',
    text: 'Outlook, Teams, OneDrive and SharePoint; user account administration; intranet content administration.',
    tags: ['M365', 'SharePoint', 'Teams'],
  },
  {
    title: 'End-user Support',
    icon: 'support',
    text: 'Desktop, laptop, printer, fingerprint device and mobile troubleshooting; ticket triage and resolution.',
    tags: ['Helpdesk', 'Hardware'],
  },
];

export type Project = {
  title: string;
  kind: string;
  text: string;
  tags: string[];
  metric?: string;
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'SeaSight',
    kind: 'AI · Computer vision',
    featured: true,
    metric: '87.8% mAP@0.5 · 10,861 images',
    text: 'AI-based vessel detection for drone and satellite imagery. Trained a YOLO11 model on 10,861 labelled ship images and built a Python pipeline that detects vessels entering a monitored zone and sends real-time photo alerts through the Telegram Bot API — a proof of concept for maritime monitoring in Timor-Leste.',
    tags: ['YOLO11', 'Python', 'Telegram Bot API'],
  },
  {
    title: 'Data Rural Gateway',
    kind: 'Government data platform',
    text: 'Led from design through deployment and ongoing management for the Ministry of Rural Development, supporting government workers in Bobonaro, Ainaro and Aileu. Internal government system.',
    tags: ['Database', 'Server admin', 'Team lead'],
  },
  {
    title: 'Digital Attendance System',
    kind: 'API integration',
    text: 'Digitised staff attendance across Ministry headquarters and municipal offices, integrated via API with the central Ministry server.',
    tags: ['REST API', 'Integration', 'Rollout'],
  },
  {
    title: 'UNDP Municipal Portal',
    kind: 'Infrastructure',
    text: 'Part of the R2M implementation team with the Ministry of State Administration — configured servers and installed municipal computer labs.',
    tags: ['Servers', 'Networking', 'UNDP'],
  },
  {
    title: 'Electronic Document Management System',
    kind: 'Web application',
    text: 'Laravel web application that replaced paper-based archiving at R2M IT Solutions with a centralised digital workflow and role-based access for administrators, managers and staff.',
    tags: ['PHP', 'Laravel', 'MariaDB', 'Apache'],
    link: 'https://drive.google.com/file/d/1JIDhygaW1xKla54-ShwvTzx6isvYFs9u/view?usp=sharing',
  },
  {
    title: 'Custom Web-Based Solutions',
    kind: 'Internal tools',
    text: 'Bespoke web tools for staff at the Ministry of Planning and Strategic Investment, translating user requirements into working applications. Internal government system.',
    tags: ['Web', 'Requirements'],
  },
];

export const research = [
  {
    title: 'Electronic Document Management System pada Perusahaan R2M IT Solutions Berbasis Web Menggunakan Framework Laravel',
    venue: 'SPINTER 2023 Proceedings, Vol. 1 No. 1, pp. 7–12 · ITB STIKOM Bali',
    year: '2023',
    status: 'Published',
    text: 'A web-based EDMS for R2M IT Solutions built with Laravel, improving digital document storage, management and retrieval.',
    link: 'https://drive.google.com/file/d/1JIDhygaW1xKla54-ShwvTzx6isvYFs9u/view?usp=sharing',
  },
  {
    title: 'Predicting Educational Risk in Timor-Leste Using Machine Learning and the National Teacher Competency Framework',
    venue: 'Machine learning research',
    year: '',
    status: '',
    text: 'Uses machine learning to predict educational risk and support teacher competency development in Timor-Leste.',
  },
  {
    title: 'Multi-label Detection of Multilingual and Code-Mixed Hate Speech in Facebook Comments from Timor-Leste Using Support Vector Machines',
    venue: 'NLP research',
    year: '',
    status: 'In progress',
    text: 'Multi-label classification of multilingual, code-mixed Facebook comments from Timor-Leste using Support Vector Machines.',
  },
];

export const education = [
  {
    degree: 'Master of Information Technology',
    school: 'Universiti Teknologi Brunei (UTB), Brunei Darussalam',
    period: 'Aug 2025 – Jul 2026',
    detail: 'Completed. Coursework: Intelligent Systems, Data Analysis & Visualisation, Machine Learning, Management Information Systems.',
  },
  {
    degree: 'Bachelor of Computer Systems',
    school: 'ITB STIKOM Bali, Denpasar, Indonesia',
    period: 'Sep 2017 – Oct 2023',
    detail: 'Specialisation: Computer Systems and Networking. Final-year research published in the SPINTER 2023 proceedings.',
  },
];

export const certifications = [
  { name: 'Certified Network Administrator', date: 'Nov 2023' },
  { name: 'FCNS — Foresec Certified in Networking Security', date: 'Sep 2023' },
  { name: 'FCCH — Foresec Certified in Computer Hacking', date: 'Nov 2023' },
  { name: 'Exploring the Impact of Robot Interaction on Learning Engagement', date: 'Apr 2025' },
  { name: 'Beginner Back-End PHP Web Application', date: 'Jul 2018' },
  { name: 'UBD English Bridge — overall band 68.75', date: 'Universiti Brunei Darussalam' },
  { name: 'English Language Courses — LELI & ETDA, Dili', date: 'Completed' },
];

export const languages = [
  { name: 'Tetun', level: 'Native', value: 100 },
  { name: 'English', level: 'Fluent', value: 90 },
  { name: 'Portuguese', level: 'Working proficiency', value: 70 },
  { name: 'Bahasa Indonesia', level: 'Working proficiency', value: 70 },
];
