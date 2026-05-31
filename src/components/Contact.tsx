const contactLinks = [
    {
        label: "Email",
        value: "adarshantony223@gmail.com",
        href: "mailto:adarshantony223@gmail.com",
    },
    {
        label: "GitHub",
        value: "github.com/aadarshantony",
        href: "https://github.com/aadarshantony",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/adarshantony",
        href: "https://linkedin.com/in/adarshantony",
    },
    {
        label: "Instagram",
        value: "@aadarshantony",
        href: "https://instagram.com/aadarshantony",
    },
];

const Contact = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget;

        const name = (
            form.elements.namedItem("name") as HTMLInputElement
        ).value;

        const email = (
            form.elements.namedItem("email") as HTMLInputElement
        ).value;

        const project = (
            form.elements.namedItem("project") as HTMLInputElement
        ).value;

        const message = (
            form.elements.namedItem("message") as HTMLTextAreaElement
        ).value;

        const subject = encodeURIComponent(
            `Portfolio Inquiry - ${project}`
        );

        const body = encodeURIComponent(
`Name: ${name}
Email: ${email}
Project: ${project}

${message}`
        );

        window.location.href =
            `mailto:adarshantony223@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-[#F0EBE1] py-36 w-full"
        >
            <div className="pointer-events-none absolute right-0 top-0 select-none text-[clamp(6rem,16vw,20rem)] font-black leading-none text-[#1C1410]/5">
                HELLO
            </div>

            <div className="mx-auto max-w-7xl px-12">
                <div className="grid gap-24 lg:grid-cols-[1.1fr_0.9fr]">

                    {/* LEFT */}

                    <div>
                        <h2 className="leading-[0.88] tracking-[-0.03em]">
                            <span className="block text-[clamp(3rem,7vw,8rem)] font-black text-[#1C1410]">
                                Let's
                            </span>

                            <span className="font-serif text-[clamp(3rem,7vw,8rem)] italic text-[#E8521A]">
                                build
                            </span>

                            <span className="block text-[clamp(3rem,7vw,8rem)] font-black text-[#1C1410]">
                                together
                            </span>
                        </h2>

                        <p className="mt-8 max-w-xl font-serif text-[clamp(1.3rem,2vw,2.2rem)] italic leading-relaxed text-[#7A6E65]">
                            Got a project in mind?
                            <br />
                            <span className="font-black not-italic text-[#1C1410]">
                                Let's make it remarkable.
                            </span>
                        </p>

                        <div className="mt-12 flex flex-col">
                            {contactLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group grid grid-cols-[90px_1fr_auto] items-center border-b border-black/10 py-5 transition-all hover:pl-3"
                                >
                                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#7A6E65] group-hover:text-[#E8521A]">
                                        {link.label}
                                    </span>

                                    <span className="font-medium text-[#1C1410]">
                                        {link.value}
                                    </span>

                                    <span className="text-xl text-black/30 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#E8521A]">
                                        ↗
                                    </span>
                                </a>
                            ))}
                        </div>

                        <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-[#E8521A]/20 bg-[#E8521A]/5 px-5 py-3">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />

                            <span className="text-[11px] uppercase tracking-[0.2em] text-[#E8521A]">
                                Available for Projects
                            </span>
                        </div>
                    </div>

                    {/* RIGHT */}

                    <div className="rounded-[2rem] border border-black/5 bg-white/50 p-10 backdrop-blur-xl">
                        <div className="mb-10">
                            <div className="text-xs uppercase tracking-[0.25em] text-[#7A6E65]">
                                Send Message
                            </div>

                            <h3 className="mt-3 text-4xl font-black text-[#1C1410]">
                                Start a Conversation
                            </h3>
                        </div>

                        <form
                            onSubmit={handleSubmit}
                            className="space-y-8"
                        >
                            <div>
                                <label className="mb-3 block text-[11px] uppercase tracking-[0.2em] text-[#7A6E65]">
                                    Your Name
                                </label>

                                <input
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Adarsh Antony"
                                    className="w-full border-b border-black/15 bg-transparent py-3 outline-none transition focus:border-[#E8521A]"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-[11px] uppercase tracking-[0.2em] text-[#7A6E65]">
                                    Email
                                </label>

                                <input
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="you@example.com"
                                    className="w-full border-b border-black/15 bg-transparent py-3 outline-none transition focus:border-[#E8521A]"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-[11px] uppercase tracking-[0.2em] text-[#7A6E65]">
                                    Project
                                </label>

                                <input
                                    name="project"
                                    type="text"
                                    placeholder="Website, SaaS, Portfolio..."
                                    className="w-full border-b border-black/15 bg-transparent py-3 outline-none transition focus:border-[#E8521A]"
                                />
                            </div>

                            <div>
                                <label className="mb-3 block text-[11px] uppercase tracking-[0.2em] text-[#7A6E65]">
                                    Message
                                </label>

                                <textarea
                                    name="message"
                                    required
                                    rows={4}
                                    placeholder="Tell me about your idea..."
                                    className="w-full resize-none border-b border-black/15 bg-transparent py-3 outline-none transition focus:border-[#E8521A]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="rounded-full bg-[#1C1410] px-8 py-4 text-xs uppercase tracking-[0.2em] text-white transition hover:bg-[#E8521A]"
                            >
                                Send Message →
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;