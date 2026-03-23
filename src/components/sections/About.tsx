const About = () => {
  const skillGroups = [
    {
      title: "Core Strengths",
      skills: [
        "Gameplay Systems Architecture",
        "Performance Optimization",
        "Mobile-First Game Design",
        "Live Content Integration (Contentful, Strapi)",
        "Cross-Brand Fan Engagement Systems",
      ],
    },
    {
      title: "Tools",
      skills: [
        "Unity",
        "GameMaker",
        "Phaser",
        "C#",
        "JavaScript / TypeScript",
        "React",
        "Photoshop",
        "After Effects",
        "Figma",
      ],
    },
  ];

  const containerOuterDesign =
    "relative p-8 rounded-2xl border border-cyan-400/20 bg-white/5 backdrop-blur- shadow-[0_0_25px_rgba(0,200,255,0.15), inset_0_0_15px_rgba(0,200,255,0.05 hover:-translate-y-2 hover:shadow-[0_0_60px_rgba(0,255,255,0.35), inset_0_0_25px_rgba(0,255,255,0.15 transition-all duration-500";
  const containerInnerDesign =
    "absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 pointer-events-none";
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="max-w-3xl fx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-300 to-cyan-400  bg-clip-text text-transparent text-center">
          About Me
        </h2>

        <div className="rounded-xl p-8 hover:-translate-y-1 transition-all">
          <div className={containerOuterDesign}>
            <div className={containerInnerDesign} />

            <p className="relative text-gray-300 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              I'm a game developer based in Toronto who enjoys building engaging
              gameplay systems and polished interactive experiences. I care a lot
              about how games feel. From responsive controls to satisfying feedback
              that keeps players coming back. I like working on designs, core mechanics,
              tweaking and iterating on systems, and finding the right balance between
              challenge and fun. Overall, I enjoy turning ideas into experiences that
              feel good to play and are worth coming back to.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillGroups.map((group, index) => (
            <div key={index} className={containerOuterDesign}>
              <div className={containerInnerDesign} />

              <h3 className="text-2xl font-semibold mb-6 text-cyan-300">
                {group.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-4 py-1.5 rounded-full text-sm bg-cyan-400/5 text-cyan-300 border border-cyan-400/20 hover:bg-cyan-400/15
                                hover:shadow-[0_0_12px_rgba(0,255,255,0.5)] transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <div className={containerOuterDesign}>
            <div className={containerInnerDesign} />
            <h3 className="text-2xl font-semibold text-cyan-300 mb-6 tracking-wide">
              Work Experience
            </h3>

            <div className="space-y-8 text-gray-300 relative z-10">
              {/* MLSE */}
              <div className="border-l-2 border-cyan-400/30 pl-6">
                <h4 className="font-semibold text-white text-lg">
                  MLSE - Game Developer
                </h4>
                <ul className="text-sm text-gray-400 space-y-2 mt-3">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Developed 10+ live games with CMS integration for real-time content updates during Leafs and Raptors events.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Built Arena Showdown interactive games enabling Raptors & Leafs fan competitions for in-venue and digital cross-brand engagement.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Collaborated with partners (OLG, Canadian Tire, LG) to deliver branded interactive experiences under tight production schedules.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Optimized gameplay systems and UI for mobile-first performance across diverse devices.</span>
                  </li>
                </ul>
              </div>

              {/* Adknown */}
              <div className="border-l-2 border-cyan-400/20 pl-6">
                <h4 className="font-semibold text-white text-lg">
                  Adknown - Unity Game Developer
                </h4>
                <ul className="text-sm text-gray-400 space-y-2 mt-3">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Developed and published 20+ mobile games for Google Play and Apple App Store using Unity and C#.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Completed full game development cycles within rapid 8-day timelines, from concept to release.</span>
                  </li>
                </ul>
              </div>

              {/* DEFEND */}
              <div className="border-l-2 border-cyan-400/20 pl-6">
                <h4 className="font-semibold text-white text-lg">
                  DEFEND - Software Developer (Unity)
                </h4>
                <ul className="text-sm text-gray-400 space-y-2 mt-3">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Designed and implemented UI systems for the DEFEND dating application using Unity.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-400 mt-1">•</span>
                    <span>Collaborated with cross-functional teams to transform design specifications into production code.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
