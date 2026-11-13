import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import ExperienceTimeline from "./ExperienceTimeline";

describe("ExperienceTimeline", () => {
    it("renders experience roles, company logos, and date ranges", () => {
        render(<ExperienceTimeline />);

        expect(
            screen.getAllByRole("heading", { level: 3 }).map((heading) => heading.textContent),
        ).toEqual([
            "Oracle Cloud Infrastructure",
            "Cisco",
            "San Jose State University",
            "San Jose State University",
            "Code Ninjas",
        ]);
        expect(screen.getAllByText("Software Engineer Intern")).toHaveLength(3);
        expect(screen.getByText("Research Assistant")).toBeInTheDocument();
        expect(screen.getByText("Code Sensei")).toBeInTheDocument();

        const logoSources = screen
            .getAllByRole("img")
            .map((logo) => logo.getAttribute("src"));
        expect(logoSources).toEqual([
            "/personal-website/assets/experience/oracle_logo.jpg",
            "/personal-website/assets/experience/cisco_logo.jpg",
            "/personal-website/assets/experience/san_jose_state_university_logo.jpg",
            "/personal-website/assets/experience/charles_w_davidson_college_of_engineering_at_sjsu_logo.jpg",
            "/personal-website/assets/experience/codeninjas_logo.jpg",
        ]);
        const dateRanges = [
            ["May 2026", "Aug 2026"],
            ["Jul 2025", "Dec 2025"],
            ["Jun 2024", "Jul 2025"],
            ["Jun 2024", "Aug 2024"],
            ["Jul 2021", "Aug 2023"],
        ];
        const experienceRows = screen.getAllByRole("listitem");
        for (const [index, [startDate, endDate]] of dateRanges.entries()) {
            const row = experienceRows[index];
            if (!row) {
                throw new Error("Every date range should belong to an experience row.");
            }
            const startDateSpan = within(row).getByText(`${startDate} –`, {
                exact: true,
            });
            expect(startDateSpan.tagName).toBe("SPAN");
            expect(startDateSpan).toHaveClass("whitespace-nowrap");

            const dateRange = startDateSpan.closest("p");
            if (!dateRange) {
                throw new Error("Date range should be rendered in a paragraph.");
            }
            const endDateSpan = within(dateRange).getByText(endDate, { exact: true });
            expect(endDateSpan.tagName).toBe("SPAN");
            expect(endDateSpan).toHaveClass("block", "sm:inline");
        }

        const ciscoSummary =
            screen
                .getByRole("heading", { level: 3, name: "Cisco" })
                .closest("article")?.textContent ?? "";
        expect(ciscoSummary).toMatch(/98%/);
        expect(ciscoSummary).toMatch(/downtime/i);
        expect(ciscoSummary).toMatch(/reduc/i);
        expect(ciscoSummary).not.toMatch(/100\+\s*people|400\+\s*projects/i);
    });

    it("uses compact theme-responsive markers and gives the experience content more room", () => {
        render(<ExperienceTimeline />);
        const rows = screen.getAllByRole("listitem");
        for (const row of rows) {
            const marker = row.querySelector(".rounded-full");
            expect(marker).toHaveClass("h-2.5", "w-2.5", "bg-[var(--nav-strong)]");
        }

        for (const row of rows) {
            const percentageTrackWidths = [
                ...row.className.matchAll(/(\d*\.?\d+)%/g),
            ].map(([, width]) => Number(width));
            expect(percentageTrackWidths.length).toBeGreaterThanOrEqual(2);
            expect(
                percentageTrackWidths[percentageTrackWidths.length - 1],
            ).toBeGreaterThan(percentageTrackWidths[0]);
        }
    });

    it("renders one continuous full-height rail aligned with the date column", () => {
        render(<ExperienceTimeline />);
        const list = screen.getByRole("list");

        expect(list).toHaveClass("before:inset-y-0");
        expect(list.className).toMatch(/(?:^|\s)before:left-(?!1\/2)[^\s]+/);

        for (const row of screen.getAllByRole("listitem")) {
            expect(row.querySelectorAll('span[aria-hidden="true"]')).toHaveLength(1);
            expect(row.querySelector('span[aria-hidden="true"]')).toHaveClass(
                "rounded-full",
            );
        }
    });

    it("does not render locations or site-card experience cards", () => {
        const { container } = render(<ExperienceTimeline />);

        for (const location of [
            "Santa Clara, CA",
            "San Jose, CA",
            "Cupertino, CA",
        ]) {
            expect(screen.queryByText(location)).not.toBeInTheDocument();
        }
        expect(container.querySelector(".site-card")).not.toBeInTheDocument();
    });
});
