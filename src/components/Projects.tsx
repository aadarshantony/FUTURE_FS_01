const featuredProject = {
    title: "EduCom",
    description:
        "Enterprise-grade e-commerce platform with Stripe payments, JWT authentication, Cloudinary media management, automated email workflows, and a powerful admin dashboard.",
    stack: ["React", "Node.js", "MongoDB", "Stripe"],
    live: "https://educomecommerce.vercel.app",
};

const projects = [
    {
        id: "02",
        title: "IEDC MGMCET Website",
        description:
            "Digital platform powering the innovation and startup ecosystem at MGM College.",
        year: "2026",
        stack: ["Next.js", "TypeScript", "Cloudinary"],
        link: "https://iedc.mgmcet.ac.in",
    },
    {
        id: "03",
        title: "JeevanID",
        description:
            "Emergency response and victim identification system designed to reduce accident response times and save lives.",
        year: "2026",
        stack: ["React", "Node.js", "MongoDB"],
        link: "https://jeevanid.vercel.app",
    },
    {
        id: "04",
        title: "BookNest",
        description:
            "Modern library management system with QR-based circulation, student activity tracking, analytics dashboards, and automated communication workflows.",
        year: "2025",
        stack: ["React", "Express", "MongoDB"],
        link: "https://booknest-u4rq.onrender.com/",
    }
];

const Projects = () => {
    return (
        <section
            id="projects"
            className="relative overflow-hidden bg-[#F0EBE1] py-20 sm:py-28 lg:py-36 w-full"
        >
            <div className="pointer-events-none absolute right-0 top-0 select-none text-[clamp(4rem,16vw,20rem)] font-black leading-none text-[#1C1410]/5">
                WORK
            </div>

            <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
                {/* Header */}
                <div className="mb-10 sm:mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                    <div>
                        <h2 className="leading-[0.88] tracking-[-0.03em]">
                            <span className="block text-[clamp(2.5rem,7vw,8rem)] font-black text-[#1C1410]">
                                Projects
                            </span>
                            <span className="font-serif text-[clamp(2.5rem,7vw,8rem)] italic text-[#E8521A]">
                                that matter
                            </span>
                        </h2>
                    </div>

                    <div className="sm:text-right italic text-[#7A6E65]">
                        2024 — 2026
                        <div className="mt-1 text-xs text-[#7A6E65]/60">
                            Best Projects
                        </div>
                    </div>
                </div>

                {/* Featured Project */}
                <div className="group relative mb-12 sm:mb-20 overflow-hidden rounded-4xl border border-black/5 bg-white/50 backdrop-blur-xl">
                    <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[#E8521A]/10 blur-3xl" />

                    <div className="grid lg:grid-cols-2">
                        <div className="relative flex min-h-64 sm:min-h-80 lg:min-h-125 items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-r border-black/5 py-10">
                            <div className="absolute h-72 w-72 rounded-full bg-[#E8521A]/10 blur-3xl" />

                            <div className="relative w-[75%] sm:w-[60%] lg:w-[75%] overflow-hidden rounded-2xl bg-[#111] shadow-2xl">
                                <div className="flex h-8 items-center gap-2 bg-[#1a1a1a] px-4">
                                    <div className="h-3 w-3 rounded-full bg-red-400" />
                                    <div className="h-3 w-3 rounded-full bg-yellow-400" />
                                    <div className="h-3 w-3 rounded-full bg-green-400" />
                                </div>

                                <div className="space-y-4 p-6">
                                    <div className="h-3 w-1/2 rounded bg-[#E8521A]/30" />
                                    <div className="h-3 w-1/3 rounded bg-[#E8521A]/20" />
                                    <div className="h-32 sm:h-40 rounded-xl bg-[#E8521A]/10" />
                                    <div className="h-3 w-2/3 rounded bg-[#E8521A]/20" />
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-12">
                            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-[#7A6E65]">
                                Featured Project
                            </div>

                            <h3 className="mb-5 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#1C1410]">
                                {featuredProject.title}
                            </h3>

                            <p className="mb-6 max-w-lg leading-8 text-[#7A6E65]">
                                {featuredProject.description}
                            </p>

                            <div className="mb-8 flex flex-wrap gap-2">
                                {featuredProject.stack.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-full bg-black/5 px-4 py-2 text-xs uppercase tracking-wider text-[#1C1410]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <a
                                href={featuredProject.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-fit rounded-full bg-[#1C1410] px-6 py-3 text-xs uppercase tracking-widest text-white transition hover:bg-[#E8521A]"
                            >
                                Visit Site ↗
                            </a>
                        </div>
                    </div>
                </div>

                {/* Compact Projects */}
                <div className="mt-8 border-t border-black/10">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden border-b border-black/10"
                        >
                            <div className="absolute inset-0 origin-left scale-x-0 bg-[#E8521A] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                            <div className="relative z-10 flex flex-col gap-6 py-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between">
                                <div className="flex items-start gap-4 sm:gap-6">
                                    <div className="w-8 sm:w-12 shrink-0">
                                        <div className="text-[11px] tracking-[0.25em] text-black/30 transition-colors duration-300 group-hover:text-white/40">
                                            {project.id}
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-black tracking-[-0.03em] text-[#1C1410] transition-colors duration-300 group-hover:text-white">
                                            {project.title}
                                        </h3>

                                        <p className="mt-3 max-w-xl text-sm leading-7 text-[#7A6E65] transition-colors duration-300 group-hover:text-white/75">
                                            {project.description}
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {project.stack.map((item) => (
                                                <span
                                                    key={item}
                                                    className="rounded-full border border-black/10 px-3 py-1 text-[10px] uppercase tracking-[0.15em] text-[#7A6E65] transition-all duration-300 group-hover:border-white/20 group-hover:text-white/70"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group/arrow flex items-center gap-5 pl-12 sm:pl-16 lg:pl-0"
                                >
                                    <div className="hidden text-xs tracking-[0.2em] text-[#7A6E65] transition-colors duration-300 group-hover:text-white/50 lg:block">
                                        {project.year}
                                    </div>

                                    <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-black/10 bg-black/5 text-lg text-[#1C1410] transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white group-hover/arrow:-translate-y-1 group-hover/arrow:translate-x-1">
                                        ↗
                                    </div>
                                </a>
                            </div>

                            <div className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 text-[6rem] font-black leading-none text-white/5 opacity-0 transition-all duration-500 group-hover:opacity-100">
                                0{index + 2}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;