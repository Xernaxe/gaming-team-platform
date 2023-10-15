import { createClient, groq } from 'next-sanity';

export async function getNews() {
	const client = createClient({
		projectId: 'cue5e190',
		dataset: 'production',
		apiVersion: '2023-10-13',
		useCdn: true,
	});

	return client.fetch(groq`*[_type=="news"] | order(_createdAt asc)[0..3] {
            _createdAt,
            _id,
            tag,
            title,
            overview,
            link,
            "imageUrl": image.asset->url
        }`);
}
