import { MemberCard } from './member-card';

const EXECUTIVE_MEMBERS = [
  {
    firstName: 'Madhuka',
    lastName: 'Dissanayake',
    designation: 'President',
    imageUrl: '/members/batch-19/Madhuka.png'
  },
  {
    firstName: 'Ifra',
    lastName: 'Zaheer',
    designation: 'Secretary',
    imageUrl: '/members/batch-20/Ifra.jpg'
  },
  {
    firstName: 'Kasun',
    lastName: 'Attanayake',
    designation: 'Treasurer',
    imageUrl: '/members/batch-19/Kasun.jpg'
  },
  {
    firstName: 'Hiran',
    lastName: 'Geethika',
    designation: 'Membership Officer',
    imageUrl: '/members/batch-20/Hiran.png'
  },
  {
    firstName: 'Indusara',
    lastName: 'Deshanjana',
    designation: 'Communication Officer',
    imageUrl: '/members/batch-20/Indusara.jpg'
  }
];

const COMMITEE_MEMBERS = [
  {
    firstName: 'Dasith',
    lastName: 'Amarasinghe',
    imageUrl: '/members/batch-19/Dasith.jpg'
  },
  {
    firstName: 'Kalindu',
    lastName: 'Salith',
    imageUrl: '/members/batch-19/Kalindu.jpg'
  },
  {
    firstName: 'Udara',
    lastName: 'Senadhipathi',
    imageUrl: '/members/batch-19/Udara.jpg'
  },
  {
    firstName: 'Niseni',
    lastName: 'Angammana',
    imageUrl: '/members/batch-20/Niseni.jpg'
  },
  {
    firstName: 'Nimantha',
    lastName: 'Adikaram',
    imageUrl: '/members/batch-21/Nimantha.png'
  },
  {
    firstName: 'Nimodh',
    lastName: 'Perera',
    imageUrl: '/members/batch-21/Nimodh.jpg'
  },
  {
    firstName: 'Navodi',
    lastName: '',
    imageUrl: '/members/batch-21/Navodi.jpg'
  },
  {
    firstName: 'Kavin',
    lastName: 'Siriwardane',
    imageUrl: '/members/batch-21/Kavin.png'
  },
  {
    firstName: 'Kisali',
    lastName: 'Thumara',
    imageUrl: '/members/batch-21/Kisali.jpg'
  },
  {
    firstName: 'Tharinda',
    lastName: 'Anurajeewa',
    imageUrl: '/members/batch-21/Tharinda.jpg'
  },
  {
    firstName: 'Ajula',
    lastName: 'Kariyawasam',
    imageUrl: '/members/batch-22/Ajula.jpg'
  },
  {
    firstName: 'Didula',
    lastName: 'Jayasekara',
    imageUrl: '/members/batch-22/Didula.jpg'
  },
  {
    firstName: 'Dilshan',
    lastName: 'Thennakoon',
    imageUrl: '/members/batch-22/Dilshan.jpg'
  },
  {
    firstName: 'Dulithi',
    lastName: 'Wijesooriya',
    imageUrl: '/members/batch-22/Dulithi.jpg'
  },
  {
    firstName: 'Manindu',
    lastName: 'Pavan',
    imageUrl: '/members/batch-22/Manindu.jpg'
  },
  {
    firstName: 'Mayuka',
    lastName: 'Premathilaka',
    imageUrl: '/members/batch-22/Mayuka.jpg'
  },
  {
    firstName: 'Nimash',
    lastName: 'Herath',
    imageUrl: '/members/batch-22/Nimash.jpg'
  },
  {
    firstName: 'Yasiru',
    lastName: 'Wickramage',
    imageUrl: '/members/batch-22/Yasiru.jpg'
  }
];

export function MembersSection() {
  return (
    <section id='members' className='bg-gray-50 py-12'>
      <div className='container px-4 md:px-6'>
        <div className='mb-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-800'>Our Team</h2>
          <p className='mt-2 text-gray-600'>Meet the dedicated members of IMechE UoM Chapter</p>
        </div>

        <div>
          <h3 className='text-xl font-semibold text-gray-800'>Executive Committee</h3>
          <div className='mt-8 grid gap-6 md:grid-cols-3 lg:grid-cols-4'>
            {EXECUTIVE_MEMBERS.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>

        <div className='mt-8'>
          <h3 className='text-xl font-semibold text-gray-800'>Committee Members</h3>
          <div className='mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
            {COMMITEE_MEMBERS.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
