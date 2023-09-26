import { MdWorkOutline } from "react-icons/md";
import Image from "next/image";

export default function Experience(){
    return(
        <div className="my-10 py-[10%] flex flex-col gap-7">
                <h3 className="md:text-3xl my-5">Experience</h3>
                <div className="flex gap-5">
                    <MdWorkOutline className="text-5xl"/>
                    <div className="flex items-center justify-between w-4/5">
                        <div>
                            <h3 className=" text-xl">UI developer</h3>
                            <h3 className=" text-xl">Internship</h3>
                        </div>
                        <div>
                            <p> Jan, 2023 - Apr,2023</p>
                            <p> Asite Solutions</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <h3>Technical Skills</h3>
                    <div className="flex gap-3 flex-wrap">
                        <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                        Angular
                        </p>
                        <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                        Typescript
                        </p>
                        <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                        Git
                        </p>
                        <p className="w-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                        JIRA
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                <h3>Soft Skills</h3>
                    <div className="flex gap-3 flex-wrap">
                        <p className="w-[6rem] text-center h-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                        Team work
                        </p>
                        <p className="w-[8rem] text-center h-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                        Communication
                        </p>
                        <p className="w-[8rem] text-center h-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                        Code Structuring
                        </p>
                        <p className="w-[8rem] text-center px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                        Problem-solving
                        </p>
                        <p className="w-[9rem] text-center h-min px-2 cursor-pointer py-1 text-[0.8rem] rounded-2xl bg-[#eceff1] font-normal normal-case text-[#4f4f4f]">
                        Time Management
                        </p>
                  </div>
                </div>
        </div>
    )
}