import React from 'react';
import { Nav } from '../components/Nav';

import { useRecoilValue } from 'recoil';

import { themeState } from '../atoms/themeAtom.js';

function LandingPage() {
	const theme = useRecoilValue(themeState);

	return (
		<div className={'h-screen md:pt-32 pt-8 ' + (theme === 'light' ? `text-black` : 'text-white bg-gray-900')}>
			<div className={'md:mx-64 flex flex-col mx-4'}>
				<Nav />

				<div className={'flex flex-row justify-center mt-24'}>
					<a href="https://www.facebook.com/adib.hasib.7">
						<img src="/icon_facebook.png" alt="icon facebook" className="h-8 w-8 rounded-full mx-12" />
					</a>

					<a href="https://github.com/Hasib-cirkut">
						<img src="/icon_github.png" alt="icon facebook" className="h-8 w-8 rounded-full" />
					</a>

					<img src="/icon_linkedin.png" alt="icon facebook" className="h-8 w-8 rounded-full mx-12" />
				</div>

				<div className="flex flex-row justify-center mt-20 text-5xl">
					<h1>Hi</h1>
				</div>

				<div className="flex flex-row justify-center mt-6 text-lg md:mx-64 md:px-24 text-center font-light tracking-tight">
					<p>
						I am Hasib. Programmer, tech enthusiast, newbie blogger. Into Reactive programming, Data Science
						and Machine learning. I am currently doing my undergrad at East West university.
					</p>
				</div>

				<div className="flex flex-row justify-center mt-12 text-xl font-semibold">
					<p>Popular Tags</p>
				</div>
			</div>
		</div>
	);
}

export default LandingPage;
