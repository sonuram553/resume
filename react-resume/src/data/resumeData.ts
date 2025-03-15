export interface ResumeData {
  header: {
    name: string;
    role: string;
    age: number;
    social: {
      github: string;
      leetcode: string;
      linkedin: string;
    };
  };
  contact: {
    phone: string;
    email: string;
    location: string;
  };
  careerObjective: string;
  experience: {
    company: string;
    role: string;
    duration: {
      start: string;
      end: string;
    };
    description?: string;
    achievements?: string[];
    projects?: Array<{
      name: string;
      duration: {
        start: string;
        end: string;
      };
      objective: string;
      achievements: string[];
    }>;
  }[];
  projects: Array<{
    name: string;
    url: string;
  }>;
  technologies: {
    highlighted: string[];
    other: string[];
  };
  education: Array<{
    degree: string;
    year: string;
    score: string;
  }>;
  achievements: Array<{
    description: string;
    year: string;
  }>;
  hobbies: string[];
}

export const resumeData: ResumeData = {
  header: {
    name: "Sonu Ram",
    role: "Senior MTS",
    age: 28,
    social: {
      github: "https://github.com/sonuram553",
      leetcode: "https://leetcode.com/sonuram6960/",
      linkedin: "https://www.linkedin.com/in/sonuram6960",
    },
  },
  contact: {
    phone: "+91 798 622 4660",
    email: "sonuram6960@gmail.com",
    location: "Hyderabad, Telangana",
  },
  careerObjective:
    "To obtain a challenging and responsible position as a Software Developer within an organization that will utilize my skills and education as well as offer growth opportunities.",
  experience: [
    {
      company: "ThoughtSpot",
      role: "MTS 3",
      duration: {
        start: "Apr 2023",
        end: "present",
      },
      achievements: [
        "Awarded 'Star Performer of the Month' twice for exceptional contributions and team impact.",
        "Triaged and resolved customer-reported bugs (e.g., HP, CVS Health).",
        "Authored 40+ E2E test cases using Playwright within a tight timeline.",
        "Upgraded connection creation flow and UI while assisting team members effectively.",
        "Worked on Epics: Categorization for Connectors, Connection Creation UX Revamp, and Multiple Configurations per Connection.",
        "Developed a reusable, pixel-perfect Dynamic Form React component.",
        "Actively addressed on-call issues related to team Embrace.",
      ],
    },
    {
      company: "Genpro Research",
      role: "UI Engineer II",
      duration: {
        start: "Sep 2020",
        end: "Apr 2023",
      },
      achievements: [
        "Worked with SlateJS and PDF.js libraries",
        "Implemented PDF zoom and rotate functionality",
        "Implemented caching of recently viewed PDF",
        "Displayed images and tables in the DCD preview",
        "Created a carousel for recommendation pills",
      ],
    },
    {
      company: "Antino Labs",
      role: "Frontend Developer",
      duration: {
        start: "Nov 2019",
        end: "Sep 2020",
      },
      projects: [
        {
          name: "Hoopy",
          duration: {
            start: "Feb 2020",
            end: "Sep 2020",
          },
          objective: "To build a website for a vehicle services company.",
          achievements: [
            "Integrated Redux for centralized state management",
            "Made the layout of web app with CSS Flex and Grid, resulting in clean and concise HTML templates",
            "Reduced the latency during the initial rendering of the page by implementing Angular's Lazy Load feature",
          ],
        },
        {
          name: "AMAI",
          duration: {
            start: "Nov 2019",
            end: "Jan 2020",
          },
          objective: "To build a website for a fashion store.",
          achievements: [
            "Created feature modules for orders and products section",
            "Implemented token-interceptor to add auth-token to http-requests",
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: "Halma Game",
      url: "https://sonuram553.github.io/halma-game/",
    },
    {
      name: "Timer",
      url: "https://timer-9c28a.web.app/",
    },
    {
      name: "Resume",
      url: "https://sonuram553.github.io/resume/",
    },
    {
      name: "Recipe Book",
      url: "https://recipe-book-2b0a8.web.app/recipes",
    },
  ],
  technologies: {
    highlighted: [
      "React",
      "React Hooks",
      "Redux",
      "JavaScript",
      "OOP",
      "Git",
      "TypeScript",
    ],
    other: [
      "Redux Thunk",
      "SlateJs",
      "PDFjs",
      "Axios",
      "Scss",
      "CSS",
      "HTML",
      "BEM",
      "Data Structures",
      "Algorithms",
      "Angular 8",
      "RxJS",
    ],
  },
  education: [
    {
      degree: "B.Tech in Computer Science Engineering, LPU",
      year: "2013-18",
      score: "8.18/10",
    },
    {
      degree: "Class XII CBSE Board",
      year: "2011-12",
      score: "67.7%",
    },
    {
      degree: "Class X CBSE Board",
      year: "2009-10",
      score: "8.20/10",
    },
  ],
  achievements: [
    {
      description: "Secured 10/10 in Network Administration in semester VIII",
      year: "2016",
    },
    {
      description:
        "Qualified to the final round (5th) of CodeStorm 2016 – Coding competition held in LPU in association with HackerEarth",
      year: "2016",
    },
    {
      description:
        "Secured 2nd position in Code Raid 2016 – Coding competition held in LPU in association with Code Chef",
      year: "2016",
    },
    {
      description:
        "Felicitated by CRPF for having secured a CGPA of 8.2/10 in class X",
      year: "2010",
    },
    {
      description:
        'Built a working model of a "Differential Drive" system and secured 3rd position in class IX Science Exhibition',
      year: "2008",
    },
  ],
  hobbies: [
    "Web Designing",
    "Coding",
    "Robotics",
    "Volleyball",
    "Cycling",
    "Reading",
    "Jogging",
  ],
};
