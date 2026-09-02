import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import Projects from '../pages/Projects.jsx'
import Contact from '../pages/Contact.jsx'
import Music from '../pages/projects/Music.jsx'
import Games from '../pages/projects/Games.jsx'
import VoiceOver from '../pages/projects/VoiceOver.jsx'
import Writing from '../pages/projects/Writing.jsx'

function Navbar() {

    return (
        <BrowserRouter>
            <nav className="flex m-4">
                <Link to="/" className="text-(length:--home-size)">Caleb Kira</Link>
                {/* the (length:--home-size) defines it applies to fontsize, not color 
                    also sets the margins */}

                <div className="ml-auto flex gap-8">
                    <Link to="/about" className="text-(length:--link-size) ">About</Link>
                    <Link to="/projects" className="text-(length:--link-size) ">Projects</Link>
                    <Link to="/contact" className="text-(length:--link-size) ">Contact</Link>
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
