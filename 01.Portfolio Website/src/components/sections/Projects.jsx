export const Projects = () => {
    return (
        <section className="min-h-screen flex items-center justify-center py-20" id="projects">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> {" "} Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">IPO Web Application & REST API Development </h3>
                        <p className="text-gray-400 mb-2">
                            Developed an IPO Web Application for Bluestock Fintech with a responsive UI using React and 
                            Tailwind CSS, and scalable backend using Django REST APIs and MySQL.
                        </p>
                        <p className="text-gray-400 mb-4">
                            Implemented key features including real-time IPO tracking, company listings, and secure JWT based 
                            user authentication.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {["React", "Tailwind CSS", "Django", "Django REST Framework", "Python", "MySQL"].map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://ipo-web-app.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project →
                            </a>
                        </div>
                    </div>

                    <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                        <h3 className="text-xl font-bold mb-2">Instamart Feature Web Application</h3>
                        <p className="text-gray-400 mb-4">
                            Built and deployed the Instamart Feature Web Application using React.js, Tailwind CSS, and Django, 
                            implementing RESTful APIs, MVC architecture, authentication, and features like product browsing, 
                            cart management, discounts, and secure checkout. 
                        </p>
                        <div>
                            {["React", "Tailwind CSS", "Django", "Python", "SQLite3"].map((tech,key)=>(
                                <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.1)] transition-all">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <div className="flex justify-between items-center">
                            <a href="https://instamart-frontend-ph88.onrender.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                                View Project →
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};