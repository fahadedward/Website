import fahadImage from "../../assets/fahad.png";

const Home = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        flex items-center justify-center
        px-6
      "
    >
      <div className="flex flex-col items-center gap-10">
        <div
          className=" relative p-3 rounded-full border border-cyan- shadow-[0_0_40px_rgba(0,200,255,0.25), inset_0_0_25px_rgba(0,200,255, hover:shadow-[0_0_70px_rgba(0,255,255,0.5),               
          inset_0_0_35px_rgba(0,255,255, transition-all duration-700"
        >
          <div
            className="
            absolute inset-0 rounded-full
            bg-gradient-to-br
            from-cyan-400/20 via-transparent to-blue-500/20
            pointer-events-none
          "
          />

          <img
            src={fahadImage}
            className=" relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border border-cyan-400/30"
            alt="Fahad Edward"
          />
        </div>
        <div className="text-center max-w-3xl">
          <h1 className=" text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-cyan-300 via-teal-200 to-yellow-300 bg-clip-text text-transparent">
            Hello, I'm Fahad Edward
          </h1>

          <p className=" text-gray-300 text-lg leading-relaxed mt-6">
            Gameplay Engineer specializing in responsive gameplay systems, mobile-first
            interactive experiences, and performance optimization. I build branded fan
            engagement games and interactive campaigns for major sports organizations.
          </p>

          <div className="flex justify-center gap-6 mt-10">
            <a
              href="#projects"
              className=" relative px-8 py-3 rounded-xl border border-cyan-400/30 text- shadow-[0_0_25px_rgba(0,200,255,0.15),         
              inset_0_0_12px_rgba(0,200,25 hover:shadow-[0_0_50px_rgba(0,255,255,0.5),               
              inset_0_0_20px_rgba(0,255,2 hover:-translate-y-1 transition-all duration-500
              "
            >
              <span className="relative z-10">View Projects</span>
              <span
                className=" absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/20 via-transparent to-blue-500/20 pointer-events-none
              "
              />
            </a>
            <a
              href="#contact"
              className=" relative px-8 py-3 rounded-xl border border-cyan-400/20 text- hover:border-cyan-400/40 hover:shadow-[0_0_35px_rgba(0,255,255,0.35)] hover:-translate-y-1 transition-all duration-500"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
