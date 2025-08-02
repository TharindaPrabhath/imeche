"use client"

import { useEffect, useState } from 'react';


export const EVENTS = [
	{
		name: 'Session Throwback: ‘Initiating and Executing Research and Development Projects’ by Prof. Ruwan Gopura',
		description: 'A workshop on initiating and executing a project by Prof. Ruwan Gopura.',
		
	}
	
];
export const AUTH= [
	{
		name: 'Mr. Kavin Siriwardhana',
		batch: "21 Batch",
		linkedin : "https://www.linkedin.com/in/kavin-siriwardana-303a361ba"
		
	}
	
];

export function BlogSection() {
	const [description, setDescription] = useState('');

	useEffect(() => {
		fetch('blogs/20250725/blog-description.txt')
			.then((res) => res.text())
			.then(setDescription);
	}, []);

	return (
		<section id='blog' className='bg-white py-12'>
			<div className='container px-12 md:px-6 '>
				<div className='mb-8 text-center'>
					<h2 className='text-3xl font-bold text-gray-800'>Blogs</h2>
					<p className='mt-2 text-gray-600'>Blog article of the week</p>
				</div>
				
				<div className="flex justify-center">
					
					<a href="blog"
						className="flex flex-row items-center bg-white rounded-lg shadow-md hover:shadow-lg transition p-4 gap-4 group max-w-3xl"
						style={{ textDecoration: 'none' }}
						>
						<img
							src="blogs/20250725/blog1.jpg"
							
							className="w-64 h-40 object-cover rounded-md"
						/>
						<div className="flex flex-col justify-center text-left w-full">
							<h3 className="text-lg font-semibold mb-2 group-hover:text-[#E31B23] transition">
							{EVENTS[0].name}
							</h3>
							<p className="text-gray-600 mb-2">{description.split('. ')[0]}.</p>
							<p className="text-red-600">Click to see article</p>
						</div>
						</a>

					
					

				
				</div>
				</div>
			
			
		</section>
	);
}
