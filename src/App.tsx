
import { SiFlutter, SiFirebase, SiMysql, SiSwift, SiTailwindcss, SiApollographql, SiReact, SiGithub, SiCss3, SiGoogle, SiGoogleads, SiGraphql, SiGit, SiXstate, SiLeetcode, SiLinkedin, SiGmail } from 'react-icons/si';
import React, { useEffect, useState } from 'react';
import Portfolio from './experience';


const Home: React.FC = () => {
  const [currentSection, setCurrentSection] = useState('Me');

  // A map to associate hash URLs with section titles
  const sectionMap: { [key: string]: string } = {
    '#home': 'Me',
    '#skills': 'Skills',
    '#projects': 'Projects',
    '#about': 'About',
    '#contact': 'Contact',
  };

  // Effect to listen for URL hash changes and update the section
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash || '#home'; // Default to home
      setCurrentSection(sectionMap[hash] || 'Me'); // Fallback to 'Developer'
    };

    // Call the function when component mounts and whenever the URL hash changes
    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Run initially to detect the current hash

    return () => {
      window.removeEventListener('hashchange', handleHashChange); // Cleanup listener
    };
  }, []);






  return (
    <div className={`min-h-screen ${'bg-gray-900 text-white'}`}>
      <nav className="fixed top-0 left-0 right-0 z-10 bg-opacity-90 backdrop-filter backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-semibold"><span className="text-orange-500">&lt;</span>{currentSection}<span className="text-orange-500">/&gt;</span></span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="hover:text-orange-500  px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#skills" className="hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Skills</a>
                <a href="#projects" className="hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Projects</a>
                <a href="#about" className="hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">About me</a>
                <a href="#contact" className="hover:text-orange-500 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
              </div>
            </div>
            <div className="flex items-center">

            </div>
          </div>
        </div>
      </nav>
      <div className='flex justify-center '>
        <div className="fixed z-10 border-2 border-gray-500 bg-gray-700 backdrop-blur  flex justify-center gap-5 place-content-center bottom-8 content-center space-x-4  py-4 px-8 rounded-full h-auto">
          <a href="https://www.linkedin.com/in/gaurav-bansal-b01377187/" target="_blank" rel="noopener noreferrer" >
            <SiLinkedin className="h-6 w-6   transition duration-300 ease-in-out  " />
          </a>
          <a href="https://github.com/bansalgaurav852" target="_blank" rel="noopener noreferrer" >
            <SiGithub className="h-6 w-6  transition duration-300 ease-in-out " />
          </a>
          <a href="https://leetcode.com/u/bansalgaurav852/" target="_blank" rel="noopener noreferrer" >
            <SiLeetcode className="h-6 w-6  transition duration-300 ease-in-out " />
          </a>
          <a href="mailto:Bansalgaurav850@gmail.com" >
            <SiGmail className="h-6 w-6  transition duration-300 ease-in-out " />
          </a>
        </div>
      </div>



      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <section id="home" className="text-center py-20">
          <div>
            <img src="/image/gaurav.jpeg" alt="Gaurav Bansal" className="mx-auto rounded-full w-48 h-48 object-cover mb-8" // Add object-cover
            />
          </div>
          <h1 className="text-4xl font-bold mb-4">Hi, I'm Gaurav 👋</h1>
          <h2 className="text-2xl font-semibold mb-4">Software Developer</h2>
          <Portfolio />
          <div className="flex justify-center space-x-4">
            <a href="#contact" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
              Contact me
            </a>
            <a href="#projects" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
              My Projects
            </a>
          </div>
        </section>

        <section id="skills" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { name: "Flutter", icon: <SiFlutter className="h-8 w-8 text-blue-400 mx-auto" /> },
              { name: "React.js", icon: <SiReact className="h-8 w-8 text-cyan-500 mx-auto" /> },
              { name: "Tailwind CSS", icon: <SiTailwindcss className="h-8 w-8 text-blue-300 mx-auto" /> },
              { name: "Firebase", icon: <SiFirebase className="h-8 w-8 text-yellow-500 mx-auto" /> },
              { name: "Git", icon: <SiGit className="h-8 w-8 text-red-500 mx-auto" /> },
              { name: "GitHub", icon: <SiGithub className="h-8 w-8 text-gray-300 mx-auto" /> },
              { name: "RESTful APIs", icon: <SiApollographql className="h-8 w-8 text-pink-500 mx-auto" /> },
              { name: "GraphQL APIs", icon: <SiGraphql className="h-8 w-8 text-pink-500 mx-auto" /> },
              { name: "State Management", icon: <SiXstate className="h-8 w-8 text-green-500 mx-auto" /> }, // Placeholder icon for State Management
              { name: "SwiftUI", icon: <SiSwift className="h-8  w-8 text-orange-500 mx-auto" /> },
              { name: "Web Frontend", icon: <SiCss3 className="h-8 w-8 text-blue-500 mx-auto" /> }, // Using CSS icon for frontend
              { name: "App Publishing", icon: <SiGoogle className="h-8 w-8 text-green-400 mx-auto" /> }, // Placeholder Google icon
              { name: "Google AdMob", icon: <SiGoogleads className="h-8 w-8 text-red-400 mx-auto" /> },
              { name: "MySQL", icon: <SiMysql className="h-12 w-12 text-orange-500 mx-auto" /> }
            ].map((skill) => (
              // <div className='example-1'>
              <div key={skill.name} className="bg-gray-800 rounded-lg p-4 text-center hover:bg-slate-700 transition duration-300 ease-in-out inner">
                {skill.icon}
                <span className="mt-2 block text-sm font-semibold">{skill.name}</span>
              </div>
              // </div>
            ))}
          </div>
        </section>

        <section id="projects" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
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
            ].map((project) => (
              <div className='example-5'
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

                <a
                  key={project.name}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
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


                </a>
              </div>



            ))}
          </div>
        </section >

        <section id="about" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-gray-800 rounded-lg p-6">
            <p className="mb-4">
              I am a passionate software developer with a Bachelor of Engineering in Electronics and Telecommunications from the Institute of Engineering and Technology, Davv, Indore. With a strong foundation in mobile app development using Flutter, I thrive on creating dynamic and intuitive applications that enhance user experiences.</p>
            <p className="mb-4">
              My expertise extends to various technologies, including React.js and Firebase, allowing me to build robust, scalable applications tailored to client needs. I have a diverse portfolio that includes developing innovative crypto-related applications and efficient logistics platforms, among other exciting projects.</p>
            <p>
              I am dedicated to solving real-world problems through technology, and I constantly seek opportunities to learn and grow in this ever-evolving field. My goal is to contribute to projects that not only meet functional requirements but also provide seamless interactions for users.
            </p>
          </div>
        </section>

        <section id="contact" className="py-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <p className="mb-4">Feel free to reach out to me for any inquiries or collaboration opportunities.</p>
            <p className="mb-2">Email: Bansalgaurav850@gmail.com</p>
            <p>Phone: +91 8889175521</p>
          </div>
        </section>
      </main >

      <footer className="bg-gray-800 py-4 text-center">
        <p>&copy; 2024 Gaurav Bansal. All rights reserved.</p>
      </footer>
    </div >
  )
}


export default Home;