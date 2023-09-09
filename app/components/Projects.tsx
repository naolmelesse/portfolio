import Image from "next/image";
import furgo from "/public/furgo.png";

export default function Projects(){
    return(
        <div className="py-10">
        <div>
          <h3 className="text-3xl py-1  ">Projects</h3>
          <p className="text-md py-2 leading-8 text-gray-800 ">
          In my portfolio, you will find a diverse range of projects that highlight
           my <span className="text-purple-500">skills</span> and <span className="text-purple-500">creativity</span>. Each project showcases my ability to combine aesthetic appeal with technical proficiency.
          </p>
        </div>

        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div>
              <h3 className="py-2 text-xl text-center">Furgo - A car sharing web-app</h3>
              <Image 
                alt={"Web Page landing page"}
                className="rounded-lg border shadow"
                width={400}
                height={400}
                src={furgo}
                />

          </div>


        </div>
      </div>
    )
}