import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { VscChromeClose, VscMenu } from 'react-icons/vsc'
import { Link, NavLink } from 'react-router-dom'
import LogoS from '../../assets/images/logo-s.png'
import './index.scss'

const Sidebar = () => {
  const [toggleHam, setToggleHam] = useState(false)
  return (
    <>
      <div className="nav-bar">
        <Link to="/" >
          <div className="logo">
            <img className="sub-logo" src={LogoS} alt="hemant" />
            <span className='logo-name'>Hemant</span>
            <p>Web Developer</p>
          </div>
        </Link>

        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            Home
          </NavLink>

          <NavLink activeclassname="active" className="about-link" to="/about">
            About
          </NavLink>

          <NavLink activeclassname="active" className="portfolio-link" to="/projects">
            Projects
          </NavLink>

          <NavLink activeclassname="active" className="contact-link" to="/contact" >
            Contact
          </NavLink>

          <a rel="noreferrer" target="_blank" href='https://drive.google.com/file/d/1Rago-Qv4xCu_QNvP4mJb9fwTsOhWwfTL/view?usp=sharing' activeclassname="active" className="contact-link">
            Resume
          </a>
        </nav>

        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/hemantwasthere/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
          </li>

          <li>
            <a
              href="https://github.com/hemantwasthere"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </li>

          <li>
            <a
              href="https://twitter.com/hemantwasthere/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
            </a>
          </li>
        </ul>

      </div>

      <div className='toggleHam' onClick={() => setToggleHam(!toggleHam)}>
        {toggleHam ? <VscChromeClose size={40} /> : <VscMenu size={40} />}
      </div>

      {toggleHam && <>
        <div className="nav-bar-second">
          <Link to="/" onClick={() => setToggleHam(false)} >
            <div className="logo" >
              <img className="sub-logo" src={LogoS} alt="hemant" />
              <span className='logo-name'>Hemant</span>
              <p>Web Developer</p>
            </div>
          </Link>

          <nav>
            <NavLink onClick={() => setToggleHam(false)} exact="true" activeclassname="active" to="/">
              Home
            </NavLink>

            <NavLink onClick={() => setToggleHam(false)} activeclassname="active" className="about-link" to="/about">
              About
            </NavLink>

            <NavLink onClick={() => setToggleHam(false)} activeclassname="active" className="portfolio-link" to="/projects">
              Projects
            </NavLink>

            <NavLink onClick={() => setToggleHam(false)} activeclassname="active"
              className="contact-link" to="/contact">
              Contact
            </NavLink>

            <a rel="noreferrer" target="_blank" href='https://drive.google.com/file/d/1Rago-Qv4xCu_QNvP4mJb9fwTsOhWwfTL/view?usp=sharing' activeclassname="active" className="contact-link">
              Resume
            </a>
          </nav>

          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/hemantwasthere/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/hemantwasthere"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/hemantwasthere/"
                rel="noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon icon={faTwitter} color="#4d4d4e" />
              </a>
            </li>

          </ul>

        </div>
      </>}

    </>
  )
}

export default Sidebar