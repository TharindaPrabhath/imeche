'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export function ContactUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div className='space-y-2'>
        <label htmlFor='name' className='text-sm font-medium'>
          Name
        </label>
        <Input id='name' placeholder='Your name' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
      </div>
      <div className='space-y-2'>
        <label htmlFor='email' className='text-sm font-medium'>
          Email
        </label>
        <Input id='email' type='email' placeholder='m@example.com' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required />
      </div>
      <div className='space-y-2'>
        <label htmlFor='message' className='text-sm font-medium'>
          Your message
        </label>
        <Textarea id='message' placeholder='Type your message here' value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required />
      </div>
      <Button type='submit' className='w-full bg-[#E31B23] text-white hover:bg-[#c41820]'>
        Send
      </Button>
      <p className='text-center text-xs text-gray-500'>Your message will be sent to the organizing committee.</p>
    </form>
  );
}
