import React from 'react';
import { Badge } from '@/components/ui/badge';
import { GoLinkExternal } from 'react-icons/go';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { Url } from 'next/dist/shared/lib/router/router';

type Project = {
  details: string;
  hasLinks?: boolean;
  hasMoreText?: boolean;
  image: StaticImageData;
  imageAltText: string;
  links?: {
    githubLink?: Url;
    liveLink?: Url;
  };
  moreText?: {
    name: string;
    content: string;
  }[];
  technologies: string[];
  title: string;
};

export default function ProjectCard({
  details,
  hasLinks,
  hasMoreText,
  image,
  imageAltText,
  links,
  moreText,
  technologies,
  title,
}: Project) {
  return (
    <div className=' px-5 py-2 md:my-10 border rounded-xl'>
      <h3 className='font-medium text-xl my-4'>📌 {title}</h3>
      <Image alt={imageAltText} src={image} />
      <Separator className='my-4' />
      <p className='font-medium my-2'>Details:</p>
      <p>{details}</p>

      {hasMoreText &&
        moreText &&
        moreText.map((item) => {
          return (
            <p key={item.name} className='my-2'>
              <span className='font-medium'>{item.name}</span>
              {item.content}
            </p>
          );
        })}
      <div className='flex gap-3 flex-wrap my-5'>
        {technologies.map((item) => {
          return (
            <Badge key={item} variant='outline'>
              {item}
            </Badge>
          );
        })}
      </div>

      {hasLinks && (
        <div className='flex gap-5 my-2'>
          {links?.githubLink && (
            <Link
              className=' bg-[#000] text-[#fff] py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-[#444] transition duration-300'
              href={links?.githubLink}
              target='_blank'
            >
              View on Github
              <GoLinkExternal className='inline text-[1.5rem]' />
            </Link>
          )}
          {links?.liveLink && (
            <Link
              className=' bg-[#000] text-[#fff] py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-[#444] transition duration-300'
              href={links?.liveLink}
              target='_blank'
            >
              View Live <GoLinkExternal className='inline text-[1.5rem]' />
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
