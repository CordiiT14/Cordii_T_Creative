import React from 'react';
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
import dart from '../images/techStackIcons/dart_logo.png';
import flutter from '../images/techStackIcons/flutter_logo.png';
import pomodorogif from '../images/project_gifs/pomodoro.gif'
import triolingogif from '../images/project_gifs/Triolingo.gif';
import weatherappgif from '../images/project_gifs/weatherappRezise.gif'
import eventsgif from '../images/project_gifs/bookingmanager.gif';
import rpsgif from '../images/project_gifs/rockpaperscissors.gif';
import edlitcomp from '../images/project_gifs/homepage_locatiomView.gif';


const ProjectList = () => {



    return(
        <section id="project-container">
            <div className='project'>
                <a href="https://github.com/CordiiT14/edinburgh_literary_companion" target="_blank" rel="noreferrer">
                    <h3>Edinburgh Literary Companion</h3>
                </a>
                <img className='project-img' src={edlitcomp} alt="Mobile app screenshot"></img>
                <p>Mobile app was designed as a companion for those who want to explore Edinburgh's famous attractions, landmarks and bookshops. The app also lists books which are based in Edinburgh.</p>
                <section className='stack-logos'>
                    <img className='tech-stack' src={dart} alt='Dart'></img>
                    <img className='tech-stack' src={flutter} alt='Flutter'></img>
                </section>
            </div>
            <div className='project'>
                <a href="https://github.com/CordiiT14/Study_Zone_Pomodoro_Timer" target="_blank" rel="noreferrer">
                    <h3>Study Zone - Pomodoro Timer</h3>
                </a>
                <img className='project-img' src={pomodorogif} alt="Pomodoro Timer screenshot"></img>
                <p>React app to support dedicated study/work sessions. Contains a Pomodoro timer and Spotify Playlist. Will contain: task tracker.</p>
                <section className='stack-logos'>
                    <img className='tech-stack' src={react} alt='React'></img>
                    <img className='tech-stack' src={js} alt='JavaScript'></img>
                </section>
            </div>
            <div className='project'>
                <a href="https://github.com/CLg003/TrioLingo" target="_blank" rel="noreferrer">
                    <h3>TrioLingo</h3>
                </a>
                <img className='project-img' src={triolingogif} alt="TrioLingo Screenshot"></img>
                <p>Prototype of a language app for children. Three lesson styles with quiz and a final memory game.</p>
                <section className='stack-logos'>
                    <img className='tech-stack' src={react} alt='React'></img>
                    <img className='tech-stack' src={js} alt='JavaScript'></img>
                    <img className='tech-stack' src={mongodb} alt='MongoDB'></img>
                </section>
            </div>
            <div className='project'>
                <a href="https://github.com/CordiiT14/w7_hw_weather_app" target="_blank" rel="noreferrer">
                    <h3>Weather App</h3>
                </a>
                <img className='project-img' src={weatherappgif} alt="Weather App screenshot"></img>
                <p>Weather app, using <a href="https://github.com/robertoduessmann/weather-api" target="_blank" rel="noreferrer">goweather.herokuapp</a> RESTful API. Shows current and three day forecast. Favourites to save locations.</p>
                <section className='stack-logos'>
                    <img className='tech-stack' src={react} alt="react logo"></img>
                    <img className='tech-stack' src={js} alt='JavaScript'></img>
                </section>

            </div>
            <div className='project'>
                <a href="https://github.com/CordiiT14/python_project_bookings_manager" target="_blank" rel="noreferrer">
                    <h3>Event Bookings Manager</h3>
                </a>
                <img className='project-img' src={eventsgif} alt="Event Bookings Screenshot"></img>
                <p>Program to manage customers, and register customers for events. </p>
                <section className='stack-logos'>
                    <img className='tech-stack' src={python} alt='Python'></img>
                    <img className='tech-stack' src={flask} alt='Flask'></img>
                    <img className='tech-stack' src={postgrSQL} alt='PostgreSQL'></img>
                </section>

            </div>
            <div className='project'>
                <a href="https://github.com/CordiiT14/wk3_hw_Flask_rockpaperscissors" target="_blank" rel="noreferrer">
                    <h3>Rock-Paper-Scissors</h3>
                </a>
                <img className='project-img' src={rpsgif} alt="rock-paper-scissors screenshot"></img>
                <p>Rock Paper Scissors game. Play with against a friend or against the computer.</p>
                <section className='stack-logos'>
                    <img className='tech-stack' src={python} alt='Python'></img>
                    <img className='tech-stack' src={flask} alt='Flask'></img>
                </section>
            </div>
        </section>
    )

};

export default ProjectList;