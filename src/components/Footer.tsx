const Footer = () => {
  return (
    <footer className="relative overflow-hidden w-full bg-[#111111] text-white">
      {/* Background Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <span className="select-none text-[18vw] font-black tracking-[-0.08em] text-white/[0.03]">
          ADARSH
        </span>
      </div>

      {/* Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-8 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="mb-6 text-sm uppercase tracking-[0.35em] text-white/40">
              Portfolio 2026
            </div>

            <h3 className="text-5xl font-black leading-none tracking-tight">
              Building
              <br />
              digital
              <br />
              experiences.
            </h3>

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/50">
              Full Stack Developer focused on creating modern web experiences
              with clean architecture, performance and thoughtful design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
              Navigation
            </div>

            <div className="flex flex-col gap-4">
              {[
                "About",
                "Projects",
                "Stack",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="group flex items-center justify-between border-b border-white/10 pb-3 text-white/70 transition hover:text-white"
                >
                  <span>{item}</span>

                  <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <div className="mb-5 text-xs uppercase tracking-[0.25em] text-white/30">
              Connect
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:adarsh@example.com"
                className="text-white/70 transition hover:text-[#E8521A]"
              >
                Email
              </a>

              <a
                href="https://github.com"
                target="_blank"
                className="text-white/70 transition hover:text-[#E8521A]"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                className="text-white/70 transition hover:text-[#E8521A]"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-10 flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />

              <span className="text-xs uppercase tracking-[0.2em] text-white/40">
                Available for work
              </span>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/40 lg:flex-row lg:items-center lg:justify-between">
          <span>
            © 2026 Adarsh
          </span>

          <span>
            Designed & Developed by Adarsh
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;