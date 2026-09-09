import ProjectCard from "../../components/projects/ProjectCard";

const projects = [
    {
        title: "GymBuddy",
        description: "GymBuddy is an Android app I developed to help users track their gym workouts and progress. I used Kotlin and Jetpack Compose to build a responsive UI and Room API for local data storage.",
        projectUrl: "https://github.com/arjunsudheer/gym-buddy",
        skills: ["Kotlin", "Jetpack Compose", "Room API"],
    },
    {
        title: "Cornhole Referee",
        description: "Cornhole Referee is a computer vision project that tracks bean bags in real time to score cornhole games. I trained a YOLOv8 model to detect game elements and used Roboflow's Supervision library to assign points via PolygonZones. I collected and annotated data using OpenCV, applied image augmentations, and documented the project with Sphinx using Google-style docstrings.",
        projectUrl: "https://github.com/arjunsudheer/cornhole-referee",
        skills: ["Python", "OpenCV", "Yolov8", "Roboflow", "Sphinx"],
    }
];

const ProjectsPage = () => {
    return (
        <section className="space-y-8">
            <div className="space-y-3">
                <h1 className="text-4xl font-semibold tracking-tight text-sky-200 sm:text-5xl">Projects</h1>
            </div>
            <div className="w-full space-y-4 md:w-[90%] lg:w-[95%]">
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsPage;