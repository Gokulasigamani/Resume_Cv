import { useEffect } from "react";
import Myimg from "../assets/Myimg.jpg";
import Icons from "../Components/Icons";
import AOS from "aos";
import "aos/dist/aos.css";

function Profile() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {/* Small screen */}

      <main className="max-sm:w-full mt-12 ">
        <article className="w-full">
          <img
            src={Myimg}
            className="w-[240px]  shadow-white  rounded-[50%] m-auto object-cover glow "
            data-aos="fade-up-right"
            alt=""
          />
          <h1
            className="font-bold text-3xl text-white text-center mt-3"
            data-aos="fade-down-left"
          >
            Hey, I'm <br /> Gokulasigamani.
          </h1>
          <div className="w-full  rounded-lg p-4 m-auto ">
            <h2 className="font-semibold text-neutral-200 m-auto text-center -mt-1 ">
              I develop Full Stack Web Applications ,using{" "}
              <span className="text-4xl fonts font-bold ">MERN Stack.</span>
            </h2>

           <div className="flex justify-center mt-5 " >
           <button className="px-5 py-2 bg-yellow-400 shadow-md font-semibold  rounded-xl ">
              <a
                className="button"
                href="../assets/Resume/ResumeOfficial.pdf"
                download
              >
                Download Resume
              </a>
            </button>
           </div>
          </div>

          <Icons />
        </article>
      </main>
    </>
  );
}
export default Profile;
