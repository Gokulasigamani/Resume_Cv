import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import Skills from "../Components/Skills";
import About from "../Components/About";
import AutoSlider from "../Components/AutoSlider";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

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
                <Projects/>
                <Contact/>

            </main>
        </>
    )
}
export default Home;