import React from 'react';

export const Nav = () => {
	return (
		<div className="flex flex-row justify-between align-bottom font-semibold text-blue-700">
			<div className="flex flex-row justify-around">
				<p>Home</p>
				<p className="ml-10">Blogs</p>
			</div>

			<img src="/pp.jpg" alt="" className="rounded-full w-10 h-10 ml-6" />

			<div className="flex flex-row">
				<p>About</p>
				<p className="ml-10">Contacts</p>
			</div>
		</div>
	);
};
