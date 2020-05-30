import React from 'react';

const AllBlogCard = ({ title, subtitle }) => {
	console.log(title);

	return (
		<div className="bg-gray-300 h-auto w-1/4 p-8 m-2 rounded-sm hover:shadow-md cursor-pointer    ">
			<h1>{title}</h1>

			<h4 className="pt-6 text-gray-700">{subtitle}</h4>
		</div>
	);
};

export default AllBlogCard;
