import React, { useEffect, useState } from 'react';
import marked from 'marked';
import { Nav } from '../components/Nav';
import { useParams } from 'react-router-dom';
import { Contentful } from './contentful';
import {dateConverter} from '../utils/dateConverter.js'

function getMarkdown(body) {
	let md = marked(body, { smartypants: true });

	return { __html: md };
}

const BlogPage = () => {
	const { id } = useParams();
	const [ title, setTitle ] = useState('');
	const [ subtitle, setSubTitle ] = useState('');
	const [ createdAt, setCreatedAt ] = useState('');
	const [ body, setBody ] = useState('');

	useEffect(() => {
		async function getData() {
			let client = await Contentful();

			let entry = await client.getEntry(id);

			console.log(entry)

			setTitle(entry.fields.title);
			setSubTitle(entry.fields.subtitle);
			setBody(entry.fields.body);
			setCreatedAt(dateConverter(entry.sys.createdAt));
		}

		getData();


	}, []);

	return (
		<div className="md:mx-64 md:mt-32 flex flex-col h-full mt-8 mx-4">
			<Nav />
			<div className="mt-12 md:mt-24 md:px-24 font-mono">
				<div className="text-2xl text-center md:text-4xl font-bold">{title}</div>
				<div className="text-base text-center font-light mt-4">{subtitle}</div>
				<div className="text-xl text-center font-light mt-4">{createdAt}</div>
				<div dangerouslySetInnerHTML={getMarkdown(body)} className="mt-10" />`
			</div>
		</div>
	);
};

export default BlogPage;
