import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPostContentProps {
    slug: string;
}

const BlogPostContent = ({ slug }: BlogPostContentProps) => {
    const [content, setContent] = useState("");
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setContent("");
        setError(false);

        void fetch(`${import.meta.env.BASE_URL}blog/${encodeURIComponent(slug)}.md`, {
            signal: controller.signal,
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Unable to load blog post: ${response.status}`);
                }

                return response.text();
            })
            .then(setContent)
            .catch((fetchError: unknown) => {
                if (!(fetchError instanceof DOMException && fetchError.name === "AbortError")) {
                    setError(true);
                }
            });

        return () => controller.abort();
    }, [slug]);

    if (error) {
        return <p className="text-slate-200">This blog post could not be found.</p>;
    }

    if (!content) {
        return <p className="text-slate-200">Loading post…</p>;
    }

    return (
        <article className="max-w-none text-slate-200 [&_a]:text-sky-300 [&_a]:transition hover:[&_a]:text-white [&_code]:rounded [&_code]:bg-slate-950/70 [&_code]:px-1.5 [&_code]:py-0.5 [&_h1]:mb-6 [&_h1]:text-4xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h1]:text-sky-200 [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-sky-100 [&_li]:my-1 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-4 [&_pre]:overflow-x-auto [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-white/15 [&_pre]:bg-slate-950/70 [&_pre]:p-4 [&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_td]:border [&_td]:border-white/15 [&_td]:p-3 [&_th]:border [&_th]:border-white/15 [&_th]:bg-white/10 [&_th]:p-3 [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
    );
};

export default BlogPostContent;
