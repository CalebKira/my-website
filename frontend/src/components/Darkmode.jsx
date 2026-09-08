import { useState } from 'react';

import lightPic from "../assets/Light.png";
import lightHover from "../assets/HoverL.png";
import darkPic from "../assets/Dark.png";
import darkHover from "../assets/HoverD.png";
/* image paths */


function Darkmode(){

    const bigPicSize = "58px";
    /* size of the hover picture */

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
            onMouseLeave={() => setHover(false)}
            className={`relative`}
            style={{ width: bigPicSize, height: bigPicSize }}>
            {/* set the hover picture functions, also set the button size to the size of the largest image. 
                style determines the css to this particular element rather than preset functionality in className */}

            <img src={
                dark ? 
                /* first check if dark mode is set */
                    (hover ? lightHover : lightPic) : 
                    /* if dark, set to light mode and check if hover */

                    (hover ? darkHover : darkPic)
                    /* if light, set to dark and check if hover */

                /* this is all to make the picture changeable */
                } 
                alt="Dark Mode"
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"> 
                {/* this sets the image at absolute position relative to button, 
                    left pushes left edge to 1/2 or 50% of width of button, and then 
                    translate it to the left 50% of the picture's OWN width. */}
            </img>
        </button>
    )
}

export default Darkmode;