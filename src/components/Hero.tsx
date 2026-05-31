const Hero = () => {
    return (
        <section id="hero" className="relative mb-5 overflow-hidden pt-32 w-full">
            <div className="pointer-events-none absolute right-0 top-12 select-none text-[clamp(6rem,16vw,20rem)] font-black leading-none text-[#1C1410]/5">
                PORTFOLIO
            </div>

            <div className="mx-auto w-full max-w-7xl px-12">

                <div className="mb-8 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-[#7A6E65]">
                    <span className="h-px w-10 bg-[#7A6E65]" />
                    Full Stack Developer • UI/UX Designer
                </div>

                <h1 className="relative z-10 text-[clamp(5rem,12vw,10rem)] font-black leading-[0.85] tracking-tighter text-[#1C1410]">
                    ADARSH
                    <br />
                    <span className="text-transparent [-webkit-text-stroke:2px_#1C1410]">
                        ANTO
                    </span>
                    <span className="font-serif font-normal italic text-[#E8521A]">
                        ny
                    </span>
                </h1>

                <div className="mt-12 grid grid-cols-12 gap-10">

                    {/* LEFT */}
                    <div className="col-span-7">
                        <p className="max-w-xl text-lg leading-9 text-[#7A6E65]">
                            I build modern web experiences with
                            React, Next.js, TypeScript and creative
                            frontend interactions that help products
                            stand out and feel memorable.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-3">
                            {["Next.js", "React", "TypeScript", "Node.js", "Tailwind", "MongoDB "].map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-[#1C1410]/15 px-5 py-2 text-sm"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="mt-7 flex gap-4">
                            <a
                                href="#projects"
                                className="rounded-full bg-[#E8521A] px-8 py-4 text-sm uppercase tracking-widest text-[#F0EBE1] shadow-lg transition-all hover:-translate-y-1"
                            >
                                View Projects
                            </a>

                            <a
                                href="#contact"
                                className="rounded-full border border-[#1C1410]/20 px-8 py-4 text-sm uppercase tracking-widest transition-all hover:bg-[#1C1410] hover:text-[#F0EBE1]"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="col-span-5">

                        <div className="rounded-4xl border border-[#1C1410]/10 bg-white/40 p-8 backdrop-blur-xl">

                            <div className="mb-6 text-xs uppercase tracking-[0.25em] text-[#7A6E65]">
                                Currently
                            </div>

                            <h3 className="text-3xl font-bold text-[#1C1410]">
                                B.Tech CSE Student
                            </h3>

                            <p className="mt-4 text-[#7A6E65] leading-8">
                                Passionate about building scalable
                                web applications, modern interfaces
                                and creative digital experiences.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <span className="rounded-full bg-[#1C1410] px-4 py-2 text-xs uppercase tracking-widest text-white">
                                    Available
                                </span>

                                <span className="rounded-full bg-[#E8521A] px-4 py-2 text-xs uppercase tracking-widest text-white">
                                    2026
                                </span>

                                <span className="rounded-full border border-[#1C1410] px-4 py-2 text-xs uppercase tracking-widest">
                                    Kerala, India
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">

                            <div className="rounded-3xl border border-[#1C1410]/10 p-6">
                                <h4 className="text-4xl font-black text-[#1C1410]">
                                    15+
                                </h4>
                                <p className="mt-2 text-sm text-[#7A6E65]">
                                    Projects Built
                                </p>
                            </div>

                            <div className="rounded-3xl border border-[#1C1410]/10 p-6">
                                <h4 className="text-4xl font-black text-[#1C1410]">
                                    5+
                                </h4>
                                <p className="mt-2 text-sm text-[#7A6E65]">
                                    Years Coding
                                </p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Hero