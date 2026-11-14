import { beforeAll, describe, expect, it } from "vitest";
import { registerCustomElements } from "./elements";

beforeAll(() => {
    registerCustomElements();
});

describe("custom element registration", () => {
    it("registers exactly the three site components and tolerates repeated calls", () => {
        registerCustomElements();

        expect(customElements.get("site-navbar")).toBeDefined();
        expect(customElements.get("experience-card")).toBeDefined();
        expect(customElements.get("content-card")).toBeDefined();
    });

    it("renders linked content cards as accessible external links", () => {
        const card = document.createElement("content-card");
        card.setAttribute("href", "https://example.com");
        card.setAttribute("external", "");
        card.innerHTML = '<h2 slot="title">Example</h2><p slot="text">Description</p>';
        document.body.append(card);

        const link = card.shadowRoot?.querySelector("a.card");
        expect(link?.getAttribute("href")).toBe("https://example.com");
        expect(link?.getAttribute("target")).toBe("_blank");
        expect(link?.getAttribute("rel")).toBe("noreferrer");
        expect(card.shadowRoot?.querySelector('slot[name="title"]')).not.toBeNull();

        card.remove();
    });

    it("renders content cards without a link as articles", () => {
        const card = document.createElement("content-card");
        card.innerHTML = '<h2 slot="title">Unlinked content</h2>';
        document.body.append(card);

        expect(card.shadowRoot?.querySelector("article.card")).not.toBeNull();
        expect(card.shadowRoot?.querySelector("a.card")).toBeNull();

        card.remove();
    });

    it("keeps experience dates above the company details in the mobile layout", () => {
        const card = document.createElement("experience-card");
        card.innerHTML = [
            '<img slot="logo" alt="Company logo">',
            '<span slot="date">Jan 2025 – Mar 2025</span>',
            '<span slot="company">Example Company</span>',
            '<span slot="role">Engineer</span>',
            '<span slot="summary">Built an example.</span>',
        ].join("");
        document.body.append(card);

        const shadowRoot = card.shadowRoot;
        const date = shadowRoot?.querySelector(".date");
        const details = shadowRoot?.querySelector("article");
        const styles = shadowRoot?.querySelector("style")?.textContent ?? "";

        expect(date).not.toBeNull();
        expect(details).not.toBeNull();
        if (date && details) {
            expect(date.compareDocumentPosition(details) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
        }
        expect(shadowRoot?.querySelector('slot[name="date"]')).not.toBeNull();
        expect(shadowRoot?.querySelector('slot[name="company"]')).not.toBeNull();
        expect(styles).toContain("@media (max-width: 639px)");
        expect(styles).toContain(".date { grid-column: 1 / -1; grid-row: 1;");
        expect(styles).toContain("article { grid-column: 2; grid-row: 2;");

        card.remove();
    });

    it("persists theme changes and toggles the mobile navigation", () => {
        localStorage.removeItem("personal-website-theme");
        delete document.documentElement.dataset.theme;
        const navbar = document.createElement("site-navbar");
        navbar.setAttribute("base-url", "/personal-website/");
        navbar.setAttribute("active-section", "projects");
        document.body.append(navbar);

        const shadowRoot = navbar.shadowRoot;
        const themeButton = shadowRoot?.querySelector<HTMLButtonElement>(".theme-toggle");
        const menuButton = shadowRoot?.querySelector<HTMLButtonElement>(".mobile-toggle");
        const mobileNav = shadowRoot?.querySelector<HTMLElement>(".mobile-nav");
        expect(
            shadowRoot?.querySelector('a[href="/personal-website/projects/"][aria-current="page"]'),
        ).not.toBeNull();

        themeButton?.click();
        expect(document.documentElement).toHaveAttribute("data-theme", "dark");
        expect(localStorage.getItem("personal-website-theme")).toBe("dark");

        menuButton?.click();
        expect(menuButton).toHaveAttribute("aria-expanded", "true");
        expect(mobileNav).not.toHaveAttribute("hidden");

        menuButton?.click();
        expect(mobileNav).toHaveAttribute("hidden");
        navbar.remove();
    });
});
