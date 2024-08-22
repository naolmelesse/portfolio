import { MdWorkOutline } from 'react-icons/md';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

type ExperienceProps = {
  position: string;
  company: string;
  location: string;
  date: string;
  technicalSkills: string[];
  softSkills: string[];
};

export default function ExperienceCard({
  position,
  company,
  location,
  date,
  technicalSkills,
  softSkills,
}: ExperienceProps) {
  return (
    <div className='my-2 py-[5%] flex flex-col gap-4'>
      <div className='flex gap-5'>
        <MdWorkOutline className='text-5xl' />
        <div>
          <p className='font-medium text-xl'>
            {position} ({date})
          </p>
          <p className='font-medium text-xl'>
            {company} - {location}
          </p>
        </div>
      </div>
      <Separator className='my-2' />
      <div className='flex items-center gap-3'>
        <h3>Technical Skills</h3>
        <div className='flex gap-3 flex-wrap'>
          {technicalSkills.map((skill) => (
            <Badge key={skill} variant='outline'>
              {skill}
            </Badge>
          ))}
        </div>
      </div>
      <div className='flex items-center gap-3'>
        <h3>Soft Skills</h3>
        <div className='flex gap-3 flex-wrap'>
          {softSkills.map((skill) => (
            <Badge key={skill} variant='outline'>
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}
