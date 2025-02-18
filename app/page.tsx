import { AboutSection } from '@/components/about-section';
import { ContactUsSection } from '@/components/contact-us-section';
import { EventsSection } from '@/components/events-section';
import { HeroSection } from '@/components/Hero-section';
import { MembersSection } from '@/components/memebrs-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EventsSection />
      <MembersSection />
      <ContactUsSection />
    </>
  );
}
