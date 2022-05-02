import React from 'react';

const TechStack = () => {

    return(
        <div>
            <h2> Tech Stack</h2>
            <div id="tech-stack">
                <img src={require("../images/techStackIcons/python.png")} alt="python icon"/>
                <img src={require("../images/techStackIcons/css.png")} alt="css icon"/>
                <img src={require("../images/techStackIcons/Flask.png")} alt="flask icon"/>
                <img src={require("../images/techStackIcons/git.png")} alt="git icon"/>
                <img src={require("../images/techStackIcons/GitHub.jpeg")} alt="github icon"/>
                <img src={require("../images/techStackIcons/HTML5.png")} alt="html icon"/>
                <img src={require("../images/techStackIcons/javascript.jpeg")} alt="javascript icon"/>
                <img src={require("../images/techStackIcons/PostgrSQL.png")} alt="postgresql icon"/>
                <img src={require("../images/techStackIcons/react.png")} alt="react icon"/>
            </div>
        </div>
    )
}

export default TechStack;