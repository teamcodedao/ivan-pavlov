'use client';

import {useRef, useEffect} from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import ivanImg from './ivan-2.png';

export default function Tokenomics() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    window.addEventListener(
      'click',
      () => {
        if (videoRef.current) {
          if (videoRef.current.played.length === 0) {
            videoRef.current.play();
          }

          if (videoRef.current.muted) {
            videoRef.current.muted = false;
          }
        }
      },
      {
        once: true,
      }
    );
  }, []);

  return (
    <div>
      <h2 className='text-heading text-center'>Tokenomics</h2>
      <div className='relative mt-10'>
        <video
          ref={videoRef}
          loop
          muted
          autoPlay
          playsInline
          preload='none'
          poster='/video-poster.png'
          className='absolute inset-0 size-full rounded-[2.3rem] object-cover'
        >
          <source src='/video-0.mp4' type='video/mp4' />
        </video>
        <Image
          src={ivanImg}
          alt=''
          className='absolute right-36 top-1/2 hidden -translate-y-1/2 sm:block'
        />
        <div
          className={clsx(
            'relative font-nerko-one',
            'text-[#DEC908] [&_span]:text-white',
            'text-4xl xl:text-[45px]',
            'px-10 py-8 sm:multi-[px-16;py-12] xl:multi-[px-36;py-24]',
            'space-y-10'
          )}
        >
          <article>
            <p>
              Symbol: <span>pavlov</span>
            </p>
            <p>
              Total Supply: <span>1,000,000,000</span>
            </p>
          </article>
          <article>
            <p>
              Buy Tax: <span>0%</span>
            </p>
            <p>
              <span>Your gains are your own!</span>
            </p>
          </article>
          <article>
            <p>
              Sell Tax: <span>0%</span>
            </p>
            <p>
              <span>No penalties for cashing in on your victories!</span>
            </p>
          </article>
          <article>
            <p>
              Liquidity: <span>Burned</span>
            </p>
            <p>
              Contract: <span>Renounced</span>
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}
