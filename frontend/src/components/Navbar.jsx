import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import { useState } from 'react'

import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Projects from '../pages/Projects.jsx'
import Contact from '../pages/Contact.jsx'
import Music from '../pages/projects/Music.jsx'
import Games from '../pages/projects/Games.jsx'
import VoiceOver from '../pages/projects/VoiceOver.jsx'
import Writing from '../pages/projects/Writing.jsx'
/* all the other pages */

import Darkmode from './Darkmode.jsx'

function Navbar() {

    const linkSize = "text-(length:--link-size) text-(color:--text-color)";
    const linkBig = "text-(length:--link-size-big) text-(color:--highlight)";
    const homeSize = "text-(length:--home-size) text-(color:--text-color)";
    const homeBig = "text-(length:--home-size) text-(color:--highlight)";
    /* tailwind class to determine the size/color */

    const [about, setAbout] = useState(linkSize);
    const [projects, setProjects] = useState(linkSize);
    const [contact, setContact] = useState(linkSize);

    const [home, setHome] = useState(homeSize);
    /* states to hold and change depending on hover */

    return (
        <BrowserRouter>
            <nav className="flex m-4 gap-4">
                <Link to="/" className={home}
                    onMouseEnter={() => setHome(homeBig)} 
                    onMouseLeave={()=> setHome(homeSize)}
                >Caleb Kira</Link>
                {/* on hover, it will change the tailwind class to make aesthetic changes */}

                <Darkmode></Darkmode>
                

                <div className={"ml-auto flex gap-8"}>
                    <Link to="/about" className={`w-20 text-center ${about}`}
                        onMouseEnter={() => setAbout(linkBig)} 
                        onMouseLeave={()=> setAbout(linkSize)}>
                            About
                    </Link>

                    <Link to="/projects" className={`w-28 text-center ${projects}`}
                        onMouseEnter={() => setProjects(linkBig)} 
                        onMouseLeave={()=> setProjects(linkSize)}>
                            Projects
                    </Link>

                    <Link to="/contact" className={`w-24 text-center ${contact}`}
                        onMouseEnter={() => setContact(linkBig)} 
                        onMouseLeave={()=> setContact(linkSize)}>
                            Contact
                    </Link>
                    {/* each of these has a width box that they are in to not make the nav bar shift around */}

                    <br></br>
                </div>
                {/* this div defines the router links that are aligned to the right. Home is set to the left */}
            </nav>
            {/* this is effectively setting a nav element in the highest part
                of the app so that the nav bar persists always */}
            
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<Projects />}/>
                <Route path="/projects/music" element={<Music />}/>
                <Route path="/projects/Games" element={<Games />}/>
                <Route path="/projects/voiceover" element={<VoiceOver />}/>
                <Route path="/projects/writing" element={<Writing />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Navbar;
