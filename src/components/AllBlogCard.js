import React from 'react';
import BlogPage from '../pages/BlogPage';
import { useRecoilValue } from 'recoil';
import { blogState } from '../App';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AllBlogCard = ({ title, subtitle, id }) => {
	const handleClick = (e) => {};

	return (
		<div className="bg-gray-300 h-auto w-full md:w-1/2 p-8 mt-2 md:mx-2 rounded-sm hover:shadow-md cursor-pointer    ">
			<Link to={`/blogs/${id}`}>
				<h1>{title}</h1>

				<h4 className="pt-6 text-gray-700">{subtitle}</h4>
			</Link>
		</div>
	);
};

export default AllBlogCard;
