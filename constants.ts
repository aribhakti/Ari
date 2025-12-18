import { Experience, Skill, Testimonial, Education } from './types';

export const SOCIAL_LINKS = {
  whatsapp: 'https://wa.me/628567234922',
  linkedin: 'https://www.linkedin.com/in/aribhaktisubagjacreate',
  github: 'https://github.com/aribhakti',
  email: 'mailto:contact@aribhakti.com'
};

export const SKILLS: Skill[] = [
  { name: 'Product Strategy & Roadmap', category: 'Product' },
  { name: 'FinTech Ecosystems', category: 'Product' },
  { name: 'Enterprise Scaling', category: 'Leadership' },
  { name: 'Agile Transformation', category: 'Leadership' },
  { name: 'Digital Identity & Security', category: 'Tech' },
  { name: 'Payment Infrastructure (QRIS/PCI)', category: 'Tech' },
  { name: 'Stakeholder Management', category: 'Leadership' },
  { name: 'GRC & Regulatory Compliance', category: 'Tech' },
];

export const EDUCATION: Education[] = [
  {
    id: 'ui',
    institution: 'University of Indonesia',
    degree: 'Master, Communication Management',
    logo: 'https://ui-avatars.com/api/?name=UI&background=FDB813&color=000&bold=true&size=128'
  },
  {
    id: 'binus',
    institution: 'BINUS University',
    degree: 'Bachelor, Information and Technology',
    logo: 'https://ui-avatars.com/api/?name=BINUS&background=0094D8&color=fff&bold=true&size=128'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: 'etalas',
    role: 'Chief Product Officer (CPO)',
    company: 'Etalas',
    logo: 'https://ui-avatars.com/api/?name=Etalas&background=0F172A&color=fff&size=128&bold=true&font-size=0.35&length=1',
    period: 'Jul 2024 - Present',
    location: 'Remote',
    color: 'from-slate-800 to-slate-600',
    description: "Driving the product vision for a high-velocity product enabler. Ari bridges the gap between complex client needs and rapid market deployment, ensuring operational excellence.",
    achievements: [
      "Orchestrate product strategy for diverse clients, accelerating time-to-market for early-stage startups and enterprises.",
      "Cultivate a culture of shipping velocity and precision within cross-functional distributed teams.",
      "Implement data-driven decision frameworks to optimize product-market fit across varied industries."
    ]
  },
  {
    id: 'vida',
    role: 'Senior Product Manager',
    company: 'VIDA Digital Identity',
    logo: 'https://ui-avatars.com/api/?name=VIDA&background=2563EB&color=fff&size=128&bold=true&font-size=0.35',
    period: 'Mar 2022 - Jun 2024',
    location: 'Jakarta (Hybrid)',
    color: 'from-blue-700 to-blue-500',
    description: "Led the 0-to-1 creation of secure digital identity products, establishing trust infrastructure for Indonesia's digital economy.",
    achievements: [
      "Conceptualized and launched the VIDA Sign Platform, securing 20,000+ users and 18 enterprise clients.",
      "Achieved critical GRC standards adoption, positioning the product as a market leader in compliance.",
      "Streamlined document circulation workflows, reducing turnaround time for legally binding digital signatures."
    ]
  },
  {
    id: 'gojek',
    role: 'Product Manager',
    company: 'GOJEK (GoMerchants)',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Gojek_logo_2019.svg/512px-Gojek_logo_2019.svg.png',
    period: 'Jan 2019 - Nov 2021',
    location: 'Jakarta',
    color: 'from-green-600 to-green-500',
    description: "Acted as the 'Central Nervous System' for merchant payments within a Decacorn ecosystem, unifying offline and online commerce (Midtrans, Spots).",
    achievements: [
      "Pioneered the nationwide rollout of QRIS (Indonesian QR Standard), revolutionizing merchant payment acceptance.",
      "Architected a PCI-DSS compliant offline card payment system, expanding merchant capabilities beyond app-only transactions.",
      "Unified payment interfaces (SNAP, Hera Mobile) to create a seamless omni-channel experience for millions of merchants."
    ]
  },
  {
    id: 'kartuku',
    role: 'Product Manager',
    company: 'Kartuku',
    logo: 'https://ui-avatars.com/api/?name=Kartuku&background=DC2626&color=fff&size=128&bold=true&font-size=0.35',
    period: 'Jan 2016 - Dec 2018',
    location: 'Jakarta',
    color: 'from-red-700 to-red-600',
    description: "Managed the lifecycle of Value Added Services for a premier payment infrastructure provider, driving adoption and revenue.",
    achievements: [
      "Directed the product roadmap for Prepaid Systems, E-Vouchers, and Loyalty programs.",
      "Accelerated sales cycles for lighthouse projects by bridging technical pre-sales and product delivery.",
      "Aligned technical development with strategic business goals through rigorous Agile methodologies."
    ]
  },
  {
    id: 'jati',
    role: 'Project Manager',
    company: 'Jati Piranti Solusindo',
    logo: 'https://ui-avatars.com/api/?name=Jatis&background=F59E0B&color=fff&size=128&bold=true&font-size=0.35',
    period: 'Jan 2015 - Sep 2015',
    location: 'Jakarta',
    color: 'from-amber-500 to-orange-500',
    description: "Led legacy system replacements and product implementations, managing complex user expectations and change management.",
    achievements: [
      "Spearheaded the Avantrade Wealth Management System implementation at ANZ Bank.",
      "Bridged the gap between client 'best practices' and customized legacy workflows.",
      "Managed modules for Unit Trusts, Fixed Income, and Bancassurance."
    ]
  },
  {
    id: 'telkomsigma',
    role: 'Project Manager',
    company: 'Telkomsigma',
    logo: 'https://logo.clearbit.com/telkomsigma.co.id',
    period: 'Dec 2013 - Dec 2014',
    location: 'Banten',
    color: 'from-red-600 to-red-500',
    description: "Managed high-stakes Core Banking System replacements (Finacle) under direct supervision of the IT Director.",
    achievements: [
      "Successfully delivered the AlphaBits to Finacle Universal Banking Solution (FUBS) replacement.",
      "Managed critical components: ITM Switching, XBRL, AML, and Data Center migration.",
      "Ranked among the top three revenue-generating projects at Telkomsigma."
    ]
  },
  {
    id: 'artajasa',
    role: 'Project Manager & QA',
    company: 'Artajasa',
    logo: 'https://logo.clearbit.com/artajasa.co.id',
    period: 'Mar 2012 - Nov 2013',
    location: 'Jakarta',
    color: 'from-blue-600 to-blue-500',
    description: "Oversaw IT project execution and Quality Assurance for Indonesia's leading electronic payment network.",
    achievements: [
      "Coordinated cross-functional teams to deliver IT projects on time and within budget.",
      "Developed and implemented rigorous QA policies and testing standards.",
      "Drove continuous improvement initiatives to optimize IT department efficiency."
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'ahmad-taufik',
    name: 'Ahmad Taufik',
    role: 'FinTech & Security Executive',
    relation: 'Managed Ari directly',
    image: 'https://ui-avatars.com/api/?name=Ahmad+Taufik&background=random&color=fff',
    content: "During the time Ari worked with me, his strengths were his comprehensive considerations and focus on objectives. Don't ask him to do something unless the target and goals are crystal clear. I highly recommend Ari as one of the few Product Managers I endorse."
  },
  {
    id: 'fauzan',
    name: 'Fauzan Erich Emmerling',
    role: 'Senior Engineering Manager at Careem',
    relation: 'Worked on the same team',
    image: 'https://ui-avatars.com/api/?name=Fauzan+Erich&background=random&color=fff',
    content: "Ari is a user focused product manager who always strived to provide the best solution for the user. He is able to carve out solutions and features after analyzing user behavior and able to ensure the team to finish the solution on time."
  },
  {
    id: 'nalendra',
    name: 'Nalendra Dhanasaputra',
    role: 'Sales Manager at Mettler Toledo',
    relation: 'Former Colleague',
    image: 'https://ui-avatars.com/api/?name=Nalendra+D&background=random&color=fff',
    content: "He can speak up his analytical thinking and in the same time criticize in order to improve surroundings. He can deliver his idea in a systematic manner and he never shy to express his original opinions."
  },
  {
    id: 'ahmad-diyak',
    name: 'Ahmad Diyak Kaukabi',
    role: 'Payment System Analyst',
    relation: 'Worked on different teams',
    image: 'https://ui-avatars.com/api/?name=Ahmad+Diyak&background=random&color=fff',
    content: "Very interesting for being his partner. He will always listen what you say and he will give you the excellent feedback. Very strong in communication."
  },
  {
    id: 'suprapto',
    name: 'Suprapto S.Kom, MBA',
    role: 'Head of Business Growth',
    relation: 'Worked on the same team',
    image: 'https://ui-avatars.com/api/?name=Suprapto&background=random&color=fff',
    content: "He has the ability to coordinate with each other person. Have a good attitude and ability are qualified. Advantage skill is in the field of technical and project management."
  },
  {
    id: 'hafiz',
    name: 'Hafiz Maulana',
    role: 'Senior IT Application Support',
    relation: 'Worked on the same team',
    image: 'https://ui-avatars.com/api/?name=Hafiz+Maulana&background=random&color=fff',
    content: "Discipline, team target goal oriented, fully satisfied customer."
  },
  {
    id: 'ali-andri',
    name: 'Ali Andri',
    role: 'Product Sales Executive',
    relation: 'Worked on different teams',
    image: 'https://ui-avatars.com/api/?name=Ali+Andri&background=random&color=fff',
    content: "Very smart person and humble one, and always has great ideas to solve some of problem in great ways."
  }
];