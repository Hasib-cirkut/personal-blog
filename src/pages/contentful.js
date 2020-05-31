import * as contentful from 'contentful';

export async function Contentful() {
	let client = await contentful.createClient({
		space: process.env.REACT_APP_SPACE,
		accessToken: process.env.REACT_APP_ACCESS_TOKEN
	});

	return client;
}
