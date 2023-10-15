import { createClient, groq } from 'next-sanity';

const client = createClient({
	projectId: 'cue5e190',
	dataset: 'production',
	apiVersion: '2023-10-13',
	useCdn: true,
});

export async function getAllNews() {
	return client.fetch(groq`*[_type=="news"] {
            _createdAt,
            _id,
            tag,
            title,
            overview,
            link,
            "imageUrl": image.asset->url
        }`);
}

export async function getNews(number: number) {
	return client.fetch(groq`*[_type=="news"] | order(_createdAt asc)[0...${number}] {
            _createdAt,
            _id,
            tag,
            title,
            overview,
            link,
            "imageUrl": image.asset->url
    }
    `);
}
