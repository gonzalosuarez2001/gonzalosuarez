import { useTheme } from "../../contexts/ThemeContext";
import reactIcon from "../../assets/icons/react.webp";
import nodeIcon from "../../assets/icons/node.webp";
import sqlIcon from "../../assets/icons/sql.webp";
import dockerIcon from "../../assets/icons/docker.webp";
import htmlIcon from "../../assets/icons/html.webp";
import cssIcon from "../../assets/icons/css.webp";
import jsIcon from "../../assets/icons/js.webp";
import bootstrapIcon from "../../assets/icons/bootstrap.webp";
import gitIcon from "../../assets/icons/git.webp";
import chakraIcon from "../../assets/icons/chakra.webp";
import mongoIcon from "../../assets/icons/mongo.webp";
import sequelizeIcon from "../../assets/icons/sequelize.webp";
import keycloakIcon from "../../assets/icons/keycloak.webp";
import tailwindIcon from "../../assets/icons/tailwind.webp";
import stripeIcon from "../../assets/icons/stripe.webp";
import rcIcon from "../../assets/icons/rc.webp";
import expoIcon from "../../assets/icons/expo.webp";
import figmaIcon from "../../assets/icons/figma.webp";
import tsIcon from "../../assets/icons/ts.webp";
import prismaIcon from "../../assets/icons/prisma.webp";
import nextIcon from "../../assets/icons/next.webp";

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
};

export default function Tag({ tag }) {
  const { theme } = useTheme();

  return (
    <div className={`background_secondary_${theme} rounded-2 me-3 mb-3 p-2`}>
      <img className="me-2" width="19" height="19" src={tagList[tag].icon} />
      <span className={`text_${theme} projects_tag_name text-center`}>
        {tagList[tag].name}
      </span>
    </div>
  );
}
