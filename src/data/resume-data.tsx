import ConsultlyLogo from "../images/logos/consultly.svg";
import AmbitLogo from "../images/logos/ambit.png";
import BarepapersLogo from "../images/logos/barepapers.svg";
import BimLogo from "../images/logos/bim.png";
import CDGOLogo from "../images/logos/cdgo.png";
import ClevertechLogo from "../images/logos/clevertech.png";
import EvercastLogo from "../images/logos/evercast.svg";
import Howdy from "../images/logos/howdy.png";
import JarockiMeLogo from "../images/logos/jarocki.svg";
import JojoMobileLogo from "../images/logos/jojomobile.png";
import MonitoLogo from "../images/logos/monito.svg";
import MobileVikingsLogo from "../images/logos/mv.png";
import NSNLogo from "../images/logos/nsn.svg";
import ParabolLogo from "../images/logos/parabol.svg";
import TastyCloudLogo from "../images/logos/tastycloud.png";
import YearProgressLogo from "../images/logos/yearprogress.svg";
import Minimal from "../images/logos/minimal.svg";
import { GitHubIcon } from "../components/icons/GitHubIcon";
import { LinkedInIcon } from "../components/icons/LinkedInIcon";
import { XIcon } from "../components/icons/XIcon";

export const RESUME_DATA = {
  name: "Kien Hang",
  initials: "KH",
  location: "London, UK",
  locationLink: "https://www.google.com/maps/place/London",
  about:
    "Medicine and Computer Science graduate with a keen interest in product",
  summary:
    "As a Full Stack Engineer, I have successfully taken multiple products from 0 to 1. I lead teams effectively, ensuring an environment where people can do their best work. Currently, I work mostly with TypeScript, React, Node.js, and GraphQL. I have over 8 years of experience in working remotely with companies all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/110916296?s=400&u=811c231ba1b15e40244628bdb0de3206fe3ddfa5&v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "mankien.hang@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/kienmd",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/kien-hang-4b1bba149/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/kienmd",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "University College London (UCL)",
      degree: "Medicine (MBBS) - M.D. equivalent",
      start: "Sept 2022",
      end: "Sept 2023",
      achievement: ""
    },
    {
      school: "University College London (UCL)",
      degree: "MSc Computer Science",
      start: "Sept 2022",
      end: "Sept 2023",
      achievement: "Achievement: Distinction, Full-ride scholarship"
    },
  ],
  work: [
    {
      company: "Co:Helm Intern (Sequoia, Neo-backed)",      
      link: "https://www.co-helm.com/",
      badges: ["Internship"],
      title: "Product Engineer",
      logo: ParabolLogo,
      start: "Jul 2023",
      end: "Present",
      description:
      "Fourth hire at Co:Helm, a $3 million seed stage company backed by Neo and Sequoia Capital, focusing on automating the prior authorization process in US healthcare insurance using Large Language Models (LLMs).\n• Managed communication between product and engineering teams, contributing to the successful acquisition of a $3m seed stage investment and a pilot covering 2.4 million American lives.\n• Conducted comprehensive research to prepare a high-impact keynote presentation for the largest prior-authorization conference in the US, resulting in 30% increase in customer interest.\n• Designed and developed a benchmark dataset to evaluate various language learning models, driving strategic decisions to improve product performance.",    },
    {
      company: "Hardian Health",
      link: "https://www.hardianhealth.com/",
      badges: ["Internship"],
      title: "Associate Consultant",
      logo: ClevertechLogo,
      start: "Aug 2022",
      end: "Oct 2022",
      description:
        "Hardian Health specializes in supporting clinical research and regulatory approval for AI and health-tech products.\n• Directed product strategy for Chest AI radiological devices, focusing on user needs and market demands. Identified essential data for effective use case development.\n• Crafted FDA submission strategies, aligning product features with healthcare regulations to ensure market entry and compliance for AI healthcare startups.",
    },
    {
      company: "Curv",
      link: "https://curvlabs.io/",
      badges: [],
      title: "Co-founder",
      logo: JojoMobileLogo,
      start: "Jan 2022",
      end: "July 2022",
      description:
        "Kickstart Accelerator Programme Winner \href, supported by Entrepreneur First and Deloitte Ventures. Gathered detailed user stories and performed feature prioritization for prototyping. Utilised agile methodology to iterate on technical and design prototype. Successfully launched the product, achieving 200 sign-ups in the first week.",
    },
    {
      company: "NHSx",
      link: "https://transform.england.nhs.uk/",
      badges: ["Internship"],
      title: "Healthcare Team",
      logo: NSNLogo,
      start: "Sept 2019",
      end: "Dec 2019",
      description: "Involved in delivering 'Innovator Surgeries', meeting with incoming start-ups to provide advise and information to support to ensure companies are in compliance with all relevant regulations and guidelines and can have their products adopted quickly and easily into the UK healthcare ecosystem. Involved with designing a CRM booking system for healthcare innovators allowing for requests in order to streamline services and allowing for requests to be directed to the relevant teams.",
    },
  ],
  skills: [
    "Python",
    "JavaScript",
    "SQL",
    "React",
    "React Native",
    "Tailwind",
    "CSS",
  ],
  projects: [
    {
      title: "SAMIFO Health",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "hatchlondon.io",
        href: "https://raisd-h2020.eu/project/samifo-centre-health-centre-for-asylum-seekers-and-refugees/",
      },
    },
    {
      title: "Consultly",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "consultly.com",
        href: "https://consultly.com/",
      },
    },
    {
      title: "rayTwelve",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "A platform to build and grow your online business",
      logo: ConsultlyLogo,
      link: {
        label: "hatchlondon.io",
        href: "https://www.linkedin.com/posts/alexanderljenkins_ai-generativeai-healthcare-ugcPost-7112037998266839041-0fUc?utm_source=share&utm_medium=member_desktop",
      },
    },
    {
      title: "Accenture Hackathon Runner-Up",
      techStack: [
        "HTML",
        "CSS",
        "Javascript",
        "AWS",
      ],
      description: "Accenture Tech Visionaries Runner-Up 4-day technology competition",
    },
    {
      title: "BabyBlues",
      techStack: [
        "Side Project",
        "TypeScript",
        "Next.js",
        "Vite",
        "GraphQL",
        "WebRTC",
      ],
      description: "Hatch London Hackathon Winner",
      logo: ConsultlyLogo,
      link: {
        label: "hatchlondon.io",
        href: "https://www.hatchlondon.io/past-hatches",
      },
    },
  ],
} as const;
