import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import cloudimage from '../../assets/images/cloudimage.png';
import github from '../../assets/images/github.png';
import hulu from '../../assets/images/hulu.png';
import Netflix from '../../assets/images/Netflix.png';
import projectsData from '../../data/projects.json';
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-no-hover-color');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });


    const renderProjects = (project) => {
        return (
            <div className="images-container">
                {
                    project.map((proj, idx) => {
                        return (
                            <div className="image-box" key={idx}>
                                <img
                                    src={proj.cover === 'Netflix' ? Netflix : proj.cover === 'cloudimage' ? cloudimage : proj.cover === 'hulu' ? hulu : github}
                                    className="portfolio-image"
                                    alt="portfolio" />
                                <div className="content">
                                    <p className="title">{proj.title}</p>
                                    <h4 className="description">{proj.description}</h4>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(proj.url)}
                                    >View</button>
                                    <button
                                        className="btn"
                                        onClick={() => window.open(proj.code)}
                                    >Code</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Projects".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderProjects(projectsData.projects)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Projects;