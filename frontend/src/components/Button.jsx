import { Link } from "react-router-dom";

function Button({ name, route }){
    return (  
        <Link
            to={route}
            className="text-xl inline-block w-fit rounded-md bg-(--highlight) px-3 py-2 
                    text-black transition-shadow hover:bg-(--select-color) 
                    hover:text-white hover:shadow-md font-[family-name:var(--link-font)]"
        > {/* the text size, the outline fitting around the text, font, and the color changing when hover*/}
            
            {name} 

        </Link>
    )
}

export default Button;