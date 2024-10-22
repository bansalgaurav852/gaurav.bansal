import { SiFlutter, SiReact, SiTailwindcss, SiFirebase, SiGit, SiGithub, SiApollographql, SiGraphql, SiXstate, SiSwift, SiCss3, SiGoogle, SiGoogleads, SiMysql } from 'react-icons/si'; // Import necessary icons

const Skills = () => {
    const skills = [
        { name: "Flutter", icon: <SiFlutter className="h-8 w-8 text-blue-400 mx-auto" /> },
        { name: "React.js", icon: <SiReact className="h-8 w-8 text-cyan-500 mx-auto" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="h-8 w-8 text-blue-300 mx-auto" /> },
        { name: "Firebase", icon: <SiFirebase className="h-8 w-8 text-yellow-500 mx-auto" /> },
        { name: "Git", icon: <SiGit className="h-8 w-8 text-red-500 mx-auto" /> },
        { name: "GitHub", icon: <SiGithub className="h-8 w-8 text-gray-300 mx-auto" /> },
        { name: "RESTful APIs", icon: <SiApollographql className="h-8 w-8 text-pink-500 mx-auto" /> },
        { name: "GraphQL APIs", icon: <SiGraphql className="h-8 w-8 text-pink-500 mx-auto" /> },
        { name: "State Management", icon: <SiXstate className="h-8 w-8 text-green-500 mx-auto" /> },
        { name: "Web Frontend", icon: <SiCss3 className="h-8 w-8 text-blue-500 mx-auto" /> },
        { name: "App Publishing", icon: <SiGoogle className="h-8 w-8 text-green-400 mx-auto" /> },
        { name: "Google AdMob", icon: <SiGoogleads className="h-8 w-8 text-red-400 mx-auto" /> },
        { name: "SwiftUI", icon: <SiSwift className="h-8 w-8 text-orange-500 mx-auto" /> },
        { name: "MySQL", icon: <SiMysql className="h-12 w-12 text-orange-500 mx-auto" /> },
    ];

    return (
        <section id="skills" className="py-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="bg-gray-800 rounded-lg p-4 text-center hover:bg-slate-700 transition duration-300 ease-in-out"
                    >
                        {skill.icon}
                        <span className="mt-2 block text-sm font-semibold text-white">{skill.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
