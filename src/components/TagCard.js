import React from 'react';

const TagCard = ({ title }) => {
	return (
		<div className="text-center bg-gray-500 px-4 py-2 rounded-full font-semibold hover:bg-teal-600 hover:shadow-md">
			<span>{title}</span>
		</div>
	);
};

export default TagCard;
