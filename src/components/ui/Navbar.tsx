import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const navbarLinks = [
    { label: "About", to: "/" },
    { label: "Experience", to: "/experience" },
    { label: "Projects", to: "/projects" },
    { label: "Publications", to: "/publications" },
    { label: "Blogs", to: "/blog" },
];

const Navbar = () => {
    const location = useLocation();
    const containerRef = useRef<HTMLUListElement | null>(null);
    const itemRefs = useRef<Array<HTMLLIElement | null>>([]);
    const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 });

    useEffect(() => {
        const activeIndex = navbarLinks.findIndex((link) => {
            if (link.to === "/") {
                return location.pathname === "/" || location.pathname === "";
            }

            return location.pathname.startsWith(link.to);
        });

        const targetIndex = activeIndex >= 0 ? activeIndex : 0;
        const targetItem = itemRefs.current[targetIndex];
        const container = containerRef.current;

        if (!targetItem || !container) {
            return;
        }

        const containerRect = container.getBoundingClientRect();
        const targetRect = targetItem.getBoundingClientRect();
        setPillStyle({ left: targetRect.left - containerRect.left, width: targetRect.width });
    }, [location.pathname]);

    useEffect(() => {
        const updatePillPosition = () => {
            const activeIndex = navbarLinks.findIndex((link) => {
                if (link.to === "/") {
                    return location.pathname === "/" || location.pathname === "";
                }

                return location.pathname.startsWith(link.to);
            });

            const targetIndex = activeIndex >= 0 ? activeIndex : 0;
            const targetItem = itemRefs.current[targetIndex];
            const container = containerRef.current;

            if (!targetItem || !container) {
                return;
            }

            const containerRect = container.getBoundingClientRect();
            const targetRect = targetItem.getBoundingClientRect();
            setPillStyle({ left: targetRect.left - containerRect.left, width: targetRect.width });
        };

        updatePillPosition();
        window.addEventListener("resize", updatePillPosition);
        window.addEventListener("orientationchange", updatePillPosition);

        return () => {
            window.removeEventListener("resize", updatePillPosition);
            window.removeEventListener("orientationchange", updatePillPosition);
        };
    }, [location.pathname]);

    return (
        <nav aria-label="Primary navigation" className="fixed inset-x-0 top-0 z-30 h-32 bg-[linear-gradient(135deg,#07111f,#101a2d)]/95 backdrop-blur-xl sm:h-36">
            <NavLink to="/" className="fixed left-1/2 top-3 flex -translate-x-1/2 items-center justify-center text-base font-semibold tracking-[0.12em] text-white transition-opacity hover:opacity-75 sm:left-8 sm:top-5 sm:translate-x-0 sm:justify-start sm:text-xl">
                Arjun Sudheer
            </NavLink>
            <ul
                ref={containerRef}
                className="fixed left-1/2 top-12 flex -translate-x-1/2 items-center gap-1 rounded-full border border-white/20 bg-slate-950/45 px-1.5 py-1.5 shadow-[0_12px_40px_rgba(2,6,23,0.35),inset_0_1px_0_rgba(255,255,255,0.18)] backdrop-blur-2xl sm:top-4 sm:gap-2 sm:px-2.5 sm:py-2.5"
            >
                <li
                    className="pointer-events-none absolute inset-y-1 rounded-full border border-white/10 bg-white/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_6px_18px_rgba(15,23,42,0.22)] transition-[left,width] duration-300 ease-out sm:inset-y-1.5"
                    style={{ left: pillStyle.left, width: pillStyle.width }}
                />
                {navbarLinks.map((link) => (
                    <li key={link.to} ref={(node) => {
                        itemRefs.current[navbarLinks.findIndex((item) => item.to === link.to)] = node;
                    }} className="relative z-10">
                        <NavLink
                            to={link.to}
                            end={link.to === "/"}
                            className={({ isActive }) =>
                                [
                                    "block rounded-full px-2.5 py-2 text-[11px] font-medium transition-all duration-200 sm:px-4 sm:py-2.5 sm:text-sm",
                                    isActive ? "text-white" : "text-slate-300 hover:bg-white/10 hover:text-white",
                                ].join(" ")
                            }
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;
