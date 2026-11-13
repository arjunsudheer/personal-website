import { useId, type ReactNode } from "react";

type SocialProfileIcon = {
    readonly profileName: string;
    readonly profileIcon: ReactNode;
    readonly profileLink: string;
};

interface DescriptionCardProps {
    readonly description: string;
    readonly socialProfiles: SocialProfileIcon[];
}

const DescriptionCard = ({ description, socialProfiles }: DescriptionCardProps) => {
    const tooltipPrefix = useId();

    return (
        <div>
            <p className="text-base leading-7">{description}</p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-5 sm:gap-7 md:justify-start">
                {socialProfiles.map((profile, index) => {
                    const tooltipId = `${tooltipPrefix}-profile-tooltip-${index}`;
                    return (
                        <a
                            key={profile.profileName}
                            href={profile.profileLink}
                            target="_blank"
                            rel="noreferrer"
                            className="site-muted group relative inline-flex h-12 w-12 items-center justify-center transition-colors hover:text-[var(--text)] focus-visible:outline-2 focus-visible:outline-offset-2"
                            aria-label={profile.profileName}
                            aria-describedby={tooltipId}
                        >
                            <span className="text-2xl sm:text-3xl">{profile.profileIcon}</span>
                            <span
                                id={tooltipId}
                                role="tooltip"
                                className="site-inset pointer-events-none absolute bottom-full left-1/2 z-10 mb-1 -translate-x-1/2 whitespace-nowrap rounded-sm px-2 py-1 text-xs text-[var(--text)] opacity-0 shadow-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"
                            >
                                {profile.profileName}
                            </span>
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default DescriptionCard;
