import BlogCard from "../../components/blogs/BlogCard";

const blogPosts = [
    {
        title: "Designing calm interfaces for security and AI tools",
        description: "Reflections on building software that feels clear, helpful, and trustworthy under real-world constraints.",
        readTime: "4 min read",
        blogLink: "https://github.com/arjunsudheer",
    },
    {
        title: "From prompt experiments to dependable workflows",
        description: "Notes on turning exploratory AI ideas into systems with stronger structure, feedback, and reliability.",
        readTime: "5 min read",
        blogLink: "https://github.com/arjunsudheer/synthetic-malware-generation-based-on-generative-models-against-zero-day-attacks",
    },
];

const BlogsPage = () => {
    return (
        <section className="space-y-8">
            <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-sky-200 sm:text-5xl">Blogs</h1>
            </div>
            <div className="w-full space-y-4 md:w-[90%] lg:w-[95%]">
                {blogPosts.map((post) => (
                    <BlogCard key={post.title} {...post} />
                ))}
            </div>
        </section>
    );
};

export default BlogsPage;
