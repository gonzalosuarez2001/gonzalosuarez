import ProjectDescription from "./ProjectDescription";

export default function ProjectMobileCard({
  isSafari,
  title,
  text,
  technologies,
  video1,
  video2,
  image1,
  image2,
  onClick,
  url,
}) {
  return (
    <div className="col-12 col-lg-5 mb-5 p-0">
      <div
        className="projects_mobile_video_group col-12 rounded-2 d-flex mb-4 justify-content-between"
        onClick={onClick}
      >
        <div className="col-5">
          {isSafari ? (
            <img
              src={`/gonzalosuarez/assets/images/${image1}`}
              className="w-100 rounded-2"
            />
          ) : (
            <video
              className="rounded-2 projects_mobile_card_video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video1} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="col-5">
          {isSafari ? (
            <img
              src={`/gonzalosuarez/assets/images/${image2}`}
              className="w-100 rounded-2"
            />
          ) : (
            <video
              className="rounded-2 projects_mobile_card_video"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={video2} type="video/mp4" />
            </video>
          )}
        </div>
      </div>

      <ProjectDescription
        title={title}
        text={text}
        url={url}
        technologies={technologies}
        onClick={onClick}
      />
    </div>
  );
}
