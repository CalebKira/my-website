import { Link } from 'react-router-dom'

/* all the other pages */

import Darkmode from './Darkmode.jsx'

function Navbar() {

    return (
    
        <nav className="flex m-4 px-4">
            {/* use px-4 to give padding from right to left!!! USE FOR ALL */}
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
            </div>
            {/* this div defines the router links that are aligned to the right. Home is set to the left */}
        </nav>
        /* this is effectively setting a nav element in the highest part
            of the app so that the nav bar persists always */
    )
}

export default Navbar;
