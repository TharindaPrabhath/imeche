'use client';

import Image from 'next/image';

import { Button } from './ui/button';

export function HeroSection() {
  const handleLearnMore = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className='relative flex min-h-[90vh] items-center justify-center'>
      {/* Background Image */}
      <div className='absolute inset-0'>
        <Image src='/hero-background.jpg' alt='IMechE Annual General Meeting 2023' fill className='object-cover' priority />
        {/* Dark Overlay */}
        <div className='absolute inset-0 bg-black/65'></div>
      </div>

      {/* Content */}
      <div className='container relative z-10 px-4 text-center md:px-6'>
        <div className='mx-auto max-w-5xl space-y-6'>
          <div className='inline-block rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm'>Welcome to IMechE UoM</div>

          <h1 className='text-4xl font-bold tracking-wider text-white md:text-6xl lg:text-7xl'>
            Institution of Mechanical
            <span className='block text-[#E31B23]'>Engineers</span>
          </h1>

          <h2 className='text-xl font-medium text-white/90 md:text-2xl'>Student Chapter of University of Moratuwa</h2>

          <p className='mx-auto max-w-2xl text-base text-white/80 md:text-lg'>
            Join us in shaping the future of mechanical engineering through innovation, education, and professional excellence.
          </p>

          <div className='flex flex-wrap justify-center gap-4 pt-4'>
            <Button
              className='min-w-[150px] bg-[#E31B23] text-white shadow-lg transition-all duration-300 hover:bg-white hover:text-[#E31B23] hover:shadow-xl'
              size='lg'
              onClick={handleLearnMore}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className='absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent'></div>
    </section>
  );
}
