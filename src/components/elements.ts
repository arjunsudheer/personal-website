const shadowElementNames = [
    "about-card",
    "description-card",
    "experience-timeline",
    "project-card",
    "publication-card",
    "blog-post-content",
] as const;

const themeStorageKey = "personal-website-theme";

const moonIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.7 15.4A8.8 8.8 0 0 1 8.6 3.3a9 9 0 1 0 12.1 12.1Z"/></svg>';
const sunIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0-5a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Zm0 18a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1ZM4.22 4.22a1 1 0 0 1 1.42 0l1.41 1.41a1 1 0 0 1-1.42 1.42L4.22 5.64a1 1 0 0 1 0-1.42Zm12.73 12.73a1 1 0 0 1 1.42 0l1.41 1.41a1 1 0 0 1-1.42 1.42l-1.41-1.41a1 1 0 0 1 0-1.42ZM2 12a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Zm16 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM4.22 19.78a1 1 0 0 1 0-1.42l1.41-1.41a1 1 0 1 1 1.42 1.42l-1.41 1.41a1 1 0 0 1-1.42 0Zm12.73-12.73a1 1 0 0 1 0-1.42l1.41-1.41a1 1 0 1 1 1.42 1.42l-1.41 1.41a1 1 0 0 1-1.42 0Z"/></svg>';
const menuIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z"/></svg>';
const closeIcon =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m18.3 5.7-1.4-1.4L12 9.2 7.1 4.3 5.7 5.7l4.9 4.9-4.9 4.9 1.4 1.4 4.9-4.9 4.9 4.9 1.4-1.4-4.9-4.9z"/></svg>';

export function hydrateDeclarativeShadowRoot(host: HTMLElement): ShadowRoot | null {
    if (host.shadowRoot) {
        return host.shadowRoot;
    }

    const template = Array.from(host.children).find(
        (child): child is HTMLTemplateElement =>
            child instanceof HTMLTemplateElement && child.getAttribute("shadowrootmode") === "open",
    );
    if (!template) {
        return null;
    }

    const shadowRoot = host.attachShadow({ mode: "open" });
    shadowRoot.append(template.content);
    template.remove();
    return shadowRoot;
}

class StaticShadowElement extends HTMLElement {
    connectedCallback(): void {
        hydrateDeclarativeShadowRoot(this);
    }
}

class SiteNavbar extends HTMLElement {
    private initialized = false;

    connectedCallback(): void {
        const shadowRoot = hydrateDeclarativeShadowRoot(this);
        if (!shadowRoot || this.initialized) {
            return;
        }
        this.initialized = true;

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

export function registerCustomElements(): void {
    if (typeof customElements === "undefined") {
        return;
    }

    if (!customElements.get("site-page-root")) {
        customElements.define("site-page-root", class extends HTMLElement {});
    }
    if (!customElements.get("site-navbar")) {
        customElements.define("site-navbar", SiteNavbar);
    }

    for (const elementName of shadowElementNames) {
        if (!customElements.get(elementName)) {
            customElements.define(elementName, class extends StaticShadowElement {});
        }
    }
}
