import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useRecoilValue, useRecoilState } from 'recoil';

import { themeState } from '../atoms/themeAtom.js';

export const Nav = () => {
	const [ theme, setTheme ] = useRecoilState(themeState);
	const [ bg, setBg ] = useState('');

	function toogleTheme() {
		if (theme === 'light') {
			setTheme('dark');
		}

		if (theme === 'dark') {
			setTheme('light');
		}
	}

	return (
		<div
			className={
				'flex md:flex-row justify-between py-4 rounded-sm md:font-semibold text-lg ' +
				(theme === 'light' ? `text-blue-700` : 'text-white bg-gray-900')
			}
		>
			<div className="flex flex-row w-full justify-around">
				<Link to="/">
					<p>Home</p>
				</Link>

				<Link to="/blogs">
					<p className="">Blogs</p>
				</Link>
			</div>

			<img src="/pp.jpg" alt="" className="rounded-full w-10 h-10" />

			<div className="flex flex-row w-full justify-around">
				<p>About</p>
				<Link>
					<p
						className={theme === 'light' ? 'text-black' : 'text-white' + ' cursor-pointer'}
						onClick={toogleTheme}
					>
						{theme === 'light' ? 'Dark' : 'Light'}
					</p>
				</Link>
			</div>
		</div>
	);
};
