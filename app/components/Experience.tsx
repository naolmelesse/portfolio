import { MdWorkOutline } from "react-icons/md";
import Image from "next/image";

export default function Experience(){
    return(
        <div className="my-10 py-[10%]">
                <h3 className="md:text-3xl my-5">Experience</h3>
                <div className="flex items-center gap-5">
                    <MdWorkOutline className="text-5xl"/>
                    <div>
                        <p>UI developer - Jan, 2023 - Apr,2023</p>
                        <p>Internship - Asite Solutions</p>
                    </div>
                </div>
        </div>
    )
}