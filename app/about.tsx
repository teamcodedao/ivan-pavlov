import Image from 'next/image';
import clsx from 'clsx';

import paper from './paper.png';

export default function About() {
  return (
    <div className='relative flex gap-x-10 pb-10'>
      <div className='flex-[0_0_min(670px,45vw)] max-lg:multi-[`hidden;[&+img]:block`]'>
        <Image
          src={paper}
          quality={100}
          priority
          alt=''
          className='w-full rotate-[-3.6deg] object-cover'
        />
      </div>
      <Image
        src={paper}
        quality={100}
        priority
        alt=''
        fill
        className='hidden object-cover mix-blend-screen sm:rotate-[-3.6deg]'
      />
      <div className='relative grow'>
        <hgroup className='text-center'>
          <h2 className='text-6xl lg:text-7xl xl:text-8xl'>
            GREATEST EXPERIMENTS
          </h2>
          <p
            className={clsx(
              '[--stroke:2px] [-webkit-text-stroke:var(--stroke)_white] lg:[--stroke:4px]',
              'text-8xl xl:text-9xl'
            )}
          >
            PAVLOV
          </p>
        </hgroup>
        <div
          className={clsx(
            'relative mt-24 xl:mt-16',
            'text-7xl',
            'before:multi-[`absolute;block;content-["ABOUT"];top-[-61px];left-8;bg-[#FFF7AF];rounded-2xl;leading-none;lg:text-[85px];px-10;sm:px-16`]',
            'before:rotate-[-3.5deg]',
            'after:multi-[absolute;top-[-15px];left-[-25px]]',
            'after:content-[url(/edge.svg)]'
          )}
        >
          <div
            className={clsx(
              'relative rounded-3xl bg-[#E5E38E] pt-8 *:text-primary sm:-rotate-2',
              'text-3xl leading-[1.5em] lg:text-4xl xl:text-5xl',
              'px-8 pb-10 sm:multi-[px-12;pb-20]'
            )}
          >
            <span>$PAVLOV</span> is a meme coin based on the true story of a
            famous Russian physiologist, <span>Ivan Petrovich Pavlov</span>. He
            discovered the law of &apos;conditioned reflex&apos; through his
            research on the gastric functions of dogs and won the Nobel Prize in
            Physiology or Medicine in 1904. Now, Pavlov has arrived and is ready
            to conduct experiments with the dogs on TON.{' '}
            <img
              src='/ton.png'
              alt=''
              className='absolute inline-block h-[80px] lg:h-auto'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
