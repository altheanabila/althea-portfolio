import ProjectCard from "../components/ProjectCard";

export default function Home() {
    const projects = [
        {
            title: "Interaktive Dashboard",
            description: "Ein Dashboard, das mit Java, Vaadin, Spring Boot und ein wenig React entwickelt wurde. Dieses wird mit Vercel, Railway und GitHub bereitgestellt",
            link: "https://interaktive-dashboard-3p9w.vercel.app/",
        },
        {
            title: "Analysis with Linear Regression California Housing",
            description: "Ein kleines, gut strukturiertes Demo-Projekt, das lineare Regression (geschlossene Form + Gradientenabstieg)\n" +
                "am California Housing-Datensatz demonstriert.",
            link: "https://github.com/altheanabila/machine-learning-projects-california-housing",
        },
        {
            title: "Portfolio Web App",
            description: "Deployed on Vercel showcasing React + Next.js + Tailwind.",
            link: "https://github.com/altheanabila/althea-portfolio",
        },
    ];

    return (
        <div>

            {/* About Section */}
            <section
                id="about"
                className="bg-white p-10 rounded-2xl shadow-lg flex flex-col md:flex-row items-center gap-8"
            >
                <img
                    src="72074844.png"
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
                />
                <div>
                    <h2 className="text-3xl font-bold mb-3">Hallo, ich bin Althea Nabila</h2>
                    <p className="text-gray-700 leading-relaxed">
                        "Ich bin leidenschaftlich an Softwareentwicklung, Datenanalyse und Machine Learning interessiert. Alles rund um Java, Python, Webservices, Spring Boot, Machine Learning und Datenanalyse macht mir Spaß. Unten finden Sie mein Portfolio an persönlichen Projekten."
                    </p>
                </div>
            </section>



            {/* Projects Section */}
            <section id="projects" className="space-y-8 mt-16">
                <h2 className="text-3xl font-bold text-center">Projects</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                </div>
            </section>
        </div>
    );
}