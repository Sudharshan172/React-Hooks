export const About = () => {

    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "Tailwind CSS",
        "React",
    ]
    const backendSkills = [
        "Django",
        "Node.js",
        "Express.js",
        "Python",
        "MySQL"
    ]
    return (
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"> {" "} About Me</h2>
                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-6">
                        Full Stack Developer with hands-on experience in building responsive web applications using 
                        React.js, Tailwind CSS, Django, and Express.js. Skilled in converting Figma designs into functional 
                        UI and integrating them with backend systems. 
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key)=>(
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key)=>(
                                    <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59, 130, 246, 0.2)] transition">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-whit/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-lg font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li className="list-none">
                                <strong>B Tech in Electrical Engineering</strong><br/> <i>Sree Vidyanikethan Engineering College, Tirupati, Andhra Pradesh
                                - [2020-2024]</i>
                                <p className="mt-2">Aggregate: 87%</p>
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-whit/10 border hover:-translate-y-1 transition-all">
                        <h3 className="text-lg font-bold mb-4">Work Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold mb-1"> {" "} Software Development Intern - <i className="font-normal">Bluestock Fintech | April 2025 - Present </i></h4>
                                <p>Developing an IPO Web Application using React, Tailwind CSS, Django, and MySQL. Working from 
                                    Figma designs to build responsive UI and integrate backend APIs. Gaining hands-on experience in full 
                                    stack development and real-world project implementation. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}