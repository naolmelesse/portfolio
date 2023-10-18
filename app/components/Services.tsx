import Image from "next/image"
import aboutMe from "/public/about_me.jpg";
import code from "/public/code.png";
import design from "/public/layers.png";
import consulting from "/public/update.png";

export default function Services(){
    return(
        <div className="w-4/5 mx-[auto] bg-[#fff] px-10 md:px-20 lg:px-30 text py-14">
          <h3 className=' text-3xl py-2 font-medium md:text-5xl'>Services I offer</h3>
        <div className="lg:flex gap-10">
          <div className="text-center p-10 rounded-xl my-10 flex-1">
            <Image alt={"image"} className="mx-auto" src={design} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2  ">
              Collaboration
            </h3>
            <p className="py-2">
              I am ready to collaborate on web projects.
            </p>
          </div>
          <div className="text-center p-10 rounded-xl my-10 flex-1">
            <Image alt={"image"} className="mx-auto" src={code} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2 ">
              Code your dream project
            </h3>
            <p className="py-2">
              Do you have an idea for your next great website? Let&apos;s make it a
              reality.
            </p>
          </div>
          <div className="text-center p-10 rounded-xl my-10 flex-1">
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