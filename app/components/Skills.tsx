import {
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
    IoLogoNodejs,
    IoLogoAngular,
    IoLogoReact,
    IoLogoGithub,
    IoLogoSass,
} from "react-icons/io5";
import {
    SiTailwindcss,
    SiGit,
    SiExpress,
    SiTypescript,
    SiJquery,
    SiMongodb,
    SiMysql,
    SiBootstrap,
    SiPhp
} from "react-icons/si"

import { TbBrandNextjs } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

export default function Skills() {
    return (
        <div className="py-8">
            <p className="text-3xl py-4">Technologies and Tools</p>
            <div className="flex gap-8 py-4 flex-wrap">
                <div className="text-gray-600" ><IoLogoHtml5 /> <p>HTML5</p></div>
                <div className="text-gray-600" ><IoLogoCss3 /> <p>CSS3</p></div>
                <div className="text-gray-600" ><IoLogoSass /> <p>Sass</p></div>
                <div className="text-gray-600" ><SiTailwindcss /> <p>Tailwindcss</p></div>
                <div className="text-gray-600" ><SiBootstrap /> <p>Bootstrap</p></div>
                <div className="text-gray-600" ><IoLogoJavascript /> <p>Javascript</p></div>
                <div className="text-gray-600" ><SiJquery /> <p>Jquery       </p></div>
                <div className="text-gray-600" ><SiTypescript /> <p>Typescript       </p></div>
                <div className="text-gray-600" ><IoLogoReact /> <p>React</p></div>
                <div className="text-gray-600" ><TbBrandNextjs /> <p>NextJs</p></div>
                <div className="text-gray-600" ><IoLogoAngular /> <p>Angular</p></div>
                <div className="text-gray-600" ><SiGit /> <p>Git</p></div>
                <div className="text-gray-600" ><IoLogoGithub /> <p>Github</p></div>
                <div className="text-gray-600" ><SiExpress /> <p>Express       </p></div>
                <div className="text-gray-600" ><IoLogoNodejs /> <p>Nodejs</p></div>
                <div className="text-gray-600" ><SiPhp /> <p>Php</p></div>
                <div className="text-gray-600" ><SiMongodb /> <p>Mongodb</p></div>
                <div className="text-gray-600" ><SiMysql /> <p>Mysql</p></div>
                <div className="text-gray-600" ><FaJava /> <p>Java</p></div>



            </div>
        </div>
    )
}