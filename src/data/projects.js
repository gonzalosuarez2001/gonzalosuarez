export const projectCategories = ["all", "web", "mobile", "microservices", "ai"];

export const featuredProjects = [
  {
    id: "moviltrack",
    categories: ["web"],
    media: { type: "web", image: "images/movil1.webp" },
    stack: ["React", "Tailwind", "Node.js", "MongoDB"],
  },
  {
    id: "ripalive",
    categories: ["mobile", "web"],
    media: { type: "mobile", images: ["images/rip1.webp", "images/rip3.webp"] },
    stack: ["React Native", "Expo", "Node.js", "MongoDB", "Stripe", "RevenueCat"],
    link: { href: "https://www.ripalive.com/", label: "ripalive.com" },
  },
  {
    id: "credential",
    categories: ["mobile", "ai"],
    media: { type: "mobile", images: ["images/credencial1.webp", "images/credencial4.webp"] },
    stack: ["React Native", "Expo", "Node.js", "Docker", "Ollama", "Keycloak"],
  },
  {
    id: "difusiones",
    categories: ["microservices"],
    media: { type: "web", image: "images/difu1.webp" },
    stack: ["React", "Node.js", "SQL", "Sequelize", "Docker", "Keycloak"],
    link: { href: "https://sia.frba.utn.edu.ar/", label: "sia.frba.utn.edu.ar" },
  },
];

export const moreProjects = [
  {
    id: "toon",
    categories: ["web"],
    image: "images/toon1.webp",
    stack: ["Next.js", "TypeScript", "Prisma"],
    href: "https://toonguesser.com/",
  },
  {
    id: "pap",
    categories: ["web"],
    image: "images/pap2.webp",
    stack: ["React", "Node.js", "SQL"],
  },
  {
    id: "traducciones",
    categories: ["microservices"],
    image: "images/traducciones1.webp",
    stack: ["React", "Node.js", "Keycloak"],
    href: "https://sia.frba.utn.edu.ar/",
  },
  {
    id: "planner",
    categories: ["web"],
    image: "images/planner2.webp",
    stack: ["React", "Node.js", "SQL"],
  },
];
