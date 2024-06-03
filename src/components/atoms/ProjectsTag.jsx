import { useTheme } from "../../contexts/ThemeContext";
import reactIcon from "../../assets/icons/react.png";
import nodeIcon from "../../assets/icons/node.png";
import sqlIcon from "../../assets/icons/sql.png";
import dockerIcon from "../../assets/icons/docker.png";
import htmlIcon from "../../assets/icons/html.png";
import cssIcon from "../../assets/icons/css.png";
import jsIcon from "../../assets/icons/js.png";
import bootstrapIcon from "../../assets/icons/bootstrap.png";
import gitIcon from "../../assets/icons/git.png";

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

export default function ProyectsTag({ tag }) {
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
