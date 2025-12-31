import { MemberCard } from './member-card';

const EXECUTIVE_MEMBERS = [
  {
    firstName: 'Dr. Lihil',
    lastName: 'Subasinghe',
    designation: 'Chapter Counsellor',
    imageUrl: '/members/Lihil.jpg'
  },
  {
    firstName: 'Nimodh',
    lastName: 'Perera',
    designation: 'Chairman',
    imageUrl: '/members/Excom/Nimodh.jpg'
  },
  {
    firstName: 'Kisali',
    lastName: 'Thumara',
    designation: 'Secretary',
    imageUrl: '/members/EXcom/Kisali.jpg'
  },
  {
    firstName: 'Kavin',
    lastName: 'Siriwardana',
    designation: 'Junior Treasurer',
    imageUrl: '/members/Excom/Kavin.jpg'
  },
  {
    firstName: 'Didula',
    lastName: 'Jayasekara',
    designation: 'Vice Chairman',
    imageUrl: '/members/EXcom/Didula.jpg'
  },
  {
    firstName: 'Dulithi',
    lastName: 'Wijesooriya',
    designation: 'Assisstant Secretary',
    imageUrl: '/members/EXcom/Dulithi.jpg'
  },
  {
    firstName: 'Nimash',
    lastName: 'Herath',
    designation: 'Webmaster',
    imageUrl: '/members/EXcom/Nimash.jpg'
  }
];

const in_and_ext_affairs = [ 

  {
    firstName: 'Methini',
    lastName: 'Perera',
    batch: '21',
    designation: 'Batch 21',
    imageUrl: '/members/inexaffairs/Methini.jpg'
  },

  // 22nd Batch
  {
    firstName: 'Mayuka',
    lastName: 'Hiranya',
    batch: '22',
    designation: 'Batch 22',
    imageUrl: '/members/inexaffairs/Mayuka.jpg'
  },

  // 23rd Batch
  {
    firstName: 'Samith',
    lastName: 'Subhashana',
    batch: '23',
    designation: 'Batch 23',
    imageUrl: '/members/inexaffairs/Samith.jpg'
  }

];
const program_pillar = [
  // 21st Batch
  {
    firstName: 'Dinula',
    lastName: 'Wijesuriya',
    batch: '21',
    designation: 'Batch 21',
    imageUrl: '/members/program/Dinula.jpg'
  },

  // 22nd Batch
  {
    firstName: 'Visal',
    lastName: 'Gunawardena',
    batch: '22',
    designation: 'Batch 22',
    imageUrl: '/members/program/Visal.jpg'
  },

  // 23rd Batch
  {
    firstName: 'Yashmi',
    lastName: 'Jayaweera',
    batch: '23',
    designation: 'Batch 23',
    imageUrl: '/members/program/Yashmi.jpg'
  }
];

const design_pillar = [
  // 21st Batch
  {
    firstName: 'Navodi',
    lastName: 'Wijesekara',
    batch: '21',
    designation: 'Batch 21',
    imageUrl: '/members/design/Navodi.jpg'
  },

  // 22nd Batch
  {
    firstName: 'Hasarangi',
    lastName: 'Withanawasam',
    batch: '22',
    designation: 'Batch 22',
    imageUrl: '/members/design/Hasarangi.jpg'
  },

  // 23rd Batch
  {
    firstName: 'Dasun',
    lastName: 'Sanjaya',
    batch: '23',
    designation: 'Batch 23',
    imageUrl: '/members/design/Dasun.jpg'
  }
];
const editorial_pillar = [
  // 21st Batch
  {
    firstName: 'Nimantha',
    lastName: 'Adikaram',
    batch: '21',
    designation: 'Batch 21',
    imageUrl: '/members/editorial/Nimantha.jpg'
  },

  // 22nd Batch
  {
    firstName: 'Anjula',
    lastName: 'Kariyawasam',
    batch: '22',
    designation: 'Batch 22',
    imageUrl: '/members/editorial/Anjula.jpg'
  },

  // 23rd Batch
  {
    firstName: 'Unduli',
    lastName: 'Senadheera',
    batch: '23',
    designation: 'Batch 23',
    imageUrl: '/members/editorial/Unduli.jpg'
  }
];
const finance_pillar = [
  // 21st Batch
  {
    firstName: 'Hansaka',
    lastName: 'Jayalath',
    batch: '21',
    designation: 'Batch 21',
    imageUrl: '/members/finance/Hansaka.jpg'
  },

  // 22nd Batch
  {
    firstName: 'Tharidu',
    lastName: 'Jayasundara',
    batch: '22',
    designation: 'Batch 22',
    imageUrl: '/members/finance/Tharidu.jpg'
  },

  // 23rd Batch
  {
    firstName: 'Paranthaman',
    lastName: '',
    batch: '23',
    designation: 'Batch 23',
    imageUrl: '/members/finance/Paranthaman.jpg'
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
          <h3 className='text-xl font-semibold text-gray-800'>Internal and External Affairs Pillar Heads</h3>
          <div className='mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
            {in_and_ext_affairs.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
        <div className='mt-8'>
          <h3 className='text-xl font-semibold text-gray-800'>Program Pillar Heads</h3>
          <div className='mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
            {program_pillar.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
        <div className='mt-8'>
          <h3 className='text-xl font-semibold text-gray-800'>Design Pillar Heads</h3>
          <div className='mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
            {design_pillar.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
        <div className='mt-8'>
          <h3 className='text-xl font-semibold text-gray-800'>Editorial Pillar Heads</h3>
          <div className='mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
            {editorial_pillar.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
        <div className='mt-8'>
          <h3 className='text-xl font-semibold text-gray-800'>Finance Pillar Heads</h3>
          <div className='mt-8 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
            {finance_pillar.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}
