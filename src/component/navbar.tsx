
import { useEffect, useState } from 'react';

const NavBar = () => {
    // A map to associate hash URLs with section titles
    const sectionMap: { [key: string]: string } = {
        '#home': 'Home',
        '#skills': 'Skills',
        '#projects': 'Projects',
        '#about': 'About',
        '#contact': 'Contact',
    };
    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash || '#home'; // Default to home
            setCurrentSection(sectionMap[hash] || 'Home'); // Fallback to 'Developer'
        };

        // Call the function when component mounts and whenever the URL hash changes
        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Run initially to detect the current hash

        return () => {
            window.removeEventListener('hashchange', handleHashChange); // Cleanup listener
        };
    }, []);

    const [currentSection, setCurrentSection] = useState('Home');

    return (<nav className="fixed top-0 left-0 right-0 z-10 bg-opacity-90 backdrop-filter backdrop-blur-sm">
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
    </nav>)
}

export default NavBar;