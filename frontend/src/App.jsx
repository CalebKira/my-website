import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Projects from './pages/Projects.jsx'
import Music from './pages/projects/Music.jsx'
import Games from './pages/projects/Games.jsx'
import VoiceOver from './pages/projects/VoiceOver.jsx'
import Writing from './pages/projects/Writing.jsx'
import Embedded from './pages/projects/Embedded.jsx'
import WebDev from './pages/projects/WebDev.jsx'
/* all the other pages */

function App() {

    return (
        <BrowserRouter basename="/my-website">
            {/* adding the base path for the application because this is from github pages */}
            <Navbar />
            
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
            {/* Routes actually renders the page, so it is still under browser router's gaze */}
        </BrowserRouter>
    )
}


export default App
