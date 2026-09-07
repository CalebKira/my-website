import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Contact from '../pages/Contact.jsx'
import Projects from '../pages/Projects.jsx'
import Music from '../pages/projects/Music.jsx'
import Games from '../pages/projects/Games.jsx'
import VoiceOver from '../pages/projects/VoiceOver.jsx'
import Writing from '../pages/projects/Writing.jsx'
import Embedded from '../pages/projects/Embedded.jsx'
import WebDev from '../pages/projects/WebDev.jsx'
/* all the other pages */

import Darkmode from './Darkmode.jsx'

function Navbar() {

    return (
        <BrowserRouter>
            <nav className="flex m-4">
                <div className="flex items-center gap-4">
                    <Link to="/" className="
                        text-(length:--home-size) text-(color:--text-color)
                        hover:text-(color:--highlight)
                        transition-all">
                            Caleb Kira
                    </Link>
                    {/* on hover, it auto changes with tailwind to smooth switch the color */}

                    <Darkmode></Darkmode>
                </div>

                <div className={"ml-auto flex items-center gap-8"}>
                    <Link to="/about" className="
                        text-(length:--link-size) text-(color:--text-color)
                        hover:text-(color:--highlight) hover:scale-110
                        transition-all">
                            About
                    </Link>

                    <Link to="/projects" className="
                        text-(length:--link-size) text-(color:--text-color)
                        hover:text-(color:--highlight) hover:scale-110
                        transition-all">
                            Projects
                    </Link>

                    <Link to="/contact" className="
                        text-(length:--link-size) text-(color:--text-color)
                        hover:text-(color:--highlight) hover:scale-110
                        transition-all">
                            Contact
                    </Link>
                    {/* each link has a width box that they are in to not make the nav bar shift around. 
                        also smooth transitions to scale and change the color of the links via tailwind */}

                    <br></br>
                </div>
                {/* this div defines the router links that are aligned to the right. Home is set to the left */}
            </nav>
            {/* this is effectively setting a nav element in the highest part
                of the app so that the nav bar persists always */}
            
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/contact" element={<Contact />}/>

                <Route path="/projects" element={<Projects />}/>
                <Route path="/projects/music" element={<Music />}/>
                <Route path="/projects/games" element={<Games />}/>
                <Route path="/projects/voiceover" element={<VoiceOver />}/>
                <Route path="/projects/writing" element={<Writing />}/>
                <Route path="/projects/embedded" element={<Embedded />}/>
                <Route path="/projects/webdev" element={<WebDev />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navbar;
