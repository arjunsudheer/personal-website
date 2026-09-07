import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blog-post-metadata";

const BlogsPage = () => {
    return (
        <section className="space-y-8">
            <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-sky-200 sm:text-5xl">Blogs</h1>
            </div>
            {blogPosts.length === 0 ? (
                <p className="text-slate-200">No blogs have been published yet.</p>
            ) : (
                <div className="w-full space-y-4 md:w-[90%] lg:w-[95%]">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="group block w-full rounded-[1.75rem] border border-white/20 bg-slate-950/25 p-5 shadow-[0_20px_60px_rgba(2,6,23,0.28)] backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-white/35 hover:bg-white/15 sm:p-7"
                        >
                            <div className="flex flex-wrap items-start justify-between gap-3">
                                <h2 className="text-xl font-semibold text-white">{post.title}</h2>
                                <p className="text-sm text-slate-200">{post.readTime} min. read</p>
                            </div>
                            <p className="mt-3 text-sm text-slate-200">{post.description}</p>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
};

export default BlogsPage;
