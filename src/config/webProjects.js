import ripadmin from "../../public/assets/videos/ripadmin.webm";
import ripbene from "../../public/assets/videos/ripbene.webm";
import pap from "../../public/assets/videos/pap.webm";
import tradu from "../../public/assets/videos/tradu.webm";
import movil from "../../public/assets/videos/movil.webm";
import planner from "../../public/assets/videos/planner.webm";
import difu from "../../public/assets/videos/difu.webm";
import toon from "../../public/assets/videos/toon.webm";

const webProjects = [
  {
    name: "movil",
    video: movil,
    technologies: [
      "git",
      "react",
      "html",
      "css",
      "js",
      "tailwind",
      "node",
      "mongo",
    ],
  },
  {
    name: "pap",
    video: pap,
    technologies: [
      "git",
      "docker",
      "react",
      "html",
      "css",
      "js",
      "chakra",
      "node",
      "sql",
      "sequelize",
    ],
  },
  {
    name: "traducciones",
    video: tradu,
    technologies: [
      "git",
      "docker",
      "react",
      "html",
      "css",
      "js",
      "node",
      "sql",
      "sequelize",
    ],
    integrations: ["keycloak"],
  },
  {
    name: "difusiones",
    video: difu,
    technologies: [
      "git",
      "docker",
      "react",
      "html",
      "css",
      "js",
      "node",
      "sql",
      "sequelize",
    ],
    integrations: ["keycloak"],
  },
  {
    name: "ripadmin",
    video: ripadmin,
    technologies: [
      "git",
      "react",
      "html",
      "css",
      "js",
      "chakra",
      "node",
      "mongo",
    ],
  },
  {
    name: "ripbene",
    video: ripbene,
    url: "https://beneficiarios.ripalive.live/",
    technologies: [
      "git",
      "react",
      "html",
      "css",
      "js",
      "chakra",
      "node",
      "mongo",
    ],
  },
  {
    name: "planner",
    video: planner,
    technologies: [
      "git",
      "docker",
      "react",
      "html",
      "css",
      "js",
      "tailwind",
      "node",
      "sql",
      "sequelize",
    ],
    integrations: ["google"],
  },
  {
    name: "toon",
    video: toon,
    technologies: [
      "git",
      "docker",
      "next",
      "react",
      "html",
      "css",
      "ts",
      "tailwind",
      "node",
      "sql",
      "prisma",
    ],
  },
];

export default webProjects;
