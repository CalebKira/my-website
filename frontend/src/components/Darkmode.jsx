import { useState } from 'react';

import lightPic from "../assets/Light.png";
import lightHover from "../assets/HoverL.png";
import darkPic from "../assets/Dark.png";
import darkHover from "../assets/HoverD.png";
/* image paths */


function Darkmode(){

    const [dark, setDark] = useState(false);
    /* this holds if the site is in dark mode overall! */
    const [hover, setHover] = useState(false);
    /* this makes the logic and state usage more efficient:
        just uses lambdas to check if in dark mode or if hovering rather than excessive checks */
    

    function onClick(){
        setDark(!dark);
        /* toggle this */

        document.documentElement.classList.toggle("dark");
        /* switches the picture and toggls if the dcocument has the dark mode class or not */

    }

    
    return (
        <button onClick={onClick} 
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            {/* set the hover picture functions */}
                
            <img src={
                dark ? 
                /* first check if dark */
                    (hover ? darkHover : darkPic) : 
                    /* if dark, check if hover */

                    (hover ? lightHover : lightPic)
                    /* if light, check if hover */
                } 
                alt="Dark Mode"> 
            {/* this makes the picture changable */}
            </img>
        </button>
    )
}

export default Darkmode;