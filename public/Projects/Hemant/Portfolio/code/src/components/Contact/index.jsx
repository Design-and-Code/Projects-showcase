import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()

    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-no-hover-color')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('service_4va5gyd', 'template_v9eg6qs', form.current, 'XNV7d16a8nY806xbo').then(() => {
            alert('Message successfully sent!')
            window.location.reload(false)
        }, () => {
            alert('Failed to send the message, please try again')
        }
        )
    }

    return (
        <>
            <div className="container-contact contact-page">

                <div className="text-zone-contact">

                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']} idx={15} />
                    </h1>

                    <p className='text-contact'>
                        I am interested in freelance opportunities - especially ambitious or
                        large projects. However, if you have other request or question,
                        don't hesitate to contact me using below form either.
                    </p>

                    <div className="contact-form">
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>

                                <li className="half">
                                    <input placeholder="Name" type="text" name="name" required />
                                </li>

                                <li className="half">
                                    <input placeholder="Email" type="email" name="email" required />
                                </li>

                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>

                                <li>
                                    <textarea placeholder="Message" name="message" required ></textarea>
                                </li>

                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>

                <div className="map-wrap">

                    <div className="info-map">
                        Hemant,
                        <br />
                        New Delhi, 110086
                        <br />
                        INDIA, <br />
                        <br />
                        <a rel="noreferrer" target='_blank' href="mailto:hello@itsmehemant.tech"><span>hello@itsmehemant.tech</span></a>
                    </div>

                    <MapContainer center={[28.686472, 77.071583]} zoom={15} >
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[28.686472, 77.071583]}>
                            <Popup>Hemant lives here, come over for a cup of coffee :)</Popup>
                        </Marker>
                    </MapContainer>
                </div>

            </div>

            <Loader type="pacman" />
        </>
    )
}

export default Contact