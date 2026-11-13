import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun, FaXmark } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const navbarLinks = [
    { label: "About", to: "/" },
    { label: "Projects", to: "/projects" },
    { label: "Publications", to: "/publications" },
    { label: "Blogs", to: "/blog" },
];

type Theme = "light" | "dark";
const themeStorageKey = "personal-website-theme";

const Navbar = () => {
    const [theme, setTheme] = useState<Theme>(() => {
        return window.localStorage.getItem(themeStorageKey) === "dark" ? "dark" : "light";
    });
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        window.localStorage.setItem(themeStorageKey, theme);
    }, [theme]);

    const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
        `text-[var(--nav-muted)] text-sm transition-colors hover:text-[var(--nav-strong)] ${isActive ? "text-[var(--nav-strong)] underline" : ""}`;

    return (
        <header className="site-header sticky top-0 z-30">
            <div className="relative mx-auto flex min-h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
                <NavLink
                    to="/"
                    className="shrink-0 text-base font-semibold"
                >
                    Arjun Sudheer
                </NavLink>

                <nav
                    aria-label="Primary navigation"
                    className="hidden items-center gap-6 md:flex"
                >
                    {navbarLinks.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === "/"}
                            className={navLinkClassName}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </nav>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
                        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[var(--surface-hover)]"
                    >
                        {theme === "light" ? <FaMoon aria-hidden="true" /> : <FaSun aria-hidden="true" />}
                    </button>
                    <button
                        type="button"
                        aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-[var(--surface-hover)] md:hidden"
                    >
                        {mobileMenuOpen ? (
                            <FaXmark aria-hidden="true" />
                        ) : (
                            <FaBars aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>

            <nav
                id="mobile-navigation"
                aria-label="Mobile navigation"
                hidden={!mobileMenuOpen}
                className={`site-header border-t px-5 py-3 md:hidden ${mobileMenuOpen ? "" : "hidden"}`}
            >
                <ul className="mx-auto max-w-6xl space-y-3">
                    {navbarLinks.map((link) => (
                        <li key={link.to}>
                            <NavLink
                                to={link.to}
                                end={link.to === "/"}
                                className={navLinkClassName}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
