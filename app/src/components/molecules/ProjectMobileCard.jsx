import { useRef, useEffect } from "react";
import cel from "../../assets/videos/cel.mp4";
import ProjectDescription from "./ProjectDescription";

export default function ProjectMobileCard({ title, text, web, technologies }) {
  const videoRef = useRef(null);

  function handleVideoEnded() {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
  }

  useEffect(() => {
    videoRef.current.addEventListener("ended", handleVideoEnded);
    return () => {
      videoRef.current.removeEventListener("ended", handleVideoEnded);
    };
  }, []);

  return (
    <div className="col-12 col-sm-10 col-md-12 col-lg-5 mb-5 p-0">
      <div className="col-12 rounded-2 d-flex mb-4 justify-content-between">
        <div className="col-5">
          <video
            className="rounded-2 projects_card_video"
            ref={videoRef}
            autoPlay
            muted
          >
            <source src={cel} type="video/mp4" />
          </video>
        </div>
        <div className="col-5">
          <video
            className="rounded-2 projects_card_video"
            ref={videoRef}
            autoPlay
            muted
          >
            <source src={cel} type="video/mp4" />
          </video>
        </div>
      </div>
      <ProjectDescription title={title} text={text} technologies={technologies}/>
    </div>
  );
}
