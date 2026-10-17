export const projectCategories = ["all", "web", "mobile"];

export const projects = [
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
    categories: ["mobile"],
    media: { type: "mobile", images: ["images/credencial1.webp", "images/credencial4.webp"] },
    stack: ["React Native", "Expo", "Node.js", "Docker", "Ollama", "Keycloak"],
  },
  {
    id: "sicyt",
    categories: ["web"],
    media: { type: "web", image: "images/sicyt.webp" },
    stack: ["React", "Tailwind", "Node.js", "MariaDB", "Sequelize", "BullMQ", "Keycloak", "Docker"],
  },
  {
    id: "difusiones",
    categories: ["web"],
    media: { type: "web", image: "images/difu1.webp" },
    stack: ["React", "Node.js", "SQL", "Sequelize", "Docker", "Keycloak"],
    link: { href: "https://sia.frba.utn.edu.ar/", label: "sia.frba.utn.edu.ar" },
  },
  {
    id: "traducciones",
    categories: ["web"],
    media: { type: "web", image: "images/traducciones1.webp" },
    stack: ["React", "Node.js", "SQL", "Sequelize", "Docker", "Keycloak"],
    link: { href: "https://sia.frba.utn.edu.ar/", label: "sia.frba.utn.edu.ar" },
  },
  {
    id: "toon",
    categories: ["web"],
    media: { type: "web", image: "images/toon1.webp" },
    stack: ["Next.js", "TypeScript", "Redux", "Tailwind", "Prisma", "Docker", "GitHub Actions"],
    link: { href: "https://toonguesser.com/", label: "toonguesser.com" },
  },
  {
    id: "pap",
    categories: ["web"],
    media: { type: "web", image: "images/pap2.webp" },
    stack: ["React", "Chakra UI", "Node.js", "SQL", "Sequelize", "Docker"],
  },
  {
    id: "planner",
    categories: ["web"],
    media: { type: "web", image: "images/planner2.webp" },
    stack: ["React", "Tailwind", "Node.js", "SQL", "Sequelize", "Docker", "GitHub Actions"],
  },
];
