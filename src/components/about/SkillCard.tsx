import type { ReactNode } from "react";

type Skill = {
    readonly skillName: string;
    readonly skillIcon: ReactNode;
};

interface SkillCardProps {
    readonly category: string;
    readonly skills: Skill[];
}

const SkillCard = ({ category, skills }: SkillCardProps) => {
    return (
        <section className="rounded-3xl border border-white/15 bg-slate-950/25 p-4 shadow-[0_12px_36px_rgba(2,6,23,0.2)] backdrop-blur-xl">
            <h3 className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">{category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
                {skills.map((skill) => (
                    <div key={skill.skillName} className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-sm text-slate-100">
                        <span className="text-cyan-300">{skill.skillIcon}</span>
                        {skill.skillName}
                    </div>
                ))}
            </div>
        </section>
    );
};

export default SkillCard;
