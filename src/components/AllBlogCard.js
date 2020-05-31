import React from 'react';
import BlogPage from '../pages/BlogPage';
import { useRecoilValue } from 'recoil';
import { blogState } from '../App';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const AllBlogCard = ({ title, subtitle, id }) => {
	const handleClick = (e) => {};

	return (
		<div className="bg-gray-300 h-auto w-1/4 p-8 m-2 rounded-sm hover:shadow-md cursor-pointer    ">
			<h1>{title}</h1>

			<h4 className="pt-6 text-gray-700">{subtitle}</h4>

			<Link to={`/blogs/${id}`}>
				<button>Read more</button>
			</Link>
		</div>
	);
};

export default AllBlogCard;
