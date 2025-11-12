import { useTheme } from "../../contexts/ThemeContext";
import react from "../../assets/icons/react.webp";
import html from "../../assets/icons/html.webp";
import js from "../../assets/icons/js.webp";
import css from "../../assets/icons/css.webp";
import docker from "../../assets/icons/docker.webp";
import sql from "../../assets/icons/sql.webp";
import node from "../../assets/icons/node.webp";
import bootstrap from "../../assets/icons/bootstrap.webp";
import git from "../../assets/icons/git.webp";
import ubuntu from "../../assets/icons/ubuntu.webp";
import bash from "../../assets/icons/bash.webp";
import next from "../../assets/icons/next.webp";
import express from "../../assets/icons/express.webp";
import expo from "../../assets/icons/expo.webp";
import wordpress from "../../assets/icons/wordpress.webp";
import figma from "../../assets/icons/figma.webp";
import gitlab from "../../assets/icons/gitlab.webp";
import ts from "../../assets/icons/ts.webp";
import mongo from "../../assets/icons/mongo.webp";
import chakra from "../../assets/icons/chakra.webp";
import aws from "../../assets/icons/aws.webp";
import tailwind from "../../assets/icons/tailwind.webp";
import prisma from "../../assets/icons/prisma.webp";
import sequelize from "../../assets/icons/sequelize.webp";
import stripe from "../../assets/icons/stripe.webp";
import mp from "../../assets/icons/mp.webp";
import rc from "../../assets/icons/rc.webp";
import google from "../../assets/icons/google.webp";

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
