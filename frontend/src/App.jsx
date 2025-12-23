import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Music from './pages/projects/Music.jsx'
import Games from './pages/projects/Games.jsx'
import VoiceOver from './pages/projects/VoiceOver.jsx'
import Writing from './pages/projects/Writing.jsx'

function App() {

    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">
                    Projects
                    <nav>
                        <Link to="/projects/music">Music</Link>
                        <Link to="/projects/writing">Writing</Link>
                        <Link to="/projects/games">Games</Link>
                        <Link to="/projects/voiceover">Voice Over</Link>
                    </nav>
                </Link>
                <Link to="/contact">Contact</Link>
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

export default App
