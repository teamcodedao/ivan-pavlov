import Image from 'next/image';

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
                className='text-shadow rounded-[27px] border-4 border-black bg-secondary px-10 py-3 text-[64px] transition hover:multi-[bg-primary;text-white] max-[420px]:multi-[px-8;py-2;text-[3.5rem];rounded-3xl]'
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
