import ProjectCard from "../components/ProjectCard";

export default function Home() {
    const projects = [
        {
            title: "Image Classifier",
            description: "CNN model trained on CIFAR-10 dataset with 92% accuracy.",
            link: "https://github.com/yourgithub/image-classifier",
        },
        {
            title: "Sentiment Analyzer",
            description: "NLP model for sentiment analysis using BERT.",
            link: "https://github.com/yourgithub/sentiment-analyzer",
        },
        {
            title: "Portfolio Web App",
            description: "Deployed on Vercel showcasing React + Next.js + Tailwind.",
            link: "https://your-vercel-app.vercel.app",
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
                    src="/profile.72074844.png"
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
                />
                <div>
                    <h2 className="text-3xl font-bold mb-3">Hello, I’m [Your Name]</h2>
                    <p className="text-gray-700 leading-relaxed">
                        I’m a machine learning enthusiast and web developer. I enjoy building ML models and deploying apps with React, Next.js, and Vercel.
                        Here you can explore my projects, skills, and CV.
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