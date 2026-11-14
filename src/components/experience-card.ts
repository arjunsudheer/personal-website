const styles = `
    :host, *, *::before, *::after { box-sizing: border-box; }
    :host { display: block; min-width: 0; }
    .card { display: grid; min-width: 0; grid-template-columns: 22% 24% 54%; align-items: center; }
    .logo { display: flex; justify-content: flex-end; }
    ::slotted(img) { width: 3rem; height: 3rem; border: 1px solid var(--border); border-radius: 0.375rem; background: #fff; object-fit: cover; padding: 0.375rem; }
    .date { position: relative; z-index: 1; display: flex; min-height: 5rem; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; text-align: center; }
    .dot { position: relative; z-index: 1; width: 0.625rem; height: 0.625rem; flex-shrink: 0; border-radius: 9999px; background: var(--nav-strong); }
    .date p { position: relative; z-index: 1; margin: 0; padding: 0 0.25rem; color: var(--muted); background: var(--page-background); font-size: 0.625rem; line-height: 1rem; }
    article { min-width: 0; overflow-wrap: anywhere; padding: 0.5rem 0; }
    h3 { margin: 0; font-size: 1.125rem; line-height: 1.5; font-weight: 600; }
    .role { margin: 0.25rem 0 0; font-size: 0.875rem; font-weight: 500; }
    .summary { margin: 0.75rem 0 0; color: var(--muted); font-size: 0.875rem; line-height: 1.5rem; }
    @media (min-width: 640px) {
        ::slotted(img) { width: 4rem; height: 4rem; }
        .date p { font-size: 0.75rem; }
        h3 { font-size: 1.25rem; }
    }
    @media (max-width: 639px) {
        .card { grid-template-columns: 3rem minmax(0, 1fr); column-gap: 0.75rem; row-gap: 0.25rem; align-items: start; }
        .logo { grid-column: 1; grid-row: 2; justify-content: flex-start; padding-top: 0.25rem; }
        ::slotted(img) { width: 2.5rem; height: 2.5rem; }
        .date { grid-column: 1 / -1; grid-row: 1; min-height: 0; flex-direction: row; justify-content: flex-start; gap: 0.5rem; text-align: left; }
        .dot { display: none; }
        .date p { padding: 0; background: transparent; font-size: 0.75rem; line-height: 1.25rem; }
        article { grid-column: 2; grid-row: 2; padding: 0; }
        h3 { font-size: 1rem; }
    }
`;

export class ExperienceCard extends HTMLElement {
    connectedCallback(): void {
        if (this.shadowRoot) {
            return;
        }

        const shadowRoot = this.attachShadow({ mode: "open" });
        shadowRoot.innerHTML = `<style>${styles}</style><div class="card"><div class="logo"><slot name="logo"></slot></div><div class="date"><span class="dot" aria-hidden="true"></span><p><slot name="date"></slot></p></div><article><h3><slot name="company"></slot></h3><p class="role"><slot name="role"></slot></p><p class="summary"><slot name="summary"></slot></p></article></div>`;
    }
}
