import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "./pages/about/About";
import BlogPostPage from "./pages/blogs/BlogPost";
import BlogsPage from "./pages/blogs/Blogs";
import ExperiencePage from "./pages/experience/Experience";
import ProjectsPage from "./pages/projects/Projects";
import PublicationsPage from "./pages/publications/Publications";
import Navbar from "./components/ui/Navbar";

export function AppRoutes() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-fixed bg-[radial-gradient(circle_at_12%_0%,rgba(125,211,252,0.2),transparent_30%),radial-gradient(circle_at_85%_15%,rgba(167,139,250,0.15),transparent_25%),linear-gradient(135deg,#07111f,#101a2d_52%,#0a1322)] text-slate-100">
            <Navbar />
            <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 pb-16 pt-40 sm:px-8 lg:px-10">
                <Routes>
                    <Route path="/" element={<AboutPage />} />
                    <Route path="/experience" element={<ExperiencePage />} />
                    <Route path="/projects" element={<ProjectsPage />} />
                    <Route path="/publications" element={<PublicationsPage />} />
                    <Route path="/blog" element={<BlogsPage />} />
                    <Route path="/blog/:slug" element={<BlogPostPage />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </main>
        </div>
    );
}

export function App() {
    return (
        <HashRouter>
            <AppRoutes />
        </HashRouter>
    );
}

export default App;
