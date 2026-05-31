const stack = [
    {
        name: "Next.js",
        desc: "My go-to framework for building fast, scalable and production-ready web applications.",
        level: "Expert",
    },
    {
        name: "React",
        desc: "Component-driven interfaces with clean architecture and modern frontend patterns.",
        level: "Expert",
    },
    {
        name: "TypeScript",
        desc: "Strong typing, maintainability and better developer experience across projects.",
        level: "Advanced",
    },
    {
        name: "Tailwind CSS",
        desc: "Rapid UI development with consistent design systems and responsive layouts.",
        level: "Advanced",
    },
    {
        name: "Node.js",
        desc: "Backend APIs, authentication systems and full-stack application development.",
        level: "Advanced",
    },
    {
        name: "MongoDB",
        desc: "Flexible NoSQL databases for modern web applications and scalable backends.",
        level: "Intermediate",
    },
    {
        name: "Framer Motion",
        desc: "Smooth animations, micro-interactions and immersive user experiences.",
        level: "Advanced",
    },
    {
        name: "Git & GitHub",
        desc: "Version control, collaboration workflows and project management.",
        level: "Advanced",
    },
];

const Stack = () => {
    return (
        <section
            id="stack"
            className="relative overflow-hidden bg-[#1C1410] w-full py-20 sm:py-28 lg:py-36"
        >
            <div className="pointer-events-none absolute right-0 top-10 select-none text-[16vw] font-black leading-none tracking-tighter text-white/3">
                STACK
            </div>

            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

                <div className="mb-12 sm:mb-20">
                    <h2 className="leading-[0.88] tracking-[-0.03em]">
                        <span className="block text-[clamp(2.5rem,7vw,8rem)] font-black text-[#F0EBE1]">
                            Built With
                        </span>
                        <span className="font-serif text-[clamp(2.5rem,7vw,8rem)] italic text-[#E8521A]">
                            purpose
                        </span>
                    </h2>
                </div>

                {/* Hero Block */}
                <div className="mb-10 overflow-hidden rounded-4xl border border-white/10 bg-white/3 backdrop-blur-xl">
                    <div className="grid lg:grid-cols-2">

                        <div className="p-8 sm:p-12">
                            <div className="mb-4 text-xs uppercase tracking-[0.25em] text-[#E8521A]">
                                Primary Stack
                            </div>

                            <h3 className="text-[clamp(2.5rem,6vw,6rem)] font-black leading-[0.9] tracking-tight text-[#F0EBE1]">
                                NEXT.JS
                                <br />
                                REACT
                            </h3>

                            <p className="mt-6 max-w-lg leading-8 text-white/50">
                                Most of my projects are built around React and Next.js,
                                focusing on performance, accessibility, responsive design and
                                clean architecture.
                            </p>
                        </div>

                        <div className="flex items-center justify-center border-t border-white/10 lg:border-l lg:border-t-0 py-10 lg:py-0">
                            <div className="relative flex h-56 w-56 sm:h-72 sm:w-72 items-center justify-center">
                                <div className="absolute h-full w-full rounded-full border border-[#E8521A]/20" />
                                <div className="absolute h-[75%] w-[75%] rounded-full border border-[#E8521A]/30" />
                                <div className="absolute h-[50%] w-[50%] rounded-full border border-[#E8521A]/40" />
                                <div className="text-[5rem] font-black text-[#F0EBE1]/10">⚛</div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Stack Grid */}
                <div className="grid gap-px bg-white/10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {stack.map((item) => (
                        <div
                            key={item.name}
                            className="group bg-[#1C1410] p-7 sm:p-8 transition-all duration-300 hover:bg-[#E8521A]"
                        >
                            <div className="mb-4 text-xs uppercase tracking-[0.2em] text-[#E8521A] group-hover:text-white/70">
                                {item.level}
                            </div>

                            <h3 className="mb-3 text-2xl sm:text-3xl font-black tracking-tight text-[#F0EBE1]">
                                {item.name}
                            </h3>

                            <p className="leading-7 text-white/50 group-hover:text-white/70">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Numbers */}
                <div className="mt-16 sm:mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-10 border-t border-white/10 pt-12">

                    <div>
                        <div className="text-4xl sm:text-5xl font-black text-[#F0EBE1]">15+</div>
                        <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
                            Technologies
                        </div>
                    </div>

                    <div>
                        <div className="text-4xl sm:text-5xl font-black text-[#F0EBE1]">20+</div>
                        <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
                            Projects Built
                        </div>
                    </div>

                    <div>
                        <div className="text-4xl sm:text-5xl font-black text-[#F0EBE1]">100%</div>
                        <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
                            Self Taught
                        </div>
                    </div>

                    <div>
                        <div className="text-4xl sm:text-5xl font-black text-[#F0EBE1]">∞</div>
                        <div className="mt-2 text-xs uppercase tracking-[0.2em] text-white/40">
                            Curiosity Level
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Stack;