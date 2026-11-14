const styles = `
    :host { display: block; position: sticky; top: 0; z-index: 30; }
    header { border-bottom: 1px solid var(--border); background: var(--surface); }
    .bar { position: relative; display: flex; min-height: 4rem; align-items: center; justify-content: space-between; gap: 1.5rem; max-width: 72rem; margin: 0 auto; padding: 0 1.25rem; }
    a { color: inherit; text-decoration: none; }
    .brand { flex-shrink: 0; font-weight: 600; }
    .desktop-nav { display: none; align-items: center; gap: 1.5rem; }
    .desktop-nav a, .mobile-nav a { color: var(--nav-muted); font-size: 0.875rem; transition: color 150ms ease; }
    .desktop-nav a:hover, .mobile-nav a:hover, a[aria-current="page"] { color: var(--nav-strong); }
    a[aria-current="page"] { text-decoration: underline; text-underline-offset: 0.25rem; }
    .controls { display: flex; align-items: center; gap: 0.5rem; }
    button { display: inline-flex; height: 2.5rem; width: 2.5rem; flex-shrink: 0; align-items: center; justify-content: center; border: 0; border-radius: 9999px; color: var(--text); background: transparent; cursor: pointer; transition: background-color 150ms ease; }
    button:hover { background: var(--surface-hover); }
    button:focus-visible, a:focus-visible { outline: 2px solid var(--link); outline-offset: 2px; }
    svg { width: 1.25rem; height: 1.25rem; fill: currentColor; }
    .mobile-toggle { display: inline-flex; }
    .mobile-nav { border-top: 1px solid var(--border); padding: 0.75rem 1.25rem; background: var(--surface); }
    .mobile-nav[hidden] { display: none; }
    .mobile-nav ul { max-width: 72rem; margin: 0 auto; padding: 0; list-style: none; }
    .mobile-nav li + li { margin-top: 0.75rem; }
    @media (min-width: 768px) {
        .bar { padding-right: 2rem; padding-left: 2rem; }
        .desktop-nav { display: flex; }
        .mobile-toggle, .mobile-nav { display: none; }
    }
    @media (min-width: 1024px) {
        .bar { padding-right: 2.5rem; padding-left: 2.5rem; }
    }
`;

const moonIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.7 15.4A8.8 8.8 0 0 1 8.6 3.3a9 9 0 1 0 12.1 12.1Z"/></svg>';
const sunIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM4.22 4.22a1 1 0 0 1 1.42 0l1.41 1.41a1 1 0 0 1-1.42 1.42L4.22 5.64a1 1 0 0 1 0-1.42Zm12.73 12.73a1 1 0 0 1 1.42 0l1.41 1.41a1 1 0 0 1-1.42 1.42l-1.41-1.41a1 1 0 0 1 0-1.42ZM2 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm16 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM4.22 19.78a1 1 0 0 1 0-1.42l1.41-1.41a1 1 0 1 1 1.42 1.42l-1.41 1.41a1 1 0 0 1-1.42 0Zm12.73-12.73a1 1 0 0 1 0-1.42l1.41-1.41a1 1 0 1 1 1.42 1.42l-1.41 1.41a1 1 0 0 1-1.42 0Z"/></svg>';
const menuIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>';
const closeIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m18.3 5.7-1.4-1.4L12 9.2 7.1 4.3 5.7 5.7l4.9 4.9-4.9 4.9 1.4 1.4 4.9-4.9 4.9 4.9 1.4-1.4-4.9-4.9z"/></svg>';

const themeStorageKey = "personal-website-theme";

function escapeHtml(value: string): string {
    return value.replace(/[&<>"']/g, (character) => {
        const entities: Readonly<Record<string, string>> = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
        };
        return entities[character] ?? character;
    });
}

function navLink(label: string, href: string, active: boolean): string {
    return `<a href="${escapeHtml(href)}"${active ? ' aria-current="page"' : ""}>${label}</a>`;
}

export class SiteNavbar extends HTMLElement {
    connectedCallback(): void {
        if (this.shadowRoot) {
            return;
        }

        const baseUrl = this.getAttribute("base-url");
        if (!baseUrl?.endsWith("/")) {
            throw new Error("The site navbar requires a base-url ending in '/'.");
        }

        const activeSection = this.getAttribute("active-section") ?? "about";
        const links = [
            { label: "About", href: baseUrl, section: "about" },
            { label: "Projects", href: `${baseUrl}projects/`, section: "projects" },
            { label: "Publications", href: `${baseUrl}publications/`, section: "publications" },
            { label: "Blogs", href: `${baseUrl}blog/`, section: "blog" },
        ];
        const renderLinks = () =>
            links
                .map((link) => navLink(link.label, link.href, link.section === activeSection))
                .join("");
        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = `<style>${styles}</style><header><div class="bar"><a class="brand" href="${escapeHtml(baseUrl)}">Arjun Sudheer</a><nav class="desktop-nav" aria-label="Primary navigation">${renderLinks()}</nav><div class="controls"><button type="button" class="theme-toggle" aria-label="Switch to dark mode">${moonIcon}</button><button type="button" class="mobile-toggle" aria-label="Open navigation menu" aria-expanded="false" aria-controls="mobile-navigation">${menuIcon}</button></div></div><nav id="mobile-navigation" class="mobile-nav" aria-label="Mobile navigation" hidden><ul>${links
            .map(
                (link) =>
                    `<li>${navLink(link.label, link.href, link.section === activeSection)}</li>`,
            )
            .join("")}</ul></nav></header>`;

        const themeButton = shadowRoot.querySelector<HTMLButtonElement>(".theme-toggle");
        const menuButton = shadowRoot.querySelector<HTMLButtonElement>(".mobile-toggle");
        const mobileNavigation = shadowRoot.querySelector<HTMLElement>("#mobile-navigation");
        if (!themeButton || !menuButton || !mobileNavigation) {
            throw new Error("The site navbar is missing required controls.");
        }

        const applyTheme = (theme: "light" | "dark") => {
            document.documentElement.dataset.theme = theme;
            window.localStorage.setItem(themeStorageKey, theme);
            themeButton.setAttribute(
                "aria-label",
                `Switch to ${theme === "light" ? "dark" : "light"} mode`,
            );
            themeButton.innerHTML = theme === "light" ? moonIcon : sunIcon;
        };

        const storedTheme = window.localStorage.getItem(themeStorageKey);
        let theme: "light" | "dark" = storedTheme === "dark" ? "dark" : "light";
        applyTheme(theme);

        themeButton.addEventListener("click", () => {
            theme = theme === "light" ? "dark" : "light";
            applyTheme(theme);
        });

        const setMobileMenuOpen = (isOpen: boolean) => {
            mobileNavigation.hidden = !isOpen;
            menuButton.setAttribute("aria-expanded", String(isOpen));
            menuButton.setAttribute(
                "aria-label",
                isOpen ? "Close navigation menu" : "Open navigation menu",
            );
            menuButton.innerHTML = isOpen ? closeIcon : menuIcon;
        };

        menuButton.addEventListener("click", () => {
            setMobileMenuOpen(menuButton.getAttribute("aria-expanded") !== "true");
        });
        mobileNavigation.addEventListener("click", (event: MouseEvent) => {
            if (event.target instanceof Element && event.target.closest("a")) {
                setMobileMenuOpen(false);
            }
        });
    }
}
