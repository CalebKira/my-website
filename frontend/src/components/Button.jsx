import { Link } from "react-router-dom";

function Button({ name, route }){
    return (  
        <Link
            to={route}
            className="text-xl inline-block w-fit rounded-md bg-(color:--highlight) px-3 py-2 text-black transition-colors transition-shadow hover:bg-(color:--select-color) hover:text-white hover:shadow-md"
        >
            {name}
        </Link>
    )
}

export default Button;