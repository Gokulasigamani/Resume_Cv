import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import Skills from "../Components/Skills";
import About from "../Components/About";
import AutoSlider from "../Components/AutoSlider";

function Home()
{
    return(
        <>
            <main>
                <Navbar/>
                <Profile/>
                <About/>
                <Skills/>
                <AutoSlider/>

            </main>
        </>
    )
}
export default Home;