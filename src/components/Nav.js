import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {
	return (
		<div className="flex md:flex-row justify-between md:align-bottom md:font-semibold text-blue-700">
			<div className="flex flex-row w-full justify-around">
				<Link to="/home">
					<p>Home</p>
				</Link>

				<Link to="/">
					<p className="">Blogs</p>
				</Link>
			</div>

			<img src="/pp.jpg" alt="" className="rounded-full w-10 h-10 md:ml-6" />

			<div className="flex flex-row w-full justify-around">
				<p>About</p>
				<p className="">Contacts</p>
			</div>
		</div>
	);
};
