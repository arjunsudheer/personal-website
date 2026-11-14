const styles = `
    :host, *, *::before, *::after { box-sizing: border-box; }
    :host { display: block; min-width: 0; max-width: 100%; }
    .card { display: block; width: 100%; min-width: 0; border: 1px solid var(--border); border-radius: 0.375rem; padding: 1.25rem; color: var(--text); background: var(--surface); overflow-wrap: anywhere; transition: background-color 150ms ease, border-color 150ms ease; }
    a.card { text-decoration: none; }
    a.card:hover { background: var(--surface-hover); }
    a.card:focus-visible { outline: 2px solid var(--link); outline-offset: 2px; }
    ::slotted(h2) { margin: 0; font-size: 1.25rem; font-weight: 600; }
    ::slotted(.subtitle) { margin: 0.5rem 0 0; color: var(--muted); font-size: 0.875rem; }
    ::slotted(.text) { margin: 1.25rem 0 0; font-size: 0.875rem; line-height: 1.75; }
    ::slotted(.link) { display: block; margin-top: 1.25rem; color: var(--link); font-size: 0.875rem; font-weight: 500; text-decoration: underline; text-underline-offset: 0.25rem; }
    @media (min-width: 640px) { .card { padding: 1.75rem; } }
`;

const cardSlots = ["title", "subtitle", "text", "link"] as const;

export class ContentCard extends HTMLElement {
    connectedCallback(): void {
        if (this.shadowRoot) {
            return;
        }

        const wrapper = this.hasAttribute("href")
            ? document.createElement("a")
            : document.createElement("article");
        wrapper.className = "card";

        const href = this.getAttribute("href");
        if (href !== null) {
            wrapper.setAttribute("href", href);
            if (this.hasAttribute("external")) {
                wrapper.setAttribute("target", "_blank");
                wrapper.setAttribute("rel", "noreferrer");
            }
        }

        for (const name of cardSlots) {
            const slot = document.createElement("slot");
            slot.name = name;
            wrapper.append(slot);
        }

        const shadowRoot = this.attachShadow({ mode: "open" });
        const style = document.createElement("style");
        style.textContent = styles;
        shadowRoot.append(style, wrapper);
    }
}
