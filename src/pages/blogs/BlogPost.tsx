import { Link, Navigate, useParams } from "react-router-dom";
import BlogPostContent from "../../components/blogs/BlogPostContent";
import { blogPosts } from "../../data/blog-post-metadata";

const BlogPostPage = () => {
    const { slug } = useParams<{ slug: string }>();

    if (!slug) {
        return <Navigate to="/" replace />;
    }

    const postExists = blogPosts.some((post) => post.slug === slug);
    if (!postExists) {
        return <Navigate to="/" replace />;
    }

    return (
        <section className="space-y-8">
            <Link to="/blog" className="inline-flex text-sm font-medium text-sky-200 transition hover:text-white">
                ← All posts
            </Link>
            <BlogPostContent slug={slug} />
        </section>
    );
};

export default BlogPostPage;
