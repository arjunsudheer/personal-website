import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ExperienceCard from "./ExperienceCard";

const baseProps = {
    companyLogoUrl: "/company.png",
    company: "Oracle",
    role: "Software Engineer Intern",
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    location: "Redwood City, CA",
    executiveSummary: "Built cloud infrastructure features with a cross-functional team.",
};

describe("ExperienceCard", () => {
    it("renders the company experience details", () => {
        render(<ExperienceCard {...baseProps} />);

        expect(screen.getByRole("heading", { name: /oracle/i })).toBeInTheDocument();
        expect(screen.getByText(/software engineer intern/i)).toBeInTheDocument();
        expect(screen.getByText("Jun 2024 – Aug 2024")).toBeInTheDocument();
        expect(screen.getByText("Redwood City, CA")).toBeInTheDocument();
        expect(
            screen.getByText(baseProps.executiveSummary),
        ).toBeInTheDocument();
    });

    it("renders the summary without a contribution list", () => {
        render(<ExperienceCard {...baseProps} />);

        expect(screen.queryByRole("list")).not.toBeInTheDocument();
    });

    it("uses the company name in the logo alt text", () => {
        render(<ExperienceCard {...baseProps} />);

        expect(screen.getByRole("img", { name: /oracle logo/i })).toHaveAttribute(
            "src",
            baseProps.companyLogoUrl,
        );
    });
});
