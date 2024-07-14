import Navbar from "../Components/Navbar";
import Profile from "../Components/Profile";
import Skills from "../Components/Skills";
import About from "../Components/About";

function Home()
{
    return(
        <>
            <main>
                <Navbar/>
                <Profile/>
                <About/>
                <Skills/>

            </main>
        </>
    )
}
export default Home;