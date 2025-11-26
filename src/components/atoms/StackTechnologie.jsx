import { useTheme } from "../../contexts/ThemeContext";
import react from "../../../public/assets/icons/react.webp";
import html from "../../../public/assets/icons/html.webp";
import js from "../../../public/assets/icons/js.webp";
import css from "../../../public/assets/icons/css.webp";
import docker from "../../../public/assets/icons/docker.webp";
import sql from "../../../public/assets/icons/sql.webp";
import node from "../../../public/assets/icons/node.webp";
import bootstrap from "../../../public/assets/icons/bootstrap.webp";
import git from "../../../public/assets/icons/git.webp";
import ubuntu from "../../../public/assets/icons/ubuntu.webp";
import bash from "../../../public/assets/icons/bash.webp";
import next from "../../../public/assets/icons/next.webp";
import express from "../../../public/assets/icons/express.webp";
import expo from "../../../public/assets/icons/expo.webp";
import wordpress from "../../../public/assets/icons/wordpress.webp";
import figma from "../../../public/assets/icons/figma.webp";
import gitlab from "../../../public/assets/icons/gitlab.webp";
import ts from "../../../public/assets/icons/ts.webp";
import mongo from "../../../public/assets/icons/mongo.webp";
import chakra from "../../../public/assets/icons/chakra.webp";
import aws from "../../../public/assets/icons/aws.webp";
import tailwind from "../../../public/assets/icons/tailwind.webp";
import prisma from "../../../public/assets/icons/prisma.webp";
import sequelize from "../../../public/assets/icons/sequelize.webp";
import stripe from "../../../public/assets/icons/stripe.webp";
import mp from "../../../public/assets/icons/mp.webp";
import rc from "../../../public/assets/icons/rc.webp";
import google from "../../../public/assets/icons/google.webp";
import keycloak from "../../../public/assets/icons/keycloak.webp";

const tagList = {
  react: { name: "React", img: react },
  reactNative: { name: "React Native", img: react },
  node: { name: "Node", img: node },
  sql: { name: "SQL", img: sql },
  docker: { name: "Docker", img: docker },
  html: { name: "HTML", img: html },
  css: { name: "CSS", img: css },
  js: { name: "JavaScript", img: js },
  bootstrap: { name: "Bootstrap", img: bootstrap },
  git: { name: "Git", img: git },
  ubuntu: { name: "Ubuntu", img: ubuntu },
  bash: { name: "Terminal", img: bash },
  next: { name: "Next.js", img: next },
  express: { name: "Express", img: express },
  expo: { name: "Expo", img: expo },
  wordpress: { name: "Wordpress", img: wordpress },
  figma: { name: "Figma", img: figma },
  gitlab: { name: "Gitlab", img: gitlab },
  ts: { name: "TypeScript", img: ts },
  mongo: { name: "MongoDB", img: mongo },
  chakra: { name: "Chakra", img: chakra },
  aws: { name: "AWS", img: aws },
  tailwind: { name: "Tailwind", img: tailwind },
  prisma: { name: "Prisma", img: prisma },
  sequelize: { name: "Sequelize", img: sequelize },
  stripe: { name: "Stripe", img: stripe },
  mp: { name: "Mercado Pago", img: mp },
  rc: { name: "Revenue Cat", img: rc },
  google: { name: "Google", img: google },
  keycloak: { name: "Keycloak", img: keycloak },
};

export default function StackTechnologie({ tag }) {
  const { theme } = useTheme();

  return (
    <div className="rounded-2 d-flex flex-column col-5 col-sm-3 align-items-center me-3 mb-4 p-2">
      <img className="mb-3" width="50" height="50" src={tagList[tag].img} />
      <span className={`text_${theme} stack_tag_name text-center`}>
        {tagList[tag].name}
      </span>
    </div>
  );
}
