import type { ReactNode } from "react";

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
    return (
        <section className="flex h-full flex-col rounded-4xl border border-white/20 bg-slate-950/25 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.32)] backdrop-blur-2xl sm:p-8">
            <p className="text-sm font-medium tracking-[0.18em] text-sky-200 uppercase">About Me</p>
            <p className="mt-4 text-base leading-8 text-slate-200">{description}</p>
            <div className="mt-auto flex justify-center gap-4 pt-7">
                {socialProfiles.map((profile, idx) => {
                    const tooltipId = `profile-tooltip-${idx}`;
                    return (
                        <a
                            key={profile.profileName}
                            href={profile.profileLink}
                            target="_blank"
                            rel="noreferrer"
                            className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-950/30 text-slate-100 transition duration-200 hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none"
                            aria-label={profile.profileName}
                            aria-describedby={tooltipId}
                        >
                            <span className="text-2xl text-cyan-300">{profile.profileIcon}</span>

                            <span
                                id={tooltipId}
                                role="tooltip"
                                className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-md bg-slate-900/95 px-2 py-1 text-xs font-medium text-slate-100 opacity-0 scale-95 transition-all duration-150 group-hover:opacity-100 group-focus:opacity-100 group-hover:scale-100 group-focus:scale-100"
                            >
                                {profile.profileName}
                            </span>
                        </a>
                    );
                })}
            </div>
        </section>
    );
};

export default DescriptionCard;
