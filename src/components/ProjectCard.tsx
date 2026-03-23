import { Link } from "react-router-dom";

interface ProjectCardProps {
  projectId: string;
  title: string;
  description: string;
  videoSrc: string;
  skills: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectId,
  title,
  description,
  videoSrc,
  skills,
}) => {
  return (
    <Link to={`/projects/${projectId}`} className="flex flex-col items-center gap-4 group">
      <h3 className="font-semibold text-lg text-cyan-300 tracking-wide text-center">
        {title}
      </h3>
      <div
        className=" relative p-3 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur- shadow-[0_0_25px_rgba(0,200,255,0.15),
             inset_0_0_15px_rgba(0,200,255,0.05 group-hover:-translate-y-2 group-hover:shadow-[0_0_60px_rgba(0,255,255,0.35),
             inset_0_0_25px_rgba(0,255,255,0.15 transition-all duration-500 cursor-pointer"
      >
        <div className=" absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 pointer-events-none" />
        <div className=" relative w-[180px] h-[320px] rounded-xl overflow-hidden border border-cyan-400/20">
          <video
            src={videoSrc}
            className="w-full h-full object-cover group-hover:brightness-50 transition-all duration-300"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
            <p className="text-gray-200 text-sm leading-relaxed mb-4">
              {description}
            </p>
            <span className="text-cyan-300 text-sm font-medium flex items-center gap-1">
              View Case Study →
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className=" px-3 py-1 rounded-full text-sm bg-cyan-400/5 text-cyan-300 border border-cyan hover:bg-cyan-400/15 hover:shadow-[0_0_10px_rgba(0,255,255,0.5)] transition-all duration-300"
          >
            {skill}
          </span>
        ))}
      </div>
    </Link>
  );
};

export default ProjectCard;
