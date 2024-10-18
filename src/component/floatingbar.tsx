import { SiGithub, SiLeetcode, SiLinkedin, SiGmail } from 'react-icons/si';

const FloatingBar = () => {
    return (<div className='flex justify-center '>
        <div className="fixed z-10 border-2 border-gray-500 bg-gray-700 backdrop-blur  flex justify-center gap-5 place-content-center bottom-10 content-center space-x-4  py-4 px-8 rounded-full h-auto">
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
    </div>)
}

export default FloatingBar;