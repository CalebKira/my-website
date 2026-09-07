import Caleb_Art from "../assets/Caleb_Art_Backgroundless.png"

function Home(){
    return (
        <div className="grid grid-cols-2 gap-12 m-6">
            {/* make a general grid for the first bits of content with gaps and margins */}

            <img src={Caleb_Art} alt="Caleb Kira Art"></img>

            <div> {/* CONTENT COL */}
                <br></br>
                <h1 className="text-5xl">Hello!</h1>

                <br></br>
                <p className="text-justify">
                    My name is Caleb Kira and I am a software engineer based in Torrance CA! 
                    I love to be creative and make things that fascinate me. I have countless hobbies: 
                    making websites, playing music, writing songs, fictional world building, storytelling, 
                    voice acting, and outer space technologies to name a few. This is my website to summarize 
                    and encapsulate everything into a singular place for both you and me. 
                </p>


            </div>
        </div>
    )
}

export default Home;