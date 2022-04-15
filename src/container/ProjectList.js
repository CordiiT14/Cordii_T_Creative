import React, {useState} from 'react';
import Project from '../components/Project';
import holderimg from "../images/project_holder.png";


const ProjectList = () => {

    const [projects, setProjects] = useState([ 
        { 
            title: "Python Project",
            description: "Solo Full-Stack Python Project",
            url: "",
            img: `${holderimg}`},
        { 
            title: "React Weather App",
            description: "Front-end React Weather App",
            url: "",
            img: `${holderimg}`},
        {
            title: "Rock Paper Scissors",
            description: "Python - Flask rock paper scissors game app",
            url: "",
            img: `${holderimg}`}
        
    ])


    return(

            <Project projects={projects}/>

    )

};

export default ProjectList;