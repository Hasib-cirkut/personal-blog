import React, { useState, useEffect } from 'react';
import { Contentful } from './contentful';
import { Nav } from '../components/Nav';
import AllBlogCard from '../components/AllBlogCard';

import { useRecoilState } from 'recoil';

import { blogState } from './atom.js';

const AllBlogPage = () => {
	const [ blogs, setBlogs ] = useState([]);

	const [ blogRe, setBlogRe ] = useRecoilState(blogState);

	useEffect(() => {
		async function getData() {
			let client = await Contentful();

			let entries = await client.getEntries();

			await setBlogRe(entries.items);

			await setBlogs(entries.items);
		}

		getData();
	}, []);

	return (
		<div className="mx-64 mt-32 flex flex-col">
			<Nav />

			<div className="flex flex-wrap justify-center mt-8 ">
				{blogRe.map((blog) => (
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
	);
};

export default AllBlogPage;
