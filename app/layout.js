import "./globals.css";

export const metadata = {
    title: "Althea Projects - Portfolio",
    description: "My CV and project showcase",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className="bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 min-h-screen flex flex-col">

        {/* Header */}
        <header className="flex justify-between items-center p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md">
            <h1 className="text-2xl font-extrabold tracking-tight">Althea Projects</h1>
            <nav className="space-x-6 text-lg">
                <a href="#about" className="hover:text-yellow-300 transition-colors">About</a>
                <a href="#projects" className="hover:text-yellow-300 transition-colors">Projects</a>
                <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-yellow-300 transition-colors"
                >
                    Resume
                </a>
            </nav>
        </header>

        {/* Main Content */}
        <main className="flex-1 max-w-5xl mx-auto px-6 py-12 w-full">
            {children}
        </main>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-6 border-t">
            © {new Date().getFullYear()} Althea Projects. Built with Next.js + TailwindCSS
        </footer>
        </body>
        </html>
    );
}
