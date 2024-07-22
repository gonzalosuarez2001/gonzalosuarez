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
