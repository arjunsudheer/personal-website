interface PublicationCardProps {
    readonly title: string;
    readonly publishedIn: string;
    readonly abstract: string;
    readonly publicationLink: string;
}

const PublicationCard = ({
    title,
    publishedIn,
    abstract,
    publicationLink,
}: PublicationCardProps) => {
    return (
        <a
            href={publicationLink}
            target="_blank"
            rel="noreferrer"
            className="site-card block w-full p-5 sm:p-7"
        >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="site-muted mt-2 text-sm">{publishedIn}</p>
                </div>
            </div>
            <p className="mt-5 text-sm leading-7">{abstract}</p>
            <p className="site-link mt-5 break-all text-sm font-medium underline underline-offset-4">
                {publicationLink}
            </p>
        </a>
    );
};

export default PublicationCard;
