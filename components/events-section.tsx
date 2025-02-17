import { EventCard } from './event-card';

const EVENTS = [
  {
    name: 'IMechE Student Chapter Awards',
    description: 'IMechE Student Chapter was recognized as the Runner-Up by IMechE Sri Lanka Group for 2023/24.',
    imageUrl: '/events/student-chapter-awards.jpg',
    fbLink: 'https://www.facebook.com/share/1BLkUgVxtB/'
  },
  {
    name: 'SOFE Sri Lanka Finals 2024',
    description:
      'Kavin Siriwardana and Nimantha Adikaram represented the IMechE Student Chapter, presenting on nano manufacturing for drug delivery and AI-powered waste management.',
    imageUrl: '/events/sofe-final.jpg',
    fbLink: 'https://www.facebook.com/share/17zajXhsFv/'
  },
  {
    name: 'Restart a Heart',
    description:
      'A collaborative session by the Restart a Heart Association & IMechE Student Chapter, led by Dr. Nilmini Wijesuriya. Learn essential CPR skills to respond to cardiac emergencies.',
    imageUrl: '/events/restart-a-heart.jpg',
    fbLink: 'https://www.facebook.com/share/1DCN2AwaJ2/'
  },
  {
    name: 'IMechE Induction Drive 2024',
    description: `Dr. J.R. Gamage shared insights on 'Why IMechE?' highlighting the benefits of membership for the 22nd batch of the University of Moratuwa.`,
    imageUrl: '/events/induction-drive.jpg',
    fbLink: 'https://www.facebook.com/share/194vbFMZ7b/'
  },
  {
    name: 'IMechE Sri Lanka Group Award',
    description: `Dr. J.R. Gamage shared insights on 'Why IMechE?' highlighting the benefits of membership for the 22nd batch of the University of Moratuwa.`,
    imageUrl: '/events/group-award.jpg',
    fbLink: 'https://www.facebook.com/share/18aQpBuoRG/'
  }
];

export function EventsSection() {
  return (
    <section id='events' className='bg-white py-12'>
      <div className='container px-4 md:px-6'>
        <div className='mb-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-800'>Events</h2>
          <p className='mt-2 text-gray-600'>Join us for exciting engineering experiences</p>
        </div>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {EVENTS.map((event, index) => (
            <EventCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
}
