import Image from "next/image";
import furgo from "/public/furgo.png";
import gobus from "/public/gobus.png";

export default function Projects(){
    return(
        <div className="py-10]">
        <div>
          <h3 className="text-3xl py-1  ">Projects</h3>
          <p className="text-md py-2 leading-8 text-gray-800 ">
          In my portfolio, you will find a diverse range of projects that highlight
           my <span className="text-purple-500">skills</span> and <span className="text-purple-500">creativity</span>. Each project showcases my ability to combine aesthetic appeal with technical proficiency.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center flex-wrap gap-10 py-10">
          <div className="p-2 md:my-10 flex flex-col lg:flex-row gap-5 items-center w-full text-[#000]">
              <div className="p-2 flex flex-col gap-2">
                  <h3 className=" text-lg">📌 GoBus - A bus booking web-app</h3>
                  <p>⛏️ Tech Stack: NextJs, Tailwind, Strapi</p>
                  <p className="font-light">📝 A bus ticket booking web app for easy ticket booking and much more.
                  </p>
                </div>
              <Image 
                alt={"Bus ticket booking website landing page"}
                className="border border-gray-300"
                width={500}
                height={500}
                src={gobus}
                />
          </div>
          <div className="p-2 md:my-10 flex flex-col lg:flex-row gap-5 items-center w-full text-[#000]">
              <Image 
                alt={"car sharing Web landing page"}
                className="border border-gray-300"
                width={500}
                height={500}
                src={furgo}
                />
                <div className="p-2 flex flex-col gap-2">
                  <h3 className=" text-lg">📌 Furgo - A car sharing web-app</h3>
                  <p>⛏️ Tech Stack: MERN</p>
                  <p className="font-light">📝 A web app where people can host their car for a few days or get a car from host nearby. The idea is to create 
                    a platform where people can get a car nearby easily and with affordable prices from others. Or people can make money of their
                    extra car that's laying around or start a small car hosting business. 
                  </p>
                </div>
          </div>

        </div>
      </div>
    )
}