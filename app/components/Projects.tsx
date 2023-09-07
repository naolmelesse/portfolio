import Image from "next/image";
import web1 from "/public/furgo.png";
import web2 from "/public/web2.png";

export default function Projects(){
    return(
        <div className="py-10">
        <div>
          <h3 className="text-3xl py-1  ">Portfolio</h3>
          <p className="text-md py-2 leading-8 text-gray-800 ">
          In my portfolio, you will find a diverse range of projects that highlight
           my <span className="text-purple-500">skills</span> and <span className="text-purple-500">creativity</span>. Each project showcases my ability to combine aesthetic appeal with technical proficiency.
          </p>
        </div>
        <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
          <div className="basis-1/3 flex-1 ">
            <Image alt={"image"}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web1}
            />
          </div>
          <div className="basis-1/3 flex-1">
            <Image alt={"image"}
              className="rounded-lg object-cover"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web2}
            />
          </div>

        </div>
      </div>
    )
}