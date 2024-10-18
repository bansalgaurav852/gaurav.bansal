import { useState, useEffect } from 'react';





const Portfolio = () => {
    const startDate = new Date('2022-01-01'); // Start date
    const [experience, setExperience] = useState('');

    useEffect(() => {
        const calculateExperience = () => {
            const currentDate = new Date();
            const totalYears = currentDate.getFullYear() - startDate.getFullYear();
            const totalMonths = currentDate.getMonth() - startDate.getMonth() + 1;
            const totalDays = currentDate.getDate() - startDate.getDate();

            let years = totalYears;
            let months = totalMonths;

            // Adjust years and months if necessary
            if (totalMonths < 0) {
                years -= 1;
                months += 12;
            }

            // If days are negative, adjust the months
            if (totalDays < 0) {
                months -= 1;
                if (months < 0) {
                    years -= 1;
                    months += 12;
                }
            }

            // Create the experience string
            const experienceString = `${years} year(s) ${months} month(s)`;
            setExperience(experienceString);
        };

        calculateExperience();
    }, []);
    return (
        <div className="max-w-3xl mx-auto px-2 mb-6 text-white rounded-lg shadow-md">

            <p className="text-white ">
                Welcome to my portfolio! I am Gaurav Bansal, a dedicated software developer with a strong background in <strong>Flutter</strong> and <strong>React.js</strong>, specializing in mobile app development. With total work experience <strong>{experience}</strong>, I have honed my skills in crafting seamless and innovative digital solutions that enhance user experiences.
            </p>
            <h2 className="mt-6 text-2xl font-semibold text-white">My Mission</h2>
            <p className="mt-2 text-white ">
                My goal is to advance my career while participating in inspiring projects that push the boundaries of technology. I am passionate about collaborating with others to shape the future of software development, creating applications that not only meet user needs but also inspire and engage.
            </p>

        </div>
    );
};

export default Portfolio;
