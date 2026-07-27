interface PublicationCardProps {
    readonly title: string;
    readonly publishedIn: string;
    readonly abstract: string;
    readonly publicationLink: string;
}

const PublicationCard = ({ title, publishedIn, abstract, publicationLink }: PublicationCardProps) => {
    return (
        <a href={publicationLink} target="_blank" rel="noreferrer" className="group block w-full rounded-[1.75rem] border border-white/20 bg-slate-950/25 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.28)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/15 sm:p-7">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h2 className="text-xl font-semibold text-white">{title}</h2>
                    <p className="mt-2 text-sm text-sky-200">{publishedIn}</p>
                </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-200">{abstract}</p>
            <p className="mt-5 break-all text-sm font-medium text-sky-400 underline decoration-sky-400/60 underline-offset-4 transition group-hover:text-sky-300">{publicationLink}</p>
        </a>
    );
};

export default PublicationCard;
