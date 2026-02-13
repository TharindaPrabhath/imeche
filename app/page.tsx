import { AboutSection } from '@/components/about-section';
import { ContactUsSection } from '@/components/contact-us-section';
import { EventsSection } from '@/components/events-section';
import { BlogSection } from '@/components/blog-section';
import { HeroSection } from '@/components/Hero-section';
import { MembersSection } from '@/components/members-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <BlogSection/>
      <EventsSection />
      <MembersSection />
      <ContactUsSection />
    </>
  );
}
