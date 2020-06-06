import React from 'react';

import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { themeState } from '../atoms/themeAtom.js';

const AllBlogCard = ({ title, subtitle, id }) => {
	const theme = useRecoilValue(themeState);

	return (
		<div
			className={
				'h-auto w-full md:w-1/2 p-8 mt-2 md:mx-2 rounded-sm hover:shadow-md cursor-pointer ' +
				(theme === 'light' ? 'bg-gray-300' : 'bg-gray-700')
			}
		>
			<Link to={`/blogs/${id}`}>
				<h1>{title}</h1>

				<h4 className={'pt-6 ' + (theme === 'light' ? 'text-black' : 'text-white')}>{subtitle}</h4>
			</Link>
		</div>
	);
};

export default AllBlogCard;
