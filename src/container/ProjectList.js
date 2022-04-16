import React, {useState} from 'react';
import Project from '../components/Project';
import holderimg from "../images/project_holder.png";


const ProjectList = () => {

    const [projects, setProjects] = useState([ 
        { 
            title: "Event Bookings Manager",
            description: "Solo Full-Stack Python Project",
            url: "https://github.com/CordiiT14/python_project_bookings_manager",
            img: `${holderimg}`},
        { 
            title: "React Weather App",
            description: "Front-end React Weather App using API",
            url: "https://github.com/CordiiT14/w7_hw_weather_app",
            img: `${holderimg}`},
        {
            title: "Rock-Paper-Scissors",
            description: "Python (Flask) rock paper scissors game",
            url: "https://github.com/CordiiT14/wk3_hw_Flask_rockpaperscissors",
            img: `${holderimg}`}
        
    ])


    return(

            <Project projects={projects}/>

    )

};

export default ProjectList;