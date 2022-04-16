import React from 'react';

const Project = ({projects}) => {

    const projectNodes = projects.map((project, index) => {
        return(
            <li id="project" key={index}>
                <h3>{project.title}</h3>
                <img src={project.img}></img>
                <p>{project.description}</p>
                <a href={project.url} target="_blank">Github Repository</a>
            </li>
        )
    });

    return(
        <section  id="project-container" >
        <h2>Projects</h2>
            <ul>
                {projectNodes}
            </ul>
        </section>
    )



};

export default Project;