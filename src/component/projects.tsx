const Projects = () => {

    const projects = [
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
            image: "https://play-lh.googleusercontent.com/5P0JrZjQBuMB3mERlpWfWWWb5jsW94LBYJiRDdO650iBVAbVoCO8o1q5Z1XQ0mZDLbo=w240-h480-rw"
            , asset: "/project-image/coingabbar-portfolio.webp"
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
            image: "https://play-lh.googleusercontent.com/1ur_ZjAMy-uZnsGLrSAm4V6OS4TMdqJqVteguQbRyXuDtLuGD1SLX7OMjMCLd-cZZc9c=w240-h480-rw"
            , asset: "/project-image/invitesmart.webp"
        },
        {
            name: "MyCook",
            description: "MYCook is a recipe sharing platform",
            link: "https://play.google.com/store/apps/details?id=com.ondho.mycooktouch",
            image: "https://play-lh.googleusercontent.com/1cfx0RR9fITLd95Z92ctso8EgoZ51naaDbnCfExPt1nm4dSQlSAcZ1AOA5o4HX9udgA=w240-h480-rw"
            , asset: "/project-image/mycook.webp"
        },
        {
            name: "Fasto - Advance",
            description: "Fasto, a cutting-edge logistics application",
            link: "https://play.google.com/store/apps/details?id=com.fasto",
            image: "https://play-lh.googleusercontent.com/gbQgxjujLTblfj3_t0jW1sGw7K0HQ8Y-AWHANldPoRBbcVrhDH3VN0l1YTQ7Y8ZcWV8=w240-h480-rw"
            , asset: "/project-image/fasto.webp"
        }, {
            name: "FlexyCargo (Advance)",
            description: "Real-time control tech for logistics and courier operations.",
            link: "https://play.google.com/store/apps/details?id=com.flexycargo.advance",
            image: "https://play-lh.googleusercontent.com/NlzMog83F5JvFhrCoYkOA5IoJ-uE_xU2oaCM-pBOaQefpZrQZAE80trfYW400UZCdmg=w240-h480-rw"
            , asset: "/project-image/flexycargo.webp"
        },
        {
            name: "PCCS",
            description: "Real-time control tech for logistics and courier operations.",
            link: "https://play.google.com/store/apps/details?id=com.pccs.app",
            image: "https://play-lh.googleusercontent.com/VL3OXCjqdZSwA7kHoEYo6YTD2-eiAPRsgJQumMkHdEKyjh-7onc-NpuBj4vZa5rNPqA=w240-h480-rw"
            , asset: "/project-image/pccs.webp"
        }
    ];
    return (<section id="projects" className="py-10">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (

                <a className='example-5'
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
                        // stroke-linejoin="round"
                        />
                    </svg>

                    <div
                        key={project.name}
                        className=" p-5 flex w-full h-full bg-gray-800 rounded-lg  transition duration-300"

                    >


                        <div className="flex items-center">
                            <div className="w-24 h-24 flex-shrink-0">
                                <img
                                    src={project.asset}
                                    alt={project.name}
                                    className="rounded-lg object-cover w-full h-full"
                                    style={{ aspectRatio: '1/1' }} // Ensures the image is always square
                                />
                            </div>

                            <div className="ml-4"> {/* Add margin-left to space it from the image */}
                                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                                <p className="text-gray-400">{project.description}</p>
                            </div>
                        </div>


                    </div>
                </a>



            ))}
        </div>
    </section >
    )
}

export default Projects;