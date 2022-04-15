import React from 'react';
import styled from "styled-components";

const Project = ({projects}) => {

    const projectNodes = projects.map((project, index) => {
        return(
            <li key={index}>
                <h2>{project.title}</h2>
                <img src={project.img} width="200px"></img>
                <p>{project.description}</p>
            </li>
        )
    });

    const ProjectContainer = styled.div`
        display: flex;
        justify-content: space-evenly;
        list-style: none;
        color: white;
    `

    return(
        <ProjectContainer>

                {projectNodes}

        </ProjectContainer>
    )



};

export default Project;