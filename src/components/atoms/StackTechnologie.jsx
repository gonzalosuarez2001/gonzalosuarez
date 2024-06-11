import { useTheme } from "../../contexts/ThemeContext";
import react from "../../assets/images/react.png";
import html from "../../assets/images/html.png";
import js from "../../assets/images/js.png";
import css from "../../assets/images/css.png";
import docker from "../../assets/images/docker.png";
import sql from "../../assets/images/sql.png";
import node from "../../assets/images/node.png";
import bootstrap from "../../assets/images/bootstrap.png";
import git from "../../assets/images/git.png";
import ubuntu from "../../assets/images/ubuntu.png";
import bash from "../../assets/images/bash.png";
import next from "../../assets/images/next.png";
import express from "../../assets/images/express.png";
import expo from "../../assets/images/expo.png";
import wordpress from "../../assets/images/wordpress.png";
import figma from "../../assets/images/figma.png";
import gitlab from "../../assets/images/gitlab.png";
import ts from "../../assets/images/ts.png";
import mongo from "../../assets/images/mongo.png";

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
  next: { name: "Next", img: next },
  express: { name: "Express", img: express },
  expo: { name: "Expo", img: expo },
  wordpress: { name: "Wordpress", img: wordpress },
  figma: { name: "Figma", img: figma },
  gitlab: { name: "Gitlab", img: gitlab },
  ts: { name: "TypeScript", img: ts },
  mongo: { name: "MongoDB", img: mongo },
};

export default function StackTechnologie({ tag }) {
  const { theme } = useTheme();

  return (
    <div
      className="rounded-2 d-flex flex-column col-5 col-sm-3 align-items-center me-3 mb-4 p-2"
    >
      <img className="mb-3" width="50" height="50" src={tagList[tag].img} />
      <span className={`text_${theme} stack_tag_name text-center`}>
        {tagList[tag].name}
      </span>
    </div>
  );
}
