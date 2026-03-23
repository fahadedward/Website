import { useParams, Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const ProjectDetail = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectsData.find((p) => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-cyan-300 mb-4">
            Project Not Found
          </h1>
          <Link
            to="/"
            className="text-cyan-400 hover:text-cyan-300 underline"
          >
            Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          ← Back to Portfolio
        </Link>

        {/* Video */}
        <div className="mb-12 rounded-2xl overflow-hidden border border-cyan-400/20 shadow-[0_0_40px_rgba(0,200,255,0.2)]">
          <video
            src={project.videoSrc}
            className="w-full max-w-md mx-auto"
            autoPlay
            muted
            loop
            playsInline
          />
        </div>

        {/* Project Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-teal-200 to-yellow-300 bg-clip-text text-transparent">
            {project.title}
          </h1>

          {project.playStoreUrl && (
            <a
              href={project.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 hover:shadow-[0_0_25px_rgba(0,255,255,0.3)] transition-all duration-300 mb-6"
            >
              <span>View on Google Play Store</span>
              <span>→</span>
            </a>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <h3 className="text-cyan-300 font-semibold mb-2">Client</h3>
              <p className="text-gray-300">{project.client}</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold mb-2">Role</h3>
              <p className="text-gray-300">{project.role}</p>
            </div>
            <div>
              <h3 className="text-cyan-300 font-semibold mb-2">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs bg-cyan-400/10 text-cyan-300 border border-cyan-400/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Objective */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">Objective</h2>
          <p className="text-gray-300 leading-relaxed">{project.objective}</p>
        </section>

        {/* Systems Built */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">
            Systems I Built
          </h2>
          <ul className="space-y-3">
            {project.systems.map((system, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-300 leading-relaxed"
              >
                <span className="text-cyan-400 mt-1">•</span>
                <span>{system}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technical Challenges */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-300 mb-4">
            Technical Challenges
          </h2>
          <ul className="space-y-3">
            {project.challenges.map((challenge, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-gray-300 leading-relaxed"
              >
                <span className="text-cyan-400 mt-1">•</span>
                <span>{challenge}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProjectDetail;
