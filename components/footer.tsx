import Image from 'next/image';
import Link from 'next/link';
import { Facebook, Linkedin } from 'lucide-react';
import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Members', href: '#members' },
  { label: 'Contact us', href: '#contact-us' }
];

type FooterProps = HTMLAttributes<HTMLDivElement>;

export default function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={cn('bg-gray-100', className)} {...props}>
      <div className='container px-4 py-12 md:px-6'>
        <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          <div className='space-y-4'>
            <Image src='/imeche-logo.png' alt='IMechE Logo' width={200} height={50} className='h-12 w-auto' />
            <p className='max-w-xs text-sm text-gray-600'>Promoting mechanical engineering excellence through innovation, education, and professional development.</p>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Quick Links</h3>
            <nav className='flex flex-col space-y-2'>
              {LINKS.map(({ label, href }) => (
                <Link key={label} className='hover:text-[ #E31B23] text-gray-600 transition-colors' href={href}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold'>Connect With Us</h3>
            <div className='flex space-x-4'>
              <Link href='https://facebook.com/imecheuomsc' target='_blank' className='text-gray-600 transition-colors hover:text-[#E31B23]'>
                <Facebook className='h-6 w-6' />
                <span className='sr-only'>Facebook</span>
              </Link>
              <Link
                href='https://www.linkedin.com/company/imeche-student-chapter-of-university-of-moratuwa'
                target='_blank'
                className='text-gray-600 transition-colors hover:text-[#E31B23]'
              >
                <Linkedin className='h-6 w-6' />
                <span className='sr-only'>LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
        <div className='mt-8 border-t border-gray-200 pt-8'>
          <p className='text-center text-sm text-gray-600'>© {new Date().getFullYear()} IMechE University of Moratuwa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
