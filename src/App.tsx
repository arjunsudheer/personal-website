import AboutMe from "./components/AboutMe";
import Section from "./components/Section";
import { ALL_SECTIONS } from "./data/data";

function App() {
    return (
        <main className="bg-white dark:bg-slate-900 min-h-screen transition-colors">
            <AboutMe />
            {ALL_SECTIONS.map((section, index) => (
                <Section 
                    key={section.id}
                    id={section.id}
                    index={index}
                    title={section.title}
                    data={section.data}
                />
            ))}
        </main>
    );
}

export default App;