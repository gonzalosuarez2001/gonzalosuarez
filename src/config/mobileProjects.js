import credencial1 from "../../public/assets/videos/credencial1.webm";
import credencial2 from "../../public/assets/videos/credencial2.webm";
import ripalive1 from "../../public/assets/videos/ripalive1.webm";
import ripalive2 from "../../public/assets/videos/ripalive2.webm";

const mobileProjects = [
  {
    name: "ripalive",
    video1: ripalive1,
    video2: ripalive2,
    image1: "rip1.png",
    image2: "rip2.png",
    url: "https://www.ripalive.com/",
    technologies: [
      "git",
      "expo",
      "reactNative",
      "css",
      "js",
      "node",
      "mongo",
      "figma",
    ],
    integrations: ["stripe", "rc"],
    images: [
      "rip1.png",
      "rip2.png",
      "rip3.png",
      "rip4.png",
      "rip5.png",
      "rip6.png",
      "rip7.png",
      "rip8.png",
      "rip9.png",
    ],
  },
  {
    name: "credential",
    video1: credencial1,
    video2: credencial2,
    image1: "credencial1.png",
    image2: "credencial2.png",
    technologies: [
      "git",
      "docker",
      "expo",
      "reactNative",
      "css",
      "js",
      "node",
      "figma",
    ],
    integrations: ["keycloak"],
    images: [
      "credencial1.png",
      "credencial2.png",
      "credencial3.png",
      "credencial4.png",
      "credencial5.png",
      "credencial6.png",
    ],
  },
];

export default mobileProjects;
