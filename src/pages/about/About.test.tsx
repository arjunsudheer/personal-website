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

    it("renders the experience section after the about content in reverse-chronological order", () => {
        render(<AboutPage />);

        const aboutContent = screen.getByText(/Hi, I'm Arjun/i);
        const experienceHeading = screen.getByRole("heading", { name: "Experience" });
        expect(
            aboutContent.compareDocumentPosition(experienceHeading) &
                Node.DOCUMENT_POSITION_FOLLOWING,
        ).toBeTruthy();

        const employers = screen
            .getAllByRole("heading", { level: 3 })
            .map((heading) => heading.textContent);
        expect(employers).toEqual([
            "Oracle Cloud Infrastructure",
            "Cisco",
            "San Jose State University",
            "San Jose State University",
            "Code Ninjas",
        ]);
    });

    it("links to the four social profiles without an email link", () => {
        render(<AboutPage />);

        for (const name of ["LinkedIn", "GitHub", "Google Scholar", "Instagram"]) {
            expect(screen.getByRole("link", { name })).toBeInTheDocument();
        }
        expect(screen.queryByRole("link", { name: "Email" })).not.toBeInTheDocument();
    });
});
