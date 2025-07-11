export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-10 px-4">
                <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent leading-right">
                    Hi, I'm Sudharshan Reddy
                </h2>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    Iam a Fullstack Developer skilled in React, Tailwind CSS, Python and Django. I specialize in building responsive web applications and solving real-world problems.
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">View Projects</a>
                    <a href="/resume.pdf" download className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">Download Resume</a>
                </div>
            </div>
        </section>
    )
}