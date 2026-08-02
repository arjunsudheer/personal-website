import { FaLocationDot, FaUserGraduate } from "react-icons/fa6";

interface AboutCardProps {
    readonly profileImageUrl: string;
    readonly name: string;
    readonly headline: string;
    readonly university: string;
    readonly program: string;
    readonly location: string;
}

const AboutCard = ({ profileImageUrl, name, headline, university, program, location }: AboutCardProps) => {
    return (
        <section className="h-full rounded-4xl border border-white/20 bg-slate-950/25 p-6 shadow-[0_24px_70px_rgba(2,6,23,0.32)] backdrop-blur-2xl sm:p-8">
            <div className="flex flex-col items-center text-center">
                <img
                    src={profileImageUrl}
                    alt={name}
                    className="h-32 w-32 rounded-full border border-white/50 object-cover object-[center_18%] shadow-[0_12px_36px_rgba(56,189,248,0.25)] sm:h-36 sm:w-36"
                />
                <h2 className="mt-6 text-3xl font-semibold text-white sm:text-3xl">{name}</h2>
                <p className="mt-2 text-base text-sky-200">{headline}</p>
                <div className="mt-8 w-full max-w-md space-y-3 text-left">
                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-300/10 text-sky-200">
                            <FaUserGraduate className="text-lg" />
                        </div>
                        <div className="min-w-0">
                            <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-sky-200 uppercase">Education</p>
                            <p className="mt-1 text-sm font-medium text-white">{university}</p>
                            <p className="mt-0.5 text-xs text-slate-400">{program}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-300/10 text-sky-200">
                            <FaLocationDot className="text-lg" />
                        </div>
                        <div>
                            <p className="text-[0.65rem] font-semibold tracking-[0.16em] text-sky-200 uppercase">Based in</p>
                            <p className="mt-1 text-sm font-medium text-white">{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCard;
