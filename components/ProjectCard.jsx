export default function ProjectCard({ title, description, link }) {
    return (
        <div className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 mb-3">{description}</p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 font-medium hover:underline"
            >
                View Project →
            </a>
        </div>
    );
}