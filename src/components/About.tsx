const About = () => {
  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
    "Tailwind",
    "Three.js",
  ];

  return (
    <section id="about" className="relative overflow-hidden w-full bg-[#1C1410] py-20 sm:py-28 lg:py-36">
      <div className="pointer-events-none absolute right-8 top-16 select-none text-[clamp(4rem,16vw,20rem)] font-black leading-none text-white/3">
        ABOUT
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 px-5 sm:px-8 lg:px-12">

        {/* LEFT */}
        <div>
          <h2 className="leading-[0.88] tracking-[-0.02em] text-[#F0EBE1]">
            <span className="block text-[clamp(2.5rem,7vw,8rem)] font-black">
              Who
            </span>
            <span className="font-serif text-[clamp(2.5rem,7vw,8rem)] italic text-[#D4987A]">
              I am
            </span>
          </h2>

          <div className="mt-10">

            <div className="flex aspect-[0.78] items-center justify-center rounded-lg border border-white/10 bg-white/4">
              <div className="text-center">
                <img src="/adarsh.png" alt="Your Photo" />
              </div>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6 border-t border-white/10 pt-6">

              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#F0EBE1]">15+</div>
                <div className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-white/30">
                  Projects
                </div>
              </div>

              <div>
                <div className="text-3xl sm:text-4xl font-black text-[#F0EBE1]">5+</div>
                <div className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-white/30">
                  Years
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-4xl font-black text-[#F0EBE1]">CSE</div>
                <div className="mt-1 text-[0.68rem] uppercase tracking-[0.12em] text-white/30">
                  Student / FullStack Developer
                </div>
              </div>

            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/15 px-4 py-2 text-[0.7rem] uppercase tracking-[0.08em] text-white/50 transition-all duration-300 hover:border-[#E8521A] hover:text-[#E8521A]"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </div>

        {/* RIGHT */}
        <div>

          <p className="mt-0 lg:mt-20 font-serif text-[1.1rem] sm:text-[1.25rem] italic leading-relaxed text-white/75">
            I'm a developer who enjoys building interfaces that feel
            intuitive, polished, and memorable — blending engineering
            with thoughtful design.
          </p>

          <p className="mt-8 text-[1rem] sm:text-[1.05rem] font-light leading-[1.9] text-white/55">
            I'm currently pursuing a B.Tech in Computer Science and Engineering.
            My focus is on modern web development, user experience,
            and creating products that people genuinely enjoy using.
          </p>

          <p className="mt-8 text-[1rem] sm:text-[1.05rem] font-light leading-[1.9] text-white/55">
            I enjoy working with React, Next.js, TypeScript, and backend
            technologies while continuously exploring new tools,
            design systems, and creative development techniques.
          </p>

          <div className="mt-10 sm:mt-14">

            {[
              {
                period: "2026–Now",
                title: "CEO — IEDC MGMCET",
                org: "Innovation & Entrepreneurship Development Centre",
                desc: "Leading innovation initiatives, startup activities, technical events, and student entrepreneurship programs within the college ecosystem.",
              },
              {
                period: "2024–Now",
                title: "Website Developer",
                org: "MGM College of Engineering & Technology, Pampakuda",
                desc: "Developing and maintaining college web platforms, improving user experience, responsiveness, and modernizing digital presence.",
              },
              {
                period: "2024–Now",
                title: "B.Tech Computer Science",
                org: "MGM College of Engineering & Technology, Pampakuda",
                desc: "Focused on software engineering, full-stack development, modern web technologies, and product-driven learning.",
              },
            ].map((item) => (
              <div key={item.title} className="border-t border-white/10 py-6">
                <div className="text-[0.68rem] tracking-widest text-white/30 mb-2">
                  {item.period}
                </div>
                <div className="font-medium text-[#F0EBE1]">{item.title}</div>
                <div className="mt-1 text-sm text-[#D4987A]">{item.org}</div>
                <div className="mt-2 text-sm leading-7 text-white/40">{item.desc}</div>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;