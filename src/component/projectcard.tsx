

type Project = {
    link: string;
    name: string;
    asset: string;
    description: string;
};

function ProjectCard({ project }: { project: Project }) {
    return (
        <a
            className="example-5"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
                <rect
                    rx="8"
                    ry="8"
                    className="line"
                    height="100%"
                    width="100%"
                />
            </svg>

            <div
                key={project.name}
                className="p-5 flex w-full h-full bg-gray-800 rounded-lg transition duration-300"
            >
                <div className="flex items-center">
                    <div className="w-24 h-24 flex-shrink-0">
                        <img
                            src={project.asset}
                            alt={project.name}
                            className="rounded-lg object-cover w-full h-full"
                            style={{ aspectRatio: '1/1' }}
                        />
                    </div>

                    <div className="ml-4">
                        <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                        <p className="text-gray-400">{project.description}</p>
                    </div>
                </div>
            </div>
        </a>
    );
}

export default ProjectCard;
