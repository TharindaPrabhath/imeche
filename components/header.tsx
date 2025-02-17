'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { HTMLAttributes, useState } from 'react';

import { Sheet, SheetContent } from '@/components/ui/sheet';

import { MenuIcon } from 'lucide-react';

const LINKS = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Events', href: '#events' },
  { label: 'Members', href: '#members' },
  { label: 'Contact us', href: '#contact-us' }
];

type HeaderProps = HTMLAttributes<HTMLHeadElement>;

export default function Header({ className, ...props }: HeaderProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className={cn('sticky top-0 z-50 w-full border-b bg-white', className)} {...props}>
      <div className='container flex h-16 items-center justify-between space-x-4 px-4 sm:space-x-0 md:px-6'>
        <Link href='/'>
          <div className='flex items-center gap-2'>
            <Image src='/imeche-logo.png' alt='IMechE Logo' width={200} height={50} className='h-8 w-auto' />
          </div>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className='inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 md:hidden'
          onClick={(e) => {
            e.preventDefault();
            setOpen(true);
          }}
        >
          <span className='sr-only'>Open main menu</span>
          <MenuIcon className='h-6 w-6' />
        </button>

        {/* Desktop Navigation */}
        <nav className='hidden gap-6 md:flex'>
          {LINKS.map(({ label, href }) => (
            <Link key={label} className='text-sm font-medium transition-colors hover:text-[#E31B23]' href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </div>
      <MobileMenu open={open} onClose={setOpen} />
    </header>
  );
}

type MobileMenuProps = HTMLAttributes<HTMLDivElement> & {
  open: boolean;
  onClose: (open: boolean) => void;
};

function MobileMenu({ open, onClose, className, ...props }: MobileMenuProps) {
  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className={cn('w-64', className)} {...props}>
        {/* <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</SheetDescription>
        </SheetHeader> */}
        <nav className='flex h-full flex-col items-center justify-center gap-14 p-6'>
          {LINKS.map(({ label, href }) => (
            <Link key={label} className='text-center text-2xl font-medium transition-colors hover:text-[#E31B23]' href={href}>
              {label}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
