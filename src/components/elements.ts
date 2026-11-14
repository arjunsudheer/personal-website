import { ContentCard } from "./content-card.ts";
import { ExperienceCard } from "./experience-card.ts";
import { SiteNavbar } from "./site-navbar.ts";

const customElementDefinitions = [
    ["site-navbar", SiteNavbar],
    ["experience-card", ExperienceCard],
    ["content-card", ContentCard],
] as const;

export function registerCustomElements(): void {
    if (typeof customElements === "undefined") {
        return;
    }

    for (const [name, elementClass] of customElementDefinitions) {
        if (!customElements.get(name)) {
            customElements.define(name, elementClass);
        }
    }
}
