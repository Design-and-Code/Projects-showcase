import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './about.scss'
import html from '../../assets/images/html.png'
import css from '../../assets/images/css.png'
import javascript from '../../assets/images/javascript.png'
import react from '../../assets/images/react.png'
import nextjs from '../../assets/images/nextjs.png'
import tailwind from '../../assets/images/tailwind.png'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-no-hover-color')
        }, 3000)
    }, [])

    return (
        <>
            <div className="about-container about-page">
                <div className="text-zone-about">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['M', 'e', ',', ' ', 'M', 'y', 's', 'e', 'l', 'f', ',', ' ', '&', ' ', 'I']}
                            idx={15}
                        />
                    </h1>
                    <div className='text-about'>
                        <p>
                            I'm very ambitious front-end developer looking for a role in
                            established IT company with the opportunity to work with the latest
                            technologies on challenging and diverse projects.
                        </p>
                        <p align="LEFT">
                            I'm quietly confident, naturally curious, and perpetually working on
                            improving my chops one design problem at a time.
                        </p>
                        <p>
                            If I need to define myself in one sentence that would be a family
                            person, a sports fanatic, learner enthusiast, and tech-obsessed!!!
                        </p>
                    </div>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <img src={html} alt="tailwind" />
                            {/* <FontAwesomeIcon icon={tailwind} color="#5ED4F4" /> */}
                        </div>
                        <div className="face2">
                            <img src={css} alt="tailwind" />
                            {/* <FontAwesomeIcon icon={faHtml5} color="#F06529" /> */}
                        </div>
                        <div className="face3">
                            <img src={javascript} alt="tailwind" />
                            {/* <FontAwesomeIcon icon={faCss3} color="#28A4D9" /> */}
                        </div>
                        <div className="face4">
                            <img src={react} alt="tailwind" />
                            {/* <FontAwesomeIcon icon={faReact} color="#5ED4F4" /> */}
                        </div>
                        <div className="face5">
                            <img src={tailwind} alt="tailwind" />
                            {/* <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" /> */}
                        </div>
                        <div className="face6">
                            <img src={nextjs} alt="tailwind" />
                            {/* <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" /> */}
                        </div>
                    </div>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default About