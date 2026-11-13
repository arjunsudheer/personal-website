import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import Navbar from "./Navbar";

describe("Navbar", () => {
    beforeEach(() => {
        window.localStorage.clear();
        delete document.documentElement.dataset.theme;
    });

    it("renders the brand link and all navigation links", () => {
        render(
            <MemoryRouter initialEntries={["/projects"]}>
                <Navbar />
            </MemoryRouter>,
        );

        expect(screen.getByRole("navigation", { name: /primary navigation/i })).toBeInTheDocument();
        expect(screen.getByRole("link", { name: /arjun sudheer/i })).toHaveAttribute("href", "/");
        for (const label of ["About", "Experience", "Projects", "Publications", "Blogs"]) {
            expect(screen.getByRole("link", { name: label })).toBeInTheDocument();
        }
    });

    it("marks the link matching the current route as active via aria-current", () => {
        render(
            <MemoryRouter initialEntries={["/experience"]}>
                <Navbar />
            </MemoryRouter>,
        );

        expect(screen.getByRole("link", { name: "Experience" })).toHaveAttribute(
            "aria-current",
            "page",
        );
        expect(screen.getByRole("link", { name: "Experience" })).toHaveClass(
            "underline",
            "text-[var(--nav-strong)]",
        );
        const projectsLink = screen.getByRole("link", { name: "Projects" });
        expect(projectsLink).not.toHaveAttribute("aria-current");
        expect(projectsLink).toHaveClass(
            "text-[var(--nav-muted)]",
            "hover:text-[var(--nav-strong)]",
        );
        expect(projectsLink).not.toHaveClass("underline", "hover:underline");
        expect(projectsLink).not.toHaveClass("font-bold", "hover:font-bold");
    });

    it("only marks About active on the exact root path, not on other routes", () => {
        render(
            <MemoryRouter initialEntries={["/publications"]}>
                <Navbar />
            </MemoryRouter>,
        );

        expect(screen.getByRole("link", { name: "About" })).not.toHaveAttribute("aria-current");
        expect(screen.getByRole("link", { name: "Publications" })).toHaveAttribute(
            "aria-current",
            "page",
        );
    });

    it("marks Blogs active for nested blog post routes", () => {
        render(
            <MemoryRouter initialEntries={["/blog/some-post"]}>
                <Navbar />
            </MemoryRouter>,
        );

        expect(screen.getByRole("link", { name: "Blogs" })).toHaveAttribute("aria-current", "page");
    });

    it("toggles the site theme and persists the selection", async () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>,
        );

        fireEvent.click(screen.getByRole("button", { name: "Switch to dark mode" }));

        await waitFor(() => {
            expect(document.documentElement).toHaveAttribute("data-theme", "dark");
        });
        expect(window.localStorage.getItem("personal-website-theme")).toBe("dark");
        expect(screen.getByRole("button", { name: "Switch to light mode" })).toBeInTheDocument();
    });

    it("opens and closes the mobile navigation menu", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>,
        );

        expect(document.getElementById("mobile-navigation")).toHaveAttribute("hidden");
        fireEvent.click(screen.getByRole("button", { name: "Open navigation menu" }));
        expect(screen.getByRole("navigation", { name: "Mobile navigation" })).toBeInTheDocument();
        expect(document.getElementById("mobile-navigation")).not.toHaveAttribute("hidden");
        expect(screen.getByRole("button", { name: "Close navigation menu" })).toHaveAttribute(
            "aria-expanded",
            "true",
        );
        fireEvent.click(screen.getByRole("button", { name: "Close navigation menu" }));
        expect(document.getElementById("mobile-navigation")).toHaveAttribute("hidden");
    });
});
