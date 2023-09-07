import Image from "next/image"
import aboutMe from "/public/about_me.jpg";
import code from "/public/code.png";
import design from "/public/layers.png";
import consulting from "/public/update.png";

export default function Services(){
    return(
        <div>
                   <div>
          <h3 className="text-3xl py-2  ">Services I offer</h3>
          {/* <p className="text-md py-2 leading-8 text-gray-800 ">
            Since the beginning of my journey as a freelance designer and
            developer, I've done remote work for
            <span className="text-purple-500"> agencies </span>
            consulted for <span className="text-purple-500">startups </span>
            and collaborated with talanted people to create digital products
            for both business and consumer use.
          </p> */}
          {/* <p className="text-md py-2 leading-8 text-gray-800 ">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p> */}
        </div>
        <div className="lg:flex gap-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
            <Image alt={"image"} className="mx-auto" src={design} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Collaboration
            </h3>
            <p className="py-2">
              I am ready to collaborate on web projects.
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image alt={"image"} className="mx-auto" src={code} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 ">
              Code your dream project
            </h3>
            <p className="py-2">
              Do you have an idea for your next great website? Let's make it a
              reality.
            </p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
            <Image alt={"image"} className="mx-auto" src={consulting} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 ">Maintenance & Update</h3>
            <p className="py-2">
              Are you interested in upgrading your current project? I can
              give you tips and tricks to level it up.
            </p>
          </div>
        </div>
        </div>
    )
}