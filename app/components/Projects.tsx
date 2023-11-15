import Image from "next/image";
import furgo from "/public/furgo.png";
import gobus from "/public/gobus.png";
import dash from "/public/sms-dashboard.png";
import mosaic from "/public/mosaic.png";
import gameville from "/public/gameville.png";
import { GoLinkExternal } from "react-icons/go";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";


export default function Projects() {
  return (
    <div className="py-10]" id="projects">
      <div>
        <h3 className="text-3xl py-1  ">Projects</h3>
      </div>
      <div className="flex flex-col items-center justify-center flex-wrap gap-10 py-10">

        <div className="aspect-video px-5 py-2 md:my-10 border rounded-xl">
          <h3 className="font-medium text-xl my-4">📌 Upcoming Project - A school management dashboard</h3>
          <Image
            alt={"School management system dashboard"}
            src={dash}
          />
          <Separator className="my-4" />
          <p className="font-medium my-2">Details:</p>
          <p> An admin dashboard for a school with rich features.</p>

          <div className="flex gap-3 flex-wrap my-5">
            <Badge variant="outline">React</Badge>
            <Badge variant="outline">NextJS 14</Badge>
            <Badge variant="outline">TailwindCSS</Badge>
            <Badge variant="outline">React-chartjs-2</Badge>
            <Badge variant="outline">Auth0</Badge>
          </div>

        </div>

        <div className="aspect-video px-5 py-2 md:my-10 border rounded-xl">
          <h3 className="font-medium text-xl my-4">📌 GoBus - A bus booking web-app</h3>
          <Image
            alt={"Bus ticket booking website landing page"}
            src={gobus}
          />
          <Separator className="my-4" />
          <p className="font-medium my-2">Details:</p>
          <p> A bus ticket booking web app for easy ticket booking and much more.</p>
          <p className="my-2"><span className="font-medium">Tip!</span> I hear there is a bus from Addis Ababa to Dire Dawa.</p>
          <p className="my-2"><span className="font-medium">Payment</span> Use card: 4242 4242 4242 4242 EXP:04/24 CVC:424</p>

          <div className="flex gap-3 flex-wrap my-5">
            <Badge variant="outline">NextJS</Badge>
            <Badge variant="outline">TailwindCSS</Badge>
            <Badge variant="outline">Strapi</Badge>
            <Badge variant="outline">PostgreSQL</Badge>
            <Badge variant="outline">Cloudinary</Badge>
            <Badge variant="outline">Stripe</Badge>
            <Badge variant="outline">Auth0</Badge>
          </div>
          <div className="flex gap-5 my-2">
            <Link className=" bg-[#000] text-[#fff] py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-[#444] transition duration-300" href="https://github.com/naolmelesse/gobus" target="_blank">View on Github<GoLinkExternal className="inline text-[1.5rem]" /></Link>
            <Link className=" bg-[#000] text-[#fff] py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-[#444] transition duration-300" href="https://gobus-liard.vercel.app/" target="_blank">View Live <GoLinkExternal className="inline text-[1.5rem]" /></Link>
          </div>
        </div>

        <div className="aspect-video px-5 py-2 md:my-10 border rounded-xl">
          <h3 className="font-medium text-xl my-4">📌 MOSAIC - An online art marketplace</h3>
          <Image
            alt={"An online fine arts marketplace"}
            src={mosaic}
          />
          <Separator className="my-4" />
          <p className="font-medium my-2">Details:</p>
          <p>A web app to explore fine arts and purchase </p>
          <p className="my-2"><span className="font-medium">Tip!</span> Use coupon - &apos;FIRSTBUY&apos;</p>
          <p className="my-2"><span className="font-medium">Payment</span> Use card: 4242 4242 4242 4242 EXP:04/24 CVC:424</p>
          <div className="flex gap-3 flex-wrap my-5">
            <Badge variant="outline">NextJS</Badge>
            <Badge variant="outline">TailwindCSS</Badge>
            <Badge variant="outline">Auth0</Badge>
            <Badge variant="outline">Stripe</Badge>
            <Badge variant="outline">PostgreSQL</Badge>
            <Badge variant="outline">Strapi</Badge>
            <Badge variant="outline">Cloudinary</Badge>
          </div>
          <div className="flex gap-5 my-2">
            <Link className=" bg-[#000] text-[#fff] py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-[#444] transition duration-300" href="https://github.com/naolmelesse/mosaic" target="_blank">View on Github <GoLinkExternal className="inline text-[1.5rem]" /></Link>
            <Link className=" bg-[#000] text-[#fff] py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-[#444] transition duration-300" href="https://mosaic-silk.vercel.app/" target="_blank">View Live <GoLinkExternal className="inline text-[1.5rem]" /></Link>
          </div>

        </div>

        <div className="aspect-video px-5 py-2 md:my-10 border rounded-xl">
          <h3 className="font-medium text-xl my-4">📌 GameVille - Discover and search games</h3>
          <Image
            alt={"Game disover website"}
            src={gameville}
          />
          <Separator className="my-4" />
          <p className="font-medium my-2">Details:</p>
          <p>A web app to discover and search games</p>
          <div className="flex gap-3 flex-wrap my-5">
            <Badge variant="outline">NextJS</Badge>
            <Badge variant="outline">TailwindCSS</Badge>
            <Badge variant="outline">REST API</Badge>
            <Badge variant="outline">RAWG API</Badge>
            <Badge variant="outline">Shadcn UI</Badge>
          </div>
          <div className="flex gap-5 my-2">
            <Link className=" bg-[#000] text-[#fff] py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-[#444] transition duration-300" href="https://github.com/naolmelesse/game-ville" target="_blank">View on Github <GoLinkExternal className="inline text-[1.5rem]" /></Link>
            <Link className=" bg-[#000] text-[#fff] py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-[#444] transition duration-300" href="https://game-ville.vercel.app/" target="_blank">View Live <GoLinkExternal className="inline text-[1.5rem]" /></Link>
          </div>
        </div>

        <div className="aspect-video px-5 py-2 md:my-10 border rounded-xl">
          <h3 className="font-medium text-xl my-4">📌 Furgo - A car sharing web-app</h3>
          <Image
            alt={"car sharing Web landing page"}
            src={furgo}
          />
          <Separator className="my-4" />
          <p className="font-medium my-2">Details:</p>
          <p>Airbnb but for cars. Two type of users: Hosts and renters. </p>
          <div className="flex gap-3 flex-wrap my-5">
            <Badge variant="outline">ReactJs</Badge>
            <Badge variant="outline">NodeJs</Badge>
            <Badge variant="outline">ExpressJs</Badge>
            <Badge variant="outline">MongoDB</Badge>
            <Badge variant="outline">Stripe</Badge>
          </div>
          <div className="my-2 flex">
            <Link className=" bg-[#000] text-[#fff] py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-[#444] transition duration-300" href="https://github.com/naolmelesse/furgo" target="_blank">View on Github <GoLinkExternal className="inline text-[1.5rem]" /></Link>
          </div>
        </div>

      </div>
    </div>
  )
}
