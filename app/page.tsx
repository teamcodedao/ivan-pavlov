import Image from 'next/image';
import clsx from 'clsx';

import Hero from './hero';
import About from './about';
import Roadmap from './roadmap';
import Tokenomics from './tokenomics';

import backgroundImg from './background.jpeg';

export default function Home() {
  return (
    <>
      <Hero />
      <div className='relative'>
        <Image
          src={backgroundImg}
          priority
          fill
          alt=''
          placeholder='blur'
          className='object-cover'
        />
        <main className='py-10 lg:py-20'>
          <div className='relative mx-auto max-w-screen-3xl overflow-hidden px-5'>
            <About />
            <Roadmap />
            <Tokenomics />
            <footer className='mt-10 flex justify-center'>
              <a
                href={process.env.NEXT_PUBLIC_COIN_URL}
                target='_buy'
                className={clsx(
                  'text-shadow border-4 border-black bg-secondary transition hover:multi-[bg-primary;text-white]',
                  'sm:multi-[px-10;py-3;text-[64px];rounded-[27px]]',
                  'rounded-3xl px-8 py-0 text-[3.5rem]'
                )}
              >
                Buy $PAVLOV
              </a>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}
