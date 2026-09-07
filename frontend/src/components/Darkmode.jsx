import { useState } from 'react';

import lightPic from "../assets/Light.png";
import lightHover from "../assets/HoverL.png";
import darkPic from "../assets/Dark.png";
import darkHover from "../assets/HoverD.png";
/* image paths */


function Darkmode(){

    const [dark, setDark] = useState(false);
    /* this holds if the site is in dark mode overall! */
    const [picURL, setPicURL] = useState(lightPic);
    /* this holds the image link */
    

    function onClick(){
        if (dark == false){
            setDark(true);
            setPicURL(darkPic);
        } 
        else if (dark == true){
            setDark(false);
            setPicURL(lightPic);
        }

        document.documentElement.classList.toggle("dark");
        /* switches the picture and toggls if the dcocument has the dark mode class or not */

    }

    function onEnter(){
        if (dark == false){
            setPicURL(lightHover);
        }
        else if (dark == true){
            setPicURL(darkHover);
        }
        /* when hovering, set the picture to the curent mode hover image */
    }

    function onLeave(){
        if (dark == false){
            setPicURL(lightPic);
        }
        else if (dark == true){
            setPicURL(darkPic);
        }
        /* when leaving hover, set the picture to the curent mode image */

    }

    
    return (
        <button onClick={onClick} 
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}>
            {/* set the hover picture functions */}
                
            <img src={picURL} alt="Dark Mode">
            {/* this makes the picture changable */}
            </img>
        </button>
    )
}

export default Darkmode;