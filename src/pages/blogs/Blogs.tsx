import { Link } from "react-router-dom";
import { blogPosts } from "../../data/blog-post-metadata";

const BlogsPage = () => {
    return (
        <section className="space-y-8">
            <div className="space-y-3">
                <h1 className="text-3xl font-semibold tracking-tight">
                    Blogs
                </h1>
            </div>
            {blogPosts.length === 0 ? (
                <p>No blogs have been published yet.</p>
            ) : (
                <div className="w-full space-y-4 md:w-[90%] lg:w-[95%]">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="site-card block w-full p-5 sm:p-7"
                        >
                            <div className="flex flex-wrap items-start justify-between gap-3">
                                <h2 className="text-xl font-semibold">{post.title}</h2>
                                <p className="site-muted text-sm">{post.readTime} min. read</p>
                            </div>
                            <p className="mt-3 text-sm">{post.description}</p>
                        </Link>
                    ))}
                </div>
            )}
        </section>
    );
};

export default BlogsPage;
