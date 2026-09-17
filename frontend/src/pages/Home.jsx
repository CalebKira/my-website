import Caleb_Art from "../assets/Caleb_Art_Backgroundless.png"
import Arrow from "../assets/Arrow.png"
import Button from "../components/Button";

function Home(){
    return (
        <div className="grid grid-cols-2 gap-12 px-4">
            {/* make a general grid for the first bits of content with gaps and margins */}

            <img src={Caleb_Art} alt="Caleb Kira Art"></img>

            <div> {/* CONTENT COL */}
                <br></br>
                <h1 className="text-5xl">Hello!</h1>

                <br></br>
                <p className="text-justify mr-4">
                    {/* mr-4 specifically gives padding from right of screen */}
                    My name is Caleb Kira, and I am a software engineer based in Torrance CA! 
                    I love to be creative and make things that fascinate me. I have countless hobbies: 
                    making websites, playing music, writing songs, fictional world building, storytelling, 
                    voice acting, and outer space technologies to name a few (meaning I have too many hobbies). 
                    This is my website to summarize and encapsulate everything into a singular place for both you and me. 
                </p>


                <div className="mt-16 grid grid-cols-3 gap-10 px-4 items-center">
                    {/* make a grid of 2 effective columns for arrows and buttons! 
                    mt makes the top have space, grid col 3 defines columns but allows
                    for one to take more space, gap defines the spacing between items */}

                    <img className="justify-self-end" src={Arrow} alt="Arrow" style={{ filter: "var(--invert-img)" }}></img>
                    <h3 className="text-left col-span-2">
                        <Button name="Projects" route="/projects"/>: My Experience
                    </h3>

                    <img className="justify-self-end" src={Arrow} alt="Arrow" style={{ filter: "var(--invert-img)" }}></img>
                    <h3 className="text-left col-span-2">
                        <Button name="About" route="/about"/>: My Story
                    </h3>

                    <img className="justify-self-end" src={Arrow} alt="Arrow" style={{ filter: "var(--invert-img)" }}></img>
                    <h3 className="text-left col-span-2">
                        <Button name="Contact" route="/contact"/>: How to Contact Me
                    </h3>
                </div>

                <div className="mt-24 grid grid-cols-2 gap-10">
                    <h2 className="text-xl">
                        Glad you are here and God Bless! 
                    </h2>
                    {/* add something here as a unique flair for who you are, symbol? */}
                </div>

            </div>
        </div>
    )
}

export default Home;