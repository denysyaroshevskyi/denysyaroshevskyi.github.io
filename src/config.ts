import type {
  NavBarLink,
  SocialLink,
  Identity,
  AboutPageContent,
  ProjectPageContent,
  HomePageContent,
} from "./types/config";

export const identity: Identity = {
  name: "Denis Yaroshevskyi",
  logo: "/img.png",
  photo: "/photo.png",
  email: "noisymind0@gmail.com",
};

export const navBarLinks: NavBarLink[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
];

export const socialLinks: SocialLink[] = [
  {
    title: "GitHub",
    url: "https://github.com/denysyaroshevskyi",
    icon: "mdi:github",
    external: true,
  },
  {
    title: "Mail",
    url: "mailto:noisymind0@gmail.com",
    icon: "mdi:email",
  },
];

// Home (/)
export const homePageContent: HomePageContent = {
  seo: {
    title: "Denis Yaroshevskyi",
    description:
      "Skilled Software Engineer with a decade of experience in eCommerce development, crafting scalable backend architectures, seamless third-party integrations, and high-performance systems for global brands.",
    image: identity.photo,
  },
  role: "Software Developer",
  description:
    "Experienced Software Engineer with 10 years in eCommerce development, specializing in scalable backend systems, third-party integrations, and high-performance solutions.",
  socialLinks: socialLinks,
  links: [
    {
      title: "My Projects",
      url: "/projects",
    },
    {
      title: "About Me",
      url: "/about",
    },
  ],
};

// About (/about)
export const aboutPageContent: AboutPageContent = {
  seo: {
    title: "About | Denis Yaroshevskyi",
    description:
      "Learn more about Denis Yaroshevskyi, a backend-focused software engineer with 10 years of experience in PHP, Magento, and microservice architecture, passionate about performance, clean code, and continuous growth.",
    image: "/photo.png",
  },
  subtitle: "Some information about myself",
  about: {
    description: `
My organizational skills, effective communication, and a strong sense of responsibility are key to crafting robust code and dependable software programs. I have experience managing projects, leading teams, and building relationships with stakeholders. I am passionate about programming and focused on improving my skills.
<br/><br/>
Extensive experience in performance optimization using Blackfire, integrating payment systems, and enhancing B2B features. During a business trip, collaborated closely with key stakeholders to accelerate project timelines and resolve critical issues promptly. Conducted meetings with clients to gather requirements, understand pain points, and align project objectives with business goals. Familiar with Domain-Driven Design (DDD), CQRS, and microservice architecture principles.
<br/><br/>
  <p class="opacity-60 mb-10">Experienced: PHP, JavaScript, Magento 1/2, Adobe Commerce, Laravel, Lumen, Magento Cloud, Docker, Xdebug, Jenkins, Elasticsearch, Redis, Memcached, RabbitMQ, SQL, ACID, REST API, Clean Code, Performance Optimization, Scalability, GRASP, SOLID, Microservice Architecture</p>
  <p class="opacity-60 mb-10">Familiar: Microservices, Domain-Driven Design (DDD), CQRS, Event-Driven Architecture</p>
  <p class="opacity-60 mb-10">Basic knowledge: Go, Java, C++, Python, Node.js and C#</p>
`, // Markdown is supported
    image_l: {
      url: "/demo-1.jpg",
      alt: "Left Picture",
    },
    image_r: {
      url: "/demo-1.jpg",
      alt: "Right Picture",
    },
  },
  work: {
    description: `I've worked with a variety of technologies and tools to build cool things. Here are some of the companies I've worked with.`, // Markdown is supported
    items: [
      {
        title: "Software Engineer",
        company: {
          name: "Scimus",
          image: "/img_6.png",
          url: "https://thescimus.com/",
        },
        date: "Sep 2024 - Present",
        description: ""
      },
      {
        title: "Software Engineer",
        company: {
          name: "BORN Group",
          image: "/img_5.png",
          url: "https://www.borngroup.com/",
        },
        date: "Sep 2022 - Feb 2024",
        description: ""
      },
      {
        title: "Software Engineer",
        company: {
          name: "Strix Group",
          image: "/img_4.png",
          url: "https://www.strixgroup.net/",
        },
        date: "May 2021 - Jul 2022",
        description: ""
      },
      {
        title: "Software Engineer",
        company: {
          name: "Overdose Digital",
          image: "/img_3.png",
          url: "https://overdose.digital/",
        },
        date: "Aug 2020 - Apr 2021",
        description: ""
      },
      {
        title: "Software Engineer",
        company: {
          name: "Wise LLT",
          image: "/img_2.png",
          url: "",
        },
        date: "Jun 2020 - Aug 2020",
        description: ""
      },
      {
        title: "Software Engineer",
        company: {
          name: "ITDelight",
          image: "/img_1.png",
          url: "https://itdelight.io/",
        },
        date: "Apr 2016 - May 2020",
        description: ""
      },
    ],
  },
  education: {
    description: `I hold a degree in Computer Science and have completed practical diploma projects in real-world scenarios, such as a courier service platform and a job portal.`,
    items: [
      {
        title: "Simon Kuznets Kharkiv National University of Economics",
        company: {
          name: "Bachelor's in Computer Science",
          image: "/edu/img.png",
          url: "https://www.hneu.edu.ua/",
        },
        date: "2011 – 2015",
        description: "Graduation project: job search platform with CV management and filtering, built with Laravel.",
      },
      {
        title: "Kharkiv Patent-Computer College",
        company: {
          name: "Junior Specialist in Software Development",
          image: "/edu/img_1.png",
          url: "#",
        },
        date: "2009 – 2013",
        description: "Diploma project: courier company website built on WordPress.",
      },
    ],
  },
  connect: {
    description: `I'm always interested in meeting new people and learning new things. Feel free to connect with me on any of the following platforms.`, // Markdown is supported
    links: socialLinks,
  },
};

// Projects (/projects)
export const projectsPageContent: ProjectPageContent = {
  seo: {
    title: "Projects | Denis Yaroshevskyi",
    description: "Explore Denis Yaroshevskyi’s portfolio of eCommerce projects, featuring Magento 2 custom development, system integrations, and backend performance tuning for international clients.",
    image: identity.photo,
  },
  subtitle: "Check out what I've been working on.",
  projects: [
    {
      title: "DermPRO",
      description: "E&#8209;commerce platform for dermatology services. Focused on backend development, module creation, service integration, and system optimization.",
      image: "/projects/dermpro.webp",
      year: "2024",
      url: "https://www.dermpro.com/",
    },
    {
      title: "Lindt & Sprüngli",
      description: "Enterprise-level Magento2 solution. Built and maintained custom modules, optimized performance, and integrated third-party services.",
      image: "/projects/lindt.webp",
      year: "2022",
      url: "https://www.lindt-spruengli.com/",
    },
    {
      title: "shop4runners.eu",
      description: "Online store for athletic wear and gear. Responsible for backend development, database optimization, and external service integrations.",
      image: "/projects/shop4runners.webp",
      year: "2021",
      url: "https://shop4runners.eu/",
    },
    {
      title: "sportano.pl",
      description: "High-traffic sports e&#8209;commerce platform. Focused on logging services, backend workflows, and scalable Magento2 integrations.",
      image: "/projects/sportano.webp",
      year: "2021",
      url: "https://sportano.pl/",
    },
    {
      title: "Aeliadutyfree",
      description: "E&#8209;commerce platform for duty-free retail. Handled backend logic, refactoring, and system integrations using RabbitMQ and Docker.",
      image: "/projects/aeliadutyfree.webp",
      year: "2020",
      url: "https://www.aeliadutyfree.co.uk/",
    },
    {
      title: "Beaumont Tiles",
      description: "Retail platform with complex service integrations. Focused on backend logic, performance tuning, and Knockout.js frontend interactions.",
      image: "/projects/beaumonttiles.webp",
      year: "2020",
      url: "https://www.beaumont-tiles.com.au/",
    }
  ],
  other: {
    projects: "abasta.co.il, bioboerse.at, gracecole.co.uk, axelnoah.se, lorealprofessionnel, evermart.dk, Dr. Zack's Nutrition, fjedre.dk, gear-up.me, offtheback.com, turboam.com.ua, kinderkraft.pl, verstore.com, sabeny.com, MDL Online, mtgsverige.se, karaoke4free, and more.",
    responsibilities: "Backend development, custom Magento modules, media galleries and resizers, extension customization, social feed integration, Flash to HTML migration, performance optimization, and long-term support.",
    technologies: "Magento 1/2, WordPress, PHP, MySQL, JavaScript, REST API, etc"
  }
};