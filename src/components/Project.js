import React from 'react';

const Project = ({projects}) => {

    const projectNodes = projects.map((project, index) => {
        return(
            <li id="project" key={index}>
                <h3>{project.title}</h3>
                <img src={project.img}></img>
                <p>{project.description}</p>
            </li>
        )
    });

    return(
        <section  id="project-container" >
        <h2>Projects</h2>
            <ul>
                {projectNodes}
            </ul>
            <p>This section is in development. Thank you for your patience.</p>
        </section>
    )



};

export default Project;