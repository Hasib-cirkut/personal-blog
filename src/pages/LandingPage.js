import React from 'react';
import { Nav } from '../components/Nav';

function LandingPage() {
	return (
		<div className="mx-64 mt-32 flex flex-col">
			<Nav />

			<div className="flex flex-row justify-center mt-24">
				<a href="https://www.facebook.com/adib.hasib.7">
					<img src="/icon_facebook.png" alt="icon facebook" className="h-6 w-6 rounded-full mx-12" />
				</a>

				<a href="https://github.com/Hasib-cirkut">
					<img src="/icon_github.png" alt="icon facebook" className="h-6 w-6 rounded-full" />
				</a>

				<img src="/icon_linkedin.png" alt="icon facebook" className="h-6 w-6 rounded-full mx-12" />
			</div>

			<div className="flex flex-row justify-center mt-12 text-5xl">
				<h1>Hi</h1>
			</div>

			<div className="flex flex-row justify-center mt-12 text-lg mx-64 px-24 text-center font-light tracking-tight">
				<p>
					I am Hasib. Programmer, tech enthusiast, newbie blogger. Into Reactive programming, Data Science and
					Machine learning. I am currently doing my undergrad at East West university.
				</p>
			</div>

			<div className="flex flex-row justify-center mt-12 text-xl font-semibold">
				<p>Recent Blogs</p>
			</div>
		</div>
	);
}

export default LandingPage;
