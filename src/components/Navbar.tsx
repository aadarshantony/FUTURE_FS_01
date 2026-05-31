const Navbar = () => {
    return (
        <div className="border-b border-[#c3b4a8] fixed top-0 left-0 right-0 z-100 flex justify-center bg-(--paper)">
            <nav
                id="nav"
                className="
                    flex items-center justify-between
                    w-full max-w-7xl
                    px-12 py-6
                    transition-all duration-300
                "
            >
                {/* Logo */}
                <a
                    href="#"
                    className="
                        text-[1.1rem]
                        font-black
                        tracking-[-0.01em]
                        text-[#1C1410]
                        no-underline
                    "
                >
                    Portfolio
                    <span className="text-[#E8521A]">.</span>
                </a>

                {/* Links */}
                <ul
                    className="
                        flex gap-10
                        list-none
                    "
                >
                    <li>
                        <a
                            href="#about"
                            className="
                                text-[0.72rem]
                                uppercase
                                tracking-[0.18em]
                                font-normal
                                text-[#7A6E65]
                                no-underline
                                transition-colors
                                duration-200
                                hover:text-[#1C1410]
                            "
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="#projects"
                            className="
                                text-[0.72rem]
                                uppercase
                                tracking-[0.18em]
                                font-normal
                                text-[#7A6E65]
                                no-underline
                                transition-colors
                                duration-200
                                hover:text-[#1C1410]
                            "
                        >
                            Work
                        </a>
                    </li>

                    <li>
                        <a
                            href="#stack"
                            className="
                                text-[0.72rem]
                                uppercase
                                tracking-[0.18em]
                                font-normal
                                text-[#7A6E65]
                                no-underline
                                transition-colors
                                duration-200
                                hover:text-[#1C1410]
                            "
                        >
                            Stack
                        </a>
                    </li>

                    <li>
                        <a
                            href="#contact"
                            className="
                                text-[0.72rem]
                                uppercase
                                tracking-[0.18em]
                                font-normal
                                text-[#7A6E65]
                                no-underline
                                transition-colors
                                duration-200
                                hover:text-[#1C1410]
                            "
                        >
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Hire Button */}
                <a
                    href="mailto:adarshantony223@gmail.com?subject=Portfolio%20Inquiry"
                    className="
        text-[0.72rem]
        uppercase
        tracking-[0.12em]
        font-medium
        px-6 py-2
        rounded-full
        bg-[#1C1410]
        text-[#F0EBE1]
        no-underline
        transition-colors
        duration-300
        hover:bg-[#E8521A]
    "
                >
                    Hire me
                </a>
            </nav>
        </div>
    );
};

export default Navbar;