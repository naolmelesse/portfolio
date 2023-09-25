import Image from "next/image";
import furgo from "/public/furgo.png";
import gobus from "/public/gobus.png";
import mosaic from "/public/mosaic.png";
import { GoLinkExternal } from "react-icons/go";
import Link from "next/link";

export default function Projects(){
    return(
        <div className="py-10]">
        <div>
          <h3 className="text-3xl py-1  ">Projects</h3>
        </div>
        <div className="p-2 md:my-10 flex flex-col lg:flex-row gap-5 items-center w-full text-[#000]">
              <Image 
                alt={"An online fine arts marketplace"}
                className="border border-gray-300"
                width={500}
                height={500}
                src={mosaic}
                />
                <div className="p-2 flex flex-col gap-2">
                  <h3 className=" text-lg">📌 MOSAIC - An online art marketplace</h3>
                  <p className="font-light">📝 A web app to explore fine arts and purchase 
                  </p>
                  <div className="flex gap-3 flex-wrap mt-5">
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                      NextJS
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    TailwindCSS
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    Strapi
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    Auth0
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    Stripe
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    PostgreSQL
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    Cloudinary
                    </p>
                  </div>
                  <br />
                  <Link href="https://mosaic-silk.vercel.app/" target="_blank"><GoLinkExternal className="inline text-[1.5rem]"/> View Project</Link>
                </div>
          </div>
        <div className="flex flex-col items-center justify-center flex-wrap gap-10 py-10">
          <div className="p-2 md:my-10 flex flex-col lg:flex-row gap-5 items-center w-full text-[#000]">
              <div className="p-2 flex flex-col gap-2">
                  <h3 className=" text-lg">📌 GoBus - A bus booking web-app</h3>
                  <p className="font-light">📝 A bus ticket booking web app for easy ticket booking and much more.
                  </p>
                  <div className="flex gap-3 flex-wrap mt-5">
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                      NextJS
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    TailwindCSS
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    Strapi
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    PostgreSQL
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    Cloudinary
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    Stripe
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    Auth0
                    </p>
                  </div>
                  <br />
                  <Link href="https://github.com/naolmelesse/bus-booking-system" target="_blank"><GoLinkExternal className="inline text-[1.5rem]"/> View Project</Link>
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
                  <p className="font-light">📝 A web app for a car sharing marketplace. 
                  </p>
                  <div className="flex gap-3 flex-wrap mt-5">
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                      ReactJS
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    NextJS
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    ExpressJS
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    MongoDB
                    </p>
                    <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                    Stripe
                    </p>
                  </div>
                  <br />
                  <Link href="https://github.com/naolmelesse/furgo" target="_blank"><GoLinkExternal className="inline text-[1.5rem]"/> View Project</Link>
                </div>
          </div>

        </div>
      </div>
    )
}