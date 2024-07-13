import Image from 'next/image';
import clsx from 'clsx';

import SocialButtonProps from './social-button';

import heroImg from './hero.jpeg';
import ivanImg from './ivan-1.png';

export default function Hero() {
  return (
    <div className='relative'>
      <Image src={heroImg} priority alt='' fill className='object-cover' />
      <div
        className={clsx(
          'relative mx-auto max-w-screen-3xl overflow-hidden px-5',
          'py-10 xl:py-20'
        )}
      >
        <header
          className={clsx(
            'flex flex-wrap justify-between gap-5',
            '*:multi-[border-4;border-black;rounded-[14px]]'
          )}
        >
          <SocialButtonProps
            href={process.env.NEXT_PUBLIC_TELEGRAM_URL}
            target='_tele'
            image='/tele.png'
            text='Telegram'
            variant='blend'
          />
          <SocialButtonProps
            href={process.env.NEXT_PUBLIC_TWITTER_URL}
            target='_x'
            image='/x.png'
            text='Twitter'
            variant='blend'
          />
        </header>
        <h1
          className={clsx(
            '[--stroke:3px] lg:[--stroke:5px]',
            'mt-10',
            'text-center text-8xl uppercase [-webkit-text-stroke:var(--stroke)_white] lg:text-9xl 3xl:text-[170px]'
          )}
        >
          Ivan Petrovich Pavlov
        </h1>
        <div className='relative flex justify-center'>
          <Image src={ivanImg} quality={100} priority alt='' />
          <footer
            className={clsx(
              'absolute bottom-0 w-full',
              'flex flex-wrap justify-between gap-5',
              'mt-20',
              '*:multi-[border-4;border-black;rounded-[14px]]'
            )}
          >
            <SocialButtonProps
              href={process.env.NEXT_PUBLIC_DEX_URL}
              target='_dex'
              image='/dex.png'
              text='Dextool'
              className='[&_img]:scale-95'
            />
            <SocialButtonProps
              href={process.env.NEXT_PUBLIC_DEX_URL}
              target='_dexs'
              image='/dexs.png'
              text='Dexscreener'
            />
          </footer>
        </div>
      </div>
    </div>
  );
}
