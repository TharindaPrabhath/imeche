import { AboutSection } from '@/components/about-section';
import { ContactUsSection } from '@/components/contact-us-section';
import { EventsSection } from '@/components/events-section';
import { MembersSection } from '@/components/memebrs-section';

export default function Home() {
  return (
    <div className=''>
      <AboutSection />
      <EventsSection />
      <MembersSection />
      <ContactUsSection />
    </div>
  );
}
