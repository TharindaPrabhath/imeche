import { MemberCard } from './member-card';

const MEMBERS = [
  {
    firstName: 'John',
    lastName: 'Doe',
    designation: 'President',
    imageUrl: '/placeholder.svg?height=200&width=200'
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    designation: 'Vice President',
    imageUrl: '/placeholder.svg?height=200&width=200'
  }
];

export function MembersSection() {
  return (
    <section className='bg-gray-50 py-12'>
      <div className='container px-4 md:px-6'>
        <div className='mb-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-800'>Our Team</h2>
          <p className='mt-2 text-gray-600'>Meet the dedicated members of IMechE UoM Chapter</p>
        </div>
        <div className='grid gap-6 md:grid-cols-3 lg:grid-cols-4'>
          {MEMBERS.map((member, index) => (
            <MemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}
