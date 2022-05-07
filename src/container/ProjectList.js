import React from 'react';
import GitHubIcon from "../images/techStackIcons/GitHub.png"
import pomodoro from '../images/projects/pomodorotimer.png'
import triolingo from '../images/projects/Triolimgo.png'
import weather from '../images/projects/weatherApp.png'
import events from '../images/projects/eventsBooking.png'
import rps from '../images/projects/rockpaperscissors1.png'
import react from '../images/techStackIcons/react.png'
import mongodb from '../images/techStackIcons/MongoDB.png'
import js from '../images/techStackIcons/javascript.jpeg'
import python from '../images/techStackIcons/python.png'
import flask from '../images/techStackIcons/Flask.png'
import postgrSQL from '../images/techStackIcons/PostgrSQL.png'


const ProjectList = () => {



    return(
        <section id="project-container">
            <div className='project'>
                <a href="https://github.com/CordiiT14/Study_Zone_Pomodoro_Timer" target="_blank">
                    <h3>Study Zone - Pomodoro Timer</h3>
                </a>
                <img className='project-img' src={pomodoro}></img>
                <p>Study aid app with Pomodoro Timer</p>
                <img className='tech-stack' src={react} alt='React'></img>
                <img className='tech-stack' src={js} alt='JavaScript'></img>
            </div>
            <div className='project'>
                <a href="https://github.com/CLg003/TrioLingo" target="_blank">
                    <h3>TrioLingo</h3>
                </a>
                <img className='project-img' src={triolingo}></img>
                <p>A prototype of an educational language app for kids</p>
                <img className='tech-stack' src={react} alt='React'></img>
                <img className='tech-stack' src={js} alt='JavaScript'></img>
                <img className='tech-stack' src={mongodb} alt='MongoDB'></img>
            </div>
            <div className='project'>
                <a href="https://github.com/CordiiT14/w7_hw_weather_app" target="_blank">
                    <h3>Weather App</h3>
                </a>
                <img className='project-img' src={weather}></img>
                <p>React Weather App using API for weather data</p>
                <img className='tech-stack' src={react}></img>
                <img className='tech-stack' src={js} alt='JavaScript'></img>
            </div>
            <div className='project'>
                <a href="https://github.com/CordiiT14/python_project_bookings_manager" target="_blank">
                    <h3>Event Bookings Manager</h3>
                </a>
                <img className='project-img' src={events}></img>
                <p>Booking system to add customers to events</p>
                <img className='tech-stack' src={python} alt='Python'></img>
                <img className='tech-stack' src={flask} alt='Flask'></img>
                <img className='tech-stack' src={postgrSQL} alt='PostgreSQL'></img>
            </div>
            <div className='project'>
                <a href="https://github.com/CordiiT14/wk3_hw_Flask_rockpaperscissors" target="_blank">
                    <h3>Rock-Paper-Scissors</h3>
                </a>
                <img className='project-img' src={rps}></img>
                <p>Rock Paper Scissors game. Play with a friend or against computer</p>
                <img className='tech-stack' src={python} alt='Python'></img>
                <img className='tech-stack' src={flask} alt='Flask'></img>
            </div>
        </section>
    )

};

export default ProjectList;