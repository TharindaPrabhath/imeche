import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Linkedin } from 'lucide-react';

interface BlogCardProps {
  name: string;
  description: string;
}
interface AuthCardProps {
  name: string;
  batch: string;
  linkedin: string;
}

export function BlogCard({ name, description}: BlogCardProps) {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl'>
     
      <div className='p-4'>
        <h3 className='mb-2 text-lg font-semibold'>{name}</h3>
        <p className='mb-4 text-sm text-gray-600'>{description}</p>
        
      </div>
    </div>
  );
}
export function AuthCard({ name, batch, linkedin }: AuthCardProps) {
  return (
    <div className='overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-xl flex items-center'>
      <div className='p-4 flex-1'>
        <img
          src='/blogs/20250725/author.jpg'>  </img>
        <h3 className='mb-2 text-lg font-semibold'>{name}</h3>
        <p className='mb-4 text-sm text-gray-600'>{batch}</p>
        <Button asChild className='w-full bg-[#E31B23] hover:bg-[#c41820]'>
          <a href={linkedin} target='_blank' rel='noopener noreferrer' className='flex items-center justify-center'>
            <Linkedin className='mr-2 h-4 w-4' />
            View on LinkedIn 
          </a>
        </Button>
      </div>
    </div>
  );
}
