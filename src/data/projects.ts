export interface Project {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    title: "Storage Application",
    description:
      "A full-stack storage app built with Nextjs and Appwrite",
    tags: ["Next.js", "TypeScript", "Appwrite", "EmailOTP"],
    link: "https://storage.yerbolat.com",
    repo: "https://github.com/tesar27/storage-app",
    image: "storageapp",
    featured: true,
  },
  {
    title: "AI Chat Application",
    description:
      "AI Chat App for analyzing two videos of a child with cerebral palsy to track motor function improvements over time, built with Nextjs, FastAPI, still in progress...",
    tags: ["React", "Node.js", "OpenAI", "Socket.io"],
    link: "https://rahabframe.vercel.app/",
    repo: "https://github.com/tesar27/rahabframe",
    image: "aichat",
    featured: true,
  },
  {
    title: "Task Management SaaS",
    description:
      "Kanban-style project tracker with team collaboration, time tracking, and Slack notifications built with Vue and Firebase.",
    tags: ["Vue 3", "Firebase", "Tailwind", "Slack API"],
    link: "#",
    repo: "#",
    image: "taskmanager",
  },
  {
    title: "Mobile Fitness Tracker",
    description:
      "Cross-platform React Native app tracking workouts, nutrition, and sleep patterns with beautiful data visualizations.",
    tags: ["React Native", "Expo", "Redux", "Chart.js"],
    link: "#",
    repo: "#",
    image: "fitness",
  },
  {
    title: "Developer Portfolio Builder",
    description:
      "No-code portfolio generator that turns a JSON config into a lightning-fast static site, deployed via Vercel with one click.",
    tags: ["Astro", "TypeScript", "Vercel", "TailwindCSS"],
    link: "#",
    repo: "#",
    image: "portfoliobuilder",
  },
  {
    title: "Real Estate Dashboard",
    description:
      "Interactive map-based dashboard for real estate listings, filtering, and analytics built with Mapbox and React.",
    tags: ["React", "Mapbox", "D3.js", "Express"],
    link: "#",
    repo: "#",
    image: "realestate",
  },
];
