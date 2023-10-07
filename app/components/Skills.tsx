import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
    IoLogoNodejs,
    IoLogoReact,
    IoLogoGithub,
} from "react-icons/io5";
import {
    SiTailwindcss,
    SiGit,
    SiTypescript,
    SiMongodb,
    SiMysql,
} from "react-icons/si"

import { TbBrandNextjs } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

export default function Skills() {
    return (
        <div className="py-8">
            <p className="text-xl md:text-3xl py-4">Technologies and Tools</p>
            <div className="flex gap-8 py-4 flex-wrap text-[#040D12] text-sm md:text-2xl">
                <div className=" flex items-center gap-1" ><IoLogoReact /> <p>React</p></div>
                <div className=" flex items-center gap-1" ><TbBrandNextjs /> <p>NextJs</p></div>
                <div className=" flex items-center gap-1" ><IoLogoHtml5 /> <p>HTML5</p></div>
                <div className=" flex items-center gap-1" ><IoLogoCss3 /> <p>CSS3</p></div>
                <div className=" flex items-center gap-1" ><SiTailwindcss /> <p>Tailwindcss</p></div>
                <div className=" flex items-center gap-1" ><IoLogoJavascript /> <p>Javascript</p></div>
                <div className=" flex items-center gap-1" ><SiTypescript /> <p>Typescript       </p></div>
                <div className=" flex items-center gap-1" ><SiGit /> <p>Git</p></div>
                <div className=" flex items-center gap-1" ><IoLogoGithub /> <p>Github</p></div>
                <div className=" flex items-center gap-1" ><IoLogoNodejs /> <p>Nodejs</p></div>
                <div className=" flex items-center gap-1" ><FaJava /> <p>Java</p></div>
                <div className=" flex items-center gap-1" ><SiMongodb /> <p>Mongodb</p></div>
                <div className=" flex items-center gap-1" ><SiMysql /> <p>Mysql</p></div>

            </div>
        </div>
    )
}