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
        flex-wrap: wrap;
        justify-content: space-evenly;
        align-content: center;
        list-style: none;
        color: white;
        min-height: 500px;
    `

    return(
        <ProjectContainer>

                {projectNodes}

        </ProjectContainer>
    )



};

export default Project;