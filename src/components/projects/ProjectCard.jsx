import Icons from "../../assets/icons";

function ProjectCard({ slot, project }) {
  const { scale, left, opacity, active } = slot;
  const tags = project.tags.map((tag, index) => (
    <p className="border px-2 text-[0.8rem] text-white" key={index}>
      {tag}
    </p>
  ));

  return (
    <div
      className="card absolute flex h-[700px] w-[60dvw] max-w-[385px] flex-col justify-between bg-black p-3"
      style={{
        transform: `scale(${scale}) translateY(-50%) ${active ? "rotateY(0)" : "rotateY(5deg)"}`,
        top: "50%",
        transformOrigin: "top left",
        left: `${left}px`,
        opacity: opacity,
      }}
    >
      <img className="mb-2" src={project.image} alt={project.title} />
      <h3 className="mb-5 text-xl font-bold text-white">{project.title}</h3>
      <p className="line-clamp-6 text-justify text-white">{project.desc}</p>
      <div className="mt-2 mb-10 flex flex-wrap gap-2">{tags}</div>
      <div className="flex gap-2">
        <button className="button-behavior flex items-center gap-2 bg-white px-2">
          <Icons.github w="15px" />
          <a href={project.github} target="_blank">
            GitHub
          </a>
        </button>
        {project.website ? (
          <button className="button-behavior flex items-center gap-2 bg-white px-2">
            <Icons.globe w="15px" />
            <a href={project.website} target="_blank">
              Website
            </a>
          </button>
        ) : undefined}
      </div>
    </div>
  );
}

export default ProjectCard;
