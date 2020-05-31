import React from 'react';
import LandingPage from './pages/LandingPage.js';
import AllBlogPage from './pages/AllBlogPage.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import BlogPage from './pages/BlogPage.js';

import { RecoilRoot, atom } from 'recoil';

function App() {
	return (
		<RecoilRoot>
			<Router>
				<Switch>
					<Route path="/" exact>
						<AllBlogPage />
					</Route>

					<Route path="/home" exact>
						<LandingPage />
					</Route>

					<Route path="/blogs/:id" exact>
						<BlogPage />
					</Route>
				</Switch>
			</Router>
		</RecoilRoot>
	);
}

export default App;
