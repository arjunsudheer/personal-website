import classNames from "classnames";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const NAVBAR_PILL_LAYOUT_ID = "navbar-active-pill";

const navbarLinks = [
    { label: "About", to: "/" },
    { label: "Experience", to: "/experience" },
    { label: "Projects", to: "/projects" },
    { label: "Publications", to: "/publications" },
    { label: "Blogs", to: "/blog" },
];

const Navbar = () => {
    return (
        <nav aria-label="Primary navigation" className="fixed inset-x-0 top-0 z-30 h-32 bg-[linear-gradient(135deg,#07111f,#101a2d)]/95 backdrop-blur-xl sm:h-36">
            <NavLink to="/" className="fixed left-1/2 top-3 flex -translate-x-1/2 items-center justify-center text-base font-semibold tracking-[0.12em] text-white transition-opacity hover:opacity-75 sm:left-8 sm:top-5 sm:translate-x-0 sm:justify-start sm:text-xl">
                Arjun Sudheer
            </NavLink>
            <ul className="fixed left-1/2 top-12 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/20 bg-slate-950/45 px-1.5 py-1.5 shadow-[0_12px_40px_rgba(2,6,23,0.35),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl sm:top-4 sm:gap-2 sm:px-2.5 sm:py-2.5">
                {navbarLinks.map((link) => (
                    <li key={link.to} className="relative z-10">
                        <NavLink
                            to={link.to}
                            end={link.to === "/"}
                            className={({ isActive }) =>
                                classNames(
                                    "relative block rounded-full px-2.5 py-2 text-[11px] font-medium transition-colors duration-200 sm:px-4 sm:py-2.5 sm:text-sm",
                                    isActive ? "text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"
                                )
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {isActive && (
                                        <motion.span
                                            layoutId={NAVBAR_PILL_LAYOUT_ID}
                                            transition={{ type: "spring", stiffness: 380, damping: 32 }}
                                            className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_6px_18px_rgba(15,23,42,0.22)]"
                                        />
                                    )}
                                    <span className="relative">{link.label}</span>
                                </>
                            )}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
