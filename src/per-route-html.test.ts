import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";

const pageSources = [
    { path: "pages/home.html", route: "home" },
    { path: "pages/projects.html", route: "listing" },
    { path: "pages/publications.html", route: "listing" },
    { path: "pages/blog.html", route: "listing" },
] as const;

function parsePageSource(path: string): Document {
    return new DOMParser().parseFromString(readFileSync(path, "utf8"), "text/html");
}

describe("per-route HTML page sources", () => {
    it.each(pageSources)(
        "$path is a complete page source with navigation and a module entry point",
        ({ path, route }) => {
            const document = parsePageSource(path);

            expect(document.head.querySelector("title")?.textContent?.trim()).toBeTruthy();
            expect(document.querySelector("main")).not.toBeNull();
            expect(document.querySelector("main")?.textContent?.trim()).toBeTruthy();
            expect(document.querySelector("site-navbar")).not.toBeNull();
            expect(document.querySelector('script[type="module"]')).not.toBeNull();

            if (route === "home") {
                expect(document.querySelectorAll("experience-card").length).toBeGreaterThan(0);
            } else {
                expect(document.querySelectorAll("content-card").length).toBeGreaterThan(0);
            }
        },
    );

    it("uses only the site's three supported custom elements across the page sources", () => {
        const customElementNames = new Set<string>();

        for (const { path } of pageSources) {
            const document = parsePageSource(path);
            for (const element of document.querySelectorAll("*")) {
                if (element.localName.includes("-")) {
                    customElementNames.add(element.localName);
                }
            }
        }

        expect([...customElementNames].sort()).toEqual([
            "content-card",
            "experience-card",
            "site-navbar",
        ]);
    });
});
