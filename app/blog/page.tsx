"use client"
import { useEffect, useState } from 'react';
import { EVENTS } from '@/components/blog-section';
import { AUTH } from '@/components/blog-section';
import { Linkedin } from 'lucide-react';

export default function BlogPage() {
  const [description, setDescription] = useState('');

  useEffect(() => {
    fetch('blogs/20250725/blog-description.txt')
      .then((res) => res.text())
      .then(setDescription);
  }, []);

  return (
    <section id='blog' className='bg-white py-12'>
      <div className='container px-4 md:px-4'>
        <div className='mb-8 text-center'>
          <h2 className='text-3xl font-bold text-gray-800'>This week's article</h2>
          <p className='mt-2 text-gray-600'>28th July 2025</p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-8 items-start">
          {/* Blog Card (Left-aligned content) */}
          <div className="flex flex-col items-start bg-white rounded-lg shadow-md p-4 gap-4 w-full ">
            <div className="w-full max-w-2xl mx-auto aspect-video mt-6 rounded-lg overflow-hidden shadow">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yOlJDsplD6I"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="w-full text-left">
              <h3 className="text-lg font-semibold mb-2">{EVENTS[0].name}</h3>
              <p className="text-gray-600 mb-2 whitespace-pre-line">{description}</p>
              
            </div>
          </div>

          {/* Author Card (Right-aligned) */}
          <div className="flex items-center bg-gray-100 rounded-lg shadow p-8 w-full max-w-sm min-h-40">
            {/* Author Photo */}
            <img
              src="/blogs/20250725/author.jpg" // Replace with actual image path if needed
              alt={AUTH[0].name}
              className="w-20 h-28 object-cover rounded-lg mr-4"
            />

            {/* Author Details */}
            <div className="flex flex-col items-end text-right flex-1">
              <h4 className="text-md font-semibold text-gray-800">{AUTH[0].name}</h4>
              <p className="text-sm text-gray-600">{AUTH[0].batch}</p>
              <a
                href={AUTH[0].linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-end gap-2 text-blue-600 hover:underline text-sm mt-1"
              >
                <Linkedin size={18} />
                View LinkedIn
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
