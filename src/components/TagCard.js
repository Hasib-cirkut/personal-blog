import React from 'react';

const TagCard = ({ title }) => {
	return (
		<div className="text-center bg-blue-400 px-4 py-2 rounded-full font-semibold hover:bg-blue-500 hover:shadow-md cursor-pointer">
			<span>{title}</span>
		</div>
	);
};

export default TagCard;
