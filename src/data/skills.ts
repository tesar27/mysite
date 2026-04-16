export interface Skill {
  name: string;
  icon?: string;
}

export const skills: Skill[] = [
  { name: "AWS" },
  { name: "FastAPI" },
  { name: "JavaScript" },
  { name: "TypeScript" },
  { name: "React" },
  { name: "Node.js" },
  { name: "Astro" },
  { name: "Next.js" },
  { name: "Git" },
  { name: "GitHub" },
  { name: "TailwindCSS" },
  { name: "PostgreSQL" },
  { name: "Flutter" },
  { name: "Jest" },
  { name: "Pytest" },
  { name: "Linux" },
];

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    title: "Fullstack Webapps Development",
    description: "Fast, accessible, SEO-optimised web experiences.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" /></svg>`,
  },
  {
    title: "App Development",
    description: "Cross-platform mobile & desktop applications with Flutter.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" /></svg>`,
  },
  {
    title: "Application Deployments",
    description: "Reliable, scalable cloud hosting & CI/CD pipelines.",
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" /></svg>`,
  },
];
