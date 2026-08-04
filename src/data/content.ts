export const links = {
  linkedin: "https://gy.linkedin.com/in/taekondainc",
  agency: "https://taekondatca.co/",
  githubGlsc: "https://github.com/tcarterglsc",
  githubTaekonda: "https://github.com/Taekondainc",
  githubPersonal: "https://github.com/tristoncarter34",
  apts: "https://592apts.com",
  email: "mailto:taekondainc@gmail.com",
  emailAlt: "mailto:Ctriston34@gmail.com",
  phone: "tel:+5926161446",
};

export const contact = {
  email: "taekondainc@gmail.com",
  emailAlt: "Ctriston34@gmail.com",
  phone: "+592 616-1446",
  location: "Lodge, Georgetown, Guyana",
};

export const roles = [
  {
    id: "software",
    title: "Software Developer",
    place: "Guyana Lands & Surveys Commission",
    copy: "Full-stack land administration systems — nglmsAPI, NextGen frontend, client portal, VRAMS, and case management for national workflows.",
  },
  {
    id: "design",
    title: "Designer & Illustrator",
    place: "Taekonda TCA · Brand & product",
    copy: "UI, brand, and SVG illustration — shaping interfaces and visual systems for products and clients across Guyana.",
  },
  {
    id: "tutor",
    title: "Lab Tutor",
    place: "University of Guyana",
    copy: "Teaching CSE and ITE courses since 2020 — Internet Computing, Data Structures, Introduction to Computing, and Business Application Programming.",
  },
  {
    id: "electrician",
    title: "Certified Electrical Technician",
    place: "Georgetown Technical Institute · City & Guilds",
    copy: "Electrical technician training through Georgetown Technical Institute and City & Guilds — the same precision and safety discipline I bring to every system I design and ship.",
  },
];

export const experience = [
  {
    role: "Software Developer",
    org: "Guyana Lands & Surveys Commission",
    time: "Jul 2024 — Present",
    current: true,
    detail:
      "Land administration platform (nglmsAPI + nextgen_v2). Built the client portal, VRAMS, case management work, Commission website, and a Flask backend for NextGen.",
  },
  {
    role: "Developer",
    org: "Forgenoir",
    time: "Jan 2024 — Jun 2024",
    current: false,
    detail:
      "Built NoWahala, an Airbnb-style booking platform — search, listings, checkout, and host tooling.",
  },
  {
    role: "Frontend Developer",
    org: "Arawak Software Consultancy",
    time: "Nov 2020 — Present",
    current: true,
    detail:
      "Still building frontend products at Arawak — client interfaces and product features from Golden Grove, Guyana.",
  },
  {
    role: "Lab Tutor",
    org: "University of Guyana",
    time: "Apr 2020 — Present",
    current: true,
    detail:
      "Lab tutor for CSE 2201, CSE 3101, CSE 2100, CSE 1200, and ITE 2200 — guiding students through computing, algorithms, and application programming.",
  },
  {
    role: "Founder",
    org: "Taekonda Creative Agency (TCA)",
    time: "Sept 2018 — Present",
    current: true,
    detail:
      "My startup — web development, brand, and digital products for clients across Guyana.",
  },
];

export const education = [
  {
    title: "MSc GIS and Remote Sensing",
    place: "University of Guyana",
    time: "Expected 2026",
    detail: "Faculty of Earth and Environmental Sciences, Turkeyen Campus.",
  },
  {
    title: "Certified Electrical Technician",
    place: "Georgetown Technical Institute · City & Guilds",
    time: "2025",
    detail:
      "Electrical technician certification through Georgetown Technical Institute and City & Guilds.",
  },
  {
    title: "Full Stack Web Development",
    place: "Toronto Metropolitan University",
    time: "Jan 2025 — Sept 2025",
    detail: "Course completed.",
  },
  {
    title: "BSc Information Technology",
    place: "University of Guyana",
    time: "2016 — 2020",
    detail: "Turkeyen Campus. Cum Laude.",
  },
];

export const nowBuilding = {
  name: "592APTS",
  status: "In progress",
  tagline: "Stays that feel like arriving somewhere.",
  blurb:
    "I’m currently building 592APTS — a curated stays platform for Guyana and the Caribbean. Homes, cabins, and hideaways you actually want to remember.",
  stack: ["React", "Vite", "Flask"],
  image: "/projects/592apts.jpg",
  href: links.apts,
  linkLabel: "Upcoming · 592apts.com",
};

/** Newest → oldest. Every screenshot project stays listed. */
export const projects = [
  {
    name: "592APTS",
    year: "2025 — Present",
    blurb:
      "Curated vacation stays platform — search, book, and host tooling for trips that feel like arriving somewhere.",
    stack: ["React", "Vite", "Flask"],
    href: null,
    private: true,
    image: "/projects/592apts.jpg",
  },
  {
    name: "NextGen LMS",
    year: "2024 — Present",
    blurb:
      "Land management & leasing platform for GL&SC — end-to-end leasing workflows, geospatial plans, and interactive viewers.",
    stack: ["React", "TypeScript", "Flask"],
    href: null,
    private: true,
    image: "/projects/nextgen-lms.jpg",
  },
  {
    name: "GLSC Client Portal",
    year: "2024 — Present",
    blurb:
      "Citizen portal for land EOIs, leases, inspections, and payments.",
    stack: ["Next.js", "Flask"],
    href: null,
    private: true,
    image: "/projects/client-portal.jpg",
  },
  {
    name: "GLSC Website",
    year: "2024 — Present",
    blurb:
      "Public Guyana Lands & Surveys Commission site — services, notices, and applications.",
    stack: ["Web", "CMS"],
    href: null,
    private: true,
    image: "/projects/glsc-site.jpg",
  },
  {
    name: "VRAMS",
    year: "2024 — Present",
    blurb:
      "Vehicle request & asset management for GL&SC operations.",
    stack: ["React", "Flask"],
    href: null,
    private: true,
    image: "/projects/vrams.jpg",
  },
  {
    name: "noWahala",
    year: "2024",
    blurb:
      "Space booking platform built at Forgenoir — listings, search, and host tooling.",
    stack: ["React", "Vite", "Flask"],
    href: null,
    private: true,
    image: "/projects/nowahala.jpg",
  },
  {
    name: "Economic Research Institute",
    year: "2023",
    blurb:
      "Guyanese economic research institute web presence.",
    stack: ["Vue", "Nuxt"],
    href: null,
    private: true,
    image: "/projects/eri.jpg",
  },
  {
    name: "Houston Secondary SMS",
    year: "2022",
    blurb:
      "School management — classes, teachers, students, grades, and report cards.",
    stack: ["Vue", "Java"],
    href: null,
    private: true,
    image: "/projects/houston-sms.jpg",
  },
  {
    name: "Linden Technical Institute",
    year: "2021",
    blurb:
      "LTI AMS · SRCMS — staff accounts, subjects, programmes, applications, admissions, and report cards.",
    stack: ["Vue", "Java"],
    href: null,
    private: true,
    image: "/projects/lti.jpg",
  },
  {
    name: "Taekonda TCA",
    year: "2018 — Present",
    blurb:
      "My startup — web, brand, and digital products across Guyana.",
    stack: ["Nuxt", "Vue", "Brand"],
    href: null,
    private: false,
    image: "/projects/taekonda-site.jpg",
  },
];


export const skills = {
  "Web & stacks": [
    "JavaScript",
    "PHP",
    "Python",
    "Flask",
    "Vue / Nuxt",
    "React / Next.js",
    "Ionic",
    "Laravel",
    "Node / Express",
    "SQL",
  ],
  "GIS & remote sensing": [
    "Google Earth Engine",
    "QGIS",
    "PostGIS",
    "SNAP",
    "Satellite imagery analysis",
  ],
  Design: ["Illustrator", "Adobe XD", "Photoshop", "SVG illustration"],
  Craft: [
    "AI",
    "Lab tutoring / pedagogy",
    "Electrical technician (GTI · City & Guilds)",
    "Communication",
    "Leadership",
  ],
};

/** Four-panel toolkit for the skills section */
export const toolkit = [
  {
    id: "frontend",
    label: "Frontend & UI",
    items: [
      "React / Next.js",
      "Vue / Nuxt",
      "Ionic",
      "TypeScript",
      "JavaScript",
      "Framer Motion",
      "HTML / CSS",
    ],
  },
  {
    id: "backend",
    label: "Backend & Data",
    items: [
      "Python",
      "Flask",
      "PHP",
      "Laravel",
      "Node / Express",
      "SQL",
      "PostGIS",
    ],
  },
  {
    id: "gis",
    label: "GIS & Systems",
    items: [
      "Google Earth Engine",
      "QGIS",
      "SNAP",
      "Satellite imagery",
      "Java",
      "Linux",
    ],
  },
  {
    id: "tools",
    label: "Tools & Craft",
    items: [
      "Git",
      "AI",
      "Illustrator",
      "Photoshop",
      "Adobe XD",
      "SVG illustration",
      "Lab tutoring",
      "Electrical (GTI · C&G)",
    ],
  },
];
