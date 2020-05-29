import React from 'react';

const BlogCard = ({ title, subtitle }) => {
	return (
		<div className="flex flex-row h-32 w-56 rounded-sm hover:shadow-md ">
			<div className="bg-gray-400 w-2/6" />

			<div className="flex flex-col justify-between bg-gray-100 p-4">
				<h4>{title}</h4>

				<p>{subtitle}</p>
			</div>
		</div>
	);
};

export default BlogCard;
