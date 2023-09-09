import Image from "next/image";
import reactLogo from "/public/react.png";
import nodeLogo from "/public/node-js.png";
import mongo from "/public/mongodb.png";
import js from "/public/javascript.png";
import nextjs from "/public/nextjs.png";
import tslogo from "/public/typescript.png";
import express from "/public/express.png";
import java from "/public/java.png";
import jquery from "/public/jquery.png";
import php from "/public/php.png";
import tailwind from "/public/tailwindcss.svg";
import git from "/public/git.png";
import github from "/public/github.png";
import bootstrap from "/public/bootstrap.png";
import angular from "/public/angularjs.png";
import mysql from "/public/mysql.png";

export default function Skills() {
    return (
        <div className="py-8">
            <p className="text-3xl py-4">🔧 Technologies and Tools</p>
            <hr />
            <div className="flex gap-8 py-4 flex-wrap">
                <Image
                    width={64}
                    height={64}
                    src={js}
                    alt="Javascript Logo"
                />
                <Image
                    width={64}
                    height={64}
                    src={tslogo}
                    alt="Typescript Logo"
                />                <Image
                    width={64}
                    height={64}
                    src={jquery}
                    alt="Jquery Library Logo"
                />
                <Image
                    width={64}
                    height={64}
                    src={reactLogo}
                    alt="React.js Framework Logo"
                />
                <Image
                    width={64}
                    height={64}
                    src={nextjs}
                    alt="Next.js Framework Logo"
                />
                    <Image
                        width={64}
                        height={64}
                        src={tailwind}
                        alt="Tailwind CSS Logo"
                    />
                <Image
                    width={64}
                    height={64}
                    src={git}
                    alt="Git tool Logo"
                />
                <Image
                    width={64}
                    height={64}
                    src={github}
                    alt="Github Framework Logo"
                />
                <Image
                    width={64}
                    height={64}
                    src={java}
                    alt="Java Framework Logo"
                />
                <Image
                    width={64}
                    height={64}
                    src={angular}
                    alt="Angular Framework Logo"
                />
                <Image
                    width={64}
                    height={64}
                    src={nodeLogo}
                    alt="Node.js Framework Logo"
                />
                <Image
                    width={64}
                    height={64}
                    src={express}
                    alt="Express.js Framework Logo"
                />
                <Image
                    width={64}
                    height={64}
                    src={mongo}
                    alt="Mongodb Database Logo"
                />
                                <Image
                    width={64}
                    height={64}
                    src={mysql}
                    alt="MySQL Database Logo"
                />
                <Image
                    width={64}
                    height={64}
                    src={bootstrap}
                    alt="Bootstrap Framework Logo"
                />
                <Image
                    width={64}
                    height={64}
                    src={php}
                    alt="PHP Framework Logo"
                />
            </div>
        </div>
    )
}