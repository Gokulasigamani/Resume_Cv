function Contact()
{
    return(
        <>

            <div className="bg-neutral-800 mt-5 max-sm:w-full mb-3 pb-4 " >

            <h1 className="text-center font-semibold text-4xl text-white pt-2">Contact Me.</h1>
                   
                  <div className="bg-yellow-400 p-5 max-sm:w-[350px] rounded-3xl mt-10 m-auto flex justify-center " >
                  <div className="flex flex-col justify-center gap-4 max-sm:w-[300px] m-auto mt-6" >
                    <input type="text" className="rounded-lg py-2 text-white bg-black focus:outline-none border-none px-5 text-xl" placeholder=" Email" />
                    <input type="text" className="rounded-lg py-2 bg-black  text-white focus:outline-none border-none px-5 text-xl" placeholder=" Name" />
                    <input type="text"className="rounded-lg py-2 bg-black  text-white  focus:outline-none border-none px-5 text-xl" placeholder="Subject" />
                    <textarea name="" placeholder="Message" className="  text-white rounded-lg py-2 bg-black focus:outline-none border-none px-5 text-xl" id=""></textarea>
                  </div>
                  </div>

            </div>
         
           
        </>
    )
}
export default Contact;