import React, { useState, useEffect } from 'react';
import { Contentful } from './contentful';
import { Nav } from '../components/Nav';
import AllBlogCard from '../components/AllBlogCard';

import { useRecoilValue } from 'recoil';

import { themeState } from '../atoms/themeAtom.js';

const AllBlogPage = () => {
	const [ blogs, setBlogs ] = useState([]);
	const [ tag, setTag ] = useState('C');
	const theme = useRecoilValue(themeState);

	useEffect(
		() => {
			async function getData() {
				let client = await Contentful();

				let entries = await client.getEntries({
					content_type: 'blogPost',
					'fields.tag': tag
				});

				await setBlogs(entries.items);
			}

			getData();
			console.log('Function called');
		},
		[ tag ]
	);

	return (
		<div className={'h-screen md:pt-32 pt-8 ' + (theme === 'light' ? `text-black` : 'text-white bg-gray-900')}>
			<div className="md:mx-64 flex flex-col mx-4">
				<Nav />

				<div
					className={
						'flex md:flex-row sm:flex-col mt-12 justify-around md:px-48 sm:px-8 ' +
						(theme === 'dark' && 'text-black')
					}
				>
					<button
						className="border-b-2 border-blue-700 bg-blue-300 px-4 py-1 rounded-lg"
						onClick={() => setTag('C')}
					>
						C
					</button>
					<button
						className="border-b-2 border-blue-700 bg-blue-300 px-4 py-1 rounded-lg"
						onClick={() => setTag('Javascript')}
					>
						Javascript
					</button>
					<button
						className="border-b-2 border-blue-700 bg-blue-300 px-4 py-1 rounded-lg"
						onClick={() => setTag('Java')}
					>
						Java
					</button>
				</div>

				<div className={'flex flex-col md:flex-wrap md:flex-row justify-center mt-8 h-full '}>
					{blogs.map((blog) => (
						<AllBlogCard
							key={blog.sys.id}
							id={blog.sys.id}
							title={blog.fields.title}
							subtitle={blog.fields.subtitle}
							body={blog.fields.body}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default AllBlogPage;
