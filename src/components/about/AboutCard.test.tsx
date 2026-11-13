import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AboutCard from "./AboutCard";

const baseProps = {
    profileImageUrl: "/profile.jpg",
    name: "Arjun Sudheer",
};

describe("AboutCard", () => {
    it("renders only the circular profile image", () => {
        render(<AboutCard {...baseProps} />);

        const profileImage = screen.getByRole("img", { name: baseProps.name });
        expect(profileImage).toHaveAttribute(
            "src",
            baseProps.profileImageUrl,
        );
        expect(profileImage).toHaveClass("rounded-full", "h-48", "w-48");
    });
});
