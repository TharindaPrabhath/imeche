import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Facebook } from 'lucide-react';

interface EventCardProps {
  name: string;
  description: string;
  imageUrl: string;
  fbLink: string;
}

export function EventCard({ name, description, imageUrl, fbLink }: EventCardProps) {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl'>
      <div className='relative h-48'>
        <Image src={imageUrl || '/placeholder.svg'} alt={name} fill className='object-cover' />
      </div>
      <div className='p-4'>
        <h3 className='mb-2 text-lg font-semibold'>{name}</h3>
        <p className='mb-4 text-sm text-gray-600'>{description}</p>
        <Button asChild className='w-full bg-[#E31B23] hover:bg-[#c41820]'>
          <a href={fbLink} target='_blank' rel='noopener noreferrer' className='flex items-center justify-center'>
            <Facebook className='mr-2 h-4 w-4' />
            View on Facebook
          </a>
        </Button>
      </div>
    </div>
  );
}
