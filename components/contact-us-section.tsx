import Link from 'next/link';
import { Button } from './ui/button';

import { MailIcon, MapPinIcon } from 'lucide-react';

export function ContactUsSection() {
  return (
    <section id='contact-us' className='bg-white py-12'>
      <div className='container flex flex-col items-center justify-center gap-6 px-4 md:px-6'>
        <div className='space-y-4'>
          <h2 className='text-center text-3xl font-bold'>Get in touch</h2>
          <p className='text-center text-xl text-gray-500'>Feel free to contact us</p>
        </div>
        <Link href='https://tally.so/r/mB210Y' target='_blank'>
          <Button className='mx-auto w-fit bg-red-500 hover:bg-red-500/80'>Contact Us</Button>
        </Link>
        <div className='flex w-fit flex-row items-center space-x-2 rounded-full bg-red-50 px-6 py-1'>
          <MailIcon className='h-4 w-4 text-red-600' />
          <span className='text-red-600'>studentchapter@imeche.uom.lk</span>
        </div>
        <div className='flex items-start space-x-3'>
          <MapPinIcon className='h-4 w-4 text-red-600' />
          <address className='not-italic text-gray-600'>
            Department of Mechanical Engineering,
            <br />
            Faculty of Engineering,
            <br />
            University of Moratuwa,
            <br />
            Moratuwa
          </address>
        </div>
      </div>
    </section>
  );
}

{
  /* <div className='flex items-start space-x-3'>
            <MapPinIcon className='h-4 w-4 text-red-600' />
            <address className='not-italic text-gray-600'>
              Department of Mechanical Engineering,
              <br />
              Faculty of Engineering,
              <br />
              University of Moratuwa,
              <br />
              Moratuwa
            </address>
          </div> */
}
