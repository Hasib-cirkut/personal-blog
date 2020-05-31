import * as contentful from 'contentful';

export async function Contentful() {
	let client = await contentful.createClient({
		space: 'kurid0ki858z',
		accessToken: 'CvF-55NN4X5-ka0YtuT46Wr9bla__gM0rOVimHQlbLc'
	});

	return client;
}
