import { describe, expect, it } from "vitest";
import { hydrateDeclarativeShadowRoot } from "./elements";

describe("hydrateDeclarativeShadowRoot", () => {
    it("adopts an open declarative shadow template when native support is unavailable", () => {
        const host = document.createElement("test-shadow-host");
        const template = document.createElement("template");
        template.setAttribute("shadowrootmode", "open");
        template.innerHTML = '<button type="button">Inside shadow root</button>';
        host.append(template);

        const shadowRoot = hydrateDeclarativeShadowRoot(host);

        expect(shadowRoot).toBe(host.shadowRoot);
        expect(shadowRoot?.querySelector("button")).toHaveTextContent("Inside shadow root");
        expect(host.querySelector("template")).toBeNull();
    });

    it("returns null when the host has no open declarative shadow template", () => {
        const host = document.createElement("test-empty-host");

        expect(hydrateDeclarativeShadowRoot(host)).toBeNull();
        expect(host.shadowRoot).toBeNull();
    });

    it("does not adopt a closed declarative shadow template", () => {
        const host = document.createElement("test-closed-host");
        const template = document.createElement("template");
        template.setAttribute("shadowrootmode", "closed");
        host.append(template);

        expect(hydrateDeclarativeShadowRoot(host)).toBeNull();
        expect(host.querySelector("template")).toBe(template);
    });

    it("returns the same shadow root when called again", () => {
        const host = document.createElement("test-idempotent-host");
        const template = document.createElement("template");
        template.setAttribute("shadowrootmode", "open");
        template.innerHTML = "<span>Adopt once</span>";
        host.append(template);

        const firstRoot = hydrateDeclarativeShadowRoot(host);
        const secondRoot = hydrateDeclarativeShadowRoot(host);

        expect(secondRoot).toBe(firstRoot);
        expect(secondRoot?.querySelectorAll("span")).toHaveLength(1);
    });
});
