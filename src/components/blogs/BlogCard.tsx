interface BlogCardProps {
    title: string;
    description: string;
    readTime: string;
    blogLink: string;
}

const BlogCard = ({ title, description, readTime, blogLink }: BlogCardProps) => {
    return (
        <a href={blogLink} target="_blank" rel="noreferrer" className="group block w-full rounded-[1.75rem] border border-white/20 bg-slate-950/25 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.28)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/15 sm:p-7">
            <div className="flex flex-wrap items-start justify-between gap-3">
                <h2 className="text-xl font-semibold text-white">{title}</h2>
                <p className="text-sm text-slate-200">{readTime}</p>
            </div>
            <p className="mt-3 text-sm text-slate-200">{description}</p>
        </a>
    );
};

export default BlogCard;
