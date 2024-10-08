import Link from 'next/link';
import { BiHomeAlt2 } from 'react-icons/bi';
import { BsCodeSlash } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { FaUserAstronaut } from 'react-icons/fa';
import { TbDownload } from 'react-icons/tb';
import Image from 'next/image';

export default function Nav() {
  return (
    <nav className='py-10 flex items-center justify-between lg:w-4/5 mx-[auto] bg-white px-10 md:px-20 lg:px-30'>
      <Image src='/logo.png' alt='Naol Melesse Logo' width={100} height={38} />
      <div className='invisible lg:visible flex items-center p-2  bg-[#F5F5F5] z-10 fixed translate-x-[50%] rounded-full'>
        <div className='flex justify-center gap-2 mx-4 items-center'>
          <BiHomeAlt2 className='text-xl' />{' '}
          <Link
            className='hover:underline hover:underline-offset-8 decoration-[#F0DE36] text-gray-800 text-lg'
            href='/'
          >
            Home
          </Link>
        </div>
        <div className='flex justify-center gap-2 mx-4 items-center'>
          <FaUserAstronaut className='text-xl' />{' '}
          <Link
            className='hover:underline hover:underline-offset-8 decoration-[#F0DE36] text-gray-800 text-lg'
            href='/about'
          >
            About
          </Link>
        </div>
        <div className='flex justify-center gap-2 mx-4 items-center'>
          <BsCodeSlash className='text-xl' />{' '}
          <Link
            className='hover:underline hover:underline-offset-8 decoration-[#F0DE36] text-gray-800 text-lg'
            href='#projects'
          >
            Projects
          </Link>
        </div>
        <div className='flex justify-center gap-2 mx-4 items-center'>
          <FiMail className='text-xl' />{' '}
          <Link
            className='hover:underline hover:underline-offset-8 decoration-[#F0DE36] text-gray-800 text-lg'
            href='#contact'
          >
            Contact
          </Link>
        </div>
      </div>

      <Link
        target='_blank'
        className='flex gap-1 items-center text-[#fff] bg-[#222831] transition duration-300 ease-in-out hover:bg-[#454545] px-4 py-2 rounded-lg'
        href='/Naol_resume_2024.pdf'
        download='Naol_resume_2024.pdf'
      >
        Resume
        <TbDownload className='text-lg' />
      </Link>
    </nav>
  );
}
