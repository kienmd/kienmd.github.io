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
    "Medic + Computer Science graduate with a strong interest in product",
  summary:
    "As a clinician and engineer with experience in healthcare consulting and a keen interest in product management, I excel at developing solutions at the intersection of product, engineering, and clinical domains, blending medical expertise with technical skill.",
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
      start: "Sept 2017",
      end: "Sept 2024",
      achievement: "",
      extra: ""
    },
    {
      school: "University College London (UCL)",
      degree: "MSc Computer Science",
      start: "Sept 2022",
      end: "Sept 2023",
      achievement: "Achievement: Distinction, Full-ride Scholarship",
      extra: "Dissertation: Large Language Models in Healthcare (80%)"
    },
  ],
  work: [
    {
      company: "Co:helm (Sequoia, Neo-backed)",      
      link: "https://www.co-helm.com/",
      badges: ["Internship"],
      title: "Product Engineer",
      logo: ParabolLogo,
      start: "Jul 2023",
      end: "Present",
      description:
      "$3 million seed stage company covering 2.4 million American lives, backed by Neo and Sequoia Capital, focusing on automating U.S. healthcare insurance using Large Language Models (LLMs). Bridged product, clinical, and engineering teams at Cohelm to streamline feature development, automating over 100 weekly user feedback reports, and developed a clinical bug tracking database; also engineered front and back-end integration user authorisation.",    },
    {
      company: "Hardian Health",
      link: "https://www.hardianhealth.com/",
      badges: ["Internship"],
      title: "Associate Consultant",
      logo: ClevertechLogo,
      start: "Aug 2022",
      end: "Oct 2022",
      description:
        "Digital health consultancy specialising in clinical and regulatory approval for AI medical devices. Crafted FDA submission strategies, aligning product features with healthcare regulations to ensure market entry and compliance for AI healthcare startups. Conducted comprehensive market research and literature reviews, providing critical insights to support founders in shaping and refining their product roadmaps.",
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
        "Kickstart Accelerator Programme Winner 🥇, supported by Entrepreneur First and Deloitte Ventures. Led the collection of user stories and executed feature prioritisation for prototyping. Successfully launched the product, gathering 200 sign-ups in the initial week.",
    },
    {
      company: "NHSx",
      link: "https://transform.england.nhs.uk/",
      badges: ["Internship"],
      title: "Healthcare Team",
      logo: NSNLogo,
      start: "Sept 2019",
      end: "Dec 2019",
      description: "Helped to shape and deliver 'Innovator Surgeries', a program aiding start-ups with product compliance and UK healthcare ecosystem integration by spearheading the design and implementation of an internal CRM booking system.",
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
      title: "samifo health",
      techStack: [
        "Uni Project",
        "React Native",
        "SQL",
        "Node.js",
        "Azure",
      ],
      description: "Led a team of engineers and clinicians to build an electronic healthcare record (EHR) mobile application with migrant charity SAMIFO Health",
      logo: null,
      link: {
        label: "SAMIFO Health",
        href: "https://youtu.be/p4BWxxk026k",
      },
    },
    {
      title: "rayTwelve",
      techStack: [
        "Hackathon",
        "TypeScript",
        "React",
      ],
      description: "Third-Prize 🥉 Experimented with grounding LLM outputs using knowledge graphs to tackle healthcare misinformation",
      logo: ConsultlyLogo,
      link: {
        label: "rayTwelve",
        href: "https://www.linkedin.com/posts/alexanderljenkins_ai-generativeai-healthcare-ugcPost-7112037998266839041-0fUc?utm_source=share&utm_medium=member_desktop",
      },
    },

    {
      title: "studentbids",
      techStack: [
        "Uni Project",
        "React", 
        "MySQL",
        "PHP",
        "Azure",
      ],
      description: "An interactive marketplace that allows students to bid and list items",
      logo: null,
      link: {
        label: "studentbids",
        href: "https://youtu.be/xFQeL_5_WZg",
      },
    },
    {
      title: "carenet",
      techStack: [
        "Uni Project",
        "Python",
        "SQLite",
      ],
      description: "A humanitarian refugee management system for volunteers to be assigned to refugee camps",
      logo: null,
      link: {
        label: "Carenet",
        href: "https://mediacentral.ucl.ac.uk/Play/93015",
      },
    },
    {
      title: "accenture",
      techStack: [
        "Hackathon",
        "HTML",
        "CSS",
        "JavaScript",
        "AWS Cloud",
      ],
      description: "Second-Prize 🥈 Accenture Tech Visionaries: Website aimed at simplifying appointment scheduling and management for local businesses ",
      logo: null,
      link: {
        label: "hatchlondon.io",
        href: "https://www.hatchlondon.io/past-hatches",
      },
    },
    {
      title: "babyblues",
      techStack: [
        "Hackathon",
        "Medical Advisor",
      ],
      description: "First-Prize 🥇 Baby blues is a post-partum depression tracking application designed to help new mothers monitor and manage their mood changes",
      logo: null,
      link: {
        label: "hatchlondon.io",
        href: "https://www.hatchlondon.io/past-hatches",
      },
    },
  ],
} as const;
