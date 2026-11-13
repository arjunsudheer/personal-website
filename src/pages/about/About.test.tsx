import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutPage from "./About";

describe("AboutPage", () => {
    it("renders the about page content", () => {
        render(<AboutPage />);

        expect(screen.getByRole("img", { name: "Arjun Sudheer" })).toBeInTheDocument();
        expect(screen.getByRole("heading", { name: "Arjun Sudheer" })).toBeInTheDocument();
        expect(screen.getByText(/Hi, I'm Arjun/i)).toBeInTheDocument();
        expect(screen.queryByText(/programming languages/i)).not.toBeInTheDocument();
    });

    it("links to the four social profiles without location or email details", () => {
        render(<AboutPage />);

        for (const name of ["LinkedIn", "GitHub", "Google Scholar", "Instagram"]) {
            expect(screen.getByRole("link", { name })).toBeInTheDocument();
        }
        expect(screen.queryByRole("link", { name: "Email" })).not.toBeInTheDocument();
        expect(screen.queryByText(/Cupertino, CA/)).not.toBeInTheDocument();
    });
});
