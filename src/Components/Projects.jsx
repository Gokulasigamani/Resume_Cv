import { Link } from "react-router-dom";
import Project1 from "../assets/Project1.png"
import Project2 from "../assets/Project2.png"
import Project3 from "../assets/Project3.png"

function Projects()
{
    return(
        <>
        <div className="max-sm:w-full py-4 mt-8 bg-neutral-800 mb-5 " >
            <h1 className="text-center text-white text-3xl font-semibold pt-2 " >Projects</h1>
            
            <div className="w-[340px] h-[200px] m-auto mt-8 relative  " >
                <Link><img src={Project1} className="w-full rounded-md object-contain  blur-[4px] relative "   alt="" /></Link>
                 <div className="absolute top-[42%] left-[50%] translate-x-[-50%] translate-y-[-50%] " >
                    <h1 className="text-2xl font-semibold text-white" >Netflix Clone</h1>
                 </div>
            </div>

            <div className="w-[340px] h-[200px] m-auto mt-4 relative  " >
                <Link><img src={Project2} className="w-full rounded-md object-contain  blur-[4px] relative "   alt="" /></Link>
                 <div className="absolute top-[42%] left-[50%] translate-x-[-50%] translate-y-[-50%] " >
                    <h1 className="text-2xl font-semibold text-black" >Dribble Clone</h1>
                 </div>
            </div>

            <div className="w-[340px] h-[200px] m-auto mt-4 relative  " >
                <Link><img src={Project3} className="w-full rounded-md object-contain  blur-[4px] relative "   alt="" /></Link>
                 <div className="absolute top-[42%] left-[50%] translate-x-[-50%] translate-y-[-50%] " >
                    <h1 className="text-2xl font-semibold text-black" >Todo List</h1>
                 </div>
            </div>



        </div>
        </>
    )
}
export default Projects;