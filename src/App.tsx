import { Suspense, lazy } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/ui/Navbar";

const AboutPage = lazy(() => import("./pages/about/About"));
const ProjectsPage = lazy(() => import("./pages/projects/Projects"));
const PublicationsPage = lazy(() => import("./pages/publications/Publications"));
const BlogsPage = lazy(() => import("./pages/blogs/Blogs"));
const BlogPostPage = lazy(() => import("./pages/blogs/BlogPost"));

function RouteFallback() {
    return <p className="site-muted text-sm">Loading…</p>;
}

export function AppRoutes() {
    return (
        <div className="site-shell overflow-x-hidden">
            <Navbar />
            <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 pb-16 pt-10 sm:px-8 lg:px-10">
                <Suspense fallback={<RouteFallback />}>
                    <Routes>
                        <Route
                            path="/"
                            element={<AboutPage />}
                        />
                        <Route
                            path="/projects"
                            element={<ProjectsPage />}
                        />
                        <Route
                            path="/publications"
                            element={<PublicationsPage />}
                        />
                        <Route
                            path="/blog"
                            element={<BlogsPage />}
                        />
                        <Route
                            path="/blog/:slug"
                            element={<BlogPostPage />}
                        />
                        <Route
                            path="*"
                            element={
                                <Navigate
                                    to="/"
                                    replace
                                />
                            }
                        />
                    </Routes>
                </Suspense>
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
