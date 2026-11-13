import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface BlogPostContentProps {
    readonly slug: string;
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
        return <p>This blog post could not be found.</p>;
    }

    if (!content) {
        return <p>Loading post…</p>;
    }

    return (
        <article className="site-markdown max-w-none [&_a]:transition-colors [&_a:hover]:underline [&_code]:rounded [&_code]:px-1.5 [&_code]:py-0.5 [&_h1]:mb-6 [&_h1]:text-3xl [&_h1]:font-semibold [&_h1]:tracking-tight [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-2xl [&_h2]:font-semibold [&_li]:my-1 [&_ol]:my-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-4 [&_table]:my-6 [&_table]:w-full [&_table]:border-collapse [&_ul]:my-4 [&_ul]:list-disc [&_ul]:pl-6">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </article>
    );
};

export default BlogPostContent;
