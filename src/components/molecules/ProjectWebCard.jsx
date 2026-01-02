import { useRef, useEffect } from "react";
import ProjectDescription from "./ProjectDescription";

export default function ProjectWebCard({
  isSafari,
  title,
  text,
  video,
  image,
  technologies,
  onClick,
  url,
}) {
  return (
    <div className=" col-12 col-lg-5 mb-5 p-0">
      <div className="mb-4 rounded-2">
        {isSafari ? (
          <img
            src={`/gonzalosuarez/assets/images/${image}`}
            className="w-100 rounded-2"
          />
        ) : (
          <video
            className="projects_web_card_video rounded-2"
            onClick={onClick}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={video} type="video/mp4" />
          </video>
        )}
      </div>
      <ProjectDescription
        title={title}
        text={text}
        technologies={technologies}
        url={url}
        onClick={onClick}
      />
    </div>
  );
}
