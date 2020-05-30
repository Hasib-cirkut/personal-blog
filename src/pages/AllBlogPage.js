import React, { useState, useEffect } from 'react';
import * as contentful from 'contentful';

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
		<React.Fragment>
			<ul>{blogs.map((blog) => <li>{blog.fields.title}</li>)}</ul>
		</React.Fragment>
	);
};

export default AllBlogPage;
