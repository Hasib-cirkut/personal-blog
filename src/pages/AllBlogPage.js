import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';
import { Nav } from '../components/Nav';
import AllBlogCard from '../components/AllBlogCard';

const AllBlogPage = () => {
	const [ blogs, setBlogs ] = useState([]);

	useEffect(() => {
		async function getData() {
			let client = await contentful.createClient({
				space: process.env.REACT_APP_SPACE,
				accessToken: process.env.REACT_APP_ACCESS_TOKEN
			});

			let entries = await client.getEntries();

			setBlogs(entries.items);
		}

		getData();
	}, []);

	return (
		<div className="mx-64 mt-32 flex flex-col">
			<Nav />

			<div className="flex flex-wrap justify-center mt-8 ">
				{blogs.map((blog) => <AllBlogCard title={blog.fields.title} subtitle={blog.fields.subtitle} />)}
			</div>
		</div>
	);
};

export default AllBlogPage;
