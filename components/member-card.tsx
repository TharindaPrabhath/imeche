import Image from 'next/image';

interface MemberCardProps {
  firstName: string;
  lastName: string;
  designation?: string;
  imageUrl: string;
}

export function MemberCard({ firstName, lastName, designation, imageUrl }: MemberCardProps) {
  return (
    <div className='overflow-hidden rounded-lg bg-white text-center shadow-md transition-all duration-300 hover:shadow-xl'>
      <div className='relative mx-auto mt-4 h-36 w-36'>
        <Image src={imageUrl || '/placeholder.svg'} alt={`${firstName} ${lastName}`} fill className='rounded-full object-cover' />
      </div>
      <div className='p-4'>
        <h3 className='text-sm font-semibold'>
          {firstName} {lastName}
        </h3>
        <p className='text-sm text-gray-600'>{designation}</p>
      </div>
    </div>
  );
}
