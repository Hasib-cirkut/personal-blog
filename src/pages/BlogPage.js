import React, { useEffect, useState } from 'react';
import marked from 'marked';
import { Nav } from '../components/Nav';
import { useParams } from 'react-router-dom';
import { Contentful } from './contentful';
import { dateConverter } from '../utils/dateConverter.js';

import { useRecoilValue } from 'recoil';

import { themeState } from '../atoms/themeAtom.js';

//TODO: add theme support in this page

function getMarkdown(body) {
	let md = marked(body, { smartypants: true });

	md = md.replace(/\bint\b/g, `<span style="color:red">int</span>`);
	md = md.replace(/\bfloat\b/g, `<span style="color:red">float</span>`);
	md = md.replace(/\bdouble\b/g, `<span style="color:red">double</span>`);
	md = md.replace(/\bchar\b/g, `<span style="color:red">char</span>`);
	md = md.replace(/\bfor\b/g, `<span style="color:darkviolet">for</span>`);
	md = md.replace(/\bwhile\b/g, `<span style="color:darkviolet">while</span>`);

	md = md.replace(/\breturn\b/g, `<span style="color:blue">return</span>`);

	//TODO: fix #include problem
	//md = md.replace(/^#include.*$/g, `<span style="color:green">#include</span>`);

	md = md.replace(/\bprintf\b/g, `<span style="color:DeepPink">printf</span>`);
	md = md.replace(/\bscanf\b/g, `<span style="color:DeepPink">scanf</span>`);
	md = md.replace(/\bmain\b/g, `<span style="color:DeepPink">main</span>`);

	return { __html: md };
}

const BlogPage = () => {
	const { id } = useParams();
	const [ title, setTitle ] = useState('');
	const [ subtitle, setSubTitle ] = useState('');
	const [ createdAt, setCreatedAt ] = useState('');
	const [ body, setBody ] = useState('');

	const theme = useRecoilValue(themeState);

	useEffect(() => {
		async function getData() {
			let client = await Contentful();

			let entry = await client.getEntry(id);

			setTitle(entry.fields.title);
			setSubTitle(entry.fields.subtitle);
			setBody(entry.fields.body);
			setCreatedAt(dateConverter(entry.sys.createdAt));
		}

		getData();
	}, []);

	return (
		<div className={'md:pt-32 pt-8 ' + (theme === 'light' ? `text-black` : 'text-gray-400 bg-gray-900')}>
			<div className="md:mx-64 flex flex-col mx-4 pb-8">
				<Nav />
				<div className="md:pt-24 md:px-24 font-mono">
					<div className="text-2xl text-center md:text-4xl font-bold">{title}</div>
					<div className="text-base text-center font-light mt-4">{subtitle}</div>
					<div className="text-xl text-center font-light mt-4">{createdAt}</div>
					<div dangerouslySetInnerHTML={getMarkdown(body)} className="mt-10" />
				</div>
			</div>
		</div>
	);
};

export default BlogPage;
