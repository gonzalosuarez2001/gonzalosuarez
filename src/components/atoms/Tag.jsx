import { useTheme } from "../../contexts/ThemeContext";
import reactIcon from "../../../public/assets/icons/react.webp";
import nodeIcon from "../../../public/assets/icons/node.webp";
import sqlIcon from "../../../public/assets/icons/sql.webp";
import dockerIcon from "../../../public/assets/icons/docker.webp";
import htmlIcon from "../../../public/assets/icons/html.webp";
import cssIcon from "../../../public/assets/icons/css.webp";
import jsIcon from "../../../public/assets/icons/js.webp";
import bootstrapIcon from "../../../public/assets/icons/bootstrap.webp";
import gitIcon from "../../../public/assets/icons/git.webp";
import chakraIcon from "../../../public/assets/icons/chakra.webp";
import mongoIcon from "../../../public/assets/icons/mongo.webp";
import sequelizeIcon from "../../../public/assets/icons/sequelize.webp";
import keycloakIcon from "../../../public/assets/icons/keycloak.webp";
import tailwindIcon from "../../../public/assets/icons/tailwind.webp";
import stripeIcon from "../../../public/assets/icons/stripe.webp";
import rcIcon from "../../../public/assets/icons/rc.webp";
import expoIcon from "../../../public/assets/icons/expo.webp";
import figmaIcon from "../../../public/assets/icons/figma.webp";
import tsIcon from "../../../public/assets/icons/ts.webp";
import prismaIcon from "../../../public/assets/icons/prisma.webp";
import nextIcon from "../../../public/assets/icons/next.webp";
import googleIcon from "../../../public/assets/icons/google.webp";

const tagList = {
  react: { name: "React", icon: reactIcon },
  reactNative: { name: "React Native", icon: reactIcon },
  node: { name: "Node", icon: nodeIcon },
  sql: { name: "SQL", icon: sqlIcon },
  docker: { name: "Docker", icon: dockerIcon },
  html: { name: "HTML", icon: htmlIcon },
  css: { name: "CSS", icon: cssIcon },
  js: { name: "JavaScript", icon: jsIcon },
  bootstrap: { name: "Bootstrap", icon: bootstrapIcon },
  git: { name: "Git", icon: gitIcon },
  chakra: { name: "Chakra", icon: chakraIcon },
  mongo: { name: "MongoDB", icon: mongoIcon },
  sequelize: { name: "Sequelize", icon: sequelizeIcon },
  keycloak: { name: "Keycloak", icon: keycloakIcon },
  tailwind: { name: "Tailwind", icon: tailwindIcon },
  stripe: { name: "Stripe", icon: stripeIcon },
  rc: { name: "Revenue Cat", icon: rcIcon },
  expo: { name: "Expo", icon: expoIcon },
  figma: { name: "Figma", icon: figmaIcon },
  ts: { name: "TypeScript", icon: tsIcon },
  prisma: { name: "Prisma", icon: prismaIcon },
  next: { name: "Next.js", icon: nextIcon },
  google: { name: "Google", icon: googleIcon },
};

export default function Tag({ tag }) {
  const { theme } = useTheme();
  return (
    <div className={`background_secondary_${theme} rounded-2 me-3 mb-3 p-2`}>
      <img className="me-2" width="20" height="20" src={tagList[tag].icon} />
      <span className={`text_${theme} projects_tag_name text-center`}>
        {tagList[tag].name}
      </span>
    </div>
  );
}
