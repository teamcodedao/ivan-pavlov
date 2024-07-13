import Image from 'next/image';

import roadmapImg from './roadmap.svg';

export default function Roadmap() {
  return (
    <div className='relative mt-10 sm:mt-16'>
      <div className='absolute inset-0'>
        <h2 className='text-heading text-center'>ROADMAP</h2>
      </div>
      <Image
        src={roadmapImg}
        alt=''
        className='w-full object-contain object-bottom pt-20 2xl:pt-0'
      />
    </div>
  );
}
