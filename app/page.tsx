import Image from 'next/image';

import Hero from './hero';
import About from './about';
import Roadmap from './roadmap';

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
          className='object-cover'
        />
        <main className='py-10 lg:py-20'>
          <div className='relative mx-auto max-w-screen-3xl overflow-hidden px-5'>
            <About />
            <Roadmap />
          </div>
        </main>
      </div>
    </>
  );
}
