import { MdWorkOutline } from "react-icons/md";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";



export default function Experience(){
    return(
        <div className="my-10 py-[10%] flex flex-col gap-4" id="experience">
                <h3 className="md:text-3xl my-5">Experience</h3>
                <div className="flex gap-5">
                    <MdWorkOutline className="text-5xl"/>
                        <div>
                            <p className="font-medium text-xl">UI Developer Intern (Jan - Apr, 2023)</p>
                            <p className="font-medium text-xl">Asite - India</p>
                        </div>
                </div>
                <Separator className="my-2"/>
                <div className="flex items-center gap-3">
                    <h3>Technical Skills</h3>
                    <div className="flex gap-3 flex-wrap">
                    <Badge variant="outline">Angular</Badge>
                    <Badge variant="outline">Typescript</Badge>
                    <Badge variant="outline">Git</Badge>
                    <Badge variant="outline">Bitbucket</Badge>
                    <Badge variant="outline">Jira</Badge>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                <h3>Soft Skills</h3>
                    <div className="flex gap-3 flex-wrap">
                    <Badge variant="outline">Team work</Badge>
                    <Badge variant="outline">Communication</Badge>
                    <Badge variant="outline">Code Structuring</Badge>
                    <Badge variant="outline">Problem-solving</Badge>
                    <Badge variant="outline">Time Management</Badge>
                  </div>
                </div>
        </div>
    )
}