import React from 'react';
import ProjectCard from './projectcard';

type Project = {
    name: string;
    description: string;
    link: string;
    image: string;
    asset: string;
};

const Projects: React.FC = () => {
    const projects: Project[] = [
        {
            name: "CoinGabbar",
            description: "Crypto Information and Research Marketplace",
            link: "https://play.google.com/store/apps/details?id=com.coingabbar",
            image: "https://play-lh.googleusercontent.com/5P0JrZjQBuMB3mERlpWfWWWb5jsW94LBYJiRDdO650iBVAbVoCO8o1q5Z1XQ0mZDLbo=w240-h480-rw",
            asset: "/project-image/coingabbar.webp"
        },
        {
            name: "CoinGabbar Portfolio",
            description: "Crypto holdings dashboard",
            link: "https://portfolio.coingabbar.com/",
            image: "https://play-lh.googleusercontent.com/5P0JrZjQBuMB3mERlpWfWWWb5jsW94LBYJiRDdO650iBVAbVoCO8o1q5Z1XQ0mZDLbo=w240-h480-rw",
            asset: "/project-image/coingabbar-portfolio.webp"
        },
        {
            name: "Mazoom Invitations",
            description: "Electronic invitations",
            link: "https://play.google.com/store/apps/details?id=com.app.mazoom",
            image: "https://play-lh.googleusercontent.com/6fFVBGTEmVIhNL11MNcqrc1p-W5J_8Dq_b9QD7Z_HNFJAihDSZEbiF4XfZDRt38SBg=w240-h480-rw",
            asset: "/project-image/mazoom.webp"
        },
        {
            name: "Invite Smart",
            description: "Simply upload your invitation image and create unique invitations for your guest with QR codes.",
            link: "https://play.google.com/store/apps/details?id=com.invitesmart1234",
            image: "https://play-lh.googleusercontent.com/1ur_ZjAMy-uZnsGLrSAm4V6OS4TMdqJqVteguQbRyXuDtLuGD1SLX7OMjMCLd-cZZc9c=w240-h480-rw",
            asset: "/project-image/invitesmart.webp"
        },
        {
            name: "MyCook",
            description: "MYCook is a recipe sharing platform",
            link: "https://play.google.com/store/apps/details?id=com.ondho.mycooktouch",
            image: "https://play-lh.googleusercontent.com/1cfx0RR9fITLd95Z92ctso8EgoZ51naaDbnCfExPt1nm4dSQlSAcZ1AOA5o4HX9udgA=w240-h480-rw",
            asset: "/project-image/mycook.webp"
        },
        {
            name: "Fasto - Advance",
            description: "Fasto, a cutting-edge logistics application",
            link: "https://play.google.com/store/apps/details?id=com.fasto",
            image: "https://play-lh.googleusercontent.com/gbQgxjujLTblfj3_t0jW1sGw7K0HQ8Y-AWHANldPoRBbcVrhDH3VN0l1YTQ7Y8ZcWV8=w240-h480-rw",
            asset: "/project-image/fasto.webp"
        },
        {
            name: "FlexyCargo (Advance)",
            description: "Real-time control tech for logistics and courier operations.",
            link: "https://play.google.com/store/apps/details?id=com.flexycargo.advance",
            image: "https://play-lh.googleusercontent.com/NlzMog83F5JvFhrCoYkOA5IoJ-uE_xU2oaCM-pBOaQefpZrQZAE80trfYW400UZCdmg=w240-h480-rw",
            asset: "/project-image/flexycargo.webp"
        },
        {
            name: "PCCS",
            description: "Real-time control tech for logistics and courier operations.",
            link: "https://play.google.com/store/apps/details?id=com.pccs.app",
            image: "https://play-lh.googleusercontent.com/VL3OXCjqdZSwA7kHoEYo6YTD2-eiAPRsgJQumMkHdEKyjh-7onc-NpuBj4vZa5rNPqA=w240-h480-rw",
            asset: "/project-image/pccs.webp"
        },
    ];

    const githubProjects: Project[] = [
        {
            name: "PortFolio",
            description: "My portfolio Website",
            link: "https://github.com/bansalgaurav852/gaurav.bansal",
            image: "",
            asset: "./portfolio.png"
        },
        {
            name: "Todo App",
            description: "Todo ",
            link: "https://github.com/bansalgaurav852/todoapp",
            image: "",
            asset: "/project-image/todo.png"
        }
    ];

    return (
        <section id="projects" className="py-10">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}


            </div>
            <h2 className="text-3xl font-bold mb-8 mt-20  text-center">Open Source Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {githubProjects.map((project) => (
                    <ProjectCard key={project.name} project={project} />
                ))}</div>
        </section>
    );
}

export default Projects;
