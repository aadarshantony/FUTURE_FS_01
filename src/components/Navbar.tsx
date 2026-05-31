import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="border-b border-[#c3b4a8] fixed top-0 left-0 right-0 z-100 bg-(--paper)">
            <nav
                id="nav"
                className="flex items-center justify-between w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5 sm:py-6 transition-all duration-300"
            >
                {/* Logo */}
                <a
                    href="#"
                    className="text-[1.1rem] font-black tracking-[-0.01em] text-[#1C1410] no-underline"
                >
                    Portfolio
                    <span className="text-[#E8521A]">.</span>
                </a>

                {/* Desktop Links */}
                <ul className="hidden md:flex gap-10 list-none">
                    {["About", "Work", "Stack", "Contact"].map((item) => (
                        <li key={item}>
                            <a
                                href={`#${item === "Work" ? "projects" : item.toLowerCase()}`}
                                className="text-[0.72rem] uppercase tracking-[0.18em] font-normal text-[#7A6E65] no-underline transition-colors duration-200 hover:text-[#1C1410]"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Desktop Hire Button */}
                <a
                    href="mailto:adarshantony223@gmail.com?subject=Portfolio%20Inquiry"
                    className="hidden md:inline-block text-[0.72rem] uppercase tracking-[0.12em] font-medium px-6 py-2 rounded-full bg-[#1C1410] text-[#F0EBE1] no-underline transition-colors duration-300 hover:bg-[#E8521A]"
                >
                    Hire me
                </a>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-[5px] p-2"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-[2px] w-6 bg-[#1C1410] transition-all duration-300 ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
                    <span className={`block h-[2px] w-6 bg-[#1C1410] transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                    <span className={`block h-[2px] w-6 bg-[#1C1410] transition-all duration-300 ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
                </button>
            </nav>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-(--paper) border-t border-[#c3b4a8] px-5 py-6 flex flex-col gap-5">
                    {["About", "Work", "Stack", "Contact"].map((item) => (
                        <a
                            key={item}
                            href={`#${item === "Work" ? "projects" : item.toLowerCase()}`}
                            onClick={() => setOpen(false)}
                            className="text-[0.72rem] uppercase tracking-[0.18em] font-normal text-[#7A6E65] no-underline transition-colors duration-200 hover:text-[#1C1410]"
                        >
                            {item}
                        </a>
                    ))}
                    <a
                        href="mailto:adarshantony223@gmail.com?subject=Portfolio%20Inquiry"
                        className="self-start text-[0.72rem] uppercase tracking-[0.12em] font-medium px-6 py-2 rounded-full bg-[#1C1410] text-[#F0EBE1] no-underline transition-colors duration-300 hover:bg-[#E8521A]"
                    >
                        Hire me
                    </a>
                </div>
            )}
        </div>
    );
};

export default Navbar;