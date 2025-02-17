import { MailIcon } from 'lucide-react';
import { ContactUsForm } from './contact-us-form';

export function ContactUsSection() {
  return (
    <section id='contact-us' className='bg-white py-12'>
      <div className='container grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2'>
        <div className='space-y-4'>
          <h2 className='text-3xl font-bold'>Have any questions?</h2>
          <p className='text-xl text-gray-500'>Feel free to contact us</p>
          <div className='flex w-fit flex-row items-center space-x-2 rounded-full bg-red-50 px-6 py-1'>
            <MailIcon className='h-4 w-4 text-red-600' />
            <span className='text-red-600'>contact@imeche.org</span>
          </div>
        </div>
        <ContactUsForm />
      </div>
    </section>
  );
}
